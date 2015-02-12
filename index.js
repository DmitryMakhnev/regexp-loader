module.exports = function(content) {

    //find loader
    var loaders = this.options.module.loaders;
    var regexpLoader;
    for (var i = loaders.length; i-- ;) {
        if (loaders[i].loader === 'regexp') {
            regexpLoader = loaders[i];
            break;
        }
    }

    //apply rules
    var rules = regexpLoader.rules;
    var iMax = rules.length;
    var rule;
    for (i = 0; i < iMax; i += 1) {
        rule = rules[i];
        content = content.replace(rule['for'], rule['do']);
    }

    return content;
};