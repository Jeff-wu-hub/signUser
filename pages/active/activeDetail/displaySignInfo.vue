<template>
	<view class="displaySignInfo-container">
		<uni-nav-bar left-icon="back" left-text="返回" @clickLeft="navBackTo">
		      
		    <view >
				<van-search 
				:value="searchContent"
				placeholder="请输入签到者昵称" 
				@change="search"
				/>
			</view>
		   
		</uni-nav-bar>
		<view v-if="!isSearching">
			
			<view>
				 <van-cell-group>
				   <van-cell title="活动名称" :value="activeName" />
				   <van-cell title="结束时间" :value="activeSignerInfo.endTime"   />
				   <van-cell title="参与人数" :value="signCount"   />
				   <van-cell title="活动状态" > 
						<view v-if="isEnd">
							<van-tag type="warning"  text-color="#ffffff" >结束</van-tag>
						</view>
						<view v-else>
							<van-tag type="success"  text-color="#ffffff" >进行中</van-tag>
						</view>
						
				   </van-cell>
				   <van-cell clickable title="导出数据" 
					label="点击后会复制下载链接,可以自行去浏览器下载"
					value= "点击查看" @click="downData"/>
				 </van-cell-group>
			</view>
			<van-divider contentPosition="center">签到详情</van-divider>
			<van-collapse :value="selected" @change="onChanges">
				<view v-for="(item,index) in activeSignerInfo.signerInfo" :key="index">
					<van-collapse-item :title="'用户['+item.customAtrrValue.signerMessage1Content +'] 的签到数据'" :name="index">
					  <view class="item-container">
							<view class="displaySignInfo-img">
								 <van-image
								   class="custom-class"
								   round
								   fit = "fill"
								   width="96rpx"
								   height="96rpx"
								   :src="item.avatarUrl"
							   />
								<view class=" marginleft20rpx font40">{{item.nickName}}</view>
							</view>
					  </view>
								
						<view class="item-container">
							<van-cell-group>
								<van-cell title="签到时间" :value="item.signTime" />
								<view v-for="(it,id) in activeSignerInfo.attrValue" :key="id"> 
									<van-cell custom-class="border: 1px solid black;" center value-class="" :title="it" :value="item.customAtrrValue['signerMessage'+(id+1)+'Content']"/>
								</view>
							</van-cell-group>
						</view>
					</van-collapse-item>	
				</view>   
			</van-collapse>
			
		</view>
		<view v-else>
			<van-collapse :value="selected" @change="onChanges">
				<view v-for="(item,index) in searchResult" :key="index">
					<van-collapse-item :title="'用户['+item.customAtrrValue.signerMessage1Content +'] 的签到信息'" :name="index">
					  <view class="item-container">
							<view class="displaySignInfo-img">
								 <van-image
								   class="custom-class"
								   round
								   fit = "fill"
								   width="96rpx"
								   height="96rpx"
								   :src="item.avatarUrl"
							   />
								<view class=" marginleft20rpx font40">{{item.nickName}}</view>
							</view>
					  </view>
								
						<view class="item-container">
							<van-cell-group>
								<van-cell title="签到时间" :value="item.signTime" />
								<view v-for="(it,id) in activeSignerInfo.attrValue" :key="id"> 
									<van-cell custom-class="border: 1px solid black;" center value-class="" :title="it" :value="item.customAtrrValue['signerMessage'+(id+1)+'Content']"/>
								</view>
							</van-cell-group>
						</view>
					</van-collapse-item>	
				</view>   
			</van-collapse>
		</view>
		<view class="flow-button"   v-show="showToTop">
			<van-image
			  width="20"
			  height="20"
			  src="/static/imgs/active/toTop.png"
			  @click="toTop"
			/>
		</view>
	</view>
</template>

<script>
	import {
	     mapState,  
	     mapMutations  
	} from 'vuex'; 
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default{
		components: {uniNavBar},
		data(){
			return {
				signId:'',
				showToTop:false,
				isSearching:false,
				selected:[''],
				searchContent:"",
				activeName:'活动名称',
				activeSignerInfo:{
					//公共数据
					
					endTime:"活动结束时间",
					startTime:"活动开始时间",
					manager:"发起人",
					attrValue:['姓名','手机号','年龄','性别','爱好','地址'],
					signerInfo:[
						//用户信息
						{
							nickName:"用户昵称",
							avatarUrl:"头像地址",
							signTime:"签到时间",
							customAtrrValue:{
								signerMessage1Content:"用户填写的自定义字段的值",
								signerMessage2Content:"用户填写的自定义字段的值",
								signerMessage3Content:"用户填写的自定义字段的值",
								signerMessage4Content:"用户填写的自定义字段的值",
								signerMessage5Content:"用户填写的自定义字段的值",
								signerMessage6Content:"用户填写的自定义字段的值"
							}
						},
							
					]

				},
				searchResult:[
						//用户信息
						{
							nickName:"用户昵称",
							avatarUrl:"头像地址",
							signTime:"签到时间",
							customAtrrValue:{
							signerMessage1Content:"用户填写的自定义字段的值",
							signerMessage2Content:"用户填写的自定义字段的值",
							signerMessage3Content:"用户填写的自定义字段的值",
							signerMessage4Content:"用户填写的自定义字段的值",
							signerMessage5Content:"用户填写的自定义字段的值",
							signerMessage6Content:"用户填写的自定义字段的值"
							}
						},		
					]
			 }
	    },
		onShareAppMessage() {
			return {
				title: "签到数据",
				path: '/pages/active/activeDetail/displaySignInfo?signId='+this.signId+'&'+'activeName='+this.activeName,

			}
		},
		onLoad:function(e){
			console.log("displaysigninfo onload ")
			console.log(e)
			console.log(e.signId)
			this.signId = e.signId
			console.log(e.activeName)
			this.activeName = e.activeName
			uni.request({
				url:getApp().globalData.webUrl+"/SIESign/enquirySignPeople",
				header: {
					   'Cookie':getApp().globalData.cookies
				},
				data:{
					signId:e.signId
				},
				method:"POST",
				success: (e) => {
					console.log("服务器返回")
					console.log(e)
					if(e.data.code == '20200'){

						var requestData = e.data.data
						this.activeSignerInfo.endTime = requestData.endTime
						this.activeSignerInfo.startTime = requestData.startTime
						this.activeSignerInfo.manager = requestData.manager
						this.activeSignerInfo.attrValue = requestData.customAtrrValue 
						this.activeSignerInfo.signerInfo = []
						var signerInfoList = []
						 
						var singerObj = {}
						var len = requestData.signRecordList.length;
						var record = requestData.signRecordList;
						console.log("查看历史签到：服务器数据")
						console.log(record)
						for(var i = 0 ; i < len; i++){
							try{
								
								singerObj.nickName = record[i].wxUser.nickName
								singerObj.avatarUrl = record[i].wxUser.avatarUrl
								singerObj.signTime = record[i].signTime
								singerObj.customAtrrValue =  {
									signerMessage1Content:record[i].signerMessage1Content,
									signerMessage2Content:record[i].signerMessage2Content,
									signerMessage3Content:record[i].signerMessage3Content,
									signerMessage4Content:record[i].signerMessage4Content,
									signerMessage5Content:record[i].signerMessage5Content,
									signerMessage6Content:record[i].signerMessage6Content
								}
								console.log("push内容")
								console.log(singerObj)
								signerInfoList.push(singerObj)
								singerObj = {}
							}catch(e){
								console.log("获取用户数据不全错误,错误如下：")
								console.log(e)
							}
							
						}
						this.activeSignerInfo.signerInfo = signerInfoList	
						console.log("初始化签到信息成功")
						console.log(this.activeSignerInfo)

					}else if(e.data.code == '202444'){
						uni.switchTab({
							url:"../../mine/mine"
						})
						this.logout()
						uni.showToast({
							title:"登录过期，请重新登录",
							icon:"none",
							duration:1500
						})
					}
				}
				
			})
		},
		onPageScroll(e) {
			 	
			if(e.scrollTop > 300) {
				this.showToTop = true
				
			}else{
				this.showToTop = false
			}
			    
		},
		computed:{
			...mapState(['dateInfo']),
			isEnd(){
				this.getCurrentTimeMillionSecond();
				var now = this.dateInfo.millionSecond;
				 
				this.getADateToMillSencond(this.activeSignerInfo.endTime)
				var endTime = this.dateInfo.aDateToMillion
				
			
				if(now <= endTime){
					return false
				}else{
					return true
				}
			},
			signCount(){
				return this.activeSignerInfo.signerInfo.length
			}
		},
		methods:{
			...mapMutations(['logout','getCurrentDate',"getCurrentTime","getCurrentTimeMillionSecond",'getADateToMillSencond']),
			onChanges(e){
				this.selected = e.detail
			},
			navBackTo(){
				uni.navigateBack({
					animationType:"auto",
					animationDuration:800
				})
			},
			search(e){
				console.log(e.detail)
				 
				var len = this.activeSignerInfo.signerInfo.length
				var arr = this.activeSignerInfo.signerInfo;
				 
				var seachRes = []
				
				if(e.detail == '')
					this.isSearching = false
				else{
					this.isSearching = true
				}
				for(var i = 0; i < len; i++ ) {
					if(arr[i].customAtrrValue.signerMessage1Content.search( e.detail) != -1)
					{
						seachRes.push(arr[i])
					}
				}
				this.searchResult = seachRes
				console.log("搜索结果")
				console.log(this.searchResult)
			},
			toTop(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 500
				});
			},
			downData(){
				uni.showToast({
					title:"导出签到数据",
					icon:"none",
					
				})
				uni.request({
					url:getApp().globalData.webUrl+"/SIESign/getExcel",
					header: {
						'Cookie':getApp().globalData.cookies
					},
					data:{
						signId:this.signId,
						date:'null'
					},
					method:'POST',
					success: (e) => {
						console.log("请求下载成功");
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
						else {
							console.log("未知状态码")
							console.log(e)
						}
					
					}
				})
			 //    uni.downloadFile({
				// 	url:getApp().globalData.webUrl+"/SIESign/getExcel",
				// 	header: {
				// 		'Cookie':getApp().globalData.cookies
				// 	},
				// 	data:{
				// 		signId:this.signId
				// 	},
				// 	success: (e) => {
				// 		console.log("请求下载成功");
				// 		console.log(e);
				// 	}
				// })
			}
			
	    },
	
}
</script>

<style scoped>
	.displaySignInfo-container{
		display: flex;
		flex-direction: column;
		background-color: #3F536E;
		margin-top: 40rpx;
	}
	
	 
	.displaySignInfo-img{
		display: flex;
		flex-flow: row || nowrap;
		justify-content: flex-start;
		align-items: center;
		background-color: white;
		height: 100%;
		width: 100%;
		
	}
	.center{
		text-align: center;
		width: 60%;
		
		height: 100%;
		 
	}
	.font40{
		font-size: 40rpx;
	}
	.marginleft20rpx{
		margin-left: 20rpx;
	}
	.custom-class{
		margin-left: 20rpx;
	}
	.item-container{
		width: 100%;
	}
	.flow-button{
		position: fixed;
		bottom: 30rpx; 
		right: 30rpx; 
		width:100rpx;
		height:100rpx;
	}
</style>
