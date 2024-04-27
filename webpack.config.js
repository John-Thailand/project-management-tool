const path = require('path');

module.exports = {
    // プロジェクト全体のエントリーポイント
    entry: './src/app.ts',
    // 最終的に出力されるファイル名、パス
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
