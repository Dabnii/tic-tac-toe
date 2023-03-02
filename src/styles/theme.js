const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `(max-width: ${deviceSizes.mobile})`,
  tablet: `(max-width: ${deviceSizes.tablet})`,
  laptop: `(max-width: ${deviceSizes.laptop})`,
};

const colors = {
  green: '#ABCFA1',
  highlight: '#e9e9e9',
};

const theme = {
  device,
  colors,
};

export default theme;
