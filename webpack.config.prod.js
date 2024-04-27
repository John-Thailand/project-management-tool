const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    // プロジェクト全体のエントリーポイント
    entry: './src/app.ts',
    // 最終的に出力されるファイル名、パス
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
    devtool: false,
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
    },
    plugins: [
        // ファイルを出力する前に、distフォルダ内のファイルを全て削除する
        new CleanPlugin.CleanWebpackPlugin(),
    ]
};
