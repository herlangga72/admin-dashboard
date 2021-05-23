const { optimizeCarbonImports } = require("carbon-components-svelte/preprocess");

module.exports = {
  extensions: ['.svelte'],
  preprocess: [optimizeCarbonImports()]
};
