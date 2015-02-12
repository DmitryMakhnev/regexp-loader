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
                        'for': /\/\*@defaultTesting\.exports\*\/(.|\s)*\/\*@\/defaultTesting\.exports\*\//g,
                        'do': ''
                    },
                    {
                        'for': '\/\/str',
                        'do': function () {
                            return '"replaced";'
                        }
                    }
                ]
            }
        ]
    }
};

```