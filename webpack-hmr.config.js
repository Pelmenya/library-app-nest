/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
    return {
        ...options,
        entry: ['webpack/hot/poll?100', options.entry],
        watchOptions: {
            // без этого не успевает в Docker Hot Module Reload!!!
            aggregateTimeout: 300,
            poll: 500,
        },
        externals: [
            nodeExternals({
                allowlist: ['webpack/hot/poll?100'],
            }),
        ],
        plugins: [
            ...options.plugins,
            new webpack.HotModuleReplacementPlugin(),
            new webpack.WatchIgnorePlugin({
                paths: [/\.js$/, /\.d\.ts$/],
            }),
            new RunScriptWebpackPlugin({
                name: options.output.filename,
                autoRestart: false,
            }),
        ],
    };
};
