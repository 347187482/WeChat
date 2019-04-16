// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      motto: 'MICHAEL KORS 早春系列全新上市。',
      searchShow: false
    }, 
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    detailsList: {
      id: 0,
      idCdode: "30S9LM9M6T",
      num: 0,
      picUrl: [{
        name: 'Mercer 中号拼接手提包',
        imgUrl: ['../../img/details/details01-1.jpg', '../../img/details/details01-2.jpg', '../../img/details/details01-3.jpg']
      }, {
        name: 'Mercer 中号拼接手提包',
        imgUrl: ['../../img/details/details02-1.jpg', '../../img/details/details02-2.jpg', '../../img/details/details02-3.jpg']
      }],
      price: '￥5000',
      classify: [{
        id: '0',
        picUrl: '../../img/details/details-list01.jpg'
      }, {
        id: '1',
        picUrl: '../../img/details/details-list02.jpg'
      }]
    }
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
  switchTab: function (e) {
    let dataNum = e.currentTarget.dataset.num;
    let newNum = this.data.detailsList.num;
    var that = this;
    that.setData({
      "detailsList.num": dataNum
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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