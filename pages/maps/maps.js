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
        const latitude = 35.032874
        const longitude = 118.445651
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
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
      url: 'http://192.168.32.114:8800/contact',
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
