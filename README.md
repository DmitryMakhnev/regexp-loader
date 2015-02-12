#regexp-loader

webpack regexp loader

## Installation

``` sh
npm install --save-dev regexp-loader
```

## Usage

``` javascript

var webpack = require('webpack');

module.exports = {
    entry:  './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /^.*$/,
                loader: "regexp",
                rules: [
                    {
                        'for': /foo/g,
                        'do': 'bar'
                    },
                    {
                        'for': 'foo',
                        'do': function () {
                            return 'bar'
                        }
                    }
                ]
            }
        ]
    }
};

```