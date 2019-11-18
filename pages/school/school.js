
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: {
      "schoolAddress": ["经开一校：临沂经济开发区长安路与沃尔沃路交汇东500米路北（长安路小学对过）。", "经开二校：临沂经济开发区厦门路与沃尔沃路交汇西500米路南（一小南校区沿街）。", "八路校区：临西八路与水田路交汇东50米路北花儿朵朵教育广场二楼。"],
      "study": [
        {
          "name": "教学理念：",
          "content": "倡导：“快乐，健康，科学”的教学理念，使孩子获得优美的体态，高雅的气质，提高自信心和表现力，在快乐的学习中真正做到孩子身心的全面培养"
        },
        {
          "name": "开设课程：",
          "content": "舞蹈，少儿模特"
        },
        {
          "name": "报名条件：",
          "content": "学习进步，品质优良，学习能力强的艺术爱好者均可报名"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.school)
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
