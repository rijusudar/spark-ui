import React from 'react';
import Pagination from 'rc-pagination';
import { IconChevronRight, IconChevronLeft, IconEllipsis } from 'svgIcons';

import './style.scss';
import colors from 'theme/_colors.scss';

const NextIcon = (props) => {
	return <IconChevronRight />;
};

const PrevIcon = (props) => {
	return <IconChevronLeft />;
};

const itemRender = (current, type, element) => {
	return type === 'jump-prev' || type === 'jump-next' ? <IconEllipsis /> : element;
};

const GeneralPaginationComponent = ({ currentPage, total, pageSize, onChange, className, hideOnSinglePage }) => {
	return total ? <div className={`general-pagination ${className}`} >
		<Pagination
			current={currentPage}
			total={total}
			pageSize={pageSize}
			onChange={onChange}
			nextIcon={NextIcon}
			prevIcon={PrevIcon}
			itemRender={itemRender}
			showTitle={false}
			hideOnSinglePage={hideOnSinglePage}
		/>
	</div> : null;
};

export default GeneralPaginationComponent;
