import React from 'react';
import PropTypes from 'prop-types';
import AnimateCaption from 'components/AnimateCaption';
import Loading from 'static/Loader';
import styled from 'react-emotion';
import { rem } from 'polished';
import AnimateImage from './AnimateImage';


const Figure = styled('figure')`
    margin: ${rem('18px', '16px')} 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: table;
`;

const Screen = (props) => {
    const { city, active } = props;
    const { name, main_image, description } = city;
    return (
        <React.Fragment>
            { !active
                ? <Loading />
                : (
                    <Figure
                        className="screen"
                    >
                        <AnimateImage
                            src={main_image}
                            alt={name}
                            active={active}
                            {...props}
                            
                        />
                        <AnimateCaption
                            name={name}
                            description={description}
                            active={active}
                            {...props}
                        />
                    </Figure>
                )
            }
        </React.Fragment>
    );
};

Screen.propTypes = {
    active: PropTypes.bool.isRequired,
    city: PropTypes.object.isRequired,
};

export default Screen;
