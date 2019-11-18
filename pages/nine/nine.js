<<<<<<< HEAD
Page({
  data:{
    status:wx.getStorageSync("status")||false
  },
  onLoad(){
    wx.request({
      url:"http://192.168.43.213:8800/nine",
      method:"post",
      success:(res)=>{
        console.log(res)
        this.setData({
          nine:res.data.nine
        })
      }
    })
  },
  changeStatus(){
    var status=!this.data.status
    this.setData({
      status:status
    })
    wx.setStorageSync("status",status);
  },
  goliu(){
    wx.navigateTo({
      url: '/pages/liulist/liulist'
    });
  }
})
=======
// pages/nine/nine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
>>>>>>> six
