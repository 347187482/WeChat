//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    item: {
      motto: 'MICHAEL KORS 早春系列全新上市。',
      searchShow: false
    },
    /*userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')*/
    imgUrls: [{
        id: 0,
        url: '../../img/mob-img_01.jpg',
        txt: '文字介绍1',
        linkUrl: ''
      },
      {
        id: 1,
        url: '../../img/mob-img_02.jpg',
        txt: '文字介绍2',
        linkUrl: ''
      },
      {
        id: 2,
        url: '../../img/mob-img_03.jpg',
        txt: '文字介绍3',
        linkUrl: ''
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300,
    series: [{
        id: 0,
        picUrl: '../../img/mob-img_05.jpg',
        txt: '女士新品系列',
        linkUrl: ''
      },
      {
        id: 1,
        picUrl: '../../img/mob-img_04.jpg',
        txt: '男士新品系列',
        linkUrl: ''
      }
    ],
    proList: [{
        id: 0,
        num: 0,
        picUrl: ['../../img/pro01.jpg'],
        name: 'Whitney 中号蝴蝶印花皮质手提包',
        price: '￥5300',
        classify: [{
          id: '0',
          picUrl: '../../img/pro_classify_01.jpg'
        }]
      },
      {
        id: 1,
        num: 0,
        picUrl: ['../../img/pro02.jpg'],
        name: 'Whitney 大号皮质单肩包',
        price: '￥5300',
        classify: [{
          id: '0',
          picUrl: '../../img/pro_classify_02.jpg'
        }]
      },
      {
        id: 2,
        num: 0,
        picUrl: ['../../img/pro03.jpg'],
        name: 'Whitney 大号皮质单肩包',
        price: '￥4600',
        classify: [{
          id: '0',
          picUrl: '../../img/pro_classify_03.jpg'
        }]
      },
      {
        id: 3,
        num: 0,
        picUrl: ['../../img/pro04.jpg', '../../img/pro04-2.jpg'],
        name: 'Whitney 大号皮质单肩包',
        price: '￥3400',
        classify: [{
            id: '0',
            picUrl: '../../img/pro_classify_04-1.jpg'
          },
          {
            id: '1',
            picUrl: '../../img/pro_classify_04-2.jpg'
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
  switchTab: function(e) {
    let dataNum = e.currentTarget.dataset.num;
    let index = parseInt(e.currentTarget.dataset.id);
    let newNum = 'proList[' + index + '].num';
    var that = this;
    that.setData({
      [newNum]: dataNum
    })
  },
  toDetail: function(e){
    wx.navigateTo({
      url: '../details/details',
    })
  },
  toList:function(e){
    wx.navigateTo({
      url: '../../topay/pages/list/list',
    })
  },

  //事件处理函数
  /*bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },*/
  onLoad: function() {
    wx.showLoading({
      title: '加载中'
    });

    setTimeout(() => {
      wx.hideLoading();
    },2000);

    console.log(app.globalData);

    wx.getUserInfo({
      success(res) {
        console.log(res);
      }
    });
    /*if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }*/
  },
  /*getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }*/
})