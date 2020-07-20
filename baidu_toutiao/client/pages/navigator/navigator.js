import swan from "../../onekit/swan"
/**
 * @file demo component for navigator
 * @author swan
 */

let app = getApp();

Page({
    data: {},
    onShow() {
        // 打点操作
        var openParams= app.globalData.openParams;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'navigator',
           });
        }
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    successHandler: function (e) {
        console.log('success');
    },
    failHandler: function (e) {
        console.log('fail');
    },
    completeHandler: function(e){
        console.log('complete');
    }
});

