import React from 'react';
import styled, { css } from 'react-emotion';
import { Wrapper } from 'static/Elements';
import { palette } from 'css/variables';
import { rem, darken } from 'polished';

const Small = styled('small')`
    display: block;
    line-height: 1;
    color: ${darken(0.25, palette.grayLightest)};
`;

const commonPriceStyling = css`
    display: inline-block;
    vertical-align: baseline;
    color: ${palette.green};
`;

const Symbol = styled('span')`
    ${commonPriceStyling};
    font-size: ${rem('32px', '16px')}; 
    font-weight: 700;
`;

const Price = styled('span')`
    ${commonPriceStyling};
    font-size: ${rem('29px', '16px')};
    font-weight: 700;
`;

const Currency = styled('span')`
    ${commonPriceStyling};
    font-size: ${rem('18px', '16px')};
    margin: 0 6px;
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
);
