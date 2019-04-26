// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      motto: 'MICHAEL KORS 早春系列全新上市。',
      searchShow: false
    },
    act: 0,
    name: '包',
    link: [{
      id: 0,
      linkName: 'Mercer'
    }, {
      id: 1,
      linkName: 'whienty'
    }, {
      id: 2,
      linkName: '甄选鞋履'
    }, {
      id: 3,
      linkName: 'CECE'
    }],
    chooseList: ["默认", "新品", "价格", "筛选"],
    proList: [{
      id: 0,
      num: 0,
      picUrl: ['../../../img/pro01.jpg'],
      name: 'Whitney 中号蝴蝶印花皮质手提包',
      price: '￥5300',
      classify: [{
        id: '0',
        picUrl: '../../../img/pro_classify_01.jpg'
      }]
    },
    {
      id: 1,
      num: 0,
      picUrl: ['../../../img/pro02.jpg'],
      name: 'Whitney 大号皮质单肩包',
      price: '￥5300',
      classify: [{
        id: '0',
        picUrl: '../../../img/pro_classify_02.jpg'
      }]
    },
    {
      id: 2,
      num: 0,
      picUrl: ['../../../img/pro04.jpg', '../../../img/pro04-2.jpg'],
      name: 'Whitney 大号皮质单肩包',
      price: '￥4600',
      classify: [{
        id: '0',
        picUrl: '../../../img/pro_classify_04-1.jpg'
      }, {
        id: '0',
          picUrl: '../../../img/pro_classify_04-2.jpg'
      }]
    }
    ]
  },
  showSearch: function () {
    var that = this;
    if (this.data.item.searchShow == false) {
      that.setData({
        "item.searchShow": true
      })
    } else {
      that.setData({
        "item.searchShow": false
      })
    }
  },
  chooseChange: function (e) {
    let num = e.currentTarget.dataset.index;
    var that = this;
    that.setData({
      act: num
    })
  },
  switchTab: function (e) {
    let dataNum = e.currentTarget.dataset.num;
    let index = parseInt(e.currentTarget.dataset.id);
    let newNum = 'proList[' + index + '].num';
    var that = this;
    that.setData({
      [newNum]: dataNum
    })
  },
  toDetails: function (e) {
    wx.navigateTo({
      url: '../../../pages/details/details',
    })
  },
  toList: function (e) {
    wx.navigateTo({
      url: '../list_2/list-2',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = options.category;
    console.log(data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})