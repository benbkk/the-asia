import React from 'react';
import Img from 'static/Img';
import { Text } from 'static/Elements';
import styled from 'react-emotion';
import { rem, transparentize } from 'polished';
import { palette } from 'css/variables';
import { mt0 } from 'css/utilities';

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
    padding: ${rem('45px', '16px')} ${rem('45px', '16px')} ${rem('45px', '16px')} ${rem('55px', '16px')}  ;
    width: 566px;
    border-radius: 0 4px 4px 0;
    height: 335px;
    z-index: 1;
    background: ${transparentize(0.3, palette.white)};
    box-shadow: 5px 10px 50px 0 rgba(1,121,255,.1),5px 10px 50px 0 rgba(0,0,0,.2);
`;

export default ({ ...city }) => {
    const { name, main_image, description } = city;
    return (
        <Screen className="screen">
            <Img
                src={main_image}
                alt={name}
            />
            <Caption>
                <h3 className={`${mt0} headline`}>
                    {name}
                </h3>
                <Text textJustify>
                    {description}
                </Text>
            </Caption>
        </Screen>
    );
};
