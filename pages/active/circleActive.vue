<template>
	<view id="singleActive-container">
		
		<view v-if="version == false">
			
			请选择申请团队签到的起止时间，将为您申请一次团队签到
			<!-- 时间段选择 -->
			<view v-for="(item,index) in timeInfo" :key="index" class="item-container"> 
				<van-cell-group>
				  <van-cell :title="'时间段'+(index+1)" />
				  <van-cell title="开始时间">
					  <picker mode="time" :value="item.startTime" :start="item.start" :end="item.end" @change="bindTimeChange($event,index,'start')">
					  	 <view class="uni-input">{{item.startTime}}</view>
					  </picker>
				  </van-cell>
				  <van-cell title="结束时间">
				  		<picker mode="time" :value="item.endTime" :start="item.start" :end="item.end" @change="bindTimeChange($event,index,'end')">
				  			 <view class="uni-input">{{item.endTime}}</view>
				  		</picker>		  
				  </van-cell>
				</van-cell-group> 
			</view>
			<view style="margin-top: 20rpx;">
				<van-button type="primary" size="large">申请团队签到</van-button>
			</view>
			
		</view>
		
		<view v-else>
			
			
			
			<van-notify id="van-notify" />
			<!-- 活动名称 -->
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
			<!-- 时间段选择 -->
			<view v-for="(item,index) in timeInfo" :key="index" class="item-container"> 
				<van-cell-group>
				  <van-cell :title="'时间段'+(index+1)" />
				  <van-cell title="开始时间">
					  <picker mode="time" :value="item.startTime" :start="item.start" :end="item.end" @change="bindTimeChange($event,index,'start')">
					  	 <view class="uni-input">{{item.startTime}}</view>
					  </picker>
				  </van-cell>
				  <van-cell title="结束时间">
				  		<picker mode="time" :value="item.endTime" :start="item.start" :end="item.end" @change="bindTimeChange($event,index,'end')">
				  			 <view class="uni-input">{{item.endTime}}</view>
				  		</picker>		  
				  </van-cell>
				</van-cell-group> 
			</view>
			<!-- 删除添加按钮 -->
			<view>
			  <van-button custom-class="buttonStyle" type="warning" @click="timeClickHandler(index,'delete')" >删除当前时间段</van-button>
			  <van-button custom-class="buttonStyle" type="primary" @click="timeClickHandler(index,'add')" >添加一个时间段</van-button>
			</view>
			
		 
			
			<!-- 多功能选择 -->
			<view class="item-container">
				<van-cell-group>
				  <van-cell title="多功能选择" is-link value="点击选择" arrow-direction="right" @click="multifunctionClickHandler('multifunctionPanel')"/>
				<!--  <van-cell title="位置信息" clickable label="请先选择一个签到地点" @click="multifunctionClickHandler('needLocationInfo')" >
					 <van-checkbox id="checkbox" :value="needLocation" ></van-checkbox>
				  </van-cell> -->
				  <view v-show="needLocation">
					  <van-cell title="位置名称" value-class="test"  :value="locationInfo.name"/>
					  <van-cell title="详细地址" value-class="test"  :value="locationInfo.address"/>
				  </view>
				</van-cell-group> 
			</view>
			
			
			<!-- 用户自定义签到频率 -->
			<van-collapse :value="signFreqencePanle" @change="signFreqencePanleChange">
			  <van-collapse-item title="签到频率" label="必须选择一天" name="1">
					<van-checkbox-group>
					  <van-cell-group>
						
						<view v-for="(item,index) in signFrequenceShow" :key="index">
							<van-cell
							  :title="item.name" 
							  clickable 
							  value-class="value-class"
							  @click="signFrequenceHandler(index)"
							>
							  <van-checkbox :value="item.value"/>  
							</van-cell>
						</view>
					  </van-cell-group>
					</van-checkbox-group>
			  </van-collapse-item>	  
			</van-collapse>
			
			
		<!-- 	<view class="item-container" v-show="isCircleSign" >
				<van-checkbox-group>
				  <van-cell-group>
					
					<view v-for="(item,index) in signFrequenceShow" :key="index">
						<van-cell
						  :title="item.name" 
						  clickable 
						  value-class="value-class"
						  @click="signFrequenceHandler(index)"
						>
						  <van-checkbox :value="item.value"/>  
						</van-cell>
					</view>
				  </van-cell-group>
				</van-checkbox-group>
				
			</view> -->
			
			
			<!-- 用户自定义 -->
			<view class="item-container">
				<van-panel title="签到属性" desc="设置签到属性,成员签到时需要填写的数据" >
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
			<!-- 提交按钮 -->
			<view class="item-container width100" style="text-align: center;">
				<view class="width80">
				    <van-button size="large" color="linear-gradient(to right, #4bb0ff, #6149f6) " @click="clickHandler(3)">{{getButtonText}}</van-button>	
				</view>	
			</view>
			<!-- 多功能面板 -->
			<view>
				<van-action-sheet
				  :show=" multifunctionShow "
				  :actions="actions"
				  cancel-text="取消"
				  @close="onClose"
				  @cancel="onCancel"
				  @select="onSelect"
				/>
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
				signFreqencePanle:[''],
				version:true,
				//teamId
				teamId:'',
				//时间段
				timeSeg:[1],
				timeInfo:[

					{
						//开始时间
						startTime:'',
						//结束时间
						endTime:'',
						start:0,
						end:23
					}
					
				],
				//多功能面板开关
				multifunctionShow:false,
				// 多功能面板内容
				actions: [
					  {
						name: '位置签到',
						id:'location'
					  },
					 //  {
						// name: '循环签到',
						// id:'circle'
					 //  }
					],
			    // 需要地理位置信息
				
				needLocation:false,
				//地理信息
				locationInfo:{
					name:'',
					address:'',
					longitude:'',
					latitude:'',
				},
				//签到频率 7天 工作日 节假日 自定义
				//签到频率页面显示
				//是否是循环签到
				isCircleSign:true,
				
				signFrequenceShow:[
					{
						name:"星期一",
						value:0
					},
					{
						name:"星期二",
						value:0
					},
					{
						name:"星期三",
						value:0
					},
					{
						name:"星期四",
						value:0
					},
					{
						name:"星期五",
						value:0
					},
					{
						name:"星期六",
						value:0
					},
					{
						name:"星期日",
						value:0
					}
				],
			
				isEidt:false,
				isDisply:[true,false,false,false,false],
				signName:'',
				signId:'',		
				result:{
					name:"姓名",
					
					customer1:'',
					customer2:'',
					customer3:'',
					customer4:'',
					customer5:'',
				},
				
				
				description:''//签到描述
				
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
			
			
			console.log("[active circleAtive] onload info:")
			var obj = this.stringToObj(e.teamInfo);
			console.log(obj)
			this.teamId = obj.teamId
			
			
			this.getCurrentDate()
			var fullTime = this.dateInfo.date
			var timeArray = fullTime.split(' ')
			// this.date = timeArray[0]
			var timeHandle = timeArray[1].split(":")
			// this.time =  ''+timeHandle[0]+":"+timeHandle[1]
			 
			this.timeInfo[0].startTime = ''+timeHandle[0]+":"+timeHandle[1]
			this.timeInfo[0].endTime = this.timeInfo[0].startTime
			
			
			//判断是创建还是修改
			if(obj.signId != null){
				console.log("修改")
				this.isEidt = true
				console.log(obj)
				this.signId = obj.signId
				this.signName = obj.signName
				
				this.description = obj.description
				
				this.timeInfo[0].startTime = obj.startTime1
				this.timeInfo[0].endTime = obj.endTime1
				
				if(obj.startTime2 != '' && obj.startTime2 != null){
					var temp = {
						//开始时间
						startTime:'',
						//结束时间
						endTime:'',
						start:0,
						end:23
					}
					this.timeInfo.push(temp)
					this.timeInfo[1].startTime = obj.startTime2
					this.timeInfo[1].endTime = obj.endTime2
				}
				if(obj.startTime3 != '' && obj.startTime3 != null){
					var temp = {
						//开始时间
						startTime:'',
						//结束时间
						endTime:'',
						start:0,
						end:23
					}
					this.timeInfo.push(temp)
					this.timeInfo[2].startTime = obj.startTime3
					this.timeInfo[2].endTime = obj.endTime3
				}
				
				if(obj.needLocation == '1'){
					this.needLocation = 1
					this.locationInfo.name = obj.activeLocation
					this.locationInfo.latitude = obj.locationX
					this.locationInfo.longitude = obj.locationY
					
				}
				
				if(obj.needCycle == '1'){
					 
					this.signFrequenceShow[0].value = obj.monday 
					this.signFrequenceShow[1].value = obj.tuesday 
					this.signFrequenceShow[2].value = obj.wednesday
					this.signFrequenceShow[3].value = obj.thursday 
					this.signFrequenceShow[4].value = obj.friday  
					this.signFrequenceShow[5].value = obj.saturday 
					this.signFrequenceShow[6].value = obj.sunday  
				}
				 
				if(obj.signerMessage2) this.isDisply[2] = true
				if(obj.signerMessage3) this.isDisply[3] = true
				if(obj.signerMessage4) this.isDisply[4] = true
				if(obj.signerMessage5) this.isDisply[5] = true
				 
				
				this.result.customer1 = obj.signerMessage2
				this.result.customer2 = obj.signerMessage3
				this.result.customer3 = obj.signerMessage4
				this.result.customer4 = obj.signerMessage5
				this.result.customer5 = obj.signerMessage6
				
				 
			}else{
				console.log("创建")
				this.getCurrentTimeMillionSecond() 
				this.getWeekFromADate(this.dateInfo.millionSecond)
				 
				
				var i = this.dateInfo.week
				if(i == 0 ){
					i == 6
				}else{
					i--;
				}
				  
			    this.signFrequenceShow[i].value = 1
			    console.log(this.signFrequenceShow)
				
				this.isEidt = false 
			}
  
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
				
				var description = '';//描述
				description = this.description
				
				//时间段
				var startTime1 = null;
				var endTime1 = null;
				var startTime2 = null;
				var endTime2 = null;
				var startTime3 = null;
				var endTime3 = null;
				for (var i = 0; i < this.timeInfo.length ; i ++) {
					if(i==0){
						startTime1 = this.timeInfo[i].startTime
						endTime1 = this.timeInfo[i].endTime
					}
					if(i==1){
						startTime2 = this.timeInfo[i].startTime
						endTime2 = this.timeInfo[i].endTime
					}
					if(i==2){
						startTime3 = this.timeInfo[i].startTime
						endTime3 = this.timeInfo[i].endTime
					}
				}
				
				
				//signerMessage1-6
				var signerMessage = [];
				// var signerMessage1 = '';
				// var signerMessage2 = '';
				// var signerMessage3 = '';
				// var signerMessage4 = '';
				// var signerMessage5 = '';
				// var signerMessage6 = '';
				
				signerMessage[0] = this.result.name
				signerMessage[1] = this.result.customer1
				signerMessage[2]= this.result.customer2
				signerMessage[3] = this.result.customer3
				signerMessage[4] = this.result.customer4
				signerMessage[5] = this.result.customer5
				
				 
				//monday - sunday  int 需要周几签到，则传递该参数，value为1。否则不需要传递该参数
				//var weekenday = [];
				var monday = null;
				var tuesday = null;
				var wednesday = null;
				var thursday = null;
				var friday = null;
				var saturday = null;
				var sunday = null;
				
				if(this.isCircleSign){
					monday =    this.signFrequenceShow[0].value
					tuesday =   this.signFrequenceShow[1].value
					wednesday = this.signFrequenceShow[2].value
					thursday =  this.signFrequenceShow[3].value
					friday =    this.signFrequenceShow[4].value
					saturday =  this.signFrequenceShow[5].value
					sunday =    this.signFrequenceShow[6].value
				}else{
					monday  =   0 ;
					tuesday =   0 ;
					wednesday = 0 ;
					thursday =  0 ;
					friday =    0 ;
					saturday =  0 ;
					sunday =    0 ;
				}
				
				
				//locationX
				var locationX = null;
				var locationY = null;
				locationX = this.locationInfo.latitude
				locationY = this.locationInfo.longitude
				
				//needLocation  int 需要位置信息则传递该参数，value为1。否则不需要传递该参数
				var needLocation = 0;
				
				if(this.needLocation){
					needLocation = 1;
					
				}else{
					needLocation = 0; 
				}
				
				
				// 需要循环签到则传递该参数，value为1。否则不需要传递该参数
				var needCycle = 0;
				if(this.isCircleSign){
					needCycle = 1
				}
				
	 
				//需要签到的地理位置信息 地点名称。
				var activeLocation = '';
				activeLocation = this.locationInfo.name
				
				//签到类型，单次签到为single，循环签到为cycle
				var type = 'cycle';
				
 
				return 	[signName,description,
				        startTime1,endTime1,
						startTime2,endTime2,
						startTime3,endTime3,
						signerMessage[0],signerMessage[1],
						signerMessage[2],signerMessage[3],
						signerMessage[4],signerMessage[5],
						monday,tuesday,wednesday,thursday,friday,saturday,sunday,
						locationX,locationY,
						needLocation,
						needCycle,
						activeLocation,
						type
						]							 
			},
			getButtonText(){
				if(this.isEidt){
					return '修改活动信息'
				}else{
					return "创建活动"
				}
			},
			
			
	    },
	    methods: {
			...mapMutations(['logout','getCurrentDate','getCurrentTime','getCurrentTimeMillionSecond','getWeekFromADate']),
			
			stringToObj(objString){
			   return  JSON.parse(decodeURIComponent(objString));
			},
			
			//签到频率选择
			signFrequenceHandler(index){
				this.signFrequenceShow[index].value ^= true; 
				console.log(this.signFrequenceShow[index].value == true)
			},
			signFreqencePanleChange(e){
				this.signFreqencePanle = e.detail
			},
			
			// 活动名称
			textChanges(e){
				this.signName = e.detail;
			},
			// 活动信息合法性判断
			clickHandler(data){
				console.log(this.signName)
				if(data ==1){
					uni.showToast({
						title:"签到者姓名必选",
						icon:"none",
						duration:1000
					})
				}
				else if(data == 2){
					 
				}
				//判断活动是否合法
				else if(data == 3){
					var time = this.timeInfo
					var startTime1 = time[0].startTime
					var endTime1 =   time[0].endTime
					try{
						var startTime2 = time[1].startTime 
						var endTime2 =   time[1].endTime  
					}
					catch(e){
						startTime2 = ''
						endTime2 = ''
					}
					
					try{
						var startTime3 = time[2].startTime  
						var endTime3 =   time[2].endTime    
					}
					catch(e){
						startTime3 = ''
						endTime3 = ''
					}
					
					var  flag = true;  
					
					if(this.signName == ''){
						this.showToast("活动名称不能为空~") 
						flag = false;
					}
					 
					 
					if(startTime1 > endTime1) {
						this.showToast("时间段1 开始时间不能 > 结束时间") 
						flag = false;
					} 
					 
					if(startTime2 != '' && startTime2 > endTime2) {
						this.showToast("时间段2 开始时间不能 > 结束时间") 
						flag = false;
					} 
					if(startTime3 != '' && startTime3 > endTime3) {
						this.showToast("时间段3 开始时间不能 > 结束时间") 
						flag = false;
					} 
					 
					if(startTime2 != '' && endTime1 > startTime2) {
					 	this.showToast("时间段2 开始时间不能 < 时间段1 结束时间") 
						flag = false;
					} 
					
					if(startTime3 != '' && endTime2 > startTime3) {
					 	this.showToast("时间段3 开始时间不能 < 时间段2 结束时间") 
						flag = false;
					} 
					
					var tempFlag = false
					for(var i = 0 ; i < this.signFrequenceShow.length; i++){
						if(this.signFrequenceShow[i].value == true ){
							tempFlag = true;
						}
					}
					if(tempFlag){
						
					}else{
						this.showToast("必须选择一个日期") 
						flag = false
					}
					
					if(flag){
						console.log("[active circleActive] info :")
						
						this.SendRequst()
						
					}
					 
			
				}
			},
	        // 自定义信息字段
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
				}else if(data == 2){
					if(content != ''){
						this.isDisply[data] = true
						this.isDisply[data+1] = true
					}else{
						if(this.result.customer4 != ''){
							this.result.customer3 = this.result.customer4
							this.result.customer4 = ''
							this.isDisply[data+1] = false 
						}
					}
				}else if(data == 3){
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
			// 发送请求
			SendRequst(){
				uni.getStorage({
					key:"userInfo",
					success:(e)=>{
						var cookies = e.data.cookies
						var reqData  = this.getRequestDate;
						if(this.isEidt){
							console.log("发送编辑请求")
							console.log(reqData)
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/updateSignCycle",
								header: {
									   'Cookie':getApp().globalData.cookies
									 },
								method:"POST",
								data:{
									signId:this.signId,
									teamId:this.teamId,
									signName:reqData[0],
									description:reqData[1],
									startTime1:reqData[2],
									endTime1:reqData[3],
									startTime2:reqData[4],
									endTime2:reqData[5],
									startTime3:reqData[6],
									endTime3:reqData[7],
									signerMessage1:reqData[8],
									signerMessage2:reqData[9],
									signerMessage3:reqData[10],
									signerMessage4:reqData[11],
									signerMessage5:reqData[12],
									signerMessage6:reqData[13],
									monday:reqData[14],
									tuesday:reqData[15],
									wednesday:reqData[16],
									thursday:reqData[17],
									friday:reqData[18],
									saturday:reqData[19],
									sunday:reqData[20],
									locationX:reqData[21],
									locationY:reqData[22],
									needLocation:reqData[23],
									needCycle:reqData[24],
									activeLocation:reqData[25],
									type:reqData[26]
								},
								success: (e) => {
									console.log("修改：服务器传回")
									console.log(e)
									var status = e.data.code;
									var serverResponse = e.data.data
									console.log(status)
									if(status == '20251'){
										
										 var signInfo = e.data.data
										 var signInfoItems = {}
										 signInfoItems.activeLocation = signInfo.activeLocation
										 signInfoItems.codeUrl = signInfo.codeUrl
										 signInfoItems.createSignTime = signInfo.createSignTime
										 signInfoItems.description = signInfo.description
										 									  
										 signInfoItems.startTime1 = signInfo.startTime1
										 signInfoItems.startTime2 = signInfo.startTime2
										 signInfoItems.startTime3 = signInfo.startTime3
										  
										 signInfoItems.endTime1 = signInfo.endTime1
										 signInfoItems.endTime2 = signInfo.endTime2
										 signInfoItems.endTime3 = signInfo.endTime3
										 
										 
										 signInfoItems.needCycle = signInfo.needCycle
										 signInfoItems.monday = signInfo.monday
										 signInfoItems.tuesday = signInfo.tuesday
										 signInfoItems.wednesday = signInfo.wednesday
										 signInfoItems.thursday = signInfo.thursday
										 signInfoItems.friday = signInfo.friday
										 signInfoItems.saturday = signInfo.saturday
										 signInfoItems.sunday = signInfo.sunday
										 
										 signInfoItems.needLocation = signInfo.needLocation
										 signInfoItems.locationX = signInfo.locationX
										 signInfoItems.locationY = signInfo.locationY
										 
										 signInfoItems.signId = signInfo.signId
										 signInfoItems.signName = signInfo.signName
										 
										 signInfoItems.signerMessage1 = signInfo.signerMessage1
										 signInfoItems.signerMessage2 = signInfo.signerMessage2
										 signInfoItems.signerMessage3 = signInfo.signerMessage3
										 signInfoItems.signerMessage4 = signInfo.signerMessage4
										 signInfoItems.signerMessage5 = signInfo.signerMessage5
										 signInfoItems.signerMessage6 = signInfo.signerMessage6
										 
										 signInfoItems.cycle = signInfo.cycle
										 signInfoItems.teamId = this.teamId
																			   
										 var objString =  encodeURIComponent(JSON.stringify(signInfoItems))
										 uni.redirectTo({
										 	url:"./circleActiveDisplay?signInfo="+objString,
										 	success: () => {
										 		uni.showToast({
										 			title:"修改成功", 
										 			icon:"none",
										 			duration:100,
										 		})
										 	}
										 })
									   
											
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
									else if(status == '20444' || status == '40444'){
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
									}else if(status == "24531")	{
										uni.showToast({
											title:"没有创建权限",
											icon:"none",
											duration:1500,
										})
									}else if(status == '22401'){
										uni.showToast({
											title:"服务器错误",
											icon:"none",
											duration:1500,
										})
									}else{
										console.log("未知状态码")
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
							console.log(reqData)
							uni.request({
								url:getApp().globalData.webUrl+"/SIESign/createCycleSign",
								header: {
									   'Cookie':getApp().globalData.cookies
									 },
								data:{
									signId:this.signId,
									teamId:this.teamId,
									signName:reqData[0],
									description:reqData[1],
									startTime1:reqData[2],
									endTime1:reqData[3],
									startTime2:reqData[4],
									endTime2:reqData[5],
									startTime3:reqData[6],
									endTime3:reqData[7],
									signerMessage1:reqData[8],
									signerMessage2:reqData[9],
									signerMessage3:reqData[10],
									signerMessage4:reqData[11],
									signerMessage5:reqData[12],
									signerMessage6:reqData[13],
									monday:reqData[14],
									tuesday:reqData[15],
									wednesday:reqData[16],
									thursday:reqData[17],
									friday:reqData[18],
									saturday:reqData[19],
									sunday:reqData[20],
									locationX:reqData[21],
									locationY:reqData[22],
									needLocation:reqData[23],
									needCycle:reqData[24],
									activeLocation:reqData[25],
									type:reqData[26]
								},
								method:"Post",
								success: (e) => {
									console.log("[active circleActive ]  info : ")
									console.log(e)
									var status = e.data.code;
									console.log(status)
									if(status == '22501'){
										
										var signInfo = e.data.data
										var signInfoItems = {}
										signInfoItems.activeLocation = signInfo.activeLocation
										signInfoItems.codeUrl = signInfo.codeUrl
										signInfoItems.createSignTime = signInfo.createSignTime
										signInfoItems.description = signInfo.description
									  
										signInfoItems.startTime1 = signInfo.startTime1
										signInfoItems.startTime2 = signInfo.startTime2
										signInfoItems.startTime3 = signInfo.startTime3
										 
										signInfoItems.endTime1 = signInfo.endTime1
										signInfoItems.endTime2 = signInfo.endTime2
										signInfoItems.endTime3 = signInfo.endTime3
										
										
										signInfoItems.needCycle = signInfo.needCycle
										signInfoItems.monday = signInfo.monday
										signInfoItems.tuesday = signInfo.tuesday
										signInfoItems.wednesday = signInfo.wednesday
										signInfoItems.thursday = signInfo.thursday
										signInfoItems.friday = signInfo.friday
										signInfoItems.saturday = signInfo.saturday
										signInfoItems.sunday = signInfo.sunday
										
										signInfoItems.needLocation = signInfo.needLocation
										signInfoItems.locationX = signInfo.locationX
										signInfoItems.locationY = signInfo.locationY
										
										signInfoItems.signId = signInfo.signId
										signInfoItems.signName = signInfo.signName
										
										signInfoItems.signerMessage1 = signInfo.signerMessage1
										signInfoItems.signerMessage2 = signInfo.signerMessage2
										signInfoItems.signerMessage3 = signInfo.signerMessage3
										signInfoItems.signerMessage4 = signInfo.signerMessage4
										signInfoItems.signerMessage5 = signInfo.signerMessage5
										signInfoItems.signerMessage6 = signInfo.signerMessage6
										
										signInfoItems.cycle = signInfo.cycle
									     
										signInfoItems.teamId = this.teamId
										
										var objString =  encodeURIComponent(JSON.stringify(signInfoItems))
										uni.redirectTo({
											url:"./circleActiveDisplay?signInfo="+objString,
											success: () => {
												uni.showToast({
													title:"创建成功", 
													icon:"none",
													duration:100,
												})
											}
										})
									 	
									}else if(status == '20444'){
										//登录状态过期
										this.logout()
										uni.switchTab({
											url:"../mine/mine",
											success: () => {
												uni.showToast({
													title:"登录过期，重新登录",
													icon:"none",
													duration:1500,
												})
											}
										})
										
									}else if(status == "24531")	{
										uni.showToast({
											title:"没有创建权限",
											icon:"none",
											duration:1500,
										})
									}else if(status == '22401'){
										uni.showToast({
											title:"服务器错误",
											icon:"none",
											duration:1500,
										})
									}else{
										console.log("未知状态码")
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
			
			// 时间处理函数	
	        bindTimeChange: function(event,index,type) {
				console.log(event)
				console.log(index)
				console.log(type)
				if(type == 'start'){
					this.timeInfo[index].startTime = event.detail.value
					this.timeInfo[index].endTime  = this.timeInfo[index].startTime
					// this.timeInfo[index].start = this.timeInfo[index].startTime
				}else{
					this.timeInfo[index].endTime = event.detail.value
				}
	           
	        },
			// 添加删除时间点
			timeClickHandler(index,operate){
				if(operate == 'delete'){
					var len = this.timeInfo.length
					//最少一个，最多三个
					if(len <= 1){
						Notify({ type: 'danger', message: '至少需要一个时间段' });
					}else{
						this.timeInfo.splice(len-1,1)
					} 
				}else{
					var len = this.timeInfo.length
					//最少一个，最多三个
					if(len >= 3){
						Notify({ type: 'danger', message: '已到达时间段上限' });
					}else{
						var time = {}
						time.startTime = this.timeInfo[len-1].endTime
						time.endTime = time.startTime  
						time.start = time.startTime
						time.end = 23
					 
						this.timeInfo.push(time)
						time = {}
					} 
				}
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
	        },
			// 多功能面板打开
			multifunctionClickHandler(e){
				
				if(e == 'multifunctionPanel'){
					this.multifunctionShow = true
				}else if(e == 'needLocationInfo'){
					if(this.needLocation){
						this.needLocation = false
					}else{
						this.needLocation = true
					}
				}
				 
			},
			// 多功能面板关闭
			onClose(){
				 this.multifunctionShow = false
			},
			// 多功能面板取消
			onCancel(){
				this.multifunctionShow = false
			},
		    // 多功能事件
			onSelect(event) {
				//选择的操作 location  or circle
				 
			    var choose = event.detail.id
				
				//选择地理位置
			    if(choose == 'location'){
					
					console.log("选择地理位置签到")
					uni.chooseLocation({
					    success:(res)=> {
							Notify({ type: 'success', message: '签到需要地理信息' });
							this.locationInfo.name = res.name
							this.locationInfo.address =res.address
							this.locationInfo.latitude = res.latitude
							this.locationInfo.longitude = res.longitude
							this.needLocation = true;
					        console.log('位置名称：' + res.name);
					        console.log('详细地址：' + res.address);
					        console.log('纬度：' + res.latitude);
					        console.log('经度：' + res.longitude);
					    },
						fail:(res)=>{
							Notify({ type: 'danger', message: '取消选择，签到不需要地理信息' });
							this.locationInfo = {}
							this.needLocation = false;
						}
					})
				}			
				//选择循环签到
				else if(choose == 'circle'){
					// console.log("选择循环签到")
					// this.isCircleSign ^= true;
				}
				
			},
			//时间选择
			onInput(event) {
				this.timeInfo[0].currentTime = event.detail
			},
			showToast(msg){
				uni.showToast({
					title:msg,
					icon:"none",
					duration:1000
				})
			}
		
		},
		
		
	}
</script>

<style >
	#singleActive-container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		 
		
	}
	.width100{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.width80{
		width: 80%;
	}
	
	.timeSelect{
		display: flex;
		width: 100%;
		height: 100%;
		
	}
	.value-class {
		flex: none !important;
    }
	.buttonStyle{
		width: 50%;
		flex: 1 !important;	 
	}
	.van-cell__title{
		flex: 1 !important;
	}
	.van-cell__value{
		flex: 1 ;	 
	}
	.test{
		flex: 4 !important;	 
	}
	.input-line{
		display: inline-block;
	}
	.input-display{
		text-align: center;
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
