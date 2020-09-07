<template>
<view>
	<view class="persion_box">
		<view class="user_box">
		  <view class="user_bmg_wrap">
		    <image class="user_bg"  ></image>
		      <view class="userinfo">
		        <image :src='userphoto' class="user_head" ></image>
			  </view>
			<view class="name_text">
				<view class="signname">
					<label class="fontsizesmall">{{signname}}</label>
				</view>
				<label class="post_text">发起者 : </label><label class="post_text">{{usernickname}}</label>
			</view>
		  </view>
		</view>
	</view>
  
	<!-- 单次 -->
	<view v-if="type == 'null'">
		<view class="data_time_box">
			
				<view class="date_time">
					
					<image src="../../static/imgs/index/小旗旗.png" class="date_time_img"></image>
					<view class="date_time_text">开始时间:</view>
					<view class="date_time_text">{{date_in}}</view>
				
					
				</view>
				<view class="date_time">
					<view class="date_time_img">
					<image src="../../static/imgs/index/小旗旗.png" class="date_time_img"></image>
					</view>
					<view class="date_time_text">结束时间:</view>
					<view class="date_time_text">{{date_out}}</view>
				</view>
		 
		</view>
		
	</view>
	<!-- 多功能 -->
	<view v-else class="index1-mulifuc">
		<view> 多功能签到 </view>
	</view>
	
	<view class="button_box" v-if="showBtn">
		<button type="default" @click="gotoSign" open-type="getUserInfo">确认签到</button>
	</view>
	
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
			showBtn:true,
			isLoged:false,
			userphoto:'',//发起者头像连接
			usernickname:'',//发起者名称
			signname:'',
			date_in:'',
			date_out:'',
			signID:'',
			str:'',
			type:''//判断签到类型
 	
	}
},
	onLoad(res){
		
		console.log("[index index1 ] info onload :")
		this.signID = res.scene;
		this.request_info();
		 
		
	},
	onPullDownRefresh() {
		this.request_info();
		if(this.usernickname!=null){
			uni.stopPullDownRefresh();
		}
	},
	onReady: () => {
		
	},
	computed:{
		 
	},
	methods:{
		...mapMutations(['logout',"setGlobalData",'getStorageFormChach','initLogin']),
		 
			gotoSign(){
				
				console.log("index1.vue 小程序的数据")
				console.log(getApp().globalData)
				
				
				uni.request({
					url:getApp().globalData.webUrl+"/SIESign/judgeLogin",
					header: {
						'Cookie':getApp().globalData.cookies
					},
					method:'POST',
					success: (e) => {
						console.log("服务器")
						console.log(e)
						if(e.data){
							let object = JSON.stringify(this.str.data);
							uni.navigateTo({
								url:'signinput?data='+ object
							})
						}
						else{
							this.logout()
							uni.showToast({
								title:'登录过期，再次点击登录~',
								icon:'none',
								success: () => {
									this.initLogin()
								}
								
							})
							   
						}
					} 
					
				})
				
				 
				
			},
			request_info(){
				uni.request({
					url:getApp().globalData.webUrl+'/SIESign/getSignById',
					data:{
						signId:this.signID
					},
					method:'POST',
					
					success: (res) =>{
						console.log("[index index1 ] info :")
						
						this.str = res.data
						
						console.log(this.str)
						//是否为多功能签到
						if(this.str.data.type == "cycle"){
							console.log("[index index1 ] info : cycleSign")
							this.signname = this.str.data.signName;
							this.usernickname = this.str.data.wxUser.nickName;
							this.userphoto = this.str.data.wxUser.avatarUrl;
							this.type = 'cycle'
						}else{ 
							console.log("[index index1 ] info : singalSign")
							this.signname = this.str.data.signName;
							this.date_in = this.str.data.startTime;
							this.date_out = this.str.data.endTime;
							this.usernickname = this.str.data.wxUser.nickName;
							this.userphoto = this.str.data.wxUser.avatarUrl;
							this.type = 'null'
						}
					 	
				 
					},
					fail: (res) => {
						console.log(res)
					}
				
				})
			}
			
        }	
}
</script>

<style>
.persion_box{
	width:100%;
	height:300rpx;
}
.fontsizesmall{
	font-size: 32rpx;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	word-wrap: break-word;
	color: #010101;
}
.index1-mulifuc{
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 150rpx;
	font-size: 100rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	margin-top: 30rpx; 
	border: 1rpx solid #e2e2e2;
	font-family: Arial, Helvetica, sans-serif;
}
.data_time_box{
	width:95%;
	height:200rpx;
	margin-top: 30rpx;
	margin-left:50%;
	transform: translate(-50%);
	display: flex;
	flex-direction: column;
	background-color: #FFFFFF;
	 
	border-radius: 20rpx;
}
.date_time{
	display: flex;
	flex-direction: row;
	margin-left: 50rpx;
	margin: 25rpx;
	width: 500rpx;
	height:50rpx;
}
.date_time_img{
	
	width:50rpx;
	height:50rpx;
	margin-top: 5rpx;
}
.date_time_text{
	margin-top:2%;
	margin-left: 18rpx;
	font-weight: 300;

}
.button_box{
	width:40%;
	height:100rpx;
	margin-left:50%;
	margin-top: 30rpx;
	transform: translate(-50%);
}
.user_box{
  position: relative;
  height:25vh;
  margin-bottom: 50rpx;
}

.user_bg{
  width: 100%;
  height:25vh;
  filter: blur(5px);
  background-color: #FFFFFF;

}
.userinfo{
  position: absolute;
  top:50%;
  left:20%;
  transform: translate(-50%,-50%);
  width:200rpx;
  height:200rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.user_head{
  overflow: hidden;
  width:200rpx;
  height:200rpx;
  border-radius: 50%;
}
.name_text{ 
	position: absolute;
	top:30%;
	left:37%;
	font-size: 30rpx;
	font-weight: 600;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.post_text{
	margin-top: 10rpx;
	font-size: 28rpx;
	font-weight:20;
}
.signname{
	font-size: 50rpx;
	margin-bottom: 5rpx;
}
</style>
