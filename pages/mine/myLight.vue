<template>
	<view class="container">
		<view class="gfLogo">
			<image src="../../static/imgs/gf/logo.jpg" mode=""></image>
		</view>
		<view class="nav">
			<view class="li" @click="environment()">
				<image src="../../static/imgs/gf/hj.png" mode=""></image>
				<text>实时环境</text>
			</view>
			<view class="li">
				<image src="../../static/imgs/gf/qx.png" mode=""></image>
				<text>环境曲线</text>
			</view>
			<view class="li" @click="ligh()">
				<image src="../../static/imgs/gf/jd.png" mode=""></image>
				<text>节点选择</text>
			</view>
			<view class="li" @click="scheme()">
				<image src="../../static/imgs/gf/cl.png" mode=""></image> 
				<text>策略设置</text>
			</view>
			
		</view>
		<view class="ccon">
			<view class="ligh">
				<image src="../../static/imgs/gf/gz.png" mode=""></image>
					<text>当前光照</text>
					<text>94832Lux</text>
			</view>
			<view class="">
				<image src="../../static/imgs/gf/rfdl.png" mode=""></image>
				<text>当前日发电量</text>
				<text>3.3kw/h</text>
			</view>
			<view class="bottomm">
				<image src="../../static/imgs/gf/tdcl.png" mode=""></image>
				<text>当前策略</text>
				<text>策略1</text>
			</view>
			<view class="bottomm">
				<image src="../../static/imgs/gf/sb.png" mode=""></image>
				<text>当前设备</text>
				<text>3号</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {

		data() {
			return {
				userNickName: "",
				userImgUrl: "",
				text: "123456789,sadjahfasf",
				image: "1.jpg",
				number: 3
			}
		},
		methods: {
			ligh(){
				uni.navigateTo({
					url:"./light"
				})
			},
			environment(){
				uni.navigateTo({
					url:"./environment"
				})
			},
			scheme(){
				uni.navigateTo({
					url:"./scheme"
				})
			},

		},
		onLoad() {
			uni.getStorageInfo({
				success(e) {
					console.log(e)
				}
			})
			this.userNickName = getApp().globalData.userNickName
			this.userImgUrl = getApp().globalData.avatarUrl
		}

	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}

	.container {
		width: 100%;
	}

	.gfLogo {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 270rpx;
		background-color:#f8f8f8; 
		/* background: url("../../static/imgs/gf/logo.jpg"); */
	}
	.gfLogo image{
		display: block;
		width: 100%;
		height: 270rpx;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		
	}
	.nav {
		position: relative;
		width: 100%;
		height: 180rpx;
		margin-top: -30rpx;
		background-color: #F1F1F1;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		z-index: 1;
	}

	.nav .li {
		float: left;
		width: 25%;
		text-align: center;
		font-size: 25rpx;
	}
	.li image{
		display: block;
		width: 75rpx;
		height: 75rpx;
		margin: 25rpx auto;
	}
	.ccon{
		width: 100%;
		margin-top: 25rpx;
		background-color: #F5F2F0;
	}
	.ccon view{
		float: left;
		width: 42.5%;
		height: 250rpx;
		margin-top: 35rpx;
		margin-left: 5%;
		text-align: center;
		background-color: #ffffff;
		border-radius: 20rpx;
	}
	.ccon::after{
		content:'';
		display: block;
		clear: both;
	}
	.ccon  image{
		display: block;
		margin: 35rpx auto;
		width: 25%;
		height: 75rpx;
	}
	.bottomm{
		margin-bottom: 35rpx;
	}
	.ccon text{
		display: block;
		margin-top:20rpx ;
	}
	
</style>
