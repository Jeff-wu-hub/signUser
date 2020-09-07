<template>
	<view class="createTeamContainer">
		
		<view v-if="version != false">
			<!-- 团队名称 -->
			<view  class="createTeam-item">
				<van-cell-group>
				  <van-field
				    :value="teamName"
				    placeholder="请输入团队名称"
					label= "团队名称"
				    :border="false"
				    @change="teamNameChange"
				  />
				</van-cell-group>
			</view>
			
			<!-- 自定义属性  6 个 -->
			<view class="createTeam-item">
				<van-cell title="自定义属性"   size="large" label="自定义成员需要填写的属性" />
				<van-cell-group>
					 
					<van-cell title="必填属性" value="姓名" />
					<view v-for="(item , index) in memberBaseMessage" :key="index">
					  <van-field
						:value="item"
						placeholder="请输入自定义属性"
						:label= "'自定义'+(index+1)"
						input-align="right" 
						@change="attrChange($event,index)"
					  />
				  </view>
				</van-cell-group>
			</view>
			
			<!-- 提交按钮 -->
			<view class="createTeam-item flex-center">
				<view class="width80">
					<van-button plain  size= "large" type="info" @click = "createTeam">{{btnText}}</van-button>
				</view>
			</view>
			
		</view>
		
		 
		<view  v-else>
			
			<van-notice-bar
			  scrollable="false"
			  text="请选择申请团队的类型，将为您申请一个团队。"
			/>
			<van-radio-group :value="radio">
			  <van-cell-group>
			    <van-cell title="班级" clickable data-name="1" :click="onClick(1)">
			      <van-radio   slot="right-icon" name="1" />
			    </van-cell>
			    <van-cell title="部门" clickable data-name="2" :click="onClick(2)">
			      <van-radio slot="right-icon" name="2" />
			    </van-cell> 
			  </van-cell-group>
			</van-radio-group>
			 
			
			<view style="margin-top: 20rpx;">
				<van-button type="primary" size="large">申请团队</van-button>
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
				radio:'1',
				version:true,
				//是否是编辑团队
				isEdit:false,
				//团队名称
				teamName:'',
				//自定义团队成员需要填的属性
				memberBaseMessage:[
					"","","",
					"",""
				],
				btnText:'创建团队',
				teamId:''
			}
			
		},
		onShow() {
			 
		},
		onLoad(e) {
			//版本控制过审
			uni.request({
				url:getApp().globalData.webUrl+"/SIESign/changeView", 
				method:"POST",
				success: (e) => {
					console.log("version controll")
					console.log(e)
					this.version = e.data 
				}
			})
			
			console.log("[createTeam ] onload info :")
			console.log(e)
			if(e.teamInfo != null){
				this.isEdit = true
				this.btnText = '修改团队'
				var obj = JSON.parse(decodeURIComponent(e.teamInfo));
				console.log(obj)
				 this.teamName = obj.teamName
				 this.teamId = obj.teamId
				 this.memberBaseMessage[0] = obj.memberBaseMessage2
				  this.memberBaseMessage[1] = obj.memberBaseMessage3
				   this.memberBaseMessage[2] = obj.memberBaseMessage4
				    this.memberBaseMessage[3] = obj.memberBaseMessage5
					 this.memberBaseMessage[4] = obj.memberBaseMessage6
					 
			}
			
		},
		methods:{
			...mapMutations(['logout']),
			onClick(data){
				if(data == 1){
					this.radio = 1;
				}else{
					this.radio = 2; 
				}
			},
			//对象转字符串
			 ObjToString(obj){
				var objString =  encodeURIComponent(JSON.stringify(obj))
				return objString
			},
			teamNameChange(e){ 
				this.teamName = e.detail
				console.log(this.teamName )
			},
			attrChange(e,index){
				 
				this.memberBaseMessage[index] = e.detail
				console.log(this.memberBaseMessage )
			},
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1000
				})
			},
			createTeam(){
				if(this.teamName == ''){
					this.showToast("团队名称不能为空")
				}else{
					if(this.isEdit){
						console.log("编辑团队")
						uni.request({
							url:getApp().globalData.webUrl+"/SIESign/updateTeam",
							header: {
								'Cookie':getApp().globalData.cookies
							},
							method:"POST",
							data:{
								teamName:this.teamName,
								teamId:this.teamId,
								memberBaseMessage1:'姓名',
								memberBaseMessage2:this.memberBaseMessage[0],
								memberBaseMessage3:this.memberBaseMessage[1],
								memberBaseMessage4:this.memberBaseMessage[2],
								memberBaseMessage5:this.memberBaseMessage[3],
								memberBaseMessage6:this.memberBaseMessage[4],
							 
							},
							success: (e) => {
								console.log("[active createTeam ] info :")
							    console.log(e)
								var stateCode = e.data.code
								if(stateCode == '22541'){
									
									console.log("[active createTeam ] info : 服务器传回：")
									console.log(e.data.data)
									console.log("[active createTeam ] info : 需要跳转页面请到active - team - createTeam.vue 112行：")
									
									var objString = this.ObjToString(e.data.data)
									uni.redirectTo({
										url:"../../mine/myTeam",
										success: () => {
											this.showToast("修改成功")
										}
										
									})
									
								}
								else if(stateCode == '20444'){
									
									this.logout()
									uni.switchTab({
										url:"/pages/mine/mine",
										success: () => {
											this.showToast("登录过期，请重新登录")
										}
									})
								}
								else if(stateCode == "24521"){
									this.showToast("服务器繁忙，请稍后重试")
								}
								else if(stateCode == "24541"){
									this.showToast("不是管理员")
								}
								else if(stateCode == "24542"){
									this.showToast("不存在团队")
								}
								
								else{
									console.error("[active createTeam ] error :")
									console.log(e)
								}
							}
								 
						})
									
					}else{
						console.log("创建团队")
						uni.request({
							url:getApp().globalData.webUrl+"/SIESign/createTeam",
							header: {
								'Cookie':getApp().globalData.cookies
							},
							method:"POST",
							data:{
								teamName:this.teamName,
								memberBaseMessage1:"姓名",
								memberBaseMessage2:this.memberBaseMessage[0],
								memberBaseMessage3:this.memberBaseMessage[1],
								memberBaseMessage4:this.memberBaseMessage[2],
								memberBaseMessage5:this.memberBaseMessage[3],
								memberBaseMessage6:this.memberBaseMessage[4],
							 
							},
							success: (e) => {
								console.log("[active createTeam ] info :")
							 
								var stateCode = e.data.code
								if(stateCode == '22521'){
									this.showToast("创建团队成功")
									console.log("[active createTeam ] info : 服务器传回：")
									console.log(e.data.data)
									console.log("[active createTeam ] info : 需要跳转页面请到active - team - createTeam.vue 112行：")
									e.data.data.isCreate = true;
									var objString = this.ObjToString(e.data.data)
									uni.redirectTo({
										url:"./joinInTeam?teamInfo="+objString,
										 
										success: () => {
											uni.showToast({
												title:"你是团队创建者，你可以加入团队一起参与团队活动，也可以不加入团队则团队活动没有你的数据",
												icon:"none",
												duration:5000
											})
										},
										fail(e) {
											console.log(e)
										}
										
										 
									})
									
								}
								else if(stateCode == '20444'){
									
									this.logout()
									uni.switchTab({
										url:"/pages/mine/mine",
										success: () => {
											this.showToast("登录过期，请重新登录")
										}
									})
								}
								else if(stateCode == "24521"){
									this.showToast("服务器繁忙，请稍后重试")
								}
								else{
									console.error("[active createTeam ] error :")
									console.log(e)
								}
							}
								 
						})
									
					}
					
				}
				
			}
			
		}
		
	}
</script>

<style>
	.createTeamContainer{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.createTeam-item{
		width: 100%;
		margin-top: 10rpx;
	}
	.flex-center{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.width80{
		width: 80%;
	}
</style>
