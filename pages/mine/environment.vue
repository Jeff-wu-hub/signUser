<template>
	<view class="ccon">
		<view class="left">
			<image src="../../static/imgs/gf/ty.png" mode=""></image>
			<view class="mt">
				当前光照
			</view>
			<view class="mt">
				94832Lux
			</view>
		</view>
		<view class="right">
			<image src="../../static/imgs/gf/wd.png" mode=""></image>
			<view class="mt">
				当前温度
			</view>
			<view class="mt">
				27.6
			</view>
		</view>
		<view class="left">
			<image src="../../static/imgs/gf/sd.png" mode=""></image>
			<view class="mt">
				当前湿度
			</view>
			<view class="mt">
				42%
			</view>
		</view>
		<view class="right">
			<image src="../../static/imgs/gf/rfdl.png" mode=""></image>
			<view class="mt">
				当前日发电量
			</view>
			<view class="mt">
				3.3kw/h
			</view>
		</view>
		<view class="left md">
			<image src="../../static/imgs/gf/dy.png" mode=""></image>
			<view class="mt">
				当前电压
			</view>
			<view class="mt ">
				24VDC
			</view>
		</view>
		<view class="right md">
			<image src="../../static/imgs/gf/zt.png" mode=""></image>
			<view class="mt ">
				当前状态
			</view>
			<view class="mt">
				正常
			</view>
		</view>
	</view>	
</template>

<script>
	
</script>

<style>
	page{
		background-image: url('../../static/imgs/gf/tq.jpg');
		background-size:100% 1500rpx;
	}
	.ccon>view{
		width: 35%;
		height: 350rpx;
		float: left;
		margin-top:80rpx;
	}
	.ccon .left{
		margin-left: 10%;
		text-align: center;
		background-color: #ffffff;
		
	}
	.ccon .right{
		margin-left: 10%;
		margin-right:10%;
		text-align: center;
		background-color: #ffffff;
	}
	
	.mt{
		margin-top:30rpx
	}
	.ccon image{
		display: block;
		width: 45%;
		height:100rpx;
		margin: 30rpx auto;
	}
	.md{
		margin-bottom: 50rpx;
	}
</style>
 