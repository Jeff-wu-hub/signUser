<template>
	<view class="team-detail-container">  
		
		<!-- 
		第一部分
		团队名称
		创建时间
		创建者 -->
		<view class="team-detail-firstPart">
			<van-cell-group>
			  <van-cell title="团队名称" :value="teamInfo.teamName" />
			  <van-cell title="创建时间" :value="teamInfo.createTime" />
			  <van-cell title="创建者"   :value="teamInfo.teamManager" />
			</van-cell-group>
		</view>
		
		<!--
		第二部分
		查看团队签到
		查看团队二维码
		退出团队
		团队成员管理
		-->
		 <view class="team-detail-secondPart">
			  
			<van-grid clickable column-num="5">
				
				<!-- 
				url就是调转的页面
				link-type是跳转的方式
				 -->
			 <!-- <van-grid-item
				icon="/static/imgs/active/listSignInfo.png"
				link-type="navigateTo"
				:url="'/pages/active/team/teamSignInfo?teamInfo='+getStringFromObj(teamInfo)"
				text="签到数据"
			  /> -->
			  <van-grid-item
				icon="/static/imgs/active/admin.png"
				link-type="navigateTo"
				:url="'/pages/active/team/teamAdmin?teamInfo='+getStringFromObj(teamInfo)"
				text="管理员"
			  />
			  <van-grid-item
				icon="/static/imgs/active/active.png"
				link-type="navigateTo"
				:url="'/pages/active/team/teamActivities?teamInfo='+getStringFromObj(teamInfo)"
				text="团队活动"
			  />
			  <van-grid-item
				icon="/static/imgs/active/qrcode.png"
				link-type="navigateTo"
				:url="'/pages/active/team/teamQRcode?teamInfo='+getStringFromObj(teamInfo)"
				text="二维码"
			  />
			  <van-grid-item
				icon="/static/imgs/active/member.png"
				link-type="navigateTo" 
				:url="'/pages/active/team/teamMember?teamInfo='+getStringFromObj(teamInfo)"
				text="团队成员"
			  />
			 
			  <van-grid-item
				icon="/static/imgs/active/quit.png"
				link-type="navigateTo"
				text="退出团队"
				@click="clickHandler('delete')"
			  />
			   
			</van-grid>
			  
		 </view>
		 
		
		<!-- 
		第三部分
		 
		分享团队
		发起团队活动 
		
		按钮才能分享
		-->
		<view class="team-detail-thirdPart">
			<view class="btnStyle">
				<van-button size = "large"  open-type = "share" color="linear-gradient(to right, #4bb0ff, #6149f6)"> 分享团队 </van-button>
			</view>
			<view class="btnStyle">
				<van-button size = "large"   color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="createTeamActive"> 创建活动 </van-button>
			</view>
		</view>
		
		<!-- 提示框 -->
		<van-dialog id="van-dialog" />
	</view>
</template>


<script>
	
	import Dialog from '@/static/vant/dialog/dialog';
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	export default{
		data(){
			return{
				teamInfo:''
			}
			
		},
		//分享
		onShareAppMessage() {
			 
			let title = this.teamInfo.teamName
			return {
				title: "团队名称: " + title,
				path: 'pages/active/team/joinInTeam?teamInfo='+this.getStringFromObj(this.teamInfo),
				imageUrl:this.teamInfo.teamCodeUrl,
				 
			}
		},
		computed:{
			...mapState(["ObjectToStringRes","StringToObjectRes"])
		},
		//启动时通过teamid获取相关信息
		onLoad(e) {
			console.log("[teamDetail ] load info : ")
			 
			if(e.teamInfo != null){
				this.StringToObjectFun(e.teamInfo)
				this.teamInfo = this.StringToObjectRes
				console.log(this.teamInfo)
				
			}
			 
		},
		methods:{
			...mapMutations(['ObjectToStringFun','StringToObjectFun']),
			createTeamActive(){
				uni.navigateTo({
					url:"../circleActive?teamInfo="+this.getStringFromObj(this.teamInfo)
				})
			},
			showToast(msg){
				uni.showToast({
					title:msg,
					duration:1500,
					icon:"none"
				})
			},
			clickHandler(opt){
				if(opt == 'delete'){
					console.log("delete")
					Dialog.confirm({
						title:'退出团队',
					    message: "创建者不能退出，是否退出？",
					})
					  .then(() => {
					    // on confirm
						 uni.request({
						 	url:getApp().globalData.webUrl+"/SIESign/quiteTeam",
						 	header: {
						 		'Cookie':getApp().globalData.cookies
						 	},
						 	method:"POST",
						 	data:{
						 		teamId:this.teamInfo.teamId,
		 
						 	},
							success: (e) => {
								console.log(e)
								var state = e.data.code
								switch(state){
									case 22004:{
										uni.switchTab({
											url:"../../mine/mine",
											success: (e) => {
												this.showToast("退出成功")
											}
										}) 
										break;
									}
									case 24009:{
										this.showToast(e.data.msg)
										break;
									}
									case 24010:{
										this.showToast(e.data.msg)
										break;
									}
									case 24007:{
										this.showToast(e.data.msg)
										break;
									}
									case 24008:{
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
									
								}
							}
						 })
					  })
					  .catch(() => {
					    // on cancel
						this.showToast("取消退出")
					  });
				}
			},
			
			getStringFromObj(obj){
				this.ObjectToStringFun(obj)
				return this.ObjectToStringRes
			}
			
		}
		
		
	}
</script>

<style>
	.team-detail-container{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.team-detail-firstPart{ 
		width: 100%;
	}
	.team-detail-secondPart{
		width: 100%;
		margin-top: 20rpx;
	}
	.team-detail-thirdPart{
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btnStyle{
		width: 80%;
		margin-top: 20rpx;
	}
</style>
