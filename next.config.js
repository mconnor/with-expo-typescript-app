/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// @generated: @expo/next-adapter@2.1.62
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
    'react-native'
]);
module.exports = () => {
    return withTM(withExpo(withFonts(withImages({
    projectRoot: __dirname,
}))))};
