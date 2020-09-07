<template>
	<view id="activeDetail-container">
		<van-toast id="van-toast" />
		<view class="activeDetailFirstPart">
			<van-panel title="活动详情" desc="当前活动的部分数据" :status="activeStatus">
			   <view >
				   <van-cell center title="活动名称" :value="signInfo.activeName" />
				   <van-cell center clickable title="签到编号" :value="signInfo.signId" @click='cpoyToBoard' label="点击复制到剪切板"/>
				   <van-cell center title="开始时间" :value="signInfo.startTime" />
				   <van-cell center title="结束时间" :value="signInfo.endTime" />
				  <!-- <van-cell center border title="发起者" :value="signInfo.manager" /> -->
			   </view>
			 </van-panel>
		</view>
		<view class="activeDetailSecondPart">
			<van-grid clickable column-num="4">
			  <van-grid-item
			    icon="/static/imgs/active/listSignInfo.png"
			    link-type="navigateTo"
			    :url="'/pages/active/activeDetail/displaySignInfo?signId='+signInfo.signId+'&'+'activeName='+signInfo.activeName"
			    text="签到数据"
			  />
			  <van-grid-item
			    icon="/static/imgs/active/qrcode.png"
			    link-type="navigateTo"
			    :url="'/pages/active/activeDetail/qrcode?signInfo='+signInfoObjToString"
			    text="签到二维码"
			  />
			  <van-grid-item
			    icon="/static/imgs/active/edit.png"
			    link-type="navigateTo" 
			    :url="'/pages/active/singleActive?signInfo='+signInfoObjToString"
			    text="编辑活动"
			  />
			<!-- <van-grid-item
			    icon="/static/imgs/active/comment.png"
			    link-type="navigateTo"
			    url="/pages/active/activeDetail/leaveMsg"
			    text="查看留言"
			  />
			 <van-grid-item
				 
			    icon="/static/imgs/active/share1.png"
			    link-type="navigateTo"
			    text="分享活动"
			 >
		     </van-grid-item> -->
			  <van-grid-item
			    icon="/static/imgs/active/delete.png"
			    link-type="navigateTo"
			    text="删除活动"
				@click="clickHandler('delete')"
			  />
			  <van-dialog id="van-dialog" />
			</van-grid>
		</view>
		<veiw class="margintop20 center">
			<van-button plain icon="/static/imgs/active/share1.png" type="info" open-type="share">分享活动</van-button>
		</veiw>
		
		
	</view>
</template>

<script>
	import Dialog from '@/static/vant/dialog/dialog';
	import Toast from '@/static/vant/toast/toast';
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	export default{
		data(){
			return {
				activeStatus:'已结束',
				signInfo:{
					signId:'',
					manager:'',
					startTime:'', 
					endTime:'',
					activeName:'',  
					qrCodeUrl:'' , 
					customerAttr1:'',
					customerAttr2:'',
					customerAttr3:'',
					customerAttr4:'',
					customerAttr5:'',
					customerAttr6:''
				}
			}
		},
		onLoad(e){
			var obj = JSON.parse(decodeURIComponent(e.signInfo));
			console.log("[activeDeatail]: onload:")
			console.log(obj)
			this.signInfo = obj
			//兼容
			if(obj.signName != '')
			{
				this.signInfo.activeName = obj.signName
			}
			
			
			var start = this.signInfo.startTime
			var endTime = this.signInfo.endTime
			
			this.getCurrentTimeMillionSecond()
			var currentMillionSeconds = this.dateInfo.millionSecond
			 
			this.getADateToMillSencond(start)
			var startMillionSeconds = this.dateInfo.aDateToMillion
			
			this.getADateToMillSencond(endTime)
			var endMillionSeconds = this.dateInfo.aDateToMillion
			
			if(currentMillionSeconds < startMillionSeconds){
				this.activeStatus = '未开始'
			}else if(currentMillionSeconds <= endMillionSeconds){
				this.activeStatus = '进行中'
			}else {
				this.activeStatus = '已结束'
			}
		},
		computed:{
			...mapState(['dateInfo']),
			signInfoObjToString(){
				var objString =  encodeURIComponent(JSON.stringify(this.signInfo))
				return objString
			}
 	 
		},
		onShareAppMessage() {
			
			 
			let title = this.signInfo.activeName
			return {
				title: "活动名称: " + title,
				path: 'pages/index1/index1?scene='+this.signInfo.signId,
				imageUrl:this.signInfo.qrCodeUrl,
				desc:"活动说明",
				 
			}
		},
		methods:{
			...mapMutations(['logout','getCurrentTimeMillionSecond',"getADateToMillSencond"]),
			clickHandler(data){
				if(data == 'delete'){
					console.log("delete")
					Dialog.confirm({
					  context: this,
					  title: '删除活动',
					  message: '你确定要删除此次活动吗？'
					}).then(() => {
					  // on confirm
					  uni.request({
					  	url:getApp().globalData.webUrl+'/SIESign/deleteSign',
					  	header: {
					  		   'Cookie':getApp().globalData.cookies
					  	},
						method:'POST',
					  	data:{
					  		signId:this.signInfo.signId
					  	},
					  	success: (e) => {
							console.log("删除请求 服务器成功")
							console.log(e)
							var code = e.data.code
							if(code == '20220'){
								//删除本地
								uni.switchTab({
									url:"/pages/mine/mine"
								})								
								uni.showToast({
									title:"删除成功",
									icon:"none",
									duration:2000
								})
							}else if(code == '20420'){
								//请求者和发起者不一致
								console.error("请求者和发起者不一致")
								uni.showToast({
									title:"请求者和发起者不一致",
									icon:"none",
									duration:2000
								})
							}else if(code == '20421'){
								//查无此签到
								console.error("查无此签到")
								uni.showToast({
									title:"查无此签到",
									icon:"none",
									duration:2000
								})
								
							}else if(code == '20444'){
								//登录过期
								console.error("登录过期")
								this.logout()
								uni.switchTab({
									url:'/pages/mine/mine'
								})
								uni.showToast({
									title:"登录信息过期，请重新登录",
									icon:"none",
									duration:2000
								})	
							}
					   },
						fail: (e) => {
							console.error("activeDetail 删除服务器创建签到信息失败:")
							console.info(e)
						}
					  })
					   
					   
					}).catch(() => {
					  // on cancel
					});	
				}else if(data == 'share'){
					console.log("share")
	
				}
				
		
			},
			cpoyToBoard(){
				uni.setClipboardData({
					data:this.signInfo.signId,
					success: (e) => {
						// Toast('签到编号已复制到剪切板');
					}
				})
			}
		}
		
	}
</script>

<style scoped>
	 
	#activeDetail-container{
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		
	}
	.activeDetailFirstPart{
		width: 100%;
		
	}
	.activeDetailSecondPart{
		margin-top: 10rpx;
		width: 100%;
		
		background-color: #2C405A;
	}
	
	.item{
		
	}
	.van-grid-button{
		height: 100%;
		width: 100%;
		border: none;
	}
	 
	 
	.margintop20{
		margin-top: 20rpx;
	}
	.center{
		text-align: center;
	}
	
</style>
