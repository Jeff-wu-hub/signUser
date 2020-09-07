<script>
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex'; 
	export default {
		globalData:{
			//true 登录了  flase 未登录
			webUrl:"https://www.iotexplore.top",
			opinion:true,
			isLoged:false
		},
		computed:{
			...mapState(['globalData']),
		},
		methods:{
			...mapMutations(['logout',"setGlobalData",'getStorageFormChach'])
			
		},
        onLaunch: function() {
			console.log('App Launch')
			uni.authorize({
			    scope: 'scope.writePhotosAlbum',
			    success() {
			       
			    }
			})
			console.log("App 启动时调用getStorageFormChach")
			this.getStorageFormChach();
			uni.getStorage({
				key:"userInfo",
				success: (e) => {
					console.log("用户已登录,读取到的数据为")
					var obj = {};
					getApp().globalData = e.data;  
					console.log(getApp().globalData);
					 
				},

				fail: (e) => {
					this.logout()
					uni.showToast({
						title:"用户未登录，或登录过期",
						icon:"none",
						duration:1500,
					})
				}
			})
			
		
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		
	}	
</script>

<style>
	/*每个页面公共css */
	
	@import url("/common/uni.css");
	@import '@/static/vant/common/index.wxss';
	page{
		background-color: #e2e2e2;
		height: 100%;
		 font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
		    Segoe UI, Arial, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei',
		    sans-serif;
	}
	
	 
</style>
