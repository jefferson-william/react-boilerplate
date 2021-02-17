module.exports = {
  '*.{tsx,css,scss}': ['yarn fix-styles', 'yarn stylelint', 'cross-env CI=true yarn test --bail --findRelatedTests'],
  '*.{js,jsx}': ['yarn eslint', 'cross-env CI=true yarn test --bail --findRelatedTests'],
  '*.{ts,tsx}': ['yarn eslint', 'yarn tslint', 'cross-env CI=true yarn test --bail --findRelatedTests'],
}
