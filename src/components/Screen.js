import React from 'react';
import AnimateImage from 'components/AnimateImage';
import MainImage from 'components/MainImage';
import { Text } from 'static/Elements';
import styled, { css } from 'react-emotion';
import { rem, transparentize } from 'polished';
import { palette } from 'css/variables';
import { mt0, gradientPseudo } from 'css/utilities';
import ButtonGroup from 'static/ButtonGroup';
import PackagePrice from 'static/PackagePrice';
import { mediaQueries } from '../css/variables';

const Screen = styled('figure')`
    margin: ${rem('18px', '16px')} 0;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: table;
`;

const Caption = styled('figcaption')`
    display: inline-block;
    vertical-align: middle;
    padding: ${rem('36px', '16px')} ${rem('36px', '16px')} ${rem('36px', '16px')} ${rem('55px', '16px')}  ;
    width: 48.3%;
    border-radius: 0 4px 4px 0;
    height: 335px;
    z-index: 1;
    position: relative;
    background: ${transparentize(0.3, palette.white)};
    box-shadow: 5px 10px 50px 0 rgba(1,121,255,.1),5px 10px 50px 0 rgba(0,0,0,.2);

    ${mediaQueries.tablet} {
        padding: ${rem('36px', '16px')};
    }
    
    ${mediaQueries.tabletS} {
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
`;

const textOverflow = css`
    height: 5rem;
    overflow: scroll;
    position: relative;
`;

const bold700 = css`
    font-weight: 700;
`;

export default ({props, ...city}) => {
    const { name, main_image, description } = city;
    return (
        <Screen className="screen">
            <AnimateImage
                src={main_image}
                alt={name}
            />
            <Caption>
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
            </Caption>
        </Screen>
    );
};
