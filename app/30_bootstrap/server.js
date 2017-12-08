const express = require('express');
// eslint-disable-next-line
const router = express.Router();
module.exports = router;

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
router.use('/wpk/', webpackDevMiddleware(compiler, {}));

