import React from 'react';
import map from 'lodash/map';
import slice from 'lodash/slice';

import TableTitle from './TableTitle';
import { sortingDirections, assetTypes } from './constants';
import { getValueByPath } from 'helpers/objectHelper';


export const formatColumns = (columns, sortingColumn, sortingDirection, setSortingColumn, setSortingDirection) => {
	const onHeaderCell = (column) => ({
		onClick: () => {
			if (column.dataIndex === sortingColumn) {
				setSortingDirection(sortingDirection === sortingDirections.ASC ? sortingDirections.DESC : sortingDirections.ASC);
			} else {
				setSortingColumn(column.dataIndex);
				setSortingDirection(sortingDirections.ASC);
			}
		}
	});

	return map(columns, (column) => {
		return {
			...column,
			onHeaderCell: column.isSorting ? onHeaderCell : null,
			title: <TableTitle title={column.title} sortingDirection={sortingColumn === column.dataIndex ? sortingDirection : null} />,
			key: column.dataIndex
		};
	});
};

export const sortData = (data, sortingColumn, sortingDirection) => {
	return sortingColumn ? data.sort((a, b) => {
		const aItem = getValueByPath(a, sortingColumn);
		const bItem = getValueByPath(b, sortingColumn);

		const sortingItemCellA = aItem ? (aItem?.sortingItem ?? aItem).toString() : '-';
		const sortingItemCellB = bItem ? (bItem?.sortingItem ?? bItem)?.toString() : '-';
		const res = sortingItemCellA.localeCompare(sortingItemCellB, undefined, { numeric: true });

		return sortingDirection === sortingDirections.ASC ? res : res * -1;
	})
		: data;
};

export const getDataChunkForPage = (data, currentPage, pageSize) => {
	return slice(data, (currentPage - 1) * pageSize, currentPage * pageSize);
};

export const getTypeClass = (type) => {
	switch (type) {
		case assetTypes.PRIMARY:
			return 'general-table-primary';
		default:
			return '';
	}
};
