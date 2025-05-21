import React from 'react';
import PropTypes from 'prop-types';

import colors from 'theme/_colors.scss';

const IconChevronLeft = ({ width = 16, height = 16, viewBox = '0 0 16 16', color = colors.mineShaft }) => {
    return <svg width={width} height={height} viewBox={viewBox} fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10.32 14.2398L3.52002 7.99977L10.32 1.75977L11.68 3.23977L6.48002 7.99977L11.68 12.7598L10.32 14.2398Z' fill={color} />
        <mask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='3' y='1' width='9' height='14'>
            <path d='M10.32 14.2398L3.52002 7.99977L10.32 1.75977L11.68 3.23977L6.48002 7.99977L11.68 12.7598L10.32 14.2398Z' fill={colors.white} />
        </mask>
    </svg>;


};

IconChevronLeft.propTypes = {
    color: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    viewBox: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChevronLeft;
