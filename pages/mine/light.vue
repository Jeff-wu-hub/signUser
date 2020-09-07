<template>
	<view>
		<web-view src="http://180.76.233.221:8080/dist/#/"></button></web-view>
	</view>
	
</template>

<script>
	export default{
		methods:{
			text(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style>
</style>
