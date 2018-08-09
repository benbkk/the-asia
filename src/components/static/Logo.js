import React from 'react';
import styled from 'react-emotion';
import { hideText } from 'polished';

const A = styled('a')`
    display: block;
    width: 204px;
    height: 40px;
    background-image: url('img/theasia.png');
    ${hideText()};
`;

export default () => (
    <A
        className="the-asia"
        title="The Asia"
        href="https://www.theasia.com"
        target="_blank"
    >
        The Asia
    </A>
);
