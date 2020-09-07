<template>
<view class="box_bg">
		
	<view class="active_text">
		<label>{{activename}}</label>
	</view>	
	<view class="box_input">
		<view class="info" v-for="item in input_item" v-if="item.name" :key="item.id">
			<view class="text">
				<label>{{item.name}}</label>
			</view>
			<view class="input">
				<input 
				type="text" 
				:adjust-position="true" 
				:hold-keyboard="true"
				:placeholder='item.info'
				v-model="item.input_info"
				/>
			</view>
		</view>
		
		<view>
			<button type="default" @click="submit" class="submit">确认提交</button>
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
			activename:'',
			str:'',
			canRequest:false,
			input_item:[
				{id:1,name:'姓名',info:'请输入您的姓名',input_info:''},
				{id:2,name:'',info:'',input_info:''},
				{id:3,name:'',info:'',input_info:''},
				{id:4,name:'',info:'',input_info:''},
				{id:5,name:'',info:'',input_info:''},
				{id:6,name:'',info:'',input_info:''},
			],
			signerMessage1Content:'',
			signerMessage2Content:'',
			signerMessage3Content:'',
			signerMessage4Content:'',
			signerMessage5Content:'',
			signerMessage6Content:'',
			latitude: 0,
			longitude: 0,
			type:'null'
			
			
			
}			
},
	onLoad(res) {
		console.log("[index signInput ] onload info :")

		this.str=JSON.parse(res.data);

		if(this.str.type == 'cycle'){
			this.type = 'cycle'
			uni.getLocation({
				type:"gcj02", 
				altitude:true, 
				success: (e) => {
					
					console.log(e)
					this.showToast("获取地理位置成功")
					this.latitude = e.latitude
					this.longitude = e.longitude
					console.log("latitude:"+this.latitude)
					console.log("longitude:"+this.longitude)
				},
				fail: (e) => {
					console.error(e)
					this.showToast("获取地理位置失败")
				}
			})
			console.log('cycle')
		}else{
			console.log('singal')
		}

		this.activename = this.str.signName;
		this.input_item[1].name = this.str.signerMessage2;
		this.input_item[1].info = this.str.signerMessage2;
		this.input_item[2].name = this.str.signerMessage3;
		this.input_item[2].info = this.str.signerMessage3;
		this.input_item[3].name = this.str.signerMessage4;
		this.input_item[3].info = this.str.signerMessage4;
		this.input_item[4].name = this.str.signerMessage5;
		this.input_item[4].info = this.str.signerMessage5;
		this.input_item[5].name = this.str.signerMessage6;
		this.input_item[5].info = this.str.signerMessage6;
		console.log(this.str)
	},
	methods:{
		...mapMutations(['logout']),
		showToast(msg){
			uni.showToast({
				title:msg,
				icon:"none",
				duration:1500
			})
		},
		submit(){
			console.log(this.str);
			for (var i = 0 ; i < this.input_item.length ; i++ ){
				if(this.input_item[i].name != ''){
					if(this.input_item[i].input_info != ''){
						this.canRequest = true
					}else{
						this.canRequest = false
					}
				}
			}
			if(this.canRequest == true){
				this.signerMessage1Content = this.input_item[0].input_info
				this.signerMessage2Content = this.input_item[1].input_info
				this.signerMessage3Content = this.input_item[2].input_info
				this.signerMessage4Content = this.input_item[3].input_info
				this.signerMessage5Content = this.input_item[4].input_info
				this.signerMessage6Content = this.input_item[5].input_info
				
				if(this.type == 'cycle'){
					console.log("多功能请求")
					uni.request({
						url:getApp().globalData.webUrl+"/SIESign/punchCard", 
						header:{
							'Cookie':getApp().globalData.cookies
						},
						data: {
							 
							signId:this.str.signId,
							signerMessage1Content:this.signerMessage1Content,
							signerMessage2Content:this.signerMessage2Content,
							signerMessage3Content:this.signerMessage3Content,
							signerMessage4Content:this.signerMessage4Content,
							signerMessage5Content:this.signerMessage5Content,
							signerMessage6Content:this.signerMessage6Content,
							locationY:this.longitude,
							locationX:this.latitude
						},
						method:'POST',
						success: (res) => {
							console.log("[index signInput] circle info:")
							console.log(res)
							this.handleStateCode(res.data.code,res)
						}
						
					});
					
				}
				else{
					console.log("单次请求")
					uni.request({
						url:getApp().globalData.webUrl+"/SIESign/confirmSign", 
						header:{
							'Cookie':getApp().globalData.cookies
						},
						data: {
							 
							signId:this.str.signId,
							signerMessage1Content:this.signerMessage1Content,
							signerMessage2Content:this.signerMessage2Content,
							signerMessage3Content:this.signerMessage3Content,
							signerMessage4Content:this.signerMessage4Content,
							signerMessage5Content:this.signerMessage5Content,
							signerMessage6Content:this.signerMessage6Content,
						},
						method:'POST',
						success: (res) => {
							 
							 console.log("[index signInput] singal info:")
							 console.log(res)
							 this.handleStateCode(res.data.code,res)
							 
						}
					});
				}
				
				
			}else{
				uni.showToast({
					title:"请输入完整的信息",
					icon:"none",
					duration:2000
				})
			}
		
		},
		handleStateCode(code,e){
			switch(code){
				case 20200:{
					 
					uni.redirectTo({
						url:"../active/activeDetail/displaySignInfo?signId="+this.str.signId+'&'+'activeName='+this.str.signName,
						success:()=> {
							uni.showToast({
								title:'签到成功',
								icon:"none",
								duration:2000
							});	
						}
					
					})
					
					
					break;
				}
				case 20201:{
					
					uni.switchTab({
						url:'./index',
						success: () => {
							uni.showToast({
								icon:'none',
								title:'签到未开始',
								duration:2000
							});
						}
					})
					
					
					break;
				}
				case 20202:{
					
					uni.switchTab({
						url:'./index',
						success: () => {
							uni.showToast({
								icon:'none',
								title:'签到已结束',
								duration:2000
							});
						}
					})
					
					
					break;
				}
				case 20203:{
					
	
					uni.redirectTo({
						url:"../active/activeDetail/displaySignInfo?signId="+this.str.signId+'&'+'activeName='+this.str.signName,
						success:()=> {
							uni.showToast({
								title:'已经签到,请勿重复提交',
								icon:"none",
								duration:2000
							});	
						}
					
					})
					
					
					break;
				}
				case 20204:{
					uni.showToast({
						icon:'none',
						title:'未知原因',
						duration:2000
					});
					break;
				}
				case 20444:{
					this.logout()
					
					uni.switchTab({
						url:'/pages/mine/mine',
						success: () => {
							uni.showToast({
								icon:'none',
								title:'登录过期，请重新登录',
								duration:2000
							});
						}
						
					})
					
					
					break;
				}
				case 20402:{
					
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast("你已签到")
						}
					})
					break;
				}
				case 24003:{
					
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast("不在规定区域")
						}
					})
					break;
				}
				case 24004:{
					 
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast(e.data.msg)
						}
					})
					break;
				}
				case 22002:{
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast(e.data.msg)
						}
					})
					break;
				}
				
				case 22003:{
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast(e.data.msg)
						}
					})
					break;
				}
				
				case 24005:{
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast(e.data.msg)
						}
					})
					break;
				}
				
				case 24006:{
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast(e.data.msg)
						}
					})
					break;
				}
				case 24009:{
					uni.switchTab({
					 	url:'/pages/mine/mine',
						success: () => {
							this.showToast(e.data.msg)
						}
					})
					break;
				}
				
				default:{
					console.error("[index signInput] error:")
					console.log("未知状态码")
					break;
				}
					
				
			}
		}
			
			
    },
		
}
</script>

<style>
.box_bg{
	width: 100%;
	height: 100%;
	background-image: url(../../static/imgs/index/423e41baf4c3e88e30a2cfee56c96d20.jpg);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.active_text{
	margin-left: 50%;
	height: 150rpx;
	transform: translate(-50%);
	text-align: center;
	padding-top: 50rpx;
	font-weight: 600;
	font-size: 40rpx;
}
.box_input{
	margin-left: 50%;
	transform: translate(-50%);
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #FFFFFF;
	box-shadow: 10px 10px 5px #888888;
}
.info{
	margin-top:10rpx;
	width: 60%;
	height: 100rpx;
	
}
.text{
	margin-top:15rpx;
	font-weight: 700;
	font-size: 30rpx;
}
.input{
	border-bottom-style: solid;
	border-bottom-width: 2rpx;
	margin-top: 5rpx;
	
}
.submit{
	margin-top: 50rpx;
	margin-bottom: 20rpx;
	width:200rpx;
	height: 80rpx;
	font-size: 30rpx;
	text-align: center;
}
</style>