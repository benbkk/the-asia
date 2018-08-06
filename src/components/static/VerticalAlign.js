import React from 'react';
import PropTypes from 'prop-types';
import propStyles from 'prop-styles';
import styled from 'react-emotion';

import { vbottom, vtop, vmiddle } from 'css/variables';

const TableCell = styled('div')`
    display: table-cell;
    ${propStyles({
        bottom: [vbottom],
        top: [vtop],
        middle: [vmiddle],
    })}
`;

const Table = styled('div')`
    display: table;
    min-height: inherit;
    height: inherit;
    width: 100%;
`;

const VMiddle = ({ children, ...props }) => (
    <Table>
        <TableCell {...props}>
            { children }
        </TableCell>
    </Table>
);

VMiddle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VMiddle;
