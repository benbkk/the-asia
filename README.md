# Destinations Image / Content Slider - for the Asia
http://benbkk-theasia.surge.sh

A very basic content slider built on react components. React only, + hand crafted css-in-Js with the help of emotion-js and polished.

## Recipes
- Webpack 4
- Emotion CSS
- Polished JS

## Updates 13/Aug/2018
- A bit more with react-motion. 
- **Added weather info** from openweather - this is actually hacky because the original data does not include weather info. So this demo is taking the data from open weather, which then compared to the cities data by city name to get the weather info for each city. However the city names are not the same
- **Imgix** - basically imgix settings for srcset is ready to use and working, however it is commented out because there is an issue with the url of one of the images that caused console error.

## Getting Started

```
git clone git@github.com:benbkk/frontend-starter.git && cd frontend-starter
yarn
```

### Development
```
yarn dev
```

### Production
```
yarn build
```
