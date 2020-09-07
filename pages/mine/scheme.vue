<template>
	<view>
		<view class="ccon">
			<view class="input">
				<input type="text" value="" placeholder="输入" />
			</view>
			<view class="input">
				<input type="text" value="" placeholder="输入" />
			</view>
			<view class="input">
				<input type="text" value="" placeholder="输入" />
			</view>
			<button type="" class="btn add">
				添加策略
			</button>
		</view>
		<view class="box recommend">
			推荐策略
		</view>
		<view class="box show">
			查看策略 
		</view>
		<view class="box ">
			删除策略
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {

		background-image: url('../../static/imgs/gf/sea.jpg');
		background-size: 100% 1500rpx;
	}

	.ccon {
		display: block;
		width: 650rpx;
		height: 500rpx;
		margin: 70rpx auto;
	}

	.btn {
		width: 650rpx;
		margin-top: 80rpx;
	}

	.input {
		display: block;
		width: 550rpx;
		height: 100rpx;
		background-color: #F7F7F7;
		margin: 0 auto;
		border-radius: 50rpx;
	}

	.input input {
		display: block;
		width: 100%;
		height: 100%;
		margin-top: 40rpx;
	}

	.add {
		width: 300rpx;
		background-color: #007AFF;
		margin-top: 35rpx;
	}

	.box {
		float: left;
		width: 200rpx;
		height: 200rpx;
		background-color: red;
		margin-left: 37rpx;
		line-height: 200rpx;
		text-align: center;
		border-radius: 20rpx;
		opacity:0.6;
	}
	.recommend{
		background-color: #07C160;
	}
	.show{
		background-color: skyblue;
	}

</style>
