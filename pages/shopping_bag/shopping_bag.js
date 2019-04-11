// pages/shopping_bag/shopping_bag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[{
      id:0,
      cagetory:"鞋子",
      name: "Lucille 皮质尖头高跟鞋",
      size:{
        sizeNow:"M",
        sizeOption:["S","M","L"]
      },
      color:{
        colorNow: "蓝色",
        colorOption:["蓝色","白色"]
      },
      num:1,
      inventory:2,
      price:"1400.00",
      imgUrl:"../../img/shop_bag/shop_bag01.jpg"
    }, {
        id: 1,
        cagetory: "鞋子",
        name: "Abbott 牛仔厚底凉鞋",
        size: {
          sizeNow: "M",
          sizeOption: ["S", "M", "L"]
        },
        color: {
          colorNow: "青年蓝",
          colorOption: ["蓝色", "白色"]
        },
        num: 1,
        inventory: 2,
        price: "1900.00",
        imgUrl: "../../img/shop_bag/shop_bag02.jpg"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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