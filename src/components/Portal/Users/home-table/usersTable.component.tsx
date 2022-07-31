import React, { useEffect, useState } from 'react'
import { MoreOutlined } from '@ant-design/icons';
import { Row, Dropdown } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { MenuTable } from './menuTable.component';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom"

import { IRowUsuarioDataType } from '../../../../interfaces/portal/users/rowDataType.interface';
import { getUsersPortal } from '../../../../redux/selectors/users.selector';
import { PORTAL_LOCALS } from '../../../../locales/portal/portal.locals';
import { dispatchGetUsers, dispatchSetActiveUser } from '../../../../redux/dispatchers/portal/users.dispatch';
import { CustomTable } from '../../../Common/CustomTable.component';
import { getUserTypes } from '../../../../redux/selectors/common.selector';
import { EDropDownMenuItemsTable } from "../../../../interfaces/portal/users/users.interface";
import { parse } from 'query-string';

const TABLE_COLUMNS_LOCALES = PORTAL_LOCALS['users']['tableColumns'];

export const UsersTable = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { page } = parse(location.search);
    const {users, total, isLoading} = useSelector(getUsersPortal);
    const userTypes = useSelector(getUserTypes);

    const [ currentPage, setCurrentPage ] = useState<number>((typeof(page) === 'string') ? Number.parseInt(page) : 1);

    useEffect(() => {
        if(total && users.length === 0 && currentPage !== 1){
            setCurrentPage(1);
            navigate(`/usuarios?page=${1}`)
        }
    }, [users, currentPage, total])

    useEffect(() => {
        navigate(`/usuarios?page=${currentPage}`)
        dispatchGetUsers(currentPage);
    }, [currentPage]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

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
            case EDropDownMenuItemsTable.EVENTS:
                break;
            case EDropDownMenuItemsTable.DELETE:
                break;
        }
    }

    const columns: ColumnsType<IRowUsuarioDataType> = [
        {
            title: TABLE_COLUMNS_LOCALES['name']['title'],
            dataIndex: TABLE_COLUMNS_LOCALES['name']['dataIndex'],
            render: (text: string) => <p>{text}</p>,
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
                    overlay={MenuTable({handleClick, userId: id, slug})} icon={<MoreOutlined/>} placement='bottomLeft'>
                </Dropdown.Button>
        }
    ];
    
    return (

        <Row className='portal-usuarios__table ani-cont'>
            
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