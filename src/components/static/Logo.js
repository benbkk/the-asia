import React from 'react';
import styled from 'react-emotion';
import { hideText } from 'polished';
import 'img/theasia.png';

const A = styled('a')`
    display: block;
    width: 180px;
    height: 30px;
    background-image: url('img/theasia.png');
    background-size: contain;
    background-repeat: no-repeat;
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
