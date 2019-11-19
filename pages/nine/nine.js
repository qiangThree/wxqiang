Page({
  data:{
    status:false
  },
  onLoad(){
    var isTrue=wx.getStorageSync("status")||false
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
    this.setData({
      status: isTrue
    })
  },
  changeStatus(){
    var isTrue2=!this.data.status
    this.setData({
      status:isTrue2
    })
    wx.setStorageSync("status",isTrue2);
  },
  goliu(){
    wx.navigateTo({
      url: '/pages/liulist/liulist'
    });
  }
})
