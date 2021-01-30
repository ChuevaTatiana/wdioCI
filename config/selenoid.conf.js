const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
exports.config = {
    hostname: '172.18.255.255',
    port: 4444,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
            },
        },
        {
            browserName: 'firefox',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
            },
        }
    ],
    baseUrl: 'https://stage.localcoding.us',
    ...base,
    ...hooks
}