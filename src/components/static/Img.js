import React from 'react';
import styled from 'react-emotion';

const Img = styled('img')`
    width: 100%;
    object-fit: cover;
    object-position: center;
    vertical-align: middle
`;

const Image = styled('span')`
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    width: 485px;
    height: 380px;
    border-radius: 4px;
    box-shadow: 5px 10px 50px 0 rgba(1,121,255,.1),5px 10px 50px 0 rgba(0,0,0,.2);
`;

export default props => (
    <Image className="image-wrapper">
        <Img {...props} />
    </Image>
);
