<template>
	<view id="singleActive-container">
		
		<view v-if="version == false">
			<view class="" style="margin: 0  auto;">
				请选择起止时间，将为您申请一次签到
			</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						开始时间
					</view>
					<view class="input-display uni-list-cell-db">
						<picker class="input-line" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input input-line">{{commitStartDate}}</view>
						</picker>
						<picker class="input-line" mode="time" :value="time" :start="startTimeRange" end="23:59" @change="bindTimeChange">
							<view class="uni-input input-line">{{commitStartTime}}</view>
						</picker>
					</view>
				</view>
			</view>
			
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						结束时间
					</view>
					<view class="input-display uni-list-cell-db">
						<picker class="input-line" mode="date" :value="date" :start="commitStartDate" :end="endDate" @change="bindDateChange1">
							<view class="uni-input input-line">{{commitEndDate}}</view>
						</picker>
						<picker class="input-line" mode="time" :value="time" :start="endTimeRange" end="23:59" @change="bindTimeChange1">
							<view class="uni-input input-line">{{commitEndTime}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view style="margin-top: 20rpx;">
				<van-button type="primary" size="large">申请签到</van-button>
			</view>
		</view>
		<view v-else>
			<van-notify id="van-notify" />
			
			<view class="item-container">
				<van-cell-group>
				  <van-field
				    :value="signName"
				    clearable
					required
					size="large"
				    label="签到名称"
				    placeholder="请输入签到名称"
					 @change="textChanges"
				  />
				</van-cell-group>
			</view>
			
			<view class="item-container">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							开始时间
						</view>
						<view class="input-display uni-list-cell-db">
							<picker class="input-line" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input input-line">{{commitStartDate}}</view>
							</picker>
							<picker class="input-line" mode="time" :value="time" :start="startTimeRange" end="23:59" @change="bindTimeChange">
								<view class="uni-input input-line">{{commitStartTime}}</view>
							</picker>
						</view>
					</view>
				</view>
				
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							结束时间
						</view>
						<view class="input-display uni-list-cell-db">
							<picker class="input-line" mode="date" :value="date" :start="commitStartDate" :end="endDate" @change="bindDateChange1">
								<view class="uni-input input-line">{{commitEndDate}}</view>
							</picker>
							<picker class="input-line" mode="time" :value="time" :start="endTimeRange" end="23:59" @change="bindTimeChange1">
								<view class="uni-input input-line">{{commitEndTime}}</view>
							</picker>
						</view>
					</view>
				</view>	
			</view>
			
			<view class="item-container">
				<van-panel title="签到方式" desc="设置签到方式,可以自定义属性" >
				  <view>
					<van-cell-group>
					  <van-cell clickable title="姓名" value="必选" @click="clickHandler(1)"/>
					   
					  <view v-show="isDisply[0]">
						  <van-cell title="自定义1️"><input id="0" type="text" v-model="result.customer1" @input="textChangesHandler"></van-cell>
					  </view>
					  <view v-show="isDisply[1]">
						  <van-cell title="自定义2"><input id="1" type="text" v-model="result.customer2" @input="textChangesHandler"></van-cell>
					  </view>
					  <view v-show="isDisply[2]">
					  	  <van-cell title="自定义3️"><input id="2" type="text" v-model="result.customer3" @input="textChangesHandler"></van-cell>		  
					  </view>
					  <view v-show="isDisply[3]">
					  	  <van-cell title="自定义4️"><input id="3" type="text" v-model="result.customer4" @input="textChangesHandler"></van-cell>			  
					  </view>
					  <view v-show="isDisply[4]">
					  	  <van-cell title="自定义5️"><input id="4" type="text" v-model="result.customer5" @input="textChangesHandler"></van-cell>			  
					  </view>
					</van-cell-group>	
					
				  </view>
				</van-panel>
			</view>
			
			<view class="item-container center" >
				<view class="width80">
					<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large" @click="clickHandler(3)">{{getButtonText}}</van-button>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import Notify from '@/static/vant/notify/notify';
	import {
	     mapState,  
	     mapMutations  
	} from 'vuex'; 
	export default {
		
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
	        return {
				version:true,
				isEidt:false,
				isDisply:[true,false,false,false,false],
				signName:'',
				date:currentDate,
				time:"00:00",
				commitStartDate:currentDate,
				commitEndDate:currentDate,
				startTimeRange : '12:01',
				endTimeRange: '12:01',
				commitStartTime: '12:01',
				commitEndTime:'12:01',
				 
				signId:'',
				result:{
					name:"姓名",
					 
					customer1:'',
					customer2:'',
					customer3:'',
					customer4:'',
					customer5:'',
				}
				
	        }
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
			
			this.getCurrentDate()
			var fullTime = this.dateInfo.date
			var timeArray = fullTime.split(' ')
			this.date = timeArray[0]
			var timeHandle = timeArray[1].split(":")
			this.time =  ''+timeHandle[0]+":"+timeHandle[1]
			this.startTimeRange = this.time
			this.endTimeRange = this.startTimeRange 
			this.commitStartTime =  this.time
			this.commitEndTime  = this.time
			
			if(e.signInfo != null){
				console.log("sigleActive接收到")
				var obj = JSON.parse(decodeURIComponent(e.signInfo));
				this.isEidt = true
				console.log(obj)
				this.signId = obj.signId
				this.signName = obj.activeName
				
				//time Handle
				var startTimeArray = obj.startTime.split(" ")
				this.commitStartDate = startTimeArray[0]
				this.commitStartTime = startTimeArray[1]
				
				var endTimeArray = obj.endTime.split(" ")
				this.commitEndDate = endTimeArray[0]
				this.commitEndTime = endTimeArray[1]
				 
				this.result.customer1 = obj.customerAttr2
				this.result.customer2 = obj.customerAttr3
				this.result.customer3 = obj.customerAttr4
				this.result.customer4 = obj.customerAttr5
				this.result.customer5 = obj.customerAttr6
				 
			}else{
				console.log("创建")
				this.isEidt = false
			}
 
		},
	    onShow() {
	    	
	    },
		computed: {
			...mapState(['dateInfo']),
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        },
			getRequestDate(){
				var signName = this.signName
				var startTime = this.commitStartDate+" "+this.commitStartTime
				var endTime = this.commitEndDate+" "+this.commitEndTime
				var customer = {}
				customer.name = this.result.name
				 
				customer.c1 = this.result.customer1
				customer.c2 = this.result.customer2
				customer.c3 = this.result.customer3
				customer.c4 = this.result.customer4
				customer.c5 = this.result.customer5
				
				return 	[signName,startTime,endTime,customer.name,customer.c1,customer.c2,customer.c3,customer.c4,customer.c5]							 
			},
			getButtonText(){
				if(this.isEidt){
					return '修改签到'
				}else{
					return "创建签到"
				}
			}
			
	    },
	    methods: {
			...mapMutations(['logout','getCurrentDate','getCurrentTime']),
			 
			textChanges(e){
				this.signName = e.detail;
			},
			clickHandler(data){
				console.log(this.signName)
				if(data ==1){
					uni.showToast({
						title:"该项必选",
						icon:"none",
						duration:1000
					})
				}
				//去掉了电话号码
				// else if(data == 2){
				// 	if(this.photoChecked){
				// 		this.photoChecked = false
				// 	}else{
				// 		this.photoChecked = true
				// 	}	
				// }
				else if(data == 3){
					if(this.commitStartDate > this.commitEndDate){
						uni.showToast({
							title:"开始日期不能大于结束日期",
							icon:"none",
							duration:1500
						})
					}else if(this.commitStartDate == this.commitEndDate){
						if(this.commitStartTime >= this.commitEndTime){
							uni.showToast({
								title:"开始时间不能大于等于结束时间",
								icon:"none",
								duration:1500
							})
						}else{
							if(this.signName == ''){
									uni.showToast({
										title:"签到名称不能为空",
										icon:"none",
										duration:1500
									})
							}else{
														
								 this.SendRequst()
							}
						}
					}else if(this.commitStartDate < this.commitEndDate){
						 if(this.signName == ''){
						 		uni.showToast({
						 			title:"签到名称不能为空",
						 			icon:"none",
						 			duration:1500
						 		})
						 }else{
							this.SendRequst()
						 }
					}
			
				}
			},
	        textChangesHandler(even){
				console.log(even)
				var data = parseInt(even.currentTarget.id)
				var content = even.detail.value;
				if(data == 0){
					console.log(content)
					if(content != ''){
						this.isDisply[data] = true
						this.isDisply[data+1] = true
						console.log(this.isDisply)
					}else{

						if(this.result.customer2 != ''){
							this.result.customer1 = this.result.customer2
							this.result.customer2 = ''
							this.isDisply[data+1] = false
							if(this.result.customer3 != ''){
								this.isDisply[data+1] = true
								this.result.customer2 = this.result.customer3
								this.result.customer3 = ''
								this.isDisply[data+2] = false
								if(this.result.customer4 != ''){
									this.isDisply[data+2] = true
									this.result.customer3 = this.result.customer4
									this.result.customer4 = ''
									this.isDisply[data+3] = false
								}
							}
						}
						 
						
					}
						 
				}else if(data == 1){
					if(content != ''){
						this.isDisply[data] = true
						this.isDisply[data+1] = true
					}else{
						if(this.result.customer3 != ''){
							this.result.customer2 = this.result.customer3
							this.result.customer3 = ''
							this.isDisply[data+1] = false
							if(this.result.customer4 != ''){
								this.isDisply[data+1] = true
								this.result.customer3 = this.result.customer4
								this.result.customer4 = ''
								this.isDisply[data+2] = false
								
							}
						}
					}
				}
				
				else if(data == 2){
					if(content != ''){
						this.isDisply[data] = true
						this.isDisply[data+1] = true
					}else{
						if(this.result.customer4 != ''){
							this.result.customer3 = this.result.customer4
							this.result.customer4 = ''
							this.isDisply[data+1] = false
							if(this.result.customer5 != ''){
								this.isDisply[data+1] = true
								this.result.customer4 = this.result.customer5
								this.result.customer5 = ''
								this.isDisply[data+2] = false
								
							}
						}
					}
				}
				else if(data == 3){
					if(content != ''){
						this.isDisply[data] = true
						this.isDisply[data+1] = true
					}else{
						if(this.result.customer5 != ''){
							this.result.customer4 = this.result.customer5
							this.result.customer5 = ''
							this.isDisply[data+1] = false 
						}
					}
				}
				else if(data == 4){
					Notify({
					  type: 'warning',
					  message: '最多自定义五个属性',
					  duration: 1000
					}); 
				}
				
			},
			SendRequst(){
				uni.getStorage({
					key:"userInfo",
					success:(e)=>{
						var cookies = e.data.cookies
						var reqData  = this.getRequestDate;
						if(this.isEidt){
							console.log("发送编辑请求")
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/updateSignMessage",
								header: {
									   'Cookie':getApp().globalData.cookies
									 },
								data:{
									signId:this.signId,
									signName:reqData[0],
									startTime:reqData[1],
									endTime:reqData[2],
									signerMessage1:reqData[3],
									signerMessage2:reqData[4],
									signerMessage3:reqData[5],
									signerMessage4:reqData[6],
									signerMessage5:reqData[7],
									signerMessage6:reqData[8]	
								},
								method:"Post",
								success: (e) => {
									console.log("修改：服务器传回")
									console.log(e)
									var status = e.data.code;
									var serverResponse = e.data.data
									console.log(status)
									if(status == '20251'){
										uni.showToast({
											title:"修改成功", 
											icon:"none",
											duration:500,
										})
										uni.getStorage({
											key:"launchedActive",
											success:(e)=>{
												// e.data.unshift(signInfoItems)
												var signActiveList = e.data
												console.log("修改前的数据")
												console.log(e)
												var len = e.data.length
												var dataArray = e.data
												 
				
												var signInfoItems = {}
												signInfoItems.signId = serverResponse.signId
												signInfoItems.manager = serverResponse.manager
												signInfoItems.startTime = serverResponse.startTime
												signInfoItems.endTime = serverResponse.endTime
												signInfoItems.activeName = serverResponse.signName
												signInfoItems.qrCodeUrl = serverResponse.codeUrl
												signInfoItems.customerAttr1 = serverResponse.signerMessage1
												signInfoItems.customerAttr2 = serverResponse.signerMessage2
												signInfoItems.customerAttr3 = serverResponse.signerMessage3
												signInfoItems.customerAttr4 = serverResponse.signerMessage4
												signInfoItems.customerAttr5 = serverResponse.signerMessage5
												signInfoItems.customerAttr6 = serverResponse.signerMessage6
												 
												 
												 //找到本地的数据并更新
												 for (var i = 0; i < len ; i++){
													 console.log(dataArray[i].signId)
													 if(dataArray[i].signId == this.signId){
														 //找到了 用服务器传回数据更新本地数据
														  dataArray.pop()
														  dataArray.unshift(signInfoItems)
														  console.log("更新后的本地发起签到数据")
														  uni.setStorage({
														  	key:"launchedActive",
															data:dataArray,
															
														  }) 
														var objString =  encodeURIComponent(JSON.stringify(signInfoItems))
														uni.redirectTo({
															url:"./activeDetail?signInfo="+objString
														})
														 console.log("更新本地数据成功")
														 break;
														 
													 }
												 }
												
											},
											// fail: (e) => {
											// 	//获取失败，一般情况是没有该属性值，即第一次创建
											// 	uni.setStorage({
											// 		key:"launchedActive",
											// 		data:firstSignArray,
											// 		success: () => {
											// 			var objString =  encodeURIComponent(JSON.stringify(signInfoItems))
											// 			uni.redirectTo({
											// 				url:"./activeDetail?signInfo="+objString
											// 			})
											// 		}
											// 	})
											// }
										})
										
										
										/*
											获取到服务器提供的 签到编码 signId 唯一
											接下的策略：
											将签到编码存到缓存中，用数组存，每创建一个往数组添加一个
											在创建一个对象，以signId为key,以服务器返回的数据为值
											  
										*/
									   
									   
											
									}else if(status == '20452'){
										uni.showToast({
											title:" 对不起，权限不足",
											icon:"none",
											duration:1500,
										})
									}
									else if(status == '20451'){
										uni.showToast({
											title:" 服务器繁忙，请稍后重试",
											icon:"none",
											duration:1500,
										})
									}
									else if(status == '20444'){
										//登录状态过期
										this.logout()
										uni.switchTab({
											url:"../mine/mine"
										})
										uni.showToast({
											title:"登录过期，重新登录",
											icon:"none",
											duration:1500,
										})
									}	
								},
								fail: (e) => {
									console.log(e)
									uni.showToast({
										title:"服务错误",
										icon:"none",
										duration:500,
									})
									
								}
							})
						}
						else{
							console.log("发送创建请求")
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/creatSign",
								header: {
									   'Cookie':getApp().globalData.cookies
									 },
								data:{
									manager:getApp().globalData.userNickName,
									signName:reqData[0],
									startTime:reqData[1],
									endTime:reqData[2],
									signerMessage1:reqData[3],
									signerMessage2:reqData[4],
									signerMessage3:reqData[5],
									signerMessage4:reqData[6],
									signerMessage5:reqData[7],
									signerMessage6:reqData[8]	
								},
								method:"Post",
								success: (e) => {
									console.log(e)
									var status = e.data.code;
									console.log(status)
									if(status == '20200'){
										uni.showToast({
											title:"创建签到成功", 
											icon:"none",
											duration:500,
										})
										
										var signInfo = e.data.data
										var firstSignArray = []
										var signInfoItems = {}
										signInfoItems.signId = signInfo.signId
										signInfoItems.manager = signInfo.manager
										signInfoItems.startTime = signInfo.startTime
										signInfoItems.endTime = signInfo.endTime
										signInfoItems.signName = signInfo.signName
										signInfoItems.qrCodeUrl = signInfo.codeUrl
										signInfoItems.customerAttr1 = signInfo.signerMessage1
										signInfoItems.customerAttr2 = signInfo.signerMessage2
										signInfoItems.customerAttr3 = signInfo.signerMessage3
										signInfoItems.customerAttr4 = signInfo.signerMessage4
										signInfoItems.customerAttr5 = signInfo.signerMessage5
										signInfoItems.customerAttr6 = signInfo.signerMessage6
										
										var objString =  encodeURIComponent(JSON.stringify(signInfoItems))
										console.log("[sigleActive]:info ")
										console.log(signInfoItems)
										uni.redirectTo({
											url:"./activeDetail?signInfo="+objString
										})
										
										// firstSignArray.unshift(signInfoItems)
										/*
											获取到服务器提供的 签到编码 signId 唯一
											接下的策略：
											将签到编码存到缓存中，用数组存，每创建一个往数组添加一个
											在创建一个对象，以signId为key,以服务器返回的数据为值
											  
										*/
									   
									  //  uni.getStorage({
											// key:"launchedActive",
											// success:(e)=>{
											// 	e.data.unshift(signInfoItems)
											// 	var signActiveList = e.data
											// 	uni.setStorage({
											// 		key:"launchedActive",
											// 		data:signActiveList,
											// 		success: () => {
														
											// 		}
											// 	})
											// },
											// fail: (e) => {
											// 	//获取失败，一般情况是没有该属性值，即第一次创建
											// 	uni.setStorage({
											// 		key:"launchedActive",
											// 		data:firstSignArray,
											// 		success: () => {
											// 			var objString =  encodeURIComponent(JSON.stringify(signInfoItems))
											// 			uni.redirectTo({
											// 				url:"./activeDetail?signInfo="+objString
											// 			})
											// 		}
											// 	})
											// }
									  //  })
											
									}else if(status == '20444'){
										//登录状态过期
										this.logout()
										uni.switchTab({
											url:"../mine/mine"
										})
										uni.showToast({
											title:"登录过期，重新登录",
											icon:"none",
											duration:1500,
										})
									}	
								},
								fail: (e) => {
									console.log(e)
									uni.showToast({
										title:"服务错误",
										icon:"none",
										duration:500,
									})
									
								}
							})
						}
						
													
					},
					fail: (e) => {
						//用户未登录
						uni.switchTab({
							url:"../mine/mine"
						})
						uni.showToast({
							title:"请登录后重试",
							icon:"none",
							duration:1500
						})
					}
				})
			},
				
			bindDateChange: function(e) {
	            this.commitStartDate = e.target.value
				 
				if(this.date < this.commitStartDate){
					this.startTimeRange = "00:00"
					this.endTimeRange = "00:00"
				}else{
					var time = this.time
					var timeArray = time.split(":");
					time =""+timeArray[0]+":"+timeArray[1]
					this.startTimeRange = time
					this.endTimeRange = this.startTimeRange
					this.commitStartTime = time
					this.commitEndTime = time
					this.time = time
				}
				
	        },
	        bindTimeChange: function(e) {
	            this.commitStartTime = e.target.value
				this.endTimeRange = this.commitStartTime
				this.commitEndTime = this.commitStartTime
	        },
			bindDateChange1: function(e) {
			    this.commitEndDate = e.target.value
				
				if(this.commitEndDate > this.commitStartDate ){
					
					this.endTimeRange = "00:00"
				}
				else
				{

					this.endTimeRange = this.commitStartTime
					this.commitEndTime = this.commitStartTime
	
				}
			},
			bindTimeChange1: function(e) {
			    this.commitEndTime = e.target.value
			},
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 0;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        }
	    }
		
	}
</script>

<style scoped>
	#singleActive-container{
		display: flex;
		flex-direction: column;
		
	}
	.width80{
		width: 80%;
	}
	.input-line{
		display: inline-block;
	}
	.input-display{
		text-align: center;
	}
	.center{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
	}
	.item-container{
		display: flex;
		flex-direction: column;
		
		margin-top: 20rpx;
	}
	.value-class {
	  flex: none !important;
	}
	#checkbox{
		position: relative;
		display: flex;
		left: 280rpx;	
	}
	
</style>
