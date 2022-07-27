import { Pagination, Table } from "antd"
import { ColumnsType } from "antd/lib/table";
import { RowSelectMethod } from "antd/lib/table/interface";

export const CustomTable = ({
    total = 0,
    handlePageNumber,
    loading,
    columns,
    data,
    handleSelection,
    currentPage
}:IProps) => {
    return (
        <>
            <Table
                className='custom-table'
                rowClassName='custom-table__row'
                pagination={false}
                rowSelection={{
                    type: 'checkbox',
                    onChange: handleSelection
                }}
                sticky
                loading={loading}
                columns={columns}
                dataSource={data}
            />

            <Pagination
                className='pagination'
                total={total}
                onChange={(pageNumber) => handlePageNumber(pageNumber)}
                pageSize={10}
                showSizeChanger={false}
                current={currentPage}
                hideOnSinglePage
            />
        </>
    )
}

interface IProps{
    total: number;
    handlePageNumber: (pageNumber: number) => void;
    loading: boolean;
    columns: ColumnsType<any>;
    data: any[] | undefined;
    handleSelection: (selectedRowKeys: React.Key[], selectedRows: any[], info: { type: RowSelectMethod; }) => void;
    currentPage: number;
}
