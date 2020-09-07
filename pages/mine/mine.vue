<template>
	<view id="mine-container">
		<view class="personalInfoContainer">
			<view class="personalInfoDetail" v-if="globalData.isLoged == true">

				<view class="headImg">
					<van-image round width="5rem" height="5rem" :src="globalData.avatarUrl" />
				</view>
				<view class="nickname ">
					<view style="font-size: 50rpx;"> {{globalData.userNickName}} </view>
				</view>
			</view>
			<view class="personalInfoBtn" v-else>
				<view class="logBtnContainer">
					<van-button round color="linear-gradient(to right, #50e2ff, #6149f9)" size="large" open-type="getUserInfo"
					 @getuserinfo="getUserInfo" custom-style="width:100">登 录</van-button>
				</view>
			</view>
		</view>

		<view class="secondPart">

			<!-- <van-notice-bar
			  mode="closeable"
			  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
			/> -->
			<div @click="jumpactive">
				<van-cell title=" 管理的活动" icon="/static/imgs/mine/manager.png" />
			</div>

			<div @click="jumpmanage">
				<van-cell title=" 参加的活动" icon="/static/imgs/mine/history.png" />
			</div>

			<view @click="myTeam">
				<van-cell title=" 我的团队" icon="/static/imgs/mine/team.png" />
			</view>

			<view v-if="false">
				<div @click="light">
					<van-cell title=" 光伏阵列" icon="/static/imgs/mine/light.png" />
				</div>
			</view>

			<view v-if="false">
				<div @click="explain">
					<van-cell title="使用说明" icon="/static/imgs/mine/explain.png" />
				</div>
			</view>
		</view>

		<view class="mineThirdPart" v-if="globalData.isLoged == true">
			<van-button size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="mineLogout">
				退出登录
			</van-button>
		</view>

		<van-dialog id="van-dialog" />

	</view>
</template>

<script>
	import Dialog from '@/static/vant/dialog/dialog';
	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {

		components: {

		},

		data() {
			return {

				imagepath: '',
				nickName: '',
				judge: 0
			}

		},
		onLoad() {

			console.log("mine 启动时调用getStorageFormChach")
			this.getStorageFormChach();


		},
		computed: {
			...mapState(['globalData']),

		},
		methods: {
			...mapMutations(['initLogin', 'getStorageFormChach', 'logout']),
			mineLogout() {
				// /
				Dialog.confirm({
						title: '退出登录',
						message: '是否退出登录？',
					})
					.then(() => {
						// on confirm
						uni.request({
							url: getApp().globalData.webUrl + "/SIESign/quit",
							header: {
								'Cookie': getApp().globalData.cookies
							},
							method: "POST",
							success: (e) => {
								console.log(1)
								console.log(e)
								var stateCode = e.data.code
								if (stateCode == '22511') {


									console.log("[mine ] logout : ")
									console.log(this.globalData)
									uni.switchTab({
										url: '/pages/mine/mine',
										success: (e) => {
											this.logout()
											uni.showToast({
												title: "退出成功",
												icon: "none",
												duration: 1500
											})
										}
									})

								} else if (stateCode == '20444') {
									console.log("[mine ] info : ")
									console.log("登录失效")

									uni.switchTab({
										url: './mine',
										success: (e) => {
											this.logout()
											uni.showToast({
												title: "登录过期，请重新登录",
												icon: "none",
												duration: 1500
											})
										}
									})
								} else {
									console.log('[mine]:info 错误状态码' + stateCode)
								}

							}
						})

					})
					.catch(() => {
						// on cancel
						uni.showToast({
							title: "取消退出",
							icon: "none",
							duration: 1000
						})
					});

			},
			text() {
				uni.navigateTo({
					url: "./light"
				})
			},
			jumpactive() {
				uni.navigateTo({
					url: "./manage"
				})
			},
			jumpmanage() {
				uni.navigateTo({
					url: "./joinIn"
				})
			},
			getUserInfo(e) {

				this.initLogin();


			},
			myTeam() {
				uni.navigateTo({
					url: "./myTeam"
				})
			},
			light() {
				uni.navigateTo({
					url: "./myLight"
				})
			},
			explain(){
				uni.navigateTo({
					url: "./explain"
				})
			}
		}

	}
</script>

<style>
	/* body{
		background-image: url(http://pic31.photophoto.cn/20140630/0027010496869910_b.jpg);
		background-size: 320px 456px;
	} */
	.van-cell__title {
		font-size: 32rpx;
		padding-left: 10rpx;
	}

	#mine-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;


	}

	.mineThirdPart {
		width: 80%;
		height: 120rpx;
		margin-top: 20rpx;
	}

	.personalInfoContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-justify: auto;
		align-items: center;
		height: 300rpx;
		width: 100%;
		margin-top: 20rpx;
		background-color: #FFFFFF;
	}

	.personalInfoDetail {
		display: flex;
		flex-direction: row !important;
		align-items: center;
		height: 100%;
		width: 100%;

	}

	.headImg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
		height: 250rpx;
		width: 250rpx;

	}

	.nickname {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 250rpx;
		width: 350rpx;
		margin-left: 20rpx;
		font-family: system-ui;

	}

	.personalInfoBtn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-justify: auto;
		align-items: center;
		height: 200rpx;
		width: 100%;

	}

	.logBtnContainer {
		width: 80%;
		height: 100rpx;
	}

	.secondPart {
		display: flex;
		width: 100%;
		flex-direction: column;


		margin-top: 20rpx;

	}
</style>
