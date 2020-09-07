<template>
	<view>
		<van-tabs :active="0" >
			
			<van-tab title="已签到"> 
				<van-cell title="已签到人数" :value="signInfo.signRecordList == null ? 0 : signInfo.signRecordList.length" />
				<view style="margin-top: 10px;" v-for="(item,index) in signed" :key='index'>
					<view v-for="(itemAttr,indexAttr) in signInfo.customAtrrValue" :key="indexAttr">
						<van-cell v-if="itemAttr != '' && itemAttr != null " :title="itemAttr" :value="item['signerMessage'+(indexAttr+1)+'Content']" />
					</view>
					<van-cell title="签到时间" :value="item.signTime"/>
				</view>
			</van-tab>
		  
			<van-tab title="未签到">
				<van-cell title="未签到人数" :value="signInfo.signCycleUnfinish == null ? 0 : signInfo.signCycleUnfinish.length" />
				<view style="margin-top: 10px;" v-for="(item,index) in unsigned" :key='index'>
					<!-- <view v-for="(itemAttr,indexAttr) in signInfo.customAtrrValue" :key="indexAttr">
						<van-cell v-if="itemAttr != '' && itemAttr != null " :title="itemAttr" :value="item['memberBaseMessageContent'+(indexAttr+1)]" />
					</view> -->
					<view >
						<van-cell vtitle="姓名" :value="item['memberBaseMessageContent'+1]" />
					</view>
				</view>
			</van-tab>
		</van-tabs>
		 
		
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
				signInfo:'',
				signed:[],
				unsigned:[],
			}
		},
		computed:{
			...mapState(['ObjectToStringRes','StringToObjectRes'])
		},
		onLoad(e){
			console.log("teamSignTimeInfo onload")
			if(e.timeSegDatas != null || e.timeSegDatas != undefined){
				this.StringToObjectFun(e.timeSegDatas)
				 
				this.signInfo = this.StringToObjectRes
				this.signed = this.signInfo.signRecordList == null ? [] : this.signInfo.signRecordList
				this.unsigned = this.signInfo.signCycleUnfinish == null ? [] : this.signInfo.signCycleUnfinish
				console.log(this.signInfo)
			}
		},
		methods:{
			...mapMutations(['ObjectToStringFun','StringToObjectFun']),
		}
		
	}
</script>

<style>
</style>
