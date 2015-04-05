module.exports = function(content) {
    var currentLoader = this.options.module.loaders[this.loaderIndex];
    var rules = currentLoader.rules;
    var i;
    var iMax = rules.length;
    var rule;
    for (i = 0; i < iMax; i += 1) {
        rule = rules[i];
        content = content.replace(rule['for'], rule['do']);
    }

    return content;
};