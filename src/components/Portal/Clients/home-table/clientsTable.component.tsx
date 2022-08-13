import React, { useEffect, useState } from 'react'
import { MoreOutlined } from '@ant-design/icons';
import { Row, Dropdown } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { useSelector } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import { useLocation, useNavigate } from "react-router-dom"

import { PORTAL_LOCALS } from '../../../../locales/portal/portal.locals';
import { MenuTable } from './menuTable.component';
import { CustomTable } from '../../../Common/CustomTable.component';
import { EDropDownMenuItemsTable } from "../../../../interfaces/portal/users/users.interface";
import { parse } from 'query-string';
import { getIsSuperUser } from '../../../../redux/selectors/auth.selector';
import { ModalDeleteItem } from '../../../Common/modalDeleteItem.component';
import { IRowClientDataType } from '../../../../interfaces/portal/clients/rowDataType.interface';
import { 
    dispatchDeleteClient,
    dispatchGetClients,
    dispatchSetActiveClient
} from '../../../../redux/dispatchers/portal/clients.dispatch';
import { getClientsPortal } from '../../../../redux/selectors/clients.selector';

const TABLE_COLUMNS_LOCALES = PORTAL_LOCALS['users']['tableColumns'];

export const ClientsTable = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const { page, search='' } = parse(location.search);
    const {clients, total, isLoading} = useSelector(getClientsPortal);
    const isSuperUser = useSelector(getIsSuperUser);
    
    const [ currentPage, setCurrentPage ] = useState<number>((typeof(page) === 'string') ? Number.parseInt(page) : 1);
    const [clientToDelete, setClientToDelete] = useState<null | number>(null);

    useEffect(() => {
        const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
        if(total && clients.length === 0 && currentPage !== 1 && searching === ''){
            setCurrentPage(1);
            navigate(`/clientes?page=${1}`)
        }
        if(searching){
            setCurrentPage(1);
            navigate(`/clientes?page=${1}&search=${search}`)
        }
    }, [clients, currentPage, total])

    useEffect(() => {
        const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
        navigate(`/clientes?page=${currentPage}${searching}`)
        dispatchGetClients(currentPage, searching);
    }, [currentPage, search]);

    const data: IRowClientDataType[] = clients.map((user, index) => {
        return {
            key: index,
            name: `${user.name} ${user.lastname}`,
            email: `${user.email}`,
            company: `${user.company}`,
            dropdown: {
                id: user.id,
                slug: user.slug
            }
        }
    })

    const handlePageNumber = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handleSelection = (selectedRowKeys: React.Key[], selectedRows: IRowClientDataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }

    const handleClick = (key: string, clientId:number, slug: string) => {
        switch(key){
            case EDropDownMenuItemsTable.DETAIL:
                if(!slug || !clientId){
                    navigate('/clientes');
                }else{
                    dispatchSetActiveClient(clientId);
                    navigate(`/clientes/${slug}`);
                }
                break;
            case EDropDownMenuItemsTable.DELETE:
                if(!clientId){
                    navigate('/clientes');
                }else{
                    setClientToDelete(clientId);
                }
                break;
        }
    }

    const handleDelete = (clientId: number | null) => {
        if(clientId){
            dispatchDeleteClient(clientId)
            .then(result => {
                if(result.meta.requestStatus === 'fulfilled'){
                    setClientToDelete(null);
                    const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
                    navigate(`/clientes?page=${currentPage}${searching}`)
                }
            }).finally(() => setClientToDelete(null))
        }
    }

    const columns: ColumnsType<IRowClientDataType> = [
        {
            title: TABLE_COLUMNS_LOCALES['name']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['name']['dataIndex'],
            render: (text: string) => <p style={{margin: 0}}>{text}</p>,
        },
        {
            title: TABLE_COLUMNS_LOCALES['email']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['email']['dataIndex'],
        },
        {
            title: 'Compañía',
            dataIndex: 'company',
        },
        {
            title: TABLE_COLUMNS_LOCALES['dropdown']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['dropdown']['dataIndex'],
            render: ({id, slug}: {
                id: number,
                slug: string
            }) => <Dropdown.Button 
                    overlay={MenuTable({handleClick, userId: id, slug, isSuper: isSuperUser})} icon={<MoreOutlined/>} placement='bottomLeft'>
                </Dropdown.Button>
        }
    ];
    
    return (

        <Row className='portal-usuarios__table ani-cont'>
            <Modal 
                confirmLoading={isLoading}
                visible={!!clientToDelete}
                closable={true}
                maskClosable={false}
                destroyOnClose
                className='portal-usuarios__registry-modal'
                onCancel={() => {setClientToDelete(null)}}
                footer={null}
                children={
                    <ModalDeleteItem 
                        text={'¿Estas seguro que deseas eliminar a este cliente?'}
                        handleCancel={() => setClientToDelete(null)}
                        handleDelete={() => handleDelete(clientToDelete)}
                    />
                }
            />
            <CustomTable
                columns={columns}
                data={data}
                handlePageNumber={handlePageNumber}
                handleSelection={handleSelection}
                loading={isLoading}
                total={total || 0}
                currentPage={currentPage}
            />

        </Row>

    )
}

export default ClientsTable;