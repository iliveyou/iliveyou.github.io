//https://stackoverflow.com/a/51976315/3929620
//https://github.com/pcardune/handlebars-loader/tree/master/examples/custom-block-helper
module.exports = function (a, b, options) {
    if (a !== b) { return options.fn(this); }
    return options.inverse(this);
};
