const path = require('path');

module.exports = {
    // プロジェクト全体のエントリーポイント
    entry: './src/app.ts',
    // 最終的に出力されるファイル名、パス
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
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
