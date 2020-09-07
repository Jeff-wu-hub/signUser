<template>
<view>
	<swiper :indicator-dots="true"  :interval="3000" :duration="1000"  style="height: 550rpx;">
		<swiper-item>
			<view class="window_box">
				<view class="form" v-if="seen"> 
				  <view class="form_box">
				    <view class="form_title"><text>正在进行</text></view>
				    <view class="form_page"><view class="form_text">{{now_msg}}</view></view>
				  </view>
				  	<view class="time">
						<label class="text_label">开始时间：<label class="time_label">{{now_time_start}}</label></label>
						<label class="text_label">结束时间：<label class="time_label">{{now_time_end}}</label></label>	
				  	</view>
				</view>
				<view class="form" v-else>
					<label class="label">{{label}}</label>
				</view>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="window_box">
				<view class="form" v-if="end_seen">
				  <view class="form_box" style="opacity: 0.3;">
				    <view class="form_title"><text>已结束</text></view>
				    <view class="form_page"><view class="form_text">{{end_msg}}</view></view>
				  </view>
				  	<view class="time">
						<label class="text_label">开始时间：<label class="time_label">{{end_time_start}}</label></label>
						<label class="text_label">结束时间：<label class="time_label">{{end_time_end}}</label></label>	
				  	</view>
					<view class="shut_img"><image src="../../static/imgs/index/已结束.png"></image></view>
				</view>
				<view class="form" v-else>
					<label class="label">{{label}}</label>
				</view>
			</view>
		</swiper-item>
	</swiper>
		<view class="box">
			<view class="box_view" @click="scan" >
			    <image src="/static/imgs/index/scan.png" class="box_img"></image>
			    <text class="box_text">扫一扫</text>
			</view>
			<view class="box_view" @click="input">
			    <image src="/static/imgs/index/input.png" class="box_img"></image>
			    <text class="box_text">输入</text>
			</view>
		</view>
		
		<van-overlay 
				:show="show" 
				custom-style="z-index: 5;"
		>
			<view class="show" >
				<view class="input_box">
					<input 
						class="input" 
						placeholder="请输入ID码"
						type="number"
						@input="input_get"
					  ></input>
				</view>
				<view class="button_box">
					<view class="button" @click="button_cancel">取消</view>
					<view class="button" @click="button_confirm">确定</view>
				</view>
			</view>
		</van-overlay>
		
</view>

</template> 
<script>
	export default {
		
		data() {
			return{
			seen:false,
			end_seen:false,
			label:'您还没有任务哦~~',
			now_time_start:'',
			now_time_end:'',
			now_msg:'',
			end_time_start:'',
			end_time_end:'',
			end_msg:'',
			show: false,
			inputkey:'',
			scancode:'',
			login:'',
			get_data:[],
			}
			
		},
		
onPullDownRefresh(){
	this.getSignInfo();
	
	setTimeout(function(){
		uni.showToast({
			title:"刷新成功",
			icon:"none",
			duration:1000,
			success() {
				uni.stopPullDownRefresh()
			}
		})
	},800)
	
   
	
		
 
	
},
onReady() {
	
	this.getSignInfo();
},
onShow() {
	this.getSignInfo();
},
onTabItemTap(){
	this.getSignInfo();
},
onShareAppMessage() {
			 
			return {
				title: "小程序: " + title,
				path: 'pages/mine/mine',
				imageUrl:'static/xcx.jpg',
				desc:"",
				 
			}
		},


		methods: {
			getSignInfo(){
				uni.request({
					url:getApp().globalData.webUrl+'/SIESign/showParticipator',
					method:'POST',
					header:{
						'Cookie':getApp().globalData.cookies
					},
					success: (result) => {
							console.log("请求成功")
						    console.log( result )
							this.get_data = result.data.data[0]
							console.log(this.get_data)
							this.getdate();
 	
					},
					fail: (e) => {
						this.seen = false,
						this.end_seen = false
						console.log("错误信息")
						console.log( e )
					}
				})
			},
			getdate(){
				try{
					for(let i=0;i<this.get_data.length;i++){
						var old_time = new Date(this.get_data[i].endTime).getTime();
						var now_time = new Date().getTime();
						var temp = old_time-now_time;
						if(isNaN(old_time)){break;}
					else if(temp>0){
						this.seen = true;
						this.now_time_end = this.get_data[i].endTime;
						this.now_time_start = this.get_data[i].startTime;
						this.now_msg = this.get_data[i].signName;
					}
					else{
					
					this.end_time_end = this.get_data[i].endTime;
					this.end_time_start = this.get_data[i].startTime;
					this.end_msg = this.get_data[i].signName;
					this.end_seen = true;
					
					}
					}
				}catch(e){
					//TODO handle the exception
					console.error("时间处理函数，处理数据失败，在index.vue getdate()函数中 136行")
				} 
				
				
			},
			onClickShow() {
			    this.show = true;
			 },
			input_get(e){
			 this.inputkey = e.detail.value;
			},
			
			button_cancel(){//取消按钮 
				this.show = false;	   
			},
			button_confirm(){
				    
				 this.show = false;
				 uni.navigateTo({
				 	url:'/pages/index1/index1?scene='+this.inputkey
				 })
			},
			input(){//输入
			
				this.show = true;   
				 
				
			},
			scan(){//扫码
			
			    wx.scanCode({
			      onlyFromCamera: false,
			      scanType: ['barCode','qrCode','wxCode'],
			      success: (result) => {
					  uni.navigateTo({
					  	url:'/'+result.path,
					  })
					  console.log(result)
					  uni.vibrateShort({
					  	success() {
					  		uni.showToast({
					  			title:'扫描成功',
								icon:'none',
								duration:2000
					  		})
					  	}
					  })
			      },
			    })
				
				
			},
			 
			

		


	}
}
</script>
<style>
	.window_box{
			width: 100%;
			z-index: -5;
	}
	.form{ 
	  transform: translate(-50%);
	  margin-left: 50%;
	  width:700rpx;
	  margin-top: 20rpx;
	  height:530rpx;
	  border-radius: 30rpx;
	  background-color: #FFFFFF;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	.form_box{
	  width: 680rpx;
	  border-radius: 30rpx;
	  margin-top: 10rpx;
	  height: 200rpx;
	  background-color: linen;
	
	}
	.form_title{
	  margin-top: 10rpx;
	  font-size:30rpx;
	  text-align: center;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.form_page{
	  margin-left:50%;
	  transform: translate(-50%);
	  border-radius: 30rpx;
	  width:650rpx;
	  margin-top: 10rpx;
	  height:80rpx;
	  padding-top:25rpx;
	  background-color: #DEDEDE;
	}
	.form_text{
	  width: 100%;
	  text-align: center;
	  font-size: 40rpx;
	  margin-bottom: 50rpx;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.label{
		
	
		font-size: 40rpx;
		margin-top: 35%;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.time{
		margin-top: 70rpx;
		width:600rpx;
		margin-right:5%;
		display: flex;
		flex-direction: column;


	}
	.time_label{
		
		margin-top: 20rpx;
		font-size: 30rpx;

	}
	.text_label{
		margin-top: 25rpx;margin-left: 100rpx;
		font-size: 35rpx;
		font-weight: 500;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


	}
	.box{
	  transform: translate(-50%);
	  margin-left: 50%;
	  width:700rpx;
	  border-radius: 30rpx;
	  background-color: #FFFFFF;
	  margin-top: 30rpx;
	  display: flex;
	  flex-direction: row;
	}
	.box_view{
	  margin-left: 135rpx;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	
	}
	.box_img{
	    width:150rpx;
	    height:150rpx;
	}
	.box_text{
	  font-size: 35rpx;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.show{
	  background-color:#FDFDFD;
	  border-radius: 30rpx;
	  position: absolute;
	  top:30%;
	  left:50%;
	  transform: translate(-50%);
	  width:550rpx;
	  height:300rpx;
	  
	}
	.input_box{
	  width:100%;
	  margin-top:120rpx;
	}
	.input{
	  width:70%;
	  height:100%;
	  margin-left: 80rpx;
	  font-size: 20rpx;
	  border-bottom: groove;
	  border-bottom-width: 1rpx;
	  border-color: black;
	}
	.button_box{
	  overflow: hidden;
	  margin-top: 80rpx;
	  display: flex;
	  flex-flow:row;
	}
	.button{
	  text-align: center;
	  margin-left: -10rpx;
	  margin-top: 5rpx;
	  width:300rpx;
	  border-top-style: groove;
	  border-left-style: groove;
	  border-width: 1rpx;
	  border-color: #000000;
	}
	.shut_img{
		position: absolute;
		z-index: 2;
		margin-top: 180rpx;
		margin-left: 25%;
	}
	.shut_img image{
		width:300rpx;
		height:300rpx;
	}


</style>