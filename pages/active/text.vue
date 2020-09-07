<template>
	<view>
		<view v-for="(item,index) in signInfoArray" :key="index">
			<view>{{item.signId}}</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				signInfoArray:[]
			}
		},
		onLoad:function(){
			uni.getStorage({
				key:"launchedActive",
				success:(e)=>{
					console.log(e)
					this.signInfoArray = e.data
				}
			})
		}
		
	}
</script>

<style>
</style>
