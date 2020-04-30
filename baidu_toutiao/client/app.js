import swan from "onekit/swan"
/* globals App */

App({onekit:{server:"https://头条/头条小程序域名/onekit/api/"},

    onLaunch(event) {
        console.log('onLaunch');
    },

    onShow(event) {
        console.log('onShow');
    },

    globalData: {
        userInfo: 'user'
    }
});
