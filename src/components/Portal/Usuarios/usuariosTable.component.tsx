import React from 'react'
import { MoreOutlined } from '@ant-design/icons';
import { Row, Table, Dropdown } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { MenuTable } from './menuTable.component';
import { useSelector } from 'react-redux';

import { IRowUsuarioDataType } from '../../../interfaces/portal/usuarios/rowDataType.interface';
import { getUsersPortal } from '../../../redux/selectors/portal.selector';

export const UsuariosTable = () => {
    
    const usuarios = useSelector(getUsersPortal);

    const columns: ColumnsType<IRowUsuarioDataType> = [
        {
            title: 'Nombre Completo',
            dataIndex: 'name',
            render: (text: string) => <p>{text}</p>,
        },
        {
            title: 'Posición',
            dataIndex: 'type',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: '',
            dataIndex: 'dropdown',
            render: () => <Dropdown.Button overlay={MenuTable} icon={<MoreOutlined/>} placement='bottomLeft'></Dropdown.Button>
        }
    ];

    const data: IRowUsuarioDataType[] = usuarios.map((usuario, index) => {
        return {
            key: index,
            name: `${usuario.name} ${usuario.lastName}`,
            type: `${usuario.type}`,
            email: `${usuario.email}`,
            dropdown: null
        }
    })


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: IRowUsuarioDataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };
    
    return (

        <Row className='portal-usuarios__table'>

            <Table
                className='custom-table'
                rowClassName='custom-table__row'
                pagination={false}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />

        </Row>

    )
}