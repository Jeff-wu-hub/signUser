<template>
	<view class="teamActivitiesContainer">
		<view class="teamActiveItem" v-for="(item,index) in teamActivites" :key="index">
			<view @click="toShowDetail(index)">
				<van-cell-group>
				  <van-cell title="活动名称" :value="item.signName" />
				  <van-cell title="创建者"   :value="item.manager" />
				</van-cell-group>
			</view>
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
				teamInfo:'',
				teamActivites:[]
			}
		},
		onLoad(e){
			if(e.teamInfo != null){
				console.log("teamActivities info:")
				
				this.StringToObjectFun(e.teamInfo)
				this.teamInfo =  this.StringToObjectRes
				
				console.log(this.teamInfo)
				
				uni.request({
					url:getApp().globalData.webUrl+'/SIESign/getTeamSignByTeamId',
					method:'POST',
					header:{
						'Cookie':getApp().globalData.cookies
					},
					data:{
						teamId:this.teamInfo.teamId,	
					},
					success: (e) => {
						console.log("发起请求成功")
						console.log(e)
						var state =  e.data.code
						switch(state){
							case 22581:{
								this.teamActivites = e.data.data
								break;
							}
							case 24532:{
								uni.redirectTo({
									url:"../../mine/myTeam" 
								})
							}
							case 20444:{
								this.logout()
								uni.switchTab({
									url:"../../mine/mine",
									success: (e) => {
										uni.showToast({
											title: '登录过期',
											icon:"none",
											duration:1500
										});
									}
								})
							}
							default:{
								console.log("未知状态码")
							}
						}
					},
					fail: (e) => {
						console.log("服务器请求失败")
						console.error(e)
					}
				})
				
			}		
		},
		computed:{
			...mapState(['ObjectToStringRes','StringToObjectRes'])
		},
		methods:{
			...mapMutations(['ObjectToStringFun','StringToObjectFun','logout']),
			toShowDetail(index){
				uni.navigateTo({
					url:"../circleActiveDisplay?signInfo="+this.getStringFromObj(this.teamActivites[index])
				})
			},
			getStringFromObj(obj){
				this.ObjectToStringFun(obj)
				return this.ObjectToStringRes
			}
			
		}
	}
</script>

<style>
	.teamActivitiesContainer{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.teamActiveItem{
		margin-top: 10rpx;
		width: 100%;
	}
</style>
