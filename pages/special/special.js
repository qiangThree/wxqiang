// var aaa = require('../../data.js')
Page({
  data: {
    show:false
  },
  goTal(){
    wx.makePhoneCall({
      phoneNumber: '17326577539',
    })
  },
  loading(){
    this.setData({show: true});
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading',
      duration:1500
    })
    setTimeout(() => {
      this.setData({show : false});
    },1500);
  },
  godel(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id
    })
  },
  onLoad: function (options) {
    // this.setData({
    //   dataz:aaa.postJson.recommend.datas
    // })
    // console.log(this.data.dataz)
    wx.request({
      url: 'http://192.168.43.213:8800/recommend',
      data: {},
      method: 'POST',
      success: (res)=>{
        this.setData({
          dataz:res.data.recommend.datas
        })
      }
    })
  }
})