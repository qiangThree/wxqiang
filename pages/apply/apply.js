<<<<<<< HEAD
let app=getApp()
Page({
	data:{
		checkList:[
			'模特大赛','演员招募','舞蹈','少儿模特','钢琴','声乐','古筝','小提琴','少儿托辅'
		]
	},
	formSubmit: function (e) {
		let val=e.detail.value
	    let checkBox=e.detail.value.checkbox
		let arr=[]
		let list=[]
		checkBox.forEach(item=>{
			item.split(' ')
			arr.push(Number(item.split(' ')[1]))
		})
		arr.forEach(item=>{
			list.push(this.data.checkList[item])
		})
		wx.showModal({
			content:val.input1+','+val.input2+','+val.input3+','+list
		})
	},
	onLoad(){
		let httpTitle=app.globalData.httpTitle
		this.setData({
			httpTitle:httpTitle
		})
		let severTitle=app.globalData.severTitle
		this.setData({
			severTitle:severTitle
		})
	}
})
=======
// pages/apply/apply.js
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
