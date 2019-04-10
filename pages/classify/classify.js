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
      picUrl: "../../img/classify/classify01.jpg",
      list: [{
        name: "服饰",
        list: [
          "全部", "上衣", "外套", "连衣裙", "下装"
        ]
      }, {
        name: "手袋",
        list: [
          "全部", "手提包", "单肩包", "斜挎包", "托特包", "双肩背包", "钱夹", "小皮件"
        ]
      }, {
        name: "黑白系列",
        list: [

        ]
      }, {
        name: "经典老花系列",
        list: [

        ]
      }]
    }, {
      id: 1,
      name: "男士",
      picUrl: "../../img/classify/classify02.jpg",
      list: [{
        name: "服饰",
        list: [
          "全部", "上衣", "外套", "裤装"
        ]
      }, {
        name: "手袋",
        list: [
          "全部", "手提包", "单肩包", "斜挎包", "托特包", "双肩背包", "小皮件"
        ]
      }, {
        name: "鞋履",
        list: [
          "全部"
        ]
      }]
    }, {
      id: 2,
      name: "腕表",
      picUrl: "../../img/classify/classify03.jpg",
      list: [{
        name: "腕表",
        list: [
          "全部", "女士腕表", "男士腕表", "智能腕表", "腕表配饰"
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