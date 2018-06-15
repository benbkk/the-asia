export const palette =  {
    black: '#333333',
    blue: '#4262E8',
    purple: '#7949FF',
    lightBlue: '#55C2FF',
    turquoise: '#42E8D9',
    green: '#2DFF87',
    white: '#ffffff',
}

export const mediaQueries = {
    desktop: '@media only screen and (min-width:1920px)',
    laptop: '@media screen and (min-width: 1025px)',
    tablet: '@media only screen and (max-width:1024px)',
    tabletS: '@media only screen and (max-width:768px)',
    mobile: '@media screen and (max-width:640px)',
}

export const textLeft = {
    textAlign: 'left'
}

export const textCenter = {
    textAlign: 'center',
    [mediaQueries.mobile]: {
        textAlign: 'left',
    }
}

export const textRight = {
    textAlign: 'right',
    [mediaQueries.mobile]: {
        textAlign: 'left',
    }
}

export const textJustify = {
    textAlign: 'justify'
}

export const upperCase = {
    textTransform: 'uppercase',
}

export const colorBlend = {
    backgroundColor: 'inherit',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    filter: 'invert(1) grayscale(100%) contrast(1)',
    mixBlendMode: 'invert'
}

