<template>
	<view class="joinInTeamContainer"> 
	
 
		<view class="joinInTeam-firstPart">
			<van-cell-group>
			  <van-cell title="团队名称" :value="teamInfo.teamName" />
			  <van-cell title="创建者"   :value="teamInfo.teamManager" />
			</van-cell-group>
		</view>
		
		<view class="joinInTeam-secondPart">
			<van-cell-group>
				<view v-for="(item,index) in inputAttr" :key="index">
				    <van-field
				      :value="resultAttr[index]"
				      :label="item"
				      :placeholder="'请输入'+item"
				      input-align="right"
					  @change = "textChange($event,index)" 
				    />
				</view>
			</van-cell-group>
			
		</view>
		
		<view class="joinInTeam-thirdPart">
			<view class="width80">
				<van-button open-type="getUserInfo" size = "large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click = "joinTeam">
				  加入团队
				</van-button>
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
				showText:false,
				teamInfo:'' ,
				inputAttr:[],
				resultAttr:[]
			}
			
		},
		computed:{
			...mapState(['StringToObjectRes','ObjectToStringRes'])
		},
		onLoad(e) { 
			// 加载就获取团队需要填写的信息
			console.log("joinInteam onload :info ")
			console.log(e)
			var teamId = ''
			if(e.teamInfo != null){
				this.StringToObjectFun(e.teamInfo)
				this.teamInfo = this.StringToObjectRes
				teamId = this.teamInfo.teamId
				console.log(this.teamInfo)
			}
			if(e.teamId != null){
				teamId = e.teamId
			}
			//不管什么方式，这里都得获取到teamid
			console.log("团队id:"+teamId)
			uni.request({
				url:getApp().globalData.webUrl+"/SIESign/getTeamById",
				header: {
					'Cookie':getApp().globalData.cookies
				},
				method:"POST",
				data:{
					teamId:teamId
				},
				success: (e) => {
					 
					console.log(e)
					var state  = e.data.code
					
					switch(state){
						
						case 22551:{
							console.log("获取团队数据成功")
							 this.teamInfo = e.data.data
							 
							 if(this.teamInfo.memberBaseMessage1 != ''){
								 this.inputAttr.push(this.teamInfo.memberBaseMessage1)
							 }
							 if(this.teamInfo.memberBaseMessage2 != ''){
								 this.inputAttr.push(this.teamInfo.memberBaseMessage2)
							 }
							 if(this.teamInfo.memberBaseMessage3 != ''){
							 	 this.inputAttr.push(this.teamInfo.memberBaseMessage3)							 
							 }
							 if(this.teamInfo.memberBaseMessage4 != ''){
							 	 this.inputAttr.push(this.teamInfo.memberBaseMessage4)							 
							 }
							 if(this.teamInfo.memberBaseMessage5 != ''){
							 	 this.inputAttr.push(this.teamInfo.memberBaseMessage5)							 
							 }
							 if(this.teamInfo.memberBaseMessage6 != ''){
							 	 this.inputAttr.push(this.teamInfo.memberBaseMessage6)							 
							 }
							 
							 console.log(this.teamInfo)
							 console.log(this.inputAttr)
							break;
						}
						 
						case 24532:{
							
							uni.switchTab({
								url:"../../mine/mine",
								success: () => {
									this.showToast("查无此团队")
								}
							}) 
							break;
						}
						case 40444:{
							
							uni.switchTab({
								url:'../../mine/mine',
								success: (e) => {
									this.logout()
									this.showToast("登录过期")
								}
							})
							
							break;
						}
					}
				}
			 
			})
		},
		methods:{
			...mapMutations(['StringToObjectFun','ObjectToStringFun','logout','initLogin']),
			textChange(e,index){
				this.resultAttr[index] = e.detail
			},
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1500
				})
			},
			joinTeam(){
				var len = this.inputAttr.length
				var flag = true;
				for (var i = 0; i < len ; i++ ){
					if(!this.resultAttr[i]){
						flag  = false;
					}
				}
				if(flag){
					uni.request({
						url:getApp().globalData.webUrl+'/SIESign/joinTeam',
						method:'POST',
						header:{
							'Cookie':getApp().globalData.cookies
						},
						data:{
							teamId:this.teamInfo.teamId,
							memberBaseMessageContent1:this.resultAttr[0],
							memberBaseMessageContent2:this.resultAttr[1],
							memberBaseMessageContent3:this.resultAttr[2],
							memberBaseMessageContent4:this.resultAttr[3],
							memberBaseMessageContent5:this.resultAttr[4],
							memberBaseMessageContent6:this.resultAttr[5],
							
						},
						success: (e) => {
							console.log("加入团队")
							console.log(e)
							var state = e.data.code
							switch(state){
								case 22003:{
									this.ObjectToStringFun(this.teamInfo)
									var teamInfo = this.ObjectToStringRes
									uni.redirectTo({
										url:"./teamDetail?teamInfo="+teamInfo,
										success: () => {
											this.showToast("加入团队成功")
										} 
									})
									break;
								} 
								case 20444:{
									// this.logout()
									
									// uni.switchTab({
									// 	url:"../../mine/mine",
									// 	success: () => {
									// 		this.showToast("登录过期")
									// 	}
									// })
									this.logout()
									uni.showToast({
										title:'登录过期，再次点击登录~',
										icon:'none',
										success: () => {
											this.initLogin()
										}
										
									})
									break;
								}
								case 24007:{
									this.showToast("不存在该团体")
									break;
								}
								case 24008:{
									this.ObjectToStringFun(this.teamInfo)
									var teamInfo = this.ObjectToStringRes
									uni.redirectTo({
										url:"./teamDetail?teamInfo="+teamInfo,
										success: () => {
											this.showToast("已加入团队")
										}
									})
									 
									break;
								}
								
							}
						}
					})
				}else{
					this.showToast("每一项都需要输入~")
					console.log("未输入完整")
				}
				
			}
		}
		
		
		
	}
	
</script>

<style>
	.width80{
		width: 80%;
	}
	
	.joinInTeamContainer{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.joinInTeam-firstPart{
		width: 100%;
	}
	.joinInTeam-secondPart{
		
		margin-top: 20rpx;
		width: 100%;
	}
	.joinInTeam-thirdPart{
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
