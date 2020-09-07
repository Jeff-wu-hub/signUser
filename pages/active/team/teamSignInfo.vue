<template>
	<view>
		<view> 
			<van-divider
			contentPosition="center"
			customStyle="color: #1989fa;   font-size: 16px;"
			>
			点击查看 
			</van-divider> 
		 </view>
		<uni-calendar 
			:insert="true"
			:start-date="'2020-1-1'"
			:end-date="'2099-12-31'"
			:selected = 'signDate'
			@change="change"
			/>
		
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	export default{
		components: {
			uniCalendar
		},
		data(){
			return{
				signInfo:'',
				formatter:'',
				signDate:[
					{
						date: '2020-06-09', 
						info: '签到', 
					    data: { 
						  custom: '自定义信息', 
					      name: '自定义消息头',
					    },
				    }]
			}
		},
		onLoad(e){
			if(e.signInfo != null){
			    this.StringToObjectFun(e.signInfo)
				this.signInfo = this.StringToObjectRes
				console.log("teamSignInfo onload")
				console.log(this.signInfo)
			}

			uni.request({
				url:getApp().globalData.webUrl+'/SIESign/getSignDate',
				method:'POST',
				header:{
					'Cookie':getApp().globalData.cookies
				},
				data:{
					signId:this.signInfo.signId,
				},
				success:(e)=> {
					console.log(e)
					this.signDate = e.data.data
				}
				
			})

		},
		computed:{
			...mapState(["ObjectToStringRes","StringToObjectRes"])
		},
		methods:{
			...mapMutations(['ObjectToStringFun','StringToObjectFun',"logout"]),
		    showToast(msg){
		    	uni.showToast({
		    		title:msg,
		    		icon:"none",
		    		duration:1500
		    	})
		    },
			change(e) {
				console.log(e);
				var date =  e.fulldate
				this.signInfo.clickDate = date
				
				this.ObjectToStringFun(this.signInfo)
				var objString = this.ObjectToStringRes
				uni.navigateTo({					
					url:"./teamSignDatas?signData="+objString, 
				})
				
				
			// 	uni.request({
			// 		url:getApp().globalData.webUrl+'/SIESign/selectCycleResult',
			// 		method:'POST',
			// 		header:{
			// 			'Cookie':getApp().globalData.cookies
			// 		},
			// 		data:{
			// 			signId:this.signInfo.signId,
			// 			selectTime:date,
			// 			teamId:this.signInfo.teamId
			// 		},
			// 		success: (e) => {
			// 			console.log(e)
			// 			var state  =  e.data.code
			// 			var state = e.data.code
			// 			switch(state){
			// 				case 22009:{
								
			// 						var signData   = {}
			// 						signData.datas = e.data.data
			// 						signData.activeName  = this.signInfo.activeName
			// 						signData.signerMessage1 = this.signInfo.signerMessage1
			// 						signData.signerMessage2 = this.signInfo.signerMessage2
			// 						signData.signerMessage3 = this.signInfo.signerMessage3
			// 						signData.signerMessage4 = this.signInfo.signerMessage4
			// 						signData.signerMessage5 = this.signInfo.signerMessage5
			// 						signData.signerMessage6 = this.signInfo.signerMessage6
									
			// 						signData.clickDate = date
								 
			// 						this.ObjectToStringFun(signData)
			// 						var stringFromObj = this.ObjectToStringRes
			// 						uni.navigateTo({
										
			// 							url:"./teamSignDatas?signData="+stringFromObj,
			// 							success: () => {
			// 								this.showToast("获取成功")
			// 							}
			// 						})
								
								
								
			// 					break;
			// 				}
			// 				case 40444:{
			// 					this.logout()
			// 					uni.switchTab({
			// 						url:"../../mine/mine",
			// 						success: (e) => {
			// 							this.showToast("登录过期")
			// 						}
			// 					})
			// 					this.showToast(e.data.msg)
			// 					break;
			// 				}
							 
			// 				case 20444:{
			// 					this.logout()
			// 					uni.switchTab({
			// 						url:"../../mine/mine",
			// 						success: (e) => {
			// 							this.showToast("登录过期")
			// 						}
			// 					})
			// 					this.showToast(e.data.msg)
			// 					break;
			// 				}
			// 				default:{
			// 					console.log("错误状态码");
			// 					console.log(e)
			// 					break;
								
			// 				}
			// 			}
			// 		}
			// 	})
			
			
			}
		}
		
	}
</script>

<style>
</style>
