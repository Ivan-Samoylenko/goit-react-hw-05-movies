const theme = {
  colors: {
    bcg: {
      sides: '#222222',
      bar: '#222244',
      content: '#ffffaa',
      posterInfo: '#ffffff',
      pagination: {
        current: 'rgba(255,150,0, 0.4)',
        main: 'rgba(255,200,0, 0.2)',
      },
    },
    text: {
      bar: '#8888dd',
      barActive: '#aaaaff',
      poster: '#222244',
    },
  },
  space: ['0', '2px', '4px', '8px', '16px', '32px', '64px'],
  mediaQueries: {
    mobile: '@media screen and (min-width: 480px)',
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1280px)',
  },
  fontSizes: {
    bar: '24px',
  },
  radii: {
    btn: '8px',
  },
  borders: {
    transparent: '0 solid transparent',
    movieDetails: '2px solid #ffff88',
    AdditionalInfo: '1px solid #222244',
  },
  shadows: {
    poster: {
      hover: '0 0 2px 2px #222244',
      main: '0 0 2px 2px #aaaaff',
    },
    pagination: {
      main: 'inset -3px -3px 5px 1px #ffaa00, inset 3px 3px 5px 2px #ffffaa,inset 4px 4px 5px 2px rgba(255, 255, 255, 0.8)',
      hover:
        'inset -3px -3px 5px 1px #dd8800, inset 3px 3px 5px 2px #ffffaa,inset 4px 4px 5px 2px rgba(255, 255, 255, 0.2)',
      active:
        'inset 3px 3px 5px 1px #dd8800, inset -3px -3px 5px 2px #ffffaa, inset -4px -4px 5px 2px rgba(255, 255, 255, 0.2)',
    },
  },
  transition: 'linear 150ms',
};

export default theme;
