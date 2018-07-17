const sum = (...args) => {
    return args.reduce((prev, next) => prev + next);
}

module.exports = sum;
// exports.sum = sum;
// global.sum = sum;