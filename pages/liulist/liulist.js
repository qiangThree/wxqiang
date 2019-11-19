// pages/liuList/liulist.js
Page({
  data: {
    isTrue:false,
    textVal:"",
    liulist:[]
  },
  onLoad: function (options) {
    var arrlist = wx.getStorageSync("list")||[]
    this.setData({
      liulist:arrlist
    })
  },
  change(e){
    console.log(e.detail.value)
    let val=e.detail.value
    if(val){
      this.setData({
        isTrue:true,
        textVal:val
      })
    }else{
      this.setData({
        isTrue:false,
        textVal:""
      })
    }
  },
  liuyan(){
    if(this.data.isTrue){
      wx.showToast({
        title: '留言成功',
        icon: 'success',
        duration: 1500
      })
      var one=this.data.textVal
      var list=this.data.liulist
      list.push(one)
      wx.setStorageSync("list",list)
      this.setData({
        isTrue:false,
        textVal:"",
        liulist:list
      })
    }
  },
  delete(e){
    var _index=e.currentTarget.dataset.index
    var list=this.data.liulist
    console.log(_index)
    wx.showModal({
      title: '提示信息',
      content: '确定删除该留言吗',
      success:(res)=>{
        if (res.confirm) {
          list.splice(_index,1)
          wx.setStorageSync("list",list)
          this.setData({
            liulist:list
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})