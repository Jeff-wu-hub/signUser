import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {
		ObjectToStringRes:"",
		StringToObjectRes:"",
		globalData:{
		    
		},
		originGlobalData:{
			cookies:"",
			webUrl:"https://www.iotexplore.top",
			userNickName:"",
			// userHeadUrl:"",没用了
			ucode:"",
			msg:"",
			data:"",
			avatarUrl:"/static/logo.png",
			city:"",
			country:"",
			gender:"",
			language:"",
			province:"",
			isLoged:"false",//false没有登录 true登录了
			versionControl:false
		},
        userInfo: {},
		dateInfo: {
			date:'',
			time:'',
			millionSecond:'',
			aDateToMillion:'',
			week:''
		}
    },  
    mutations: {  
  
		 
        logout(state) {//退出登录  
            uni.removeStorage({  
                key: 'userInfo'  ,
				success: () => {
					state.userInfo = {}  
					state.globalData={}
					//state.globalData = state.originGlobalData
					console.log("[store] logout :")
					console.log(state.globalData)
				}
            })  
        },
		//获取全局变量到state.globalData
		getStorageFormChach(state){
			try {
			    const value = uni.getStorageSync('userInfo');
			    if (value) {
					console.log("getStorageFormChach 获取本地数据成功:")
			       
					state.globalData = value
					console.info(state.globalData);
			    }else{
					 console.error("getStorageFormChach 获取本地数据失败")
					 state.globalData = state.originGlobalData
				}
			} catch (e) {
			    console.error("getStorageFormChach 获取本地数据失败")
			    state.globalData = state.originGlobalData
			}
		},
		initLogin(state){
			state.globalData = state.originGlobalData
			 uni.login({
			   provider: 'weixin',
			   success:function(e){
					console.log(e)
					state.globalData.ucode = e.code
					uni.getUserInfo({
						provider:"weixin",
							success: (e) => {
								console.log("获取用户信息成功,本地数据")
								state.globalData.userNickName = e.userInfo.nickName;
								state.globalData.avatarUrl =e.userInfo.avatarUrl;
								 
								state.globalData.city=e.userInfo.city;
								state.globalData.country=e.userInfo.country;
								state.globalData.gender=e.userInfo.gender;
								state.globalData.language=e.userInfo.language;
								state.globalData.province=e.userInfo.province;
								console.log("向服务器上报的登录数据");
								console.log(state.globalData)
							 
								uni.request({
									 url:state.originGlobalData.webUrl+'/SIESign/userLogin',
									 data:{
										uCode:state.globalData.ucode,
										nickName:state.globalData.userNickName,
										avatarUrl:state.globalData.avatarUrl,
										city:state.globalData.city,
										country:state.globalData.country,
										gender:state.globalData.gender,
										language:state.globalData.language,
										province:state.globalData.province
									 },
									 method :'POST',
									 success: (e) => {
										console.log(e)
										if(e.cookies[0]){
											state.globalData.cookies =e.cookies[0];
											console.log("存本地")
											console.log(state.globalData)
											state.globalData.msg=e.errMsg;
											 
											state.globalData.isLoged = true
											uni.setStorage({//将用户信息保存在本地 
												key: 'userInfo', 
												data: state.globalData  ,
												success: (e) => {
													console.log("保存到本地成功，更新全局变量")
													
													 console.log("更新前")
													 console.log(getApp().globalData)
													 console.log("更新后")
													 getApp().globalData = state.globalData
													 console.log(getApp().globalData)
													
												}
											})
										}else{
											
											uni.showToast({
												title:"服务器错误,请稍后重试",
												icon:"none"
											})
											
										}
										
																
									 },
									 fail: (e) => {
										console.log(e);
										uni.showToast({
											title:"服务器维护中，请稍后重试",
											icon:"none",
											duration:1500
										})
									 }
								})
							},
							fail: (e) => {
								uni.showToast({
									title:"获取用户信息失败,请重试",
									icon:"none",
									duration:1500
								})
								console.log(e)
							}
					})
	
			  }})

		 },		
		//设置全局变量
		setGlobalData(state,obj){
			var key = obj.key
			var value = obj.value
			state[key] = value
		},
		//获取当前日期和时间
		getCurrentDate(state){
			 var date = new Date();
			 var year =  date.getFullYear();
			 var month = date.getMonth() + 1;
			 var day = date.getDate();
			 var hour = date.getHours();
			 var minute = date.getMinutes();
			 var second = date.getSeconds();
			 month = month > 9 ? month : '0' + month;;
			 day = day > 9 ? day : '0' + day;
			 hour = hour > 9 ? hour : '0' + hour;
			 minute = minute > 9 ? minute : '0' + minute;
			 second = second > 9 ? second : '0' + second;
			 var time = ''+year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
			 state.dateInfo.date = time
						   
		},
		/**
		*获取当前 时间
		*/
		getCurrentTime(state){
			var date = new Date();
			 
			var hour = date.getHours();
			var minute = date.getMinutes();
			var second = date.getSeconds();
			hour = hour > 9 ? hour : '0' + hour;
			minute = minute > 9 ? minute : '0' + minute;
			second = second > 9 ? second : '0' + second;
			var time =   ''+hour+':'+minute+':'+second;
			state.dateInfo.time = time
		},
		/***
		*获取当前时间的毫秒数
		* */
		getCurrentTimeMillionSecond(state){
			var date = new Date();
			var time = date.getTime()
			state.dateInfo.millionSecond = time
		},
		/**
		 * 将一个日期转化为 毫秒数
		 * */
		getADateToMillSencond(state,date){
			 console.log("传入"+date)
			var time = new Date(date).getTime();
			console.log("传出"+time)
			state.dateInfo.aDateToMillion = time
			
		},
		/*
			将一个日期化为星期
		*/
	   getWeekFromADate(state,date){
		   
			state.dateInfo.week = new Date(date).getDay();
			  
	   },
		
		
		
		//对象转字符串
		 ObjectToStringFun(state,obj){
			var objString =  encodeURIComponent(JSON.stringify(obj))
			state.ObjectToStringRes  =  objString
		},
		StringToObjectFun(state,str){
			var obj = JSON.parse(decodeURIComponent(str));
			state.StringToObjectRes = obj
		}
		 
   
	} ,
	
})

export default store