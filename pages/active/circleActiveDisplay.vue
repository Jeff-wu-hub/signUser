<template>
	<view id="activeDetail-container">
		<van-toast id="van-toast" />
		<view class="activeDetailFirstPart">
			<van-panel title="活动详情" desc="当前活动的部分数据" :status="activeStatus">
				
			  
			  
			   <view >
				   <van-cell center title="活动名称" :value="signInfo.activeName" />
				   <van-cell center clickable title="签到编号" :value="signInfo.signId" @click='cpoyToBoard' label="点击复制到剪切板"/>
					
					
				    <!-- 时间段处理 -->
					<van-collapse :value="isShowTimeSeg" @change="timeDisplayChange">
					  <van-collapse-item title="时间段" name="1">
					    <van-cell center title="开始时间段1" :value="signInfo.startTime1" />
					    <van-cell center title="结束时间段1" :value="signInfo.endTime1" />
					    <view v-if="signInfo.startTime2 != '' && signInfo.startTime2 != null">
						   <van-cell center title="开始时间段2" :value="signInfo.startTime2" />
						   <van-cell center title="结束时间段2" :value="signInfo.endTime2" />
					    </view>
					    <view v-if="signInfo.startTime3 != '' && signInfo.startTime3 != null">
							<van-cell center title="开始时间段3" :value="signInfo.startTime3" />
							<van-cell center title="结束时间段3" :value="signInfo.endTime3" />		   
					    </view>
					  </van-collapse-item>	  
					</van-collapse>
				  
				  
				  
				   
				  <!-- <van-cell center border title="发起者" :value="signInfo.manager" /> -->
			   </view>
			 </van-panel>
		</view>
		<view class="activeDetailSecondPart">
			<van-grid clickable column-num="4">
			  <van-grid-item
			    icon="/static/imgs/active/listSignInfo.png"
			    link-type="navigateTo"
			    :url="'/pages/active/team/teamSignInfo?signInfo='+signInfoObjToString"
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
			    :url="'/pages/active/circleActive?teamInfo='+signInfoObjToString"
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
		<veiw class="margintop20 center width100">
			<view class="width80">
				<van-button size="large" plain icon="/static/imgs/active/share1.png" type="info" open-type="share">分享活动</van-button>
			</view>
			<view class="width80 margintop20">
				<van-button type="info" size="large" plain @click = "toSign">签    到</van-button>
			</view>	
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
				isShowTimeSeg:[''],
				activeStatus:'已结束',
				signInfo:{
				
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
			
			//时间段处理
			/*
				首先判断时间段是否为空
				不为空用当前时间与时间段的结束时间先比对
				为空比对前一个时间段
				
			*/
		   // 获取当前时间的 年月日
		   this.getCurrentDate();
		   var currentDate = this.dateInfo.date
		   var prefixTime = currentDate.split(' ')[0] + ' ';
		    
		   
		   if(this.signInfo.endTime3 != '' && this.signInfo.endTime3 != null){
			   var end =  this.signInfo.endTime3
			   var start = this.signInfo.startTime3
			   var status = this.activeStatusHandler(prefixTime + start,prefixTime + end)
			   if(status == 'notStart'){
				   //有时间段3必有时间段二
				   // 与时间段二的结束时间做对比
				   var status1 =  this.activeStatusHandler(prefixTime + this.signInfo.startTime2,prefixTime + this.signInfo.endTime2) 
				    if(status1 == 'notStart'){
						//有时间段2必有时间段1
						// 与时间段1的结束时间做对比
						 var status2 =  this.activeStatusHandler(prefixTime + this.signInfo.startTime1,prefixTime + this.signInfo.endTime1) 
						if(status2 == 'notStart'){
							this.activeStatus = "时间段1-未开始"
						}
						if(status2 == 'doing'){
							this.activeStatus = "时间段1-进行中"			   
						}
						if(status2 == 'end'){
							this.activeStatus = "时间段2-未开始"			   
						}
					}
			        if(status1 == 'doing'){
			        	this.activeStatus = "时间段2-进行中"				   
			        }
			        if(status1 == 'end'){
			        	this.activeStatus = "时间段3-未开始"				   
			        }
			   }
			   
			   if(status == 'doing'){
				   this.activeStatus = "时间段3-进行中"		
			   }
			   if(status == 'end'){
				    this.activeStatus = "时间段3-已结束"	
			   }
		   }else{
			   //时间段3 为空
			   //判断时间段2
			   if(this.signInfo.endTime2 != '' && this.signInfo.endTime2 != null){
				   var status1 =  this.activeStatusHandler(prefixTime + this.signInfo.startTime2,prefixTime + this.signInfo.endTime2)
				    if(status1 == 'notStart'){
						//有时间段2必有时间段1
						// 与时间段1的结束时间做对比
						 var status2 =  this.activeStatusHandler(prefixTime + this.signInfo.startTime1,prefixTime + this.signInfo.endTime1) 
						if(status2 == 'notStart'){
							this.activeStatus = "时间段1-未开始"
						}
						if(status2 == 'doing'){
							this.activeStatus = "时间段1-进行中"			   
						}
						if(status2 == 'end'){
							this.activeStatus = "时间段2-未开始"			   
						}
					}
				    if(status1 == 'doing'){
				    	this.activeStatus = "时间段2-进行中"				   
				    }
				    if(status1 == 'end'){
				    	this.activeStatus = "时间段2-已结束"				   
				    }
				   
			   }else{
				   //只有时间段1
				   var status2 =  this.activeStatusHandler(prefixTime + this.signInfo.startTime1,prefixTime + this.signInfo.endTime1)
				   if(status2 == 'notStart'){
				   	this.activeStatus = "时间段1-未开始"
				   }
				   if(status2 == 'doing'){
				   	this.activeStatus = "时间段1-进行中"			   
				   }
				   if(status2 == 'end'){
				   	this.activeStatus = "时间段1-已结束"			   
				   }
			   }
			   
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
				imageUrl:this.signInfo.codeUrl,
				desc:"活动说明",
				 
			}
		},
		methods:{
			...mapMutations(['logout','getCurrentDate','getCurrentTimeMillionSecond',"getADateToMillSencond"]),
			timeDisplayChange(e){
				console.log(e)
				this.isShowTimeSeg = e.detail
			},
			
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
								uni.switchTab({
									url:"/pages/mine/mine",
									success: (e) => {
										uni.showToast({
											title:"删除成功",
											icon:"none",
											duration:2000
										})
									}
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
								
							}else if(code == '24531'){
								//查无此签到
								 
								uni.showToast({
									title:"非管理员",
									icon:"none",
									duration:2000
								})
								
							}
							
							
							
							else if(code == '20444'){
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
			} ,
			toSign(){
				uni.navigateTo({
					url:"../index1/index1?scene="+this.signInfo.signId,
					success: (e) => {
						console.log("跳转成功")
					}
				})
			},
			
			
			
			activeStatusHandler( start,endTime){
				this.getCurrentTimeMillionSecond()
				var currentMillionSeconds = this.dateInfo.millionSecond
				 
				this.getADateToMillSencond(start)
				var startMillionSeconds = this.dateInfo.aDateToMillion
				
				this.getADateToMillSencond(endTime)
				var endMillionSeconds = this.dateInfo.aDateToMillion
				
				if(currentMillionSeconds < startMillionSeconds){
					 
					return "notStart"
				}else if(currentMillionSeconds <= endMillionSeconds){
					 
					return "doing"
				}else {
					 
					return "end"
				}
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
	.width100{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.width80{
		width: 80%;
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
