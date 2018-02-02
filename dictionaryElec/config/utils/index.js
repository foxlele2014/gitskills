const path = require('path');

const commonPath = 'resource';
const alias = ['assets', 'components', 'config', 'pages', 'route', 'utils'];
const getAliasPath = () => {
    return alias.map((opt, i) => {
        return path.resolve(commonPath, opt);
    });
};

const getAliasObj = () => {
    let obj = {};
    const aliasPath = getAliasPath();
    for (let i = 0; i < aliasPath.length; i++) {
        obj[`@${alias[i]}`] = aliasPath[i];
    }
    return obj;
};

const entry = {
    entry:{
        app:path.resolve(commonPath,'renderer.js')
    }
}



module.exports = {
    getAliasObj,

}