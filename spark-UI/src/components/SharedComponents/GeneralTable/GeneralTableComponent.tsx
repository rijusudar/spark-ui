import { SetStateAction, useEffect, useMemo, useState } from 'react';
import Table from 'rc-table';

import { formatColumns, getDataChunkForPage, getTypeClass, sortData } from './helpers';
import { GeneralPagination } from '../GeneralPagination';

import './style.scss';


const GeneralTableComponent = ({
    className = '',
    scroll,
    columns,
    data,
    emptyText = '',
    tableLayout = 'auto',
    paginationProps,
    tableKey,
    expandable,
    initialSortingProps = { column: null, direction: null },
    type
}) => {

    const [sortingColumn, setSortingColumn] = useState(initialSortingProps.column);
    const [sortingDirection, setSortingDirection] = useState(initialSortingProps.direction);
    const [formattedColumns, setFormattedColumns] = useState(null);

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(() => {
        Array.isArray(data) && data.length ? setSelectedPage(1) : setSelectedPage(0);
    }, [data]);

    const handlePageSelection = (page: SetStateAction<number>) => {
        setSelectedPage(page);
    };

    const handleRowClick = (_record: any, index: SetStateAction<null>) => {
        setSelectedRow(index);
    };

    useEffect(() => {
        setFormattedColumns(formatColumns(columns, sortingColumn, sortingDirection, setSortingColumn, setSortingDirection));
    }, [columns, sortingColumn, sortingDirection]);


    const formattedData = useMemo(() => {
        const sortedData = sortData(data, sortingColumn, sortingDirection);

        const dataChunk = paginationProps ? getDataChunkForPage(sortedData, selectedPage, paginationProps.pageSize) : [...sortedData];

        return dataChunk;
    }, [data, sortingColumn, sortingDirection, selectedPage, paginationProps]);

    return <>
        <Table
            scroll={scroll}
            columns={formattedColumns}
            data={formattedData}
            className={`general-table ${className} ${getTypeClass(type)}`}
            emptyText={!data || !data.length ? emptyText : null}
            tableLayout={tableLayout}
            onRow={(record, index) => ({
                onClick: handleRowClick.bind(null, record, index)
            })}
            rowClassName={(_, index) => selectedRow === index ? 'selected' : ''}
            indentSize={30}
            expandable={expandable}
            rowKey={tableKey}
            sticky={false}
            useFixedHeader={false}
        />

        {paginationProps && data && <GeneralPagination
            className='general-table-pagination'
            currentPage={selectedPage}
            total={data?.length}
            pageSize={paginationProps.pageSize ?? 10}
            onChange={handlePageSelection}
            hideOnSinglePage={paginationProps.hideOnSinglePage}
        />}
    </>;
};

export default GeneralTableComponent;
