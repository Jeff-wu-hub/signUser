<template>
	<view>
		<view class="teamSignDatasText">
			<view style="font-size: 60rpx;padding: 5rpx 0;">
				{{signData.clickDate}}
			</view>
		</view>
		<view style="margin-top: 20rpx;">
			<van-cell-group>
			  <van-cell title="活动名称" :value="signData.activeName" />
			  <van-cell clickable title="数据导出" value="点击下载" @click="downloadDatas"/>
			</van-cell-group>
		</view>
		
		<view style="margin-top: 20rpx;">
			<van-cell-group>
				<view v-if="timeSeg1 != null">
					<van-cell clickable title="时间段1数据" value="点击查看" @click="queryData(timeSeg1)"/>
				</view>
				
				<view v-if="timeSeg2 != null">
					<van-cell clickable title="时间段2数据" value="点击查看" @click="queryData(timeSeg2)"/>
				</view>
				
				<view v-if="timeSeg3 != null">
					<van-cell clickable title="时间段3数据" value="点击查看" @click="queryData(timeSeg3)"/>
				</view>

			</van-cell-group>
		</view>
		
		<!-- <van-tabs :active="0"  >
		  <van-tab title="已签到">
			  <van-cell title = "已签到人数" :value="activeDatas[0].length"></van-cell>
			  <view v-for="(item,index) in activeDatas[0]" :key = "index">
				  <view class="teamSignData-item-style"> 
					  <van-cell-group> 
							<van-cell v-if='signData.signerMessage1' :title= "signData.signerMessage1" :value="item.signerMessage1Content" />
							<van-cell v-if='signData.signerMessage2' :title= "signData.signerMessage2" :value="item.signerMessage2Content" />
							<van-cell v-if='signData.signerMessage3' :title= "signData.signerMessage3" :value="item.signerMessage3Content" />
							<van-cell v-if='signData.signerMessage4' :title= "signData.signerMessage4" :value="item.signerMessage4Content" />
							<van-cell v-if='signData.signerMessage5' :title= "signData.signerMessage5" :value="item.signerMessage5Content" />
							<van-cell v-if='signData.signerMessage6' :title= "signData.signerMessage6" :value="item.signerMessage6Content" />
					  </van-cell-group>
				  </view>
			  </view>
	
		  </van-tab>
		 
		  <van-tab title="未签到">
			 <van-cell title = "未签到人数" :value="activeDatas[1].length"></van-cell>
			 <view v-for="(item,index) in activeDatas[1]" :key = "index">
				  <view class="teamSignData-item-style"> 
					  <van-cell-group> 
							<van-cell v-if='signData.signerMessage1' :title= "signData.signerMessage1" :value="item.memberBaseMessageContent1" />
							<van-cell v-if='signData.signerMessage2' :title= "signData.signerMessage2" :value="item.memberBaseMessageContent2" />
							<van-cell v-if='signData.signerMessage3' :title= "signData.signerMessage3" :value="item.memberBaseMessageContent3" />
							<van-cell v-if='signData.signerMessage4' :title= "signData.signerMessage4" :value="item.memberBaseMessageContent4" />
							<van-cell v-if='signData.signerMessage5' :title= "signData.signerMessage5" :value="item.memberBaseMessageContent5" />
							<van-cell v-if='signData.signerMessage6' :title= "signData.signerMessage6" :value="item.memberBaseMessageContent6" />
					  </van-cell-group>
				  </view>
			 </view> 
			
		  </van-tab>
		</van-tabs> -->
		 
		<!-- <view class="flow-button"   >
			<van-image
			  width="20"
			  height="20"
			  src="/static/imgs/active/toTop.png"
			  @click="toTop"
			/>
		</view> -->
		
	</view>
</template>

<script>
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex';
	export default {
		data(){
			return{
				timeSeg1:null,
				timeSeg2:null,
				timeSeg3:null,
				downloadData:'',
				signData:{
					
					
				},
				//存放签到数据，数组一已签到，数组二未签到
				activeDatas:[]
			}
		},
		computed:{
			...mapState(['StringToObjectRes','ObjectToStringRes','dateInfo'])
		},
		 
		onLoad(e) {
			
			this.StringToObjectFun(e.signData)
			this.signData = this.StringToObjectRes
			 
			console.log("teamSignDatas onload")
			console.log(this.signData)
			this.downloadData = this.signData.clickDate
			
			var date = this.signData.clickDate
			 
			if(this.signData.startTime1 != null && this.signData.endTime1 != null){
				 this.timeSeg1 =  date+' '+this.signData.startTime1 + "&" +date+' '+ this.signData.endTime1
			}
			
			if(this.signData.startTime2 != null && this.signData.endTime2 != null){
				 this.timeSeg2 =  date+' '+this.signData.startTime2 + "&" +date+' '+ this.signData.endTime2
			}
			
			if(this.signData.startTime3 != null && this.signData.endTime3 != null){
				 this.timeSeg3 =  date+' '+this.signData.startTime3 + "&" +date+' '+ this.signData.endTime3
			}
			
			console.log(this.timeSeg3)
			console.log(this.timeSeg2)
			console.log(this.timeSeg1)
		 
			
			 
			
		},
		methods:{
			...mapMutations(['StringToObjectFun','ObjectToStringFun','getCurrentDate']),
			toTop(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 500
				});
			},
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1500
				})
			},
			downloadDatas(){
				console.log("download")
				
				console.log(this.signData.signId)
				 
				uni.request({
					url:getApp().globalData.webUrl+"/SIESign/getExcel",
					header: {
						'Cookie':getApp().globalData.cookies
					},
					data:{
						signId:this.signData.signId,
						date:this.downloadData
					},
					method:'POST',
					success: (e) => {
						console.log("请求下载成功");
						console.log(this.downloadData)
						console.log(e);
						
						
						if(e.data.code == 24501){
							uni.showToast({
								title:"权限不足",
								icon:"none"
							})
						}
						
						else if(e.data.code == 22501){
							uni.setClipboardData({
								data:e.data.data,
								success: (e) => {
									uni.showToast({
										title:"复制下载链接",
										icon:"none",
										duration:1500
										
									})
								}
							})
							uni.downloadFile({
								url:e.data.data,
								success: (e) => {
									uni.saveFile({
										tempFilePath:e.tempFilePath,
										success: (e) => {
											uni.openDocument({
												filePath:e.savedFilePath,
												fileType:"xls",
												success: (e) => {
													console.log("open")
												}
											})
											
										}
									})
								}
							})
												
						}
						
						else if(e.data.code == 24591){
							uni.showToast({
								title:e.data.msg,
								icon:"none",
								duration:1500
							})
						}
						else {
							console.log("未知状态码")
							console.log(e)
						}
					
					}
				})
				
			},
			
			queryData(date){
				console.log(date)	
				uni.request({
					url:getApp().globalData.webUrl+"/SIESign/selectCycleResult",
					header: {
						'Cookie':getApp().globalData.cookies
					},
					data:{
						signId:this.signData.signId,
						selectTime:date,
						teamId:this.signData.teamId
					},
					method:'POST',
					success: (e) => {
						console.log(e)
						if(e.data.code == 22009){
							 console.log("查询成功")
							 var result =  e.data.data
							 this.ObjectToStringFun(result)
							 
							 uni.navigateTo({
							 	url:"teamSignSegTimeInfo?timeSegDatas=" +this.ObjectToStringRes
							 
							 })
							 
						}
						else if(e.data.code == 40444){
							console.log(e)
						}
						else if(e.data.code == 1234){
							
						}else{
							console.log("未知状态码")
							console.log(e)
						}
					}
					
				})
				
				
				
			}
		}

	}
</script>

<style>
	.teamSignData-item-style{
		margin-top: 10rpx;
	}
	.teamSignDatasText{
		width: 100%;
		height: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		margin: 10rpx 0;
		background-color: #FFFFFF;
	}
	.flow-button{
		position: fixed;
		bottom: 30rpx; 
		right: 30rpx; 
		width:100rpx;
		height:100rpx;
	}
</style>
