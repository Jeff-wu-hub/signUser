<template>
	<view>
		<van-cell-group style="margin-top: 20rpx;" >
			<van-cell
			v-if='teamInfo.memberBaseMessage1' 
			:title= "teamInfo.memberBaseMessage1" 
			:value="teamInfo.memberBaseMessageContent1"
			/>
			<van-cell
			v-if='teamInfo.memberBaseMessage2' 
			:title= "teamInfo.memberBaseMessage2" 
			:value="teamInfo.memberBaseMessageContent2"
			/>
			<van-cell
			v-if='teamInfo.memberBaseMessage3' 
			:title= "teamInfo.memberBaseMessage3" 
			:value="teamInfo.memberBaseMessageContent3"
			/>
			<van-cell
			v-if='teamInfo.memberBaseMessage4' 
			:title= "teamInfo.memberBaseMessage4" 
			:value="teamInfo.memberBaseMessageContent4"
			/>
			<van-cell
			v-if='teamInfo.memberBaseMessage5' 
			:title= "teamInfo.memberBaseMessage5" 
			:value="teamInfo.memberBaseMessageContent5"
			/>
			<van-cell
			v-if='teamInfo.memberBaseMessage5' 
			:title= "teamInfo.memberBaseMessage5" 
			:value="teamInfo.memberBaseMessageContent5"
			/>
		 </van-cell-group>
		 <view style="margin-top: 20rpx;">
			 <van-grid  column-num="3">
			   <van-grid-item clickable icon="/static/imgs/active/admin.png" text="设为管理员" @click="operation('add')"/>
			   <van-grid-item clickable icon="/static/imgs/active/cancelAdmin.png" text="取消管理员" @click="operation('cancel')"/>
			   <van-grid-item clickable icon="/static/imgs/active/delete.png" text="踢出团队" @click="operation('delete')"/>
			 </van-grid>
		 </view>
	 <van-dialog id="van-dialog" />
	</view>
</template>

<script>
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	import Dialog from '@/static/vant/dialog/dialog';
	export default{
		data(){
			return{
				teamInfo:''
			}
		},
		computed:{
			...mapState(['ObjectToStringRes','StringToObjectRes'])
		},
		onLoad(e) {
			console.log("teamMemberDetail onload")
			if(e.memberInfo != null && e.memberInfo != undefined){
				this.StringToObjectFun(e.memberInfo)
				this.teamInfo = this.StringToObjectRes
				console.log(this.teamInfo)
			}
			
		},
		methods:{
			...mapMutations(['ObjectToStringFun','StringToObjectFun']),
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1500
				})
			},
			operation(command){
				 
				switch(command){
					case 'delete':{
						//删除成员
						Dialog.confirm({
						  title: '删除成员',
						  message:'有权限才可删除'
						})
						
						.then(()=>{
							console.log("delete")
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/deleteMember",
								header: {
									'Cookie':getApp().globalData.cookies
								},
								method:"POST",
								data:{
									teamId:this.teamInfo.teamId,
									MemberOpenid:this.teamInfo.memberOpenid
								},
								success: (e) => {
									
									console.log("删除成员")
									console.log(e)
									var state = e.data.code
									
									switch(state){
										case 22010:{
											uni.navigateBack({
												animationType:"auto",
												success: () => {
													this.showToast(e.data.msg)
												}
											}) 
											break
										}
										case 24007:{
											this.showToast(e.data.msg)
											break
										}
										case 24009:{
											this.showToast(e.data.msg)
											break
										}
										case 24013:{
											 this.showToast(e.data.msg)
											break
										}
										case 24014:{
											 this.showToast(e.data.msg)
											break
										}
										case 24015:{
											 this.showToast(e.data.msg)
											break
										}
											
										case 40444:{
											this.logout()
											uni.switchTab({
												url:"../../mine/mine",
												success: () => {
													this.showToast(e.data.msg)
												}
											})
											break
										}
										default:{
											console.log("未知状态码")
											console.log(e)
											break
										}
										
									}
								}
							})
						 
						 
						})
						.catch(()=>{
							this.showToast("取消删除")
						})
						
						console.log("right")
						break
					}
					case 'add':{
						//设置为管理员
						 console.log("add")
						 Dialog.confirm({
						   title: '设置管理员',
						   message:'有权限才可设置'
						 })
						   .then(() => {
						     // on confirm
							
						 	   uni.request({
						 	   	url:getApp().globalData.webUrl+"/SIESign/insertAdministrator",
						 	   	header: {
						 	   		'Cookie':getApp().globalData.cookies
						 	   	},
						 	   	method:"POST",
						 	   	data:{
						 	   		teamId:this.teamInfo.teamId,
						 	   		administratorOpenid:this.teamInfo.memberOpenid
						 	   	},
						 	   	success: (e) => {
						 	   		console.log("teamMember request:")
						 	   		console.log(e)
						 	   		var state = e.data.code
						 	   		switch(state){
						 	   			case 22005:{
						 	   				this.showToast(e.data.msg)
											break;
						 	   			}
						 	   			case 24007:{
						 	   				this.showToast(e.data.msg)
											break;
						 	   			}
						 	   			case 24011:{
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
						 	   				this.showToast(e.data.msg)
											break;
						 	   			}
						 	   			default:{
						 	   				console.log("错误状态码");
						 	   				console.log(e)
											break;
						 	   				
						 	   			}
						 	   		}
						 	   	}
						 	   })
						 	   
						   })
						   .catch(() => {
						     // on cancel
						 	this.showToast("取消设置")
						   });
						  
						break
					}
					case 'cancel':{
						//取消管理员
						 
						Dialog.confirm({
						  title: '取消管理员权限',
						  message:'有权限才可取消'
						})
						.then(()=>{
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/deleteAdministrator",
								header: {
									'Cookie':getApp().globalData.cookies
								},
								method:"POST",
								data:{
									teamId:this.teamInfo.teamId,
									administratorOpenid:this.teamInfo.memberOpenid
								},
								success: (e) => {
									console.log(e)
									
									var state = e.data.code
									
									switch(state){
										case 22006:{
											this.showToast(e.data.msg)
											
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
							this.showToast("取消设置")
						})
						break
					}
				}
			}
			
			
		}
		
	}
	
	
</script>

<style>
</style>
