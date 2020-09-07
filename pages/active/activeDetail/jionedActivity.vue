<template>
	<view id="activeDetail-container">
		<van-toast id="van-toast" />
		<view class="activeDetailFirstPart">
			<van-panel title="活动信息" desc="当前活动的部分信息" :status="activeStatus">
			   <view >
				   <van-cell center title="活动名称" :value="signInfo.signName" />
				   <van-cell center clickable title="签到编号" :value="signInfo.signId" @click='cpoyToBoard' label="点击复制到剪切板"/>
				   <van-cell center title="开始时间" :value="signInfo.startTime" />
				   <van-cell center title="结束时间" :value="signInfo.endTime" />
				   <van-cell center border title="发起者" :value="signInfo.manager" />
			   </view>
			 </van-panel>
		</view>
		<view class="activeDetailSecondPart">
			 <van-cell center title="签到结果" :value="signResult" />
		</view>
		
		<view class="activeDetailThirdPart">
			<view class="width80">
				<button type="success" @click="toShowSignInfo">查看签到数据</button>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	import Toast from '@/static/vant/toast/toast';
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	export default{
		data(){
			return {
				signResult:"签到成功",
				activeStatus:'已结束',
				signInfo:{
					signId:'',
					manager:'',
					startTime:'', 
					endTime:'',
					signName:'',  
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
			console.log("参与的活动")
			var obj = JSON.parse(decodeURIComponent(e.signInfo));
			console.log(obj)
			this.signInfo = obj
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
		},
		
		methods:{
			...mapMutations(['logout','getCurrentTimeMillionSecond',"getADateToMillSencond"]),
			cpoyToBoard(){
				uni.setClipboardData({
					data:this.signInfo.signId,
					success: (e) => {
						// Toast('签到编号已复制到剪切板');
					}
				})
			},
			toShowSignInfo(){
				 
				uni.navigateTo({
					url:"./displaySignInfo?signId="+this.signInfo.signId+'&'+'activeName='+this.signInfo.signName
				})
				
			}
			
		}
		
	}
</script>

<style scoped>
	.width80{
		width: 80%;
	}
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
	.activeDetailThirdPart{
		width: 100%;
		margin-top: 10rpx ;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
