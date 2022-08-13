import React, { useEffect, useState } from 'react'
import { MoreOutlined } from '@ant-design/icons';
import { Row, Dropdown } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { MenuTable } from './menuTable.component';
import { useSelector } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import { useLocation, useNavigate } from "react-router-dom"

import { IRowUsuarioDataType } from '../../../../interfaces/portal/users/rowDataType.interface';
import { getUsersPortal } from '../../../../redux/selectors/users.selector';
import { PORTAL_LOCALS } from '../../../../locales/portal/portal.locals';
import { dispatchDeleteUser,
    dispatchGetUsers,
    dispatchSetActiveUser
} from '../../../../redux/dispatchers/portal/users.dispatch';
import { CustomTable } from '../../../Common/CustomTable.component';
import { getUserTypes } from '../../../../redux/selectors/common.selector';
import { EDropDownMenuItemsTable } from "../../../../interfaces/portal/users/users.interface";
import { parse } from 'query-string';
import { getIsSuperUser } from '../../../../redux/selectors/auth.selector';
import { ModalDeleteItem } from '../../../Common/modalDeleteItem.component';

const TABLE_COLUMNS_LOCALES = PORTAL_LOCALS['users']['tableColumns'];

export const UsersTable = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const { page, search='' } = parse(location.search);
    const {users, total, isLoading} = useSelector(getUsersPortal);
    const userTypes = useSelector(getUserTypes);
    const isSuperUser = useSelector(getIsSuperUser);
    
    const [ currentPage, setCurrentPage ] = useState<number>((typeof(page) === 'string') ? Number.parseInt(page) : 1);
    const [userToDelete, setUserToDelete] = useState<null | number>(null);

    useEffect(() => {
        const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
        if(total && users.length === 0 && currentPage !== 1 && searching === ''){
            setCurrentPage(1);
            navigate(`/usuarios?page=${1}`)
        }
        if(searching){
            setCurrentPage(1);
            navigate(`/usuarios?page=${1}&search=${search}`)
        }
    }, [users, currentPage, total])

    useEffect(() => {
        const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
        navigate(`/usuarios?page=${currentPage}${searching}`)
        dispatchGetUsers(currentPage, searching);
    }, [currentPage, search]);

    const data: IRowUsuarioDataType[] = users.map((user, index) => {
        const userType = userTypes.find((item) => item.id === user.type);
        return {
            key: index,
            name: `${user.name} ${user.lastname}`,
            type: userType ? userType.value : 'No definido',
            email: `${user.email}`,
            dropdown: {
                id: user.id,
                slug: user.slug
            }
        }
    })

    const handlePageNumber = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handleSelection = (selectedRowKeys: React.Key[], selectedRows: IRowUsuarioDataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }

    const handleClick = (key: string, userId:number, slug: string) => {
        switch(key){
            case EDropDownMenuItemsTable.DETAIL:
                if(!slug || !userId){
                    navigate('/usuarios');
                }else{
                    dispatchSetActiveUser(userId);
                    navigate(`/usuarios/${slug}`);
                }
                break;
            case EDropDownMenuItemsTable.EVENTS:
                break;
            case EDropDownMenuItemsTable.DELETE:
                if(!userId){
                    navigate('/usuarios');
                }else{
                    setUserToDelete(userId);
                }
                break;
        }
    }

    const handleDelete = (userId: number | null) => {
        if(userId){
            dispatchDeleteUser(userId)
            .then(result => {
                if(result.meta.requestStatus === 'fulfilled'){
                    setUserToDelete(null);
                    const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
                    navigate(`/usuarios?page=${currentPage}${searching}`)
                }
            }).finally(() => setUserToDelete(null))
        }
    }

    const columns: ColumnsType<IRowUsuarioDataType> = [
        {
            title: TABLE_COLUMNS_LOCALES['name']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['name']['dataIndex'],
            render: (text: string) => <p style={{margin: 0}}>{text}</p>,
        },
        {
            title: TABLE_COLUMNS_LOCALES['type']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['type']['dataIndex'],
        },
        {
            title: TABLE_COLUMNS_LOCALES['email']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['email']['dataIndex'],
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
                visible={!!userToDelete}
                closable={true}
                maskClosable={false}
                destroyOnClose
                className='portal-usuarios__registry-modal'
                onCancel={() => {setUserToDelete(null)}}
                footer={null}
                children={
                    <ModalDeleteItem 
                        text={'¿Estas seguro que deseas eliminar a este usuario?'}
                        handleCancel={() => setUserToDelete(null)}
                        handleDelete={() => handleDelete(userToDelete)}
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

export default UsersTable;