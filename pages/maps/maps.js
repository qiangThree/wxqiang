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
  showMap(){
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        const latitude = 35.026674
        const longitude = 118.439751
        wx.openLocation({
          latitude,
          longitude,
          scale: 24
        })
      }
    })
  },
  onLoad: function (options) {
    // this.setData({
    //   dataz:aaa.postJson.contact.datas
    // })
    // console.log(this.data.dataz)
    wx.request({
      url: 'http://192.168.43.213:8800/contact',
      data: {},
      method: 'POST',
      success: (res)=>{
        console.log(res)
        this.setData({
          dataz:res.data.contact.datas
        })
      }
    })
  }
})