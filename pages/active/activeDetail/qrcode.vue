<template>
	<view id="qrcode-container">
		<view class="flex-center">
			<van-image
			  width="15rem"
			  height="15rem"
			  fit="contain"
			  :src="signInfo.qrCodeUrl"
			/>
		</view >
		<view class="margintop20">
			<van-cell center title="活动名称" :value="signInfo.activeName" />
			<!-- <van-cell center title="开始时间" :value="signInfo.startTime" />
			<van-cell center title="结束时间" :value="signInfo.endTime" /> -->
			<!-- <van-cell center border title="发起者" :value="signInfo.manager" /> -->
		</view>
		<view class="margintop20">
			<van-button type="primary" size="large" @click="test">保存到本地</van-button>
		</view>	
	</view>
</template>

<script>
	export default{
		data(){
			return {
				signInfo:{
					//二维码零时地址
					tempQrCodePath:'',
					//相关数据
					signId:'',
					manager:'',
					startTime:'', 
					endTime:'',
					activeName:'',  
					qrCodeUrl:'' , 
					customerAttr1:'',
					customerAttr2:'',
					customerAttr3:'',
					customerAttr4:'',
					customerAttr5:'',
					customerAttr6:''
				}
			}
		},
		onLoad(e){
			console.log("[qrcode onload] :")
			var obj = JSON.parse(decodeURIComponent(e.signInfo));
			
			this.signInfo = obj
			
			//处理签到二纬码不存在的情况
			if(obj.qrCodeUrl == undefined){
				console.log(obj.codeUrl)
				if(obj.codeUrl != undefined){

					this.signInfo.qrCodeUrl = obj.codeUrl
					 
				}
			}
			console.log(this.signInfo)

		},
		methods:{
			test(){
				uni.downloadFile({
					url:this.signInfo.qrCodeUrl,
					success:(e)=>{
						console.log(e)
						this.signInfo.qrCodeUrl = e.tempFilePath
						uni.saveImageToPhotosAlbum({
							filePath:e.tempFilePath,
							success: () => {
								uni.showToast({
									title:"保存图片成功",
									icon:"none",
									duration:1500
								})
							}
						})
					}
				})
			}
		}
		
	}
</script>

<style scoped>
	#qrcode-container{
		height: 100%;	
	}
	.flex-center{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #4CD964;
		width: 100%;
		height: 600rpx;
		justify-content: center;
	}
	.margintop20{
		margin-top: 20rpx;
	}
</style>
