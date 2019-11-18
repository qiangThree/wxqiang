<<<<<<< HEAD
let app=getApp()
Page({
	data:{
		details:[],
		conList:{
			
		}
	},
	onLoad(e){
		let id=e.id
		let severTitle=app.globalData.severTitle
		wx.request({
			url:severTitle+':8800/details',
			data:{},
			method:"POST",
			success:(res)=>{
			let details=res.data.details
			
			this.setData({
				conList:details[id]
			})
			}
		})
	}
})
=======
//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
>>>>>>> six
