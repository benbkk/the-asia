import glamorous from 'glamorous';
import React from 'react';
import PropTypes from 'prop-types';
import propStyles from 'prop-styles';

const alignBottom = {
    verticalAlign: 'bottom',
}

const alignTop = {
    verticalAlign: 'top',
}

const alignMiddle = {
    verticalAlign: 'middle',
}

const TableCell = glamorous.div(
    { display: 'table-cell' },
    propStyles({
        bottom: [alignBottom],
        top: [alignTop],
        middle: [alignMiddle],
    })
);

const Table = glamorous.div({
    display: 'table',
    minHeight: 'inherit',
    height: 'inherit',
    width: '100%',
});

const VerticalAlign = props => (
    <Table className={'display-table'}>
        <TableCell {...props} className={'v-align'}>
            {props.children}
        </TableCell>
    </Table>            
);

VerticalAlign.propTypes = {
    children: PropTypes.node,
}

export default VerticalAlign;