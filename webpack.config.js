const path = require('path');

module.exports = {
    mode: 'development',
    // プロジェクト全体のエントリーポイント
    entry: './src/app.ts',
    // 最終的に出力されるファイル名、パス
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    devServer: {
        static: [
            {
              directory: path.resolve(__dirname, "dist"),
              publicPath: "/dist",
            },
            {
              directory: __dirname,
              publicPath: "/",
            },
        ],
    },
    devtool: 'eval',
    // tsファイルをts-loaderでコンパイルする
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /mode_modules/
            }
        ]
    },
    // インポートされたモジュールをどう解決するか
    resolve: {
        extensions: ['.ts', '.js']
    }
};
