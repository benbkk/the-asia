import React from 'react';
import styled from 'react-emotion';
import { Wrapper } from 'static/Elements';
import { palette } from '../../css/variables';
import { rem, darken } from '../../../node_modules/polished';

const Small = styled('small')`
    display: block;
    line-height: 1;
    color: ${darken(0.25, palette.grayLightest)};
`;

const Symbol = styled('span')`
    display: inline-block;
    vertical-align: baseline;
    font-size: ${rem('29px', '16px')};
    color: ${palette.green};
    font-weight: 700;
`;

const Price = styled('span')`
    display: inline-block;
    vertical-align: baseline;
    color: ${palette.green};
    font-size: ${rem('29px', '16px')};
    color: ${palette.green};
    font-weight: 700;
`;

const Currency = styled('span')`
    display: inline-block;
    vertical-align: baseline;
    font-size: ${rem('20px', '16px')};
    color: ${palette.green};
`;

export default () => (
    <Wrapper className="package-price">
        <Small>
            Starting from
        </Small>
        <Symbol className="symbol">$</Symbol>
        <Price className="price">29.00</Price>
        <Currency className="currency">USD</Currency>
    </Wrapper>    
)