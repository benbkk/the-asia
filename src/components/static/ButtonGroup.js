import React from 'react';
import Button from 'static/Button';
import { css } from 'react-emotion';
import { Wrapper } from 'static/Elements';

const absBottom = css`
    position: absolute;
    bottom: 36px;
    left: 55px;
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
