import React from 'react';

import { sortingDirections } from './constants';
import { IconCaretUp, IconCaretDown } from 'svgIcons';


const TableTitle = ({ title, sortingDirection }) => {
    return (
        <div className='general-table-title'>
            {title}
            {sortingDirection === sortingDirections.ASC && <IconCaretUp />}
            {sortingDirection === sortingDirections.DESC && <IconCaretDown />}
        </div>
    );
};

export default TableTitle;
