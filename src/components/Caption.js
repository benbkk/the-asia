import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { rem, transparentize } from 'polished';
import { mediaQueries, palette } from 'css/variables';
import { mt0, gradientPseudo, block, textSm } from 'css/utilities';
import ButtonGroup from 'static/ButtonGroup';
import PackagePrice from 'static/PackagePrice';
import { Text } from 'static/Elements';

const FigCaption = styled('figcaption')`
    display: table-cell;
    vertical-align: middle;
    z-index: 2;
    position: relative;

    h2 {
        margin-bottom: 18px;
    }
    h2 .country {
        line-height: 1;
        font-weight: 400;
    }
    .content-wrap {
        height: ${rem('340px', '16px')};
        padding: ${rem('27px', '16px')} ${rem('36px', '16px')} ${rem('27px', '16px')} ${rem('45px', '16px')};
        border-radius: 0 4px 4px 0;
        background: ${palette.white};
        box-shadow: 5px 10px 50px 0 rgba(1,121,255,.1),5px 10px 50px 0 rgba(0,0,0,.2);

        ${mediaQueries.tablet} {
            height: auto;
            padding: ${rem('28px', '16px')};
        }

        ${mediaQueries.tabletS} {
            border-radius: 0 0 6px 6px;
        }

        ${mediaQueries.mobile} {
            height: auto;
            padding: ${rem('27px', '16px')};
        }
    }

    ${mediaQueries.tabletS} {
        width: 100%;
        display: block;
    }
    
    
`;

const TextWrapper = styled('span')`
    position: relative;
    display: block;
    margin-bottom: 18px;
    z-index: 9;
`;

const textOverflow = css`
    height: 5rem;
    padding-bottom: 18px;
    overflow: scroll;
    position: relative;
`;

const bold700 = css`
    font-weight: 700;
`;

const Caption = (props) => {
    const { description, name, style, weather } = props;
    return (
        <FigCaption
            style={style}
        >
            <div className="content-wrap">
                <h2 className={`${mt0} ${bold700} headline`}>
                    {name}
                    {weather &&  <span className={`${block} ${textSm} country`}>{ weather.country }</span>}
                </h2>
                
                <TextWrapper className={gradientPseudo}>
                    <Text className={`${textOverflow}`} textJustify small>
                        {description}
                    </Text>
                </TextWrapper>
                <PackagePrice />
                <ButtonGroup />
            </div>
        </FigCaption>
    );
};

Caption.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    country: PropTypes.string,
};

Caption.defaultProps = {
    country: '',
};

export default Caption;
