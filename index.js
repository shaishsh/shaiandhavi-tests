const obj = {
    sum(a = 0, b = 0) {
        if (typeof a !== 'number') {
            a = Number(a);
        }

        if (typeof b !== 'number') {
            b = Number(b);
        }

        const res = [a,b].reduce((a, val)=> a + val);

        return res;
    },
    sum1(a, b) {
        return a + b;
    },
    async promiseFunc() {
        return Promise.resolve('hello world');
    }
};

module.exports = obj;