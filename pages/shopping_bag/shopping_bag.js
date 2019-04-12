// pages/shopping_bag/shopping_bag.js
//剩余功能 全选？

Page({

  /**
   * 页面的初始数据
   */
  data: {
    delBtnWidth: 160,
    isScroll: true,
    windowHeight: 0,
    equipment: "",
    shopList: [{
      id: 0,
      cagetory: "鞋子",
      name: "Lucille 皮质尖头高跟鞋",
      right: 0,
      size: {
        sizeNow: "M",
        sizeOption: ["S", "M", "L"]
      },
      color: {
        colorNow: "蓝色",
        colorOption: ["蓝色", "白色"]
      },
      num: 1,
      inventory: 2,
      price: "1400.00",
      imgUrl: "../../img/shop_bag/shop_bag01.jpg"
    }, {
      id: 1,
      cagetory: "鞋子",
      name: "Abbott 牛仔厚底凉鞋",
      right: 0,
      size: {
        sizeNow: "M",
        sizeOption: ["S", "M", "L"]
      },
      color: {
        colorNow: "青年蓝",
        colorOption: ["蓝色", "白色"]
      },
      num: 2,
      inventory: 2,
      price: "1900.00",
      imgUrl: "../../img/shop_bag/shop_bag02.jpg"
    }],
    priceAll: 0,
    sale: 10,
    freight: 10,
    pack: 10
  },

  checkboxChange: function(e) {
    var that = this;
    var priceAll = 0;
    for (var index in e.detail.value) {
      let count = that.data.shopList[e.detail.value[index]].num;
      priceAll += parseFloat(that.data.shopList[e.detail.value[index]].price) * count;
    };
    that.setData({
      priceAll: priceAll
    })
  },
  drawStart: function(e) {
    // console.log("drawStart");  
    var touch = e.touches[0];

    for (var index in this.data.shopList) {
      var item = this.data.shopList[index];
      item.right = 0
    }
    this.setData({
      shopList: this.data.shopList,
      startX: touch.clientX,
    })

  },
  drawMove: function(e) {
    var touch = e.touches[0]
    var item = this.data.shopList[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX

    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.right = disX
      this.setData({
        isScroll: false,
        shopList: this.data.shopList
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        shopList: this.data.shopList
      })
    }
  },
  drawEnd: function(e) {
    var item = this.data.shopList[e.currentTarget.dataset.index]
    if (item.right >= this.data.delBtnWidth / 2) {
      item.right = this.data.delBtnWidth
      this.setData({
        isScroll: true,
        shopList: this.data.shopList,
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        shopList: this.data.shopList,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //页面加载完成 获取购物车元素列表dom高度  
    var query = wx.createSelectorQuery();
    var that = this;
    var h = that.data.shopList.length;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          equipment: res.model
        })
      }
    })
    query.select('.shop-bag-list-item').boundingClientRect(function(rect) {
      if (that.data.equipment == "iPad Pro 10.5-inch" || that.data.equipment == "iPad Pro 12.9-inch") {
        that.setData({
          windowHeight: rect.height * h
        })
      } else {
        that.setData({
          windowHeight: (rect.height - 120) * h //rect.height获取值有问题 太大 做减法处理
        })
      }
    }).exec();
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