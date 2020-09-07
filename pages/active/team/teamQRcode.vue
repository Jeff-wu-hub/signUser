<template>
	<view id="qrcode-container">
		<view class="flex-center">
			<van-image
			  width="15rem"
			  height="15rem"
			  fit="contain"
			  :src="teamInfo.teamCodeUrl"
			/>
		</view >
		<view class="margintop20">
			<van-cell center title="团队名称" :value="teamInfo.teamName" />
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
				teamInfo:{
					 
					teamCodeUrl:'',
					teamName:''
				 
				}
			}
		},
		onLoad(e){
			console.log("[qrcode onload] :")
			 
			var obj = JSON.parse(decodeURIComponent(e.teamInfo));
			
			this.teamInfo = obj
			
			console.log(this.teamInfo)

		},
		methods:{
			test(){
				
				uni.downloadFile({
					url:this.teamInfo.teamCodeUrl,
					success:(e)=>{
						 
						uni.saveImageToPhotosAlbum({
							filePath:e.tempFilePath,
							success: () => {
								uni.showToast({
									title:"保存图片成功",
									icon:"none",
									duration:1500
								})
							},
							fail:(e)=> {
								uni.showToast({
									title:e,
									icon:"none",
									duration:3500
								})
							},
							complete: (e) => {
								uni.showToast({
									title:e, 
									icon:"none",
									duration:3500
								})
							}
						})
					},
					fail:(e)=>{
						uni.showToast({
							title:e,
							icon:"none",
							duration:3500
						})
					},
					complete: (e) => {
						uni.showToast({
							title:e, 
							icon:"none",
							duration:3500
						})
					}
				})
				
				uni.showToast({
					title:"click",
					icon:"none",
					duration:1500
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
