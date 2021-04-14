const minify = require('html-minifier').minify;
const fs = require('fs');

const file = fs.readFileSync('./index.html', 'utf-8');
const result = 'data:text/html, ' + minify(file, {
  minifyJS: {
    mangle: {
      toplevel: true,
    },
    keep_fnames: false,
    compress: true,
  },
  minifyCSS: {
    compatibility: {
      properties: {
        colors: false
      }
    }
  },
  collapseWhitespace: true,
});

console.log(result);

fs.writeFileSync('./dist/link.txt', result);