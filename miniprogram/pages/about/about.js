var t = wx.cloud.database();

Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        companyIntro: "微软作为全球领先的软件、服务、设备和解决方案供应商，自1975年成立以来，一直致力于帮助个人和企业用户全面发挥科技潜能。四十年来，微软始终引领技术创新与变革，其卓越的软件、设备和服务能够帮助用户提升在生活和工作的方方面面，使数以亿计的用户真正受益于科技。微软公司总部位于美国华盛顿州雷德蒙德市，在全世界190个国家和地区建立分支机构，拥有超过125,000名员工。",
        sites: null
    },
    methods: {
        loadSites: function() {
            var o = this;
            t.collection("sites").get().then(function(t) {
                console.log("loadSites", t), o.setData({
                    sites: t.data
                });
            }).catch(function(t) {
                console.error("loadSites", t);
            });
        }
    },
    attached: function() {
        this.loadSites();
    }
});