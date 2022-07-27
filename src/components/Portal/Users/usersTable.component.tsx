import React, { useEffect, useState } from 'react'
import { MoreOutlined } from '@ant-design/icons';
import { Row, Dropdown } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { MenuTable } from './menuTable.component';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom"

import { IRowUsuarioDataType } from '../../../interfaces/portal/users/rowDataType.interface';
import { getUsersPortal } from '../../../redux/selectors/users.selector';
import { PORTAL_LOCALS } from '../../../locales/portal/portal.locals';
import { dispatchGetUserDetail, dispatchGetUsers } from '../../../redux/dispatchers/portal/users.dispatch';
import { CustomTable } from '../../Common/CustomTable.component';
import { getUserTypes } from '../../../redux/selectors/common.selector';
import { EDropDownMenuItemsTable } from "../../../interfaces/portal/users/users.interface";
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
            navigate(`/usuarios?type=0&page=${1}`)
        }
    }, [users, currentPage, total])

    useEffect(() => {
        navigate(`/usuarios?type=0&page=${currentPage}`)
        dispatchGetUsers(currentPage);
    }, [currentPage]);

    const data: IRowUsuarioDataType[] = users.map((usuario, index) => {
        const userType = userTypes.find((item) => item.id === usuario.type);
        return {
            key: index,
            name: `${usuario.name} ${usuario.lastname}`,
            type: userType ? userType.value : 'No definido',
            email: `${usuario.email}`,
            dropdown: usuario.id
        }
    })

    const handlePageNumber = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handleSelection = (selectedRowKeys: React.Key[], selectedRows: IRowUsuarioDataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }

    const handleClick = (key: string, userId:number) => {
        switch(key){
            case EDropDownMenuItemsTable.DETAIL:
                dispatchGetUserDetail(userId);
                navigate(`/usuarios/?type=2`);
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
            render: (id) => <Dropdown.Button 
                    overlay={MenuTable({handleClick, userId: id})} icon={<MoreOutlined/>} placement='bottomLeft'>
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