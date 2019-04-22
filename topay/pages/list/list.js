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
    name: '鞋履',
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
        picUrl: ['../../../img/list/list01.jpg'],
        name: 'Trent 高帮涂鸦运动鞋',
        price: '￥5300',
        classify: [{
          id: '0',
          picUrl: '../../../img/list/list01_item_01.jpg'
        }]
      },
      {
        id: 1,
        num: 0,
        picUrl: ['../../../img/list/list02.jpg'],
        name: 'Georgie 拼色系带运动鞋',
        price: '￥5300',
        classify: [{
          id: '0',
          picUrl: '../../../img/list/list02_item_01.jpg'
        }]
      },
      {
        id: 2,
        num: 0,
        picUrl: ['../../../img/list/list03_01.jpg', '../../../img/list/list03_02.jpg'],
        name: 'Lillie 皮质平底鞋',
        price: '￥4600',
        classify: [{
          id: '0',
          picUrl: '../../../img/list/list03_item_01.jpg'
        }, {
          id: '0',
          picUrl: '../../../img/list/list03_item_02.jpg'
        }]
      },
      {
        id: 3,
        num: 0,
        picUrl: ['../../../img/list/list04_01.jpg', '../../../img/list/list04_02.jpg'],
        name: 'Ellen 皮质铆钉装饰凉鞋',
        price: '￥3400',
        classify: [{
            id: '0',
            picUrl: '../../../img/list/list04_item_01.jpg'
          },
          {
            id: '1',
            picUrl: '../../../img/list/list04_item_02.jpg'
          }
        ]
      }
    ]
  },
  showSearch: function() {
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
  chooseChange: function(e) {
    let num = e.currentTarget.dataset.index;
    var that = this;
    that.setData({
      act: num
    })
  },
  switchTab: function(e) {
    let dataNum = e.currentTarget.dataset.num;
    let index = parseInt(e.currentTarget.dataset.id);
    let newNum = 'proList[' + index + '].num';
    var that = this;
    that.setData({
      [newNum]: dataNum
    })
  },
  toDetails:function(e){
    wx.navigateTo({
      url: '../../../pages/details/details',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let data = options.category;
    console.log(data);
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