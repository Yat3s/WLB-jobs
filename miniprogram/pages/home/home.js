Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        slogan: "At Microsoft, you’ll be empowered to work on things that you’re passionate about. You’ll be given autonomy. Your ideas will matter."
    },
    methods: {
        findMyJob: function() {
            this.triggerEvent("switchtab", {
                tab: "jobs"
            });
        },
        toAboutTab: function() {
            this.triggerEvent("switchtab", {
                tab: "about"
            });
        },
        toJobGuide: function() {
            wx.navigateTo({
                url: "/pages/home/jobguide/jobguide"
            });
        },
        toWorkAtMS: function() {
            wx.navigateTo({
                url: "/pages/home/workatms/workingatms"
            });
        }
    }
});