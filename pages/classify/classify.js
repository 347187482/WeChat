// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    classify: [{
      id: 0,
      name: "女士",
      category: "1001",
      picUrl: "../../img/classify/classify01.jpg",
      list: [{
        name: "服饰",
        category: "1001-1",
        list: [{
            nameList: "上衣",
            category: "1001-1-1"
          },
          {
            nameList: "外套",
            category: "1001-1-2"
          },
          {
            nameList: "连衣裙",
            category: "1001-1-3"
          },
          {
            nameList: "下装",
            category: "1001-1-4"
          }
        ]
      }, {
        name: "手袋",
        category: "1001-2",
        list: [{
            nameList: "手提包",
            category: "1001-2-1"
          },
          {
            nameList: "单肩包",
            category: "1001-2-2"
          },
          {
            nameList: "斜挎包",
            category: "1001-2-3"
          },
          {
            nameList: "托特包",
            category: "1001-2-4"
          },
          {
            nameList: "双肩背包",
            category: "1001-2-5"
          },
          {
            nameList: "钱夹",
            category: "1001-2-6"
          },
          {
            nameList: "小皮件",
            category: "1001-2-7"
          }
        ]
      }, {
        name: "黑白系列",
        category: "1001-3",
        list: [

        ]
      }, {
        name: "经典老花系列",
        category: "1001-4",
        list: [

        ]
      }]
    }, {
      id: 1,
      name: "男士",
      category: "1002",
      picUrl: "../../img/classify/classify02.jpg",
      list: [{
        name: "服饰",
        category: "1002-1",
        list: [{
          nameList: "上衣",
          category: "1002-1-1"
        }, {
          nameList: "外套",
          category: "1002-1-2"
        }, {
          nameList: "裤装",
          category: "1002-1-3"
        }]
      }, {
        name: "手袋",
        category: "1002-2",
        list: [{
            nameList: "裤装",
            category: "1002-2-1"
          },
          {
            nameList: "手提包",
            category: "1002-2-2"
          },
          {
            nameList: "单肩包",
            category: "1002-2-3"
          },
          {
            nameList: "斜挎包",
            category: "1002-2-4"
          },
          {
            nameList: "托特包",
            category: "1002-2-5"
          },
          {
            nameList: "双肩背包",
            category: "1002-2-6"
          }
        ]
      }, {
        name: "鞋履",
        category: "1002-3",
        list: [

        ]
      }]
    }, {
      id: 2,
      name: "腕表",
      category: "1003",
      picUrl: "../../img/classify/classify03.jpg",
      list: [{
        name: "腕表",
        category: "1003-1",
        list: [{
            nameList: "女士腕表",
            category: "1003-1-1"
          },
          {
            nameList: "男士腕表",
            category: "1003-1-2"
          },
          {
            nameList: "智能腕表",
            category: "1003-1-3"
          },
          {
            nameList: "腕表配饰",
            category: "1003-1-4"
          }
        ]
      }]
    }]
  },
  classifyChange: function(e) {
    let listNum = e.currentTarget.dataset.id;
    var that = this;
    that.setData({
      num: listNum
    })
  },
  classifyList: function (e) {
    console.log(e);
    let category = e.currentTarget.dataset.category;
    wx.navigateTo({
      url: '../list/list?category=' + category
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})