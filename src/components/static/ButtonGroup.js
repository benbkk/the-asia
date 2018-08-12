import React from 'react';
import Button from 'static/Button';
import { css } from 'react-emotion';
import { Wrapper } from 'static/Elements';
import { mediaQueries } from '../../css/variables';

const absBottom = css`
    padding: 18px 0;
    ${mediaQueries.tabletS} {
        position: relative;
        left: 0;
        bottom: 0;
    }
`;

export default () => (
    <Wrapper className={`${absBottom} button-group`}>
        <Button outlineGreen>
            Tours
        </Button>
        <Button outlineGrayLightest>
            Attractions
        </Button>
        <Button outlineGrayLightest>
            Transport
        </Button>
    </Wrapper>
);
