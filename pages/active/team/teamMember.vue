<template>
	<view class="teamMemberContainer">
		
		<van-cell-group >
			<van-cell title="成员总数" 
			label="点击管理"
			:value="member.length"/> 					
		</van-cell-group> 
		 
		<view class="teamMember-item-container">
			
			<view  class="top20" v-for="(item,index) in member" :key="index">
				 
				  <van-cell-group >
						<van-cell :title="'成员'+(index+1)"/> 
						 
						<van-cell 
						clickable
						v-if='item.memberBaseMessageContent1' 
						:title= "teamInfo.memberBaseMessage1" 
						:value="item.memberBaseMessageContent1"
						@click="MemberManage(member[index])"
						/>
						
				  </van-cell-group>
		 
				</van-swipe-cell>
			</view>
			<van-dialog id="van-dialog" />
		</view>
	</view>
</template>

<script>
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	import Dialog from '@/static/vant/dialog/dialog';
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default{
		components: {uniCollapse,uniCollapseItem},
		data(){
			return{
				teamInfo:'',
				member:'',
				teamName:'',
				maneger:''
			}
		},
		computed:{
			...mapState(['StringToObjectRes','ObjectToStringRes'])
		},
		methods:{
			...mapMutations(["StringToObjectFun","ObjectToStringFun","logout"]),
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1500
				})
			},
			MemberManage(data){
				data.teamId =  this.teamInfo.teamId
				data.memberBaseMessage1 = this.teamInfo.memberBaseMessage1
				data.memberBaseMessage2 = this.teamInfo.memberBaseMessage2
				data.memberBaseMessage3 = this.teamInfo.memberBaseMessage3
				data.memberBaseMessage4 = this.teamInfo.memberBaseMessage4
				data.memberBaseMessage5 = this.teamInfo.memberBaseMessage5
				data.memberBaseMessage6 = this.teamInfo.memberBaseMessage6
				
				this.ObjectToStringFun(data)
				
				var objstring = this.ObjectToStringRes
				
				uni.navigateTo({
					url:'teamMemberDetail?memberInfo='+objstring
				})
			 
				console.log(data)
			},
			

		
		},
		onShow() {
			// showTeamMember
			uni.request({
				 url:getApp().globalData.webUrl+'/SIESign/showTeamMember',
				 method:'POST',
				 header:{
				 	'Cookie':getApp().globalData.cookies
				 },
				 data:{
				 	teamId:this.teamInfo.teamId
				 },
				 success: (e) => {
					 console.log("请求成功")
					 console.log(e)
					 var codeState = e.data.code 
					 switch(codeState){
						 case 22571:{
							 this.member = e.data.data
							 console.log(this.member)
							 break;
						 }
						 case 40444:{
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
							 break;
						 }
						 default:{
							 console.log('[teamMember ] load info:')
							 console.error("未知状态码")
							 console.log(e)
						 }
					 }
				 }
			})
		},
		 
		onLoad(e) {
			console.log("[teamMember ] load info :")
			
			this.StringToObjectFun(e.teamInfo)
			this.teamInfo = this.StringToObjectRes
			console.log(this.teamInfo)
			this.teamName = this.teamInfo.teamName;
			this.maneger = this.teamInfo.teamManager;
			// showTeamMember
			uni.request({
				 url:getApp().globalData.webUrl+'/SIESign/showTeamMember',
				 method:'POST',
				 header:{
				 	'Cookie':getApp().globalData.cookies
				 },
				 data:{
				 	teamId:this.teamInfo.teamId
				 },
				 success: (e) => {
					 console.log("请求成功")
					 console.log(e)
					 var codeState = e.data.code 
					 switch(codeState){
						 case 22571:{
							 this.member = e.data.data
							 console.log(this.member)
							 break;
						 }
						 case 40444:{
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
							 break;
						 }
						 default:{
							 console.log('[teamMember ] load info:')
							 console.error("未知状态码")
							 console.log(e)
						 }
					 }
				 }
			})
		}
		
	}
</script>

<style>
	.teamMemberContainer{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;	
	}
	.teamMember-item-container{
		display: flex;
		flex-direction: column;
		width: 100%; 
	}
	.top20{
		margin-top: 20rpx;
	}
	.c1{
		margin-left: 10rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.c1 image{
		border-radius: 50%;
		width: 50rpx;
		height: 50rpx;
	}
	.myTeam-delete{
		height: 100%;
		width: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #DC0000;
		color: #FDFDFD;
	}
	 
	.myTeam-edit{
		 
		height: 100%;
		width: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color:#09BB07;
		color: #FDFDFD;
		
	}
	 
</style>
