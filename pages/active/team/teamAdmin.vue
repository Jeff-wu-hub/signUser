<template>
	<view class="teamAdmin-container">
		
		<view class="teamAdmin-item" v-for="(item,index) in admins" :key="index">
			<van-swipe-cell 
			:right-width="50" 
			@click="adminManage($event,index,selectComponent)"
			> 
			  <van-cell-group>
			    <van-cell title="姓名" :value="item.memberOfTeam.memberBaseMessageContent1" />
			  </van-cell-group>
			  <view class="teamAdmin-delete" slot="right">
				  <view >
					  删除
				  </view>
			  </view>
			</van-swipe-cell>
		</view>
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	import Dialog from '@/static/vant/dialog/dialog';
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex';
	export default {
		data(){
			return{
				admins:[]
			}
			
		},
		onLoad(e) {
			if(e.teamInfo != null){
				this.StringToObjectFun(e.teamInfo);
				var teamInfo = this.StringToObjectRes
				uni.request({
					url:getApp().globalData.webUrl+'/SIESign/selectAdministrator',
					method:'POST',
					header:{
						'Cookie':getApp().globalData.cookies
					},
					data:{
						teamId:teamInfo.teamId,	
					},
					success: (e) => {
						console.log("管理员获取")
						console.log(e)
						var state = e.data.code
						switch(state){
							case 22007:{
								
								this.admins = e.data.data
								console.log(this.admins)
								break
							}
							case 24007:{
								this.showToast(e.data.msg)
								break 
							}
							case 24013:{
								uni.navigateBack({
									success:()=>{
										this.showToast(e.data.msg)
									}
								})	 
								break 
							}
							case 20444:{
								this.logout()
								uni.switchTab({
									url:"../../mine/mine"
								})
								break
							}
							default:{
								console.log("未知状态码")
								console.log(e)
							}
						}
					}
				})
			}
		},
		computed:{
			...mapState(["ObjectToStringRes","StringToObjectRes"])
		},
		methods:{
			...mapMutations(['ObjectToStringFun','StringToObjectFun',"logout"]),
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1500
				})
			},
			deleteAdmin(index){
				this.admins.splice(index,1)
			},
			adminManage(event,index,selectComponent){
				console.log(event)
				 
				const  position= event.detail;
				
				
				switch(position){
					case 'cell':{
						uni.showToast({
							title:"右滑删除~~",
							icon:"none",
							duration:1000
						})
						break;
					}
					case 'right':{
						//取消管理员
						console.log("cell")
						Dialog.confirm({
						  title: '取消管理员权限',
						  message:'得有权限才可取消'
						})
						.then(()=>{
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/deleteAdministrator",
								header: {
									'Cookie':getApp().globalData.cookies
								},
								method:"POST",
								data:{
									teamId:this.admins[index].teamId,
									administratorOpenid:this.admins[index].administratorOpenid
								},
								success: (e) => {
									console.log(e)
									
									var state = e.data.code
									
									switch(state){
										case 22006:{
											this.showToast(e.data.msg)
											 this.deleteAdmin(index)
											break;
										}
										case 24007:{
											
											this.showToast(e.data.msg)
											break;
										}
										case 24012:{
											
											this.showToast(e.data.msg)
											break;
										}
										case 24013:{
											this.showToast(e.data.msg)
											
											break;
										}
										case 20444:{
											this.logout()
											uni.switchTab({
												url:"../../mine/mine",
												success: (e) => {
													this.showToast("登录过期")
												}
											})
											break;
										}
										default:{
											console.log("未知状态码")
											console.log(e)
										}
										
									}
								}
							})
						})
						.catch(()=>{
							
						})
						break;
					}
				}
			}
		}
		
		
	}
</script>

<style>
	.teamAdmin-container{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.teamAdmin-item{
		width: 100%;
		margin-top: 20rpx;
		
		
	}
	.teamAdmin-delete{
		height: 100%;
		width: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #DC0000;
		color: #FDFDFD;
	}
	 
	
</style>
