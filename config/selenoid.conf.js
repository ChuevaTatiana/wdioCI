const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
exports.config = {
    hostname: 'user:user@selenoid.local',
    port: 5555,
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