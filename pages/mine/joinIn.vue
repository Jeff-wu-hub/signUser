<template>
	 <view id="mine-manage-container">
		<van-tabs :active="0"  >
		  <van-tab title="单次活动">
			  <view class="jion-singal">
				  <view class="manage-item" v-for="(item,index) in data" :key="index">
				  	<view class="news" @click="jump(index)">
				  		<van-cell-group>
				  		  <van-cell title="活动名称" :value="item.signName" />
				  		  <van-cell title="活动状态">
				  			  <view class="userFlog">
				  			  	<view v-if="item.isEnd">
				  					<van-tag round type="danger">已结束</van-tag>
				  				</view>	
				  			  	<view v-else>
				  					<van-tag round type="success">进行中</van-tag>
				  				</view>
				  			  </view> 
				  		  </van-cell>
				  		  <van-cell title="活动时间" :label="item.startTime+' ~ ' + item.endTime"/>
				  		</van-cell-group> 
				  	</view>
				  </view>  
			  </view>
		  </van-tab>
		  <van-tab title="团队活动">
			  <view class="teamActiveStyle">
				<view class="mine-join-team-item" v-for="(item,index) in teamData" :key="index" >
					<van-cell-group>
					  <van-cell value-class="flex1" clickable title="活动名称" :value="item.signName" @click="toTeamActive(item.signId)"/> 
					  <van-cell value-class="flex4" clickable title="活动编号" :value="item.signId" @click="copyToBoard(item.signId)"/>
					</van-cell-group>
				</view>  
			  </view>
		  </van-tab>
		 
		</van-tabs>
		
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
	export default{
		data(){
			return{
				showToTop:true,
				signId:"",
				data:[],
				teamData:[],
				endTime:[],
				startTime:[],
				
				
			}
		},
		methods:{
			...mapMutations(['logout','getCurrentDate',"getCurrentTime","getCurrentTimeMillionSecond",'getADateToMillSencond','ObjectToStringFun']),
			toTop(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 500
				});
			},
			jump(e){
				 
				
				var objString =  encodeURIComponent(JSON.stringify(this.data[e]))
				
				uni.navigateTo({
					url:"../active/activeDetail/jionedActivity?signInfo="+objString
				})
			},
			
			toTeamActive(data){
				console.log(data)
				uni.request({
					url:getApp().globalData.webUrl+'/SIESign/getSignById',
					
					method:"POST",
					
					header: {
						'Cookie':getApp().globalData.cookies
					},
					data:{
						signId:data
					},
					success: (e) => {
						console.log(e) 
						if(e.data.code == 20200){
							this.ObjectToStringFun(e.data.data)
							uni.navigateTo({
								url:"../active/circleActiveDisplay?signInfo="+this.ObjectToStringRes
							})
						}
						else if(e.data.code == 40444){
							this.logout()
							uni.switchTab({
								url:"./mine",
								success: () => {
									uni.showToast({
										title:"登录过期，请重新登录~",
										icon:"none"
									})
								}
							})
						}	
					}
				})
			},
			copyToBoard(data){
				uni.setClipboardData({
					data:data,
					
				})
			}
			
			
		},
		computed:{
			...mapState(['dateInfo','ObjectToStringRes']),
			// getTime:function(){
			
			// var date = new Date(),
			// year = date.getFullYear(),
			// month = date.getMonth() + 1,
			// day = date.getDate(),
			// hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			// minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			// second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			// month >= 1 && month <= 9 ? (month = "0" + month) : "";
			// day >= 0 && day <= 9 ? (day = "0" + day) : "";
			// var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
			// return minute
			// }
			
		},
		onLoad(){
			
			uni.request({
				url:getApp().globalData.webUrl+'/SIESign/showParticipator',
				
				
				method:"POST",
				
				header: {
					'Cookie':getApp().globalData.cookies
				},
				
				success: (e) => {
					console.log(e)
					var stateCode = e.data.code
					if(stateCode == '20231'){ 
						console.log("[manage] info : 获取服务器数据成成功")
						 console.log(e.data.data)
						var dataList= e.data.data[0]
						var data={} 
						this.teamData = e.data.data[1]
						
						for(var i=0 ; i<dataList.length ; i++){
							data= dataList[i];
							this.getCurrentTimeMillionSecond();
							var now = this.dateInfo.millionSecond;
							 
							this.getADateToMillSencond(dataList[i].endTime);
							var endTime = this.dateInfo.aDateToMillion;
							
							if(now <= endTime){
								
								data.isEnd=false
								
							}else{
								
								data.isEnd=true
								
								}
								
							this.data.push(dataList[i])
						
							data= { }
							
						}
					} 
					else if(stateCode == '20444'){
						console.log("[mine manage] info : ")
						console.log("登录失效")
						
						uni.switchTab({
							url:'./mine',
							success: (e) => {
								this.logout()
								uni.showToast({
									title:"登录过期，请重新登录",
									icon:"none",
									duration:1500
								})
							}
						})
					}
					else  {
						console.log("[mine manage] info : ")
						console.log("未知状态码"+stateCode)
					}
					
					// console.log(this.endTime)
					//时间比较
					// this.getCurrentDate()
					// var nowTime =this.dateInfo.millionSecond
					// this.getADateToMillSencond(this.endTime)
					// var endTime=this.dateInfo.aDateToMillion
					// if(nowTime<=endTime){
					// 	this.isEnd=false
					// }
					// else{
					// 	this.isEnd=true
					// }
					
				},
				
				fail: (e) => {
					console.log(e)
				}
			})
			console.log(111)
			console.log(this.data)
			
		}
		
	}
	
</script>

<style lang="scss">
	.flow-button{
		position: fixed;
		bottom: 30rpx; 
		right: 30rpx; 
		width:100rpx;
		height:100rpx;
	}
	.mine-join-team-item{
		margin: 10rpx 0;
	}
	.jion-singal{
		display: flex;
		flex-direction: column-reverse;
	}
	.teamActiveStyle{
		display: flex;
		flex-direction: column-reverse;
	}
	#mine-manage-container{
		display: flex;
		flex-direction: column;
		.manage-item{
			margin: 10rpx 0;
		}
	}
	.news{
		border-bottom: 3px solid #E2E2E2;
		background-color: #FFFFFF;
		.userName{
			display: block;
			font-size: 30rpx;
			margin-bottom: 20rpx;
			padding-top: 50rpx;
			.userFlog{
				float: right;
			}
		}
		.userTime{
			.userTime_start{
				display: inline;
				color: #808080;
			}
			.userTime_end{
				display: inline;
				color: #808080 ;
			}
		}
	}
	body{
		background-color: #b5bbbe;
	}
	</style>