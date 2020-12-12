var t = getApp();

Page({
    data: {
        currentTab: "home",
        tabs: [ {
            id: "home",
            title: "HOME",
            color: "#f1f1f1",
            icon: "../../images/ic_home.png"
        }, {
            id: "jobs",
            title: "JOBS",
            color: "#f1f1f1",
            icon: "../../images/ic_jobs.png"
        }, {
            id: "campus",
            title: "CAMPUS",
            color: "#f1f1f1",
            icon: "../../images/ic_campus.png"
        }, {
            id: "about",
            title: "ABOUT",
            color: "#f1f1f1",
            icon: "../../images/ic_about.png"
        } ]
    },
    onTabSelect: function(t) {
        var a = t.currentTarget.dataset.tabid;
        this.setData({
            currentTab: a
        });
    },
    switchTab: function(t) {
        this.setData({
            currentTab: t.detail.tab
        });
    },
    onLoad: function(a) {
        var i = this.data.tabs.length + 1, e = t.globalData.windowWidth / i;
        this.setData({
            tabWidth: e
        });
    }
});