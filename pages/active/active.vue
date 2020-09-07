<template>
	<view id="active-container">
		<view class="a-item" @click="clickHandler(1)">
			<view class="title">申请单次签到</view>
			<view class="desc">单次活动,如:讲座丶会议</view>
		</view>

		<!-- <view class="a-item" @click="clickHandler(2)">
			<view class="title">查看活动</view>
			<view class="desc">查看最近一次创建签到的活动的数据</view>
		</view> -->
		<view class="a-item" @click="clickHandler(4)">
			<view class="title">申请团队</view>
			<view class="desc">申请一个团队</view>
		</view>
		<!-- <view class="a-item" @click="clickHandler(3)">
			<view class="title">多功能签到</view>
			<view class="desc">可以获取地理位置等</view>
		</view> -->
	
	</view>
</template>

<script>
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex';
	export default{
		data(){
			return{
				version:false
			}
		},
		computed:{
			...mapState(['globalData'])
		},
		
		methods:{
			 
			clickHandler(data){
				if(data == 1){
					console.log("1")
					uni.request({
						url:getApp().globalData.webUrl+"/SIESign/judgeLogin",
						header: {
							'Cookie':getApp().globalData.cookies
						},
						method:'POST',
						success: (e) => {
							console.log(e)
							var isLoged = e.data
							if(isLoged){
								uni.navigateTo({
									url:"./singleActive"
								})
							}
							else{
								uni.showToast({
									title: '请登录后进行操作',
									icon:'none'
								});
							}
						}
						
					})
					
					
					
					 
					// if(this.globalData.isLoged != false && this.globalData.isLoged != undefined){

					// }else{
					
					// }
					
				}else if(data ==2){
					console.log("2")

					uni.getStorage({
						key:"launchedActive",
						success:(e)=>{
							var signInfo ={}
							console.log(e);
							console.log(e.data[0])
							signInfo=e.data[0]
							if(signInfo.signId != '' ){
								var objString =  encodeURIComponent(JSON.stringify(signInfo))
								uni.navigateTo({
									url:"./activeDetail?signInfo="+objString
								})
							}else{
								uni.showToast({
									title:"暂时没有创建任何签到",
									icon:"none",
									duration:1000
								})
							}
							
						}
					})
					
				}else if(data ==3){
				
					console.log("3")
					uni.navigateTo({
						url:"./circleActive"
					})
				 
				
				}else if(data == 4 ){
					console.log("4")
					uni.request({
						url:getApp().globalData.webUrl+"/SIESign/judgeLogin",
						header: {
							'Cookie':getApp().globalData.cookies
						},
						method:'POST',
						success: (e) => {
							console.log(e)
							var isLoged = e.data
							if(isLoged){
								uni.navigateTo({
									url:"./team/createTeam"
								})
							}
							else{
								uni.showToast({
									title: '请登录后进行操作',
									icon:'none'
								});
							}
						}
						
					})
					
					// if(this.globalData.isLoged != false && this.globalData.isLoged != undefined){
						 
					// }else{
					// 	uni.showToast({
					// 		title: '请登录后进行操作',
					// 		icon:'none'
					// 	});
					// }
					
				}
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	#active-container{
		background-color: #e1e1e1;
		height: 1000rpx;
		width: 100%;
		display: flex;	
		flex-direction: column;
		align-items: center;
	}
	.a-item{
		background-color: #F8F8F8;
		display: flex;
		flex-direction: column;
		
		width: 90%;
		margin-top: 20rpx;
		height: 200rpx;
		border: 1rpx solid none;
		box-shadow:    0px -10px 0px 0px rgba(0,0,0,0),   /*上边阴影  透明*/
		
		                -10px 0px 0px 0px rgba(0,0,0,0),   /*左边阴影  透明*/
		                
		                10px 0px 0px 0px rgba(0,0,0,0),    /*右边阴影  透明*/
		                
		                0px 10px 30px 0px rgba(0,0,0,0.1);    /*下边阴影 */
		
		border-radius: 10rpx;
		.title{
			height: 100rpx;
			font-size: 48rpx;
			line-height: 100rpx;
			margin-left: 20rpx;
		}
		.desc{
			height: 100rpx;
			font-size: 32rpx;
			line-height: 100rpx;
			margin-left: 20rpx;
			color: #C0C0C0;
		}
	}
	
</style>
