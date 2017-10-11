var config = require('config');
var sum_expect = config.get('test.unit.sum.expect');

test('1 + 1 equals 2', () => {
    console.log("sum_expect " + sum_expect);
    expect(1 + 1).toBe(sum_expect);
});