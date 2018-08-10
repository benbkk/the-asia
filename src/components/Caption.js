import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { rem, transparentize } from 'polished';
import { palette } from 'css/variables';
import { mt0, gradientPseudo } from 'css/utilities';
import ButtonGroup from 'static/ButtonGroup';
import PackagePrice from 'static/PackagePrice';
import { Text } from 'static/Elements';
import { mediaQueries } from '../css/variables';

const FigCaption = styled('figcaption')`
    display: inline-block;
    vertical-align: middle;
    padding: ${rem('36px', '16px')} ${rem('36px', '16px')} ${rem('36px', '16px')} ${rem('55px', '16px')}  ;
    width: 48.3%;
    border-radius: 0 4px 4px 0;
    height: 335px;
    z-index: 2;
    position: relative;
    background: ${transparentize(0.3, palette.white)};
    box-shadow: 5px 10px 50px 0 rgba(1,121,255,.1),5px 10px 50px 0 rgba(0,0,0,.2);

    ${mediaQueries.tablet} {
        padding: ${rem('36px', '16px')};
    }
    
    ${mediaQueries.tabletS} {
        height: auto;
        width: 100%;
        display: block;
        border-radius: 0 0 4px 4px;
        padding: ${rem('27px', '16px')};
    }
`;

const TextWrapper = styled('span')`
    position: relative;
    display: block;
    margin-bottom: 27px;
    z-index: 9;
`;

const textOverflow = css`
    height: 5rem;
    overflow: scroll;
    position: relative;
    
    ${mediaQueries.tabletS} {
        height: auto;
        overflow: visible;
    }
`;

const bold700 = css`
    font-weight: 700;
`;

const Caption = (props) => {
    const { description, name } = props;
    return (
        <FigCaption {...props}>
            <h2 className={`${mt0} ${bold700} headline`}>
                {name}
            </h2>
            <TextWrapper className={gradientPseudo}>
                <Text className={`${textOverflow}`} textJustify small>
                    {description}
                </Text>
            </TextWrapper>
            <PackagePrice />
            <ButtonGroup />
        </FigCaption>
    );
};

Caption.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Caption;
