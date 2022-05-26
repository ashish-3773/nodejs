const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const neitems = _.flattenDeep(items);
console.log(neitems)