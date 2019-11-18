let app=getApp()
Page({
  data:{
    imgList:[],
    toNext:[
      {
        imgSrc:'/images/8.png',
        title:'课程推荐'
      },
      {
        imgSrc:'/images/9.png',
        title:'学校简介'
      },
      {
        imgSrc:'/images/10.png',
        title:'师生风采'
      },
      {
        imgSrc:'/images/11.png',
        title:'9.9暑假班'
      }
    ],
	keList:[
		{
		  imgSrc:'/images/img2/1.png',
		  title:'少儿模特'
		},
		{
		  imgSrc:'/images/img2/2.png',
		  title:'舞蹈'
		},
		{
		  imgSrc:'/images/img2/3.png',
		  title:'钢琴'
		},
		{
		  imgSrc:'/images/img2/4.png',
		  title:'声乐'
		},
		{
		  imgSrc:'/images/img2/5.png',
		  title:'古筝'
		},
		{
		  imgSrc:'/images/img2/6.png',
		  title:'小提琴'
		}
	]
  },
  onLoad(e){
    let httpTitle=app.globalData.httpTitle
	let severTitle=app.globalData.severTitle
    this.setData({
    	httpTitle:httpTitle
    })
	wx.request({
		url:severTitle+':8800/index',
		data:{},
		method:"POST",
		success:(res)=>{
			let a=res.data.index
			console.log(a)
			let bannerPic=a.bannerPic
			let navList=a.navList
			let recList=a.recList
			let other=a.other
			console.log(bannerPic)
			this.setData({
				imgList:bannerPic,
				toNext:navList,
				keList:recList,
				other:other
			})
			console.log(this.data.imgList)
		}
	})
  },
  toDetail:function(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
		url:'/pages/detail/detail?id='+id
	})
  },
  toNext(e){
	  let id=e.currentTarget.dataset.id
	  if(id==0){
		  wx.switchTab({
			  url:'/pages/special/special'
		  })
	  }else if(id==3){
		  wx.navigateTo({
			  url:"/pages/nine/nine"
		  })
	  }else if(id==1){
		  wx.navigateTo({
			  url:'/pages/school/school'
		  })
	  }else{
		  wx.navigateTo({
		  	url:'/pages/teacher/teacher'
		  })
	  }
  },
  toNine(){
	  wx.navigateTo({
	  	url:"/pages/nine/nine"
	  })
  }
})