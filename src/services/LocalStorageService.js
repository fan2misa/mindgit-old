let Store = require('../../lib/LocalStorage');

export default new Store({
    configName: 'app-preferences',
    defaults: {
        user: null,
        directory: '/home/gjean/www/mindgit'
    }
});
