// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    nav: [{
      id: '0',
      title: '门店消费',
      list:[{
        id:'0',
        name: "Abbott 牛仔厚底凉鞋",
        price: "1900.00",
        imgUrl: "../../img/shop_bag/shop_bag02.jpg"
      }]
    }, {
      id: '1',
      title: '线上消费',
      list:[]
    }]
  },
  changeNav: function(e){
    let newNum = e.currentTarget.dataset.id;
    var that = this;
    that.setData({
      num: newNum
    });
  },
  toDetail: function(e){
    wx.navigateTo({
      url: '../details/details',
    })
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