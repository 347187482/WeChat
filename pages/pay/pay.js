// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payList: [{
      id: 0,
      name: "Mercer 中号拼色风琴款手提包",
      size: "均码",
      color: "棕色/裸色/米白色",
      num: 2,
      price: 1,
      picUrl: "../../img/pay/pay01.jpg"
    }, {
      id: 0,
      name: "Mercer 中号拼色风琴款手提包",
      size: "均码",
      color: "棕色/裸色/米白色",
      num: 1,
      price: 4200,
      picUrl: "../../img/pay/pay01.jpg"
    }],
    priceAll: 0,
    region: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let priceL = this.data.payList;
    let pricePlus = 0;
    for (var i = 0; i < priceL.length; i++) {
      pricePlus += priceL[i].num * priceL[i].price;
    };
    var that = this;
    that.setData({
      priceAll: pricePlus
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
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