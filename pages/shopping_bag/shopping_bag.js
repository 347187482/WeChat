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
    allCheck: false,
    shopList: [{
      id: 0,
      checked: false,
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
      checked: false,
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
    }, {
      id: 2,
      checked: false,
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
      num: 1,
      inventory: 2,
      price: "1900.00",
      imgUrl: "../../img/shop_bag/shop_bag02.jpg"
    }],
    priceAll: 0,
    sale: 0,
    freight: 0,
    pack: 0
  },
  //计算总价方法 
  totalMoney: function(){
    let check = this.data.shopList;
    let totalMoney = 0;
    var that = this;
    for(var i in check){
      if(check[i].checked == true){  //判断选中 值计算checked=true的商品
        totalMoney += check[i].num * parseFloat(check[i].price);
      };
    };
    that.setData({
      priceAll: totalMoney
    });
  },
  //选中调用计算价格方法 反之修改选中属性 数据响应 会即时跟新计算价格
  checked: function(e){
    let checkIndex = e.currentTarget.dataset.index;
    var that = this;
    let checkTarget = 'shopList['+ checkIndex+ '].checked';
    if(that.data.shopList[checkIndex].checked == false){
      that.setData({
        [checkTarget]: true
      });
    }else{
      that.setData({
        [checkTarget]: false
      });
    };
    that.totalMoney();
  },
  //全选按钮 切换状态 选中修改所有商品属性并计算价格
  allCheck: function(e){
    var that = this;
    if(that.data.allCheck == false){
      for (var i in that.data.shopList) {  //遍历所有商品的选中属性
        let all = 'shopList[' + i + '].checked';
        that.setData({
          [all]: true
        });
      };
      that.setData({
        allCheck: true
      });
      that.totalMoney();
    }else{
      for (var i in that.data.shopList) {
        let all = 'shopList[' + i + '].checked';
        that.setData({
          [all]: false
        });
      };
      that.setData({
        allCheck: false
      });
      that.totalMoney();
    }
  },
  //判断选中商品是否是购物车全部商品 如果全部选中 全选按钮属性修改
  /*修改依据：内置组件自带事件 返回值为选中状态单选框的值 */
  checkboxChange: function(e) {
    var that = this;
    console.log(e.detail.value.length);
    if(e.detail.value.length == this.data.shopList.length){
      that.setData({
        allCheck: true
      });
    }else{
      that.setData({
        allCheck: false
      });
    }
  },
  //删除按钮 滑动开始位置
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
  //删除按钮 滑动判断
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
  //滑动结束
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
  //删除购物车商品方法
  delItem: function(e) {

  },
  //点击商品时 前往商品详情页
  toDetail: function(e) {
    wx.navigateTo({
      url: '../details/details',
    })
  },
  //结算按钮
  toPay: function(e) {
    let PriceAll = this.data.priceAll;
    let Sale = this.data.sale;
    let Freight = this.data.freight;
    let Pack = this.data.pack;
    let pay = PriceAll - Sale + Freight + Pack;
    console.log(PriceAll - Sale + Freight + Pack);
    if (pay == 0) { //判断是否有商品选中
      wx.showToast({
        title: '您还未选择商品',
        icon: "none"
      })
    } else {
      wx.navigateTo({
        url: '../pay/pay',
      })
    }
  },

  //减少数量
  subtract: function(e) {
    let subNum = e.currentTarget.dataset.num;
    let subIndex = e.currentTarget.dataset.index;
    let target = 'shopList[' + subIndex + '].num';
    var that = this;
    if (subNum == 1) {
      wx.showToast({
        title: '亲，至少买一个吧',
        icon: 'none'
      });
    } else {
      let jian = --subNum;
      that.setData({
        [target]: jian
      });
    };
    this.totalMoney();
  },

  //增加数量
  plus: function(e) {
    let plusNum = e.currentTarget.dataset.num;
    let plusIndex = e.currentTarget.dataset.index;
    let target = 'shopList[' + plusIndex + '].num';
    var that = this;
    if (plusNum < 9) {
      let jia = ++plusNum;
      that.setData({
        [target]: jia
      });
    } else {
      wx.showToast({
        title: '亲，不要太贪心哦',
        icon: 'none'
      });
    };
    this.totalMoney();
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