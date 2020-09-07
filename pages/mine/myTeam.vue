<template>
	<view>
		<van-tabs :active="0" >
			
			<van-tab title="管理团队"> 
				<!-- <view class="title_box" >
					<view class="title">
						<span>{{myTeam}}</span>
					</view>
					<view class="sum">
						<view class="span">
							{{team_sum}}
						</view>
					</view>
				</view> -->
				
				<view class="myTeam-item-container">
					<view  class="top20" v-for="(item,index) in team" :key="index">
						<van-swipe-cell
						  id="swipe-cell"
						  :right-width= "60"
						  :left-width=  "60"
						  async-close 
						  @click="team_setting($event,team[index])"
						>
						  <view class="myTeam-edit" slot="left">
							  <view class="width100">编辑团队</view>
						  </view>
						  <van-cell-group>
						    <van-cell title="团队名称" :value="item.teamName" />
							<van-cell title="创建者名称" :value="item.teamManager" />
						  </van-cell-group>
						  <view class="myTeam-delete" slot="right">
							  <view class="width100">删除团队</view>
						  </view>
						</van-swipe-cell>
					</view>
				</view>
			
			</van-tab>
		  
		  
			<van-tab title="参加团队">
				<view class="myTeam-item-container">
					<view  class="top20" v-for="(item,index) in myJoinTeam" :key="index">
						 <view @click="toMyJoinTeamDetail(myJoinTeam[index])">
							 <van-cell-group >
							    <van-cell title="团队名称" :value="item.teamName" />
								<van-cell title="创建者名称" :value="item.teamManager" />
								<van-cell title="创建时间" :value="item.createTime" />
							 </van-cell-group> 
						 </view>
						</van-swipe-cell>
					</view>
				</view>
		   
			</van-tab>
		</van-tabs>
	 
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
				teamID:'',
				myTeam:'',
				team_sum:'',
				team:[],
				myJoinTeam:[]
			}
		},
		//启动就调用接口，查看我的团队
		onLoad() {
			let value = uni.getStorageSync('userInfo');
			this.myTeam = value.userNickName+'的团队'
			 uni.request({
				url:getApp().globalData.webUrl+'/SIESign/getMyTeam',
				method:'POST',
				header:{
					'Cookie':getApp().globalData.cookies
				},
				success: (res) => {
					
					console.log("[mine myTeam ] load info :")
					console.log(res)
					var state = res.data.code
					switch(state){
						case 20444:{
							this.logout()
							uni.switchTab({
								url:"./mine",
								success() {
									this.showToast("登录过期")
								}
							})
							break
						}
						case 22561:{
							this.team = res.data.data[0];
							this.myJoinTeam = res.data.data[1];
							console.log(res.data.data[0]);
							this.team_sum = this.team.length;
							break;
						}
						default:{
							console.log("错误状态码")
							console.log(e)	
							break;
						}
					}
					
				}
	    })
},	

	methods:{
		...mapMutations(['logout']),
		//对象转字符串
		 ObjToString(obj){
			var objString =  encodeURIComponent(JSON.stringify(obj))
			return objString
		},
		showToast(msg){
			uni.showToast({
				title:msg,
				duration:1500,
				icon:"none"
			})
		},
		team_setting(event,team){
			 
			 
			var position =  event.detail
			var objString = this.ObjToString(team)
			switch(position){
				case 'cell':{
					uni.navigateTo({
						url:'../active/team/teamDetail?teamInfo='+objString
					})
					break;
				}
				case 'left':{
					console.log("left");
					//updateTeam
					Dialog.confirm({
					  message: '修改团队',
					})
					  .then(() => {
					    // on confirm
						uni.redirectTo({
							url:'../active/team/createTeam?teamInfo='+objString,
							success: (e) => {
								this.showToast("修改团队属性")
							}
						})  
					  })
					  .catch(() => {
					    // on cancel
						this.showToast("取消修改")
					  });
					break;
				}
				case 'right':{
					console.log("delete");
					///SIESign/deleteTeam
					Dialog.confirm({
						title:"删除团队",
					    message: '创建者可删除，确定删除 ？',
					}).then(() => {
					   uni.request({
					   	url:getApp().globalData.webUrl+'/SIESign/deleteTeam',
					   	method:'POST',
					   	header:{
					   		'Cookie':getApp().globalData.cookies
					   	},
						data:{
							teamId:team.teamId
						},
					   	success: (e) => {
					   		console.log(e)
							var state  = e.data.code
							  
							switch(state){ 
								
								case 22531:{
									console.log("22531")
									uni.redirectTo({
										url:"./myTeam",
										success: () => {
											this.showToast("删除成功")
										}
									})
									break;
								}
								case 24531:{
									this.showToast("无删除权限")
									break;
								}
								case 24532:{
									
									uni.redirectTo({
										url:"./myTeam",
										success: () => {
											this.showToast("无此签到")
										}
									})
									break;
								}
								case 40444:{
									
									uni.switchTab({
										url:'./mine',
										success: (e) => {
											this.logout()
											this.showToast("登录过期")
										}
									})
									break;
								}
							}
							
					   		
					   	},
						fail: (e) => {
							console.error(e)
						}
					   })
					}).catch(() => {
					    // on cancel
						this.showToast("取消删除")
					  });
					;
					
							
					break
				}
	
			}
			
			
			
		},
		onClose(event) {
		    const { position, instance } = event.detail;
			console.log(event.detail)
		    switch (position) {
		      case 'left':
		      case 'cell':
		        instance.close();
		        break;
		      case 'right':
		        Dialog.confirm({
		          message: '确定删除吗？',
		        }).then(() => {
		          instance.close();
		        });
		        break;
		    }
		  },
		
		 onClick(index){
			console.log(index) 
		 },
		 
		 toMyJoinTeamDetail(data){
			 console.log(data)
			 var objString = this.ObjToString(data)
			 uni.navigateTo({
			 	url:'../active/team/teamDetail?teamInfo='+objString
			 })
		 }
		
	}



		
	}
</script>

<style>
	
	.width100{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		font-size: 32rpx;
		padding: 0 10rpx;
		
	}
	
	.top20{
		margin-top: 20rpx;
	}
	
	.myTeam-item-container{
		display: flex;
		flex-direction: column;
		width: 100%; 
	}
	
	.myTeam-edit{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		background-color: #07C160;
		color: #FDFDFD;
		width: 100%;
		height: 100%;
		
	}
	
	.myTeam-delete{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		 
		background-color: #dc0000;
		color: #FDFDFD;
		width: 100%;
		height: 100%;
	}
	
	.title_box{
		background-color: #FFFFFF;
		width: 100%;
		height: 23vh;
		border-radius: 30rpx;
		margin-top: 20rpx;
	}
	
	.title{
		text-align: center;
		padding-top: 20rpx;
		margin-left: 50%;
		transform: translate(-50%);
		font-size: 4vh;
	}
	.sum{
		
		width: 150rpx;
		height:150rpx;
		border-radius: 50%;
		margin-top: 20rpx;
		
		background-color:#BEBEBE;
		margin-left: 50%;
		transform: translate(-50%);

	}
	.span{
		padding-top: 25rpx;
		text-align: center;
		font-size: 6vh;
	}

	.team_box{
		margin-top: 30rpx;
		margin-left: 50%;
		border-radius: 30rpx;
		transform: translate(-50%);
		width: 95%;
		height: 15vh;
		background-color:#33FF99;
		padding-top:30rpx;
		
	}
	.team_title{
		font-weight: 500;
		margin-left: 30rpx;
		font-size: 4vh;
		margin-bottom: 30rpx;
	}
	.user_photo{
		float: left;
		background-color: #0A98D5;
		border-radius: 50%;
		margin-left: 20rpx;
		width: 80rpx;
		height: 80rpx;
	}
	.user_photo image{
		width: 80rpx;
		height: 80rpx;
	}
</style>
