// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: "",
    scollTop: 0,
    domTop: 0,
    show: false,
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
      sizeNum: 0,
      proStyle:"此款 Mercer 小号风琴款手提包选用荔枝纹皮精致而成，风琴式的包侧造型升级整体质感。其流线型设计结构，搭配顶部手柄和品牌 Logo 饰带，增加了手袋的多样性。内部的拉链暗袋设计让您能轻松收纳小物。",
      proDetail: "- 面料材质：牛皮革/牛剖层皮革- 里料材质：人造革 内袋：织物- 不同批次商品细节可能略有不同，请以实物为准",
      proUpkeep:"- 使用注意事项：请尽量避免放置过多过重物品；请尽量保持手袋干燥，防止高温、暴晒、雨淋、霉变与挤压；避免接触酒精、油脂、香水、化妆品、护肤品，以及酸、碱、海水等有腐蚀性的液体。",
      size: [{
          sizeList: ["大号", "中号", "小号"]
        },
        {
          sizeList: ["大号", "中号"]
        }
      ],
      picUrl: [{
        name: 'Mercer 中号拼接手提包橙',
        imgUrl: ['../../img/details/details01-1.jpg', '../../img/details/details01-2.jpg', '../../img/details/details01-3.jpg']
      }, {
        name: 'Mercer 中号拼接手提包红',
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
  switchTab: function(e) {
    let dataNum = e.currentTarget.dataset.num;
    let newNum = this.data.detailsList.num;
    var that = this;
    that.setData({
      "detailsList.num": dataNum
    });
  },
  scale: function(e) {
    var that = this;
    that.setData({
      show: true
    })
  },
  scaleClose: function(e) {
    var that = this;
    that.setData({
      show: false
    })
  },
  sizeChoose: function(e){
    let newSize = e.currentTarget.dataset.active;
    var that = this;
    that.setData({
      "detailsList.sizeNum": newSize
    })
  },
  addCar: function(e){
    wx.showToast({
      title: '添加成功',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var query = wx.createSelectorQuery();
    var that = this;
    query.select('#detail').boundingClientRect();
    query.exec(function(res){
      that.setData({
        domTop: res[0].top
      })
    });
  },
  onPageScroll: function(e){
    this.setData({
      scrollTop:e.scrollTop
    })
    //console.log(this.data.scrollTop);
    let dTop = this.data.domTop;
    let sTop = this.data.scrollTop;
    if(sTop >= dTop){
      this.setData({
        position: "position"
      })
    }else{
      this.setData({
        position: ""
      })
    }
  },
  toIndex:function(e){
    wx.switchTab({
      url: '../index/index',
    })
  },
  toBag:function(e){
    wx.switchTab({
      url: '../shopping_bag/shopping_bag',
    })
  },
  toPay:function(e){
    wx.navigateTo({
      url: '../pay/pay',
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