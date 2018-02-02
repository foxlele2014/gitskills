const path = require('path');
const fs = require('fs');
let collection = [];

const getConfigFile = (from, collection) => {
  fs.readdirSync(from).forEach((page) => {
    const pagePath = path.resolve(from, page);
    const stats = fs.statSync(pagePath);
    // 它应该是一个目录
    if (stats.isDirectory()) {
      // 并且也要存在index.js, 我才认为它是需要一个路由路径的
      if (fs.existsSync(path.resolve(pagePath, 'index.js'))) {
        collection.push(path.relative(from, pagePath));
        // getRoutes(pagePath, collectoin);
      } else {
        // getRoutes(pagePath, collection);
      }
    }
  })
}
getConfigFile('resource/pages', collection);


module.exports = collection;
