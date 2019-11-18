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
