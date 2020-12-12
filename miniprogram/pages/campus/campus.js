Component({
    options: {
        addGlobalClass: !0
    },
    data: {},
    methods: {
        toDetail: function() {
            wx.navigateTo({
                url: "/pages/campus/campusdetail/campusdetail"
            });
        }
    }
});