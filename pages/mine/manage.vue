<template>
	<view id="mine-manage-container">	
	 <van-tabs :active="activeNum" @change="onChange">
	   <van-tab title="单次签到">
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
	   </van-tab>
	   <van-tab title="团队签到">
			<view class="mine-manage-team-item" v-for="(item,index) in teamData" :key="index">
				<view>
					<van-cell-group>
					  <van-cell value-class="flex1" title="活动名称" :value="item.signName"  @click="toTeamActiveDetail(index)" /> 
					  <van-cell value-class="flex4" title="活动编号" :value="item.signId"  @click="copyToBoard(item.signId)"/>
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
	 export default {
		data(){
			return {
				showToTop:true,
				scrollTop:0,
				activeNum:0,
				text:true,
				data:[],
				teamData:[],
				signId:'',
				endTime:[],
				
			}
		},
	 
		 
		methods:{
			...mapMutations(['logout','getCurrentDate',"getCurrentTime","getCurrentTimeMillionSecond",'getADateToMillSencond']),
			
			jump(e){
				console.log(this.data[e])
				
				var objString =  encodeURIComponent(JSON.stringify(this.data[e]))
				
				uni.navigateTo({
					url:"../active/activeDetail?signInfo="+objString
				})
			},
			onChange(e){
				console.log(e)
				this.activeNum = e.detail.index
			},
			  
			toTop(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 500
				});
			},
			toTeamActiveDetail(index){
				var objString =  encodeURIComponent(JSON.stringify(this.teamData[index]))
				
				uni.navigateTo({
					url:"../active/circleActiveDisplay?signInfo="+objString
				})
			},
			copyToBoard(data){
				uni.setClipboardData({
					data:data,
					
				})
			}
			
		},
			
		computed:{
			...mapState(['dateInfo']),
		},
		onLoad (){
			
			//从服务器获取本地信息 
			uni.request({
				url:getApp().globalData.webUrl+"/SIESign/enquiryCreateSign",
				header: {
					   'Cookie':getApp().globalData.cookies
				},
				method:"POST",
				success: (e) => {
					var stateCode = e.data.code
					if(stateCode == '22008'){
						console.log("[manage] info : 获取服务器数据成成功")
						console.log(e)
						 
						var dataList= e.data.data[0]
						this.teamData = e.data.data[1]
						var data={}
						
						for(var i=0 ; i<dataList.length ; i++){
							data = dataList[i];
							this.getCurrentTimeMillionSecond();
							var now = this.dateInfo.millionSecond;
							 
							this.getADateToMillSencond(dataList[i].endTime);
							var endTime = this.dateInfo.aDateToMillion;
							
							if(now <= endTime){
								
								data.isEnd=false
								
							}else{
								
								data.isEnd=true
								
								}
							this.data.push(data)
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
						console.log("未知状态码")
						console.log(e)
					}
				}
			})
		 
		},
		
		
	}
</script>

<style lang="scss" >
	.flow-button{
		position: fixed;
		bottom: 30rpx; 
		right: 30rpx; 
		width:100rpx;
		height:100rpx;
	}
	.mine-manage-team-item{
		margin: 10rpx 0;
	}
	.flex4{
		flex: 4 !important;
	}
	.flex1{
		flex: 1 !important;
	}
	
	#mine-manage-container{
		display: flex;
		flex-direction: column;
		.manage-item{
			margin: 10rpx 0;
			width: 100%;
		}
		.hight1000{
			width: 100%;
			height: 1000%;
			background-color: red;
		}
	}
	
	.news{
		border-bottom: 1px solid #E2E2E2;
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
