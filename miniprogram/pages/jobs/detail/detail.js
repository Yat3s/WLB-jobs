var o = wx.cloud.database();

Page({
    data: {
        job: null,
        showQuestionModal: !1
    },
    loadJobDetail: function(n) {
        var t = this;
        wx.showLoading({
            title: "Loading..."
        }), o.collection("jobs").doc(n).get().then(function(o) {
            t.setData({
                job: o.data
            }), wx.hideLoading();
        }).catch(function(o) {
            console.error(o), wx.hideLoading();
        });
    },
    contactHR: function() {
        this.setData({
            showQuestionModal: !0
        });
    },
    hideModal: function() {
        this.setData({
            showQuestionModal: !1
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(o) {
        this.loadJobDetail(o.jobid);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});