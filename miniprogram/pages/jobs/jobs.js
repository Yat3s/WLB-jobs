var a = wx.cloud.database(), t = [ "bg-ms1", "bg-ms2", "bg-ms3", "bg-ms4" ];

Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        jobs: null,
        tags: null,
        currentTagIndex: -1
    },
    methods: {
        toJobDetail: function(a) {
            var t = a.currentTarget.dataset.jobid;
            console.log("JobId =>", t), wx.navigateTo({
                url: "/pages/jobs/detail/detail?jobid=" + t
            });
        },
        loadJobs: function() {
            var o = this;
            a.collection("jobs").get().then(function(a) {
                var e = a.data, s = 0;
                for (s in e) e[s].bgColor = t[s % t.length];
                o.setData({
                    jobs: e
                }), console.log("loadJobs", e);
            }).catch(function(a) {
                console.error("loadJobs", a);
            });
        },
        loadTags: function() {
            var t = this;
            a.collection("tags").get().then(function(a) {
                console.log("loadTags", a), t.setData({
                    tags: a.data
                });
            }).catch(function(a) {
                console.error("loadTags", a);
            });
        },
        selectTag: function(a) {
            var t = parseInt(a.currentTarget.dataset.index);
            this.setData({
                currentTagIndex: t
            }), t < 0 ? this.searchByTags(null) : this.searchByTags(this.data.tags[t].name);
        },
        onSearchChange: function(a) {
            var t = a.detail.value.toLowerCase();
            this.setData({
                input: t
            });
            var o = t.split(" ").length > 1 && -1 != t.split(" ")[0].toLowerCase().search("tag:");
            console.log("findTagStr", o);
            var e = -1, s = t, r = null;
            if (o) {
                var n = t.split(" ")[0].trim();
                r = n.substring(4, n.length);
                var i = this.data.tags;
                s = t.substring(n.length, t.length).trim();
                for (var l in i) if (r.toLowerCase() === i[l].name.toLowerCase()) {
                    e = l;
                    break;
                }
                e < 0 && (r = null), console.log("tagStr", n), console.log("tag", r), console.log("tagIndex", e);
            }
            this.setData({
                currentTagIndex: parseInt(e)
            }), console.log("keyword", s), this.searchByKeyword(r, s);
        },
        searchByTags: function(a) {
            console.log(a);
            var t = this.data.jobs;
            for (var o in t) {
                var e = t[o], s = !1;
                if (a) {
                    if (e.tags) for (var r in e.tags) if (s = -1 != e.tags[r].name.toLowerCase().search(a.toLowerCase()), 
                    console.log("findInTag", s), s) break;
                } else s = !0;
                e.hidden = !s;
            }
            var n = null;
            a && (n = "tag:" + a.toLowerCase() + " "), this.setData({
                jobs: t,
                input: n
            });
        },
        clearInput: function() {
            var a = this.data.jobs;
            for (var t in a) a[t].hidden = !1;
            this.setData({
                currentTagIndex: -1,
                input: null,
                jobs: a
            });
        },
        searchByKeyword: function(a, t) {
            console.log("searchByKeyword", a + ", " + t);
            var o = this.data.jobs, e = !1;
            a && (e = !0);
            for (var s in o) {
                var r = o[s], n = !1;
                if (e) for (var i in r.tags) if (n = -1 != r.tags[i].name.toLowerCase().search(a.toLowerCase()), 
                console.log("findInTag", n), n) break;
                var l = !1;
                for (var i in r.tags) if (l = -1 != r.tags[i].name.toLowerCase().search(t.toLowerCase()), 
                console.log("findInTagWithKeyword", l), l) break;
                var g = !1;
                r.title && (g = -1 != r.title.toLowerCase().search(t));
                var c = !1;
                r.city && (c = -1 != r.city.toLowerCase().search(t));
                var d = !1;
                r.org && (d = -1 != r.org.toLowerCase().search(t)), r.hidden = e ? !(n && (g || c || d || l)) : !(g || c || d || l);
            }
            this.setData({
                jobs: o
            });
        }
    },
    attached: function() {
        this.loadJobs(), this.loadTags();
    }
});