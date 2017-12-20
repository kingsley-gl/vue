<template>
	<div class="warp">
		<c-header></c-header>
			<div class="mainwarp">
			<transition name="bounce">
				<div class="loginwarp" v-if="showLogin">
					<div class="dataB_title">数据交换管理服务平台</div>
					<div class="dataB_userName">
						<input type="text" placeholder="用户名">
						<i class="el-icon-location"></i>
					</div>
					<div class="dataB_passWord">
						<input type="password" placeholder="密码">
						<i class="el-icon-edit"></i>
					</div>
					<div class="register">
						<el-checkbox v-model="checked">记住密码</el-checkbox>
						<span @click="toIndex">
							<i class="el-icon-circle-check"></i>
							登录
						</span>
					</div>
					<div class="loginfoot">
						<span @click="toGoFindpassword">
							<i class="el-icon-arrow-left"></i>
							忘记密码
						</span>
						<span @click='toResgister'>
							我要注册
							<i class="el-icon-arrow-right"></i>
						</span>
					</div>
				</div>
			</transition>
			<transition name="bounce">
			<div class="findpassword" v-if='showFindpassword'>
				<div class="dataA_title">找回密码</div>
				<div class="tip">填写你得邮箱，用于找回密码</div>
				<div class="dataB_userName">
					<input type="text" placeholder="邮箱">
					<i class="el-icon-refresh"></i>
				</div>
				<div class="register">
					<span>
						<i class="el-icon-circle-check"></i>
						发送
					</span>
				</div>
				<div class="loginfoot f_p_l">
					<span @click="toLogin">
						返回登陆
						<i class="el-icon-arrow-right"></i>
					</span>
				</div>
			</div>
			</transition>
			<transition name="bounce">
			<div class="registerwarp" v-if='showRegister'>
				<div class="dataC_title">新用户注册</div>
				<div class="dataB_userName">
					<input type="text" placeholder="邮箱">
					<i class="el-icon-refresh"></i>
				</div>
				<div class="dataB_userName">
					<input type="text" placeholder="用户名">
					<i class="el-icon-refresh"></i>
				</div>
				<div class="dataB_userName">
					<input type="text" placeholder="密码">
					<i class="el-icon-refresh"></i>
				</div>
				<div class="dataB_userName">
					<input type="text" placeholder="重复密码">
					<i class="el-icon-refresh"></i>
				</div>
				<div class="register1">
					<el-checkbox v-model="checked2">我同意</el-checkbox>
					<span>用户条款</span>
				</div>
				<div class="register2">
					<span>
						注册
						<i class="el-icon-circle-check"></i>
					</span>
					<span>
						<i class="el-icon-circle-check"></i>
						重置
					</span>
				</div>
				<div class="loginfoot f_p_l">
					<span @click='toLogin'>
						返回登陆
						<i class="el-icon-arrow-right"></i>
					</span>
				</div>
			</div>
			</transition>
		</div>
		
	</div>
</template>
<script>
	import cHeader from '../header/header'
	export default{
		data(){
			return{
				 checked: true,
				 checked2:true,
				 showLogin:true,
				 showRegister:false,
				 showFindpassword:false
			}
		},
		methods:{
			toGoFindpassword(){
				console.log(111)
				this.showLogin=false
				this.showFindpassword=true
			},
			toLogin(){
				this.showLogin=true
				this.showFindpassword=false
				this.showRegister=false
			},
			toResgister(){
				this.showLogin=false
				this.showRegister=true
			},
			toIndex(){
				this.$router.push("/dataHome/dtHomefirstChild")
			}

		},
		components:{
			cHeader,
		}
	}
</script>
<style scoped>
	.mainwarp{
	}
	.loginwarp,.findpassword,.registerwarp{
		background: #023d75;
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin:auto;
		border:1px solid #0381e8;
	}
	.loginwarp{
		width: 438px;
		height: 332px;
	}
	.findpassword{
		width: 438px;
		height: 300px;
	}
	.registerwarp{
		width: 438px;
		height: 452px;
	}
	.dataA_title,.dataB_title,.dataC_title{
		margin:0 35px;
		margin-top: 28px;
		font-size: 23px;
		padding-bottom: 20px;
	}
	.dataB_title{
		text-align: center;
		color:#478FCA!important;
		border-bottom: 1px solid #0381e8;
	}
	.dataA_title{
		color:#DD5A43!important;
		border-bottom: 1px solid #CCC;
	}
	.dataC_title{
		color:#69AA46!important;
		border-bottom: 1px solid #cce2c1;
	}
	.tip{
		margin:10px 35px;
	}
	.dataB_userName{
		margin:15px 35px;
		text-align: center;
		background-color:#023d75;
		padding:5px 0;
		border:1px solid #0381e8;
	}
	.dataB_passWord{
		margin:0 35px;
		background-color:#023d75;
		text-align: center;
		padding:5px 0;
		border:1px solid #0381e8;
	}
	input{
		background-color:#023d75;
		color:#fff;
		border:none;
		width: 320px;
		height: 25px;
	}
	input:focus{
		border:none;
		outline:none;
	}
	.register{
		margin:15px 35px;
		overflow: hidden;
	}
	.register1{
		margin:15px 35px;
	}
	.register2{
		margin:15px 35px;
	}
	.register span{
		border:1px solid #0381e8;
		padding:8px 20px;
		float:right;
		font-size: 14px;
		cursor: pointer;
	}
	.register2 span:nth-child(1){
		padding:5px 80px;
		margin-right:20px;
		border:1px solid #0381e8;
		cursor:pointer;
	}
	.register2 span:nth-child(2){
		padding:5px 20px;
		/*margin-right:50px;*/
		border:1px solid #0381e8;
		cursor:pointer;
	}
	.loginfoot {
		margin:38px 0 0;
		padding:10px 0;
		border-top:1px solid #0381e8;
	}
	.loginfoot  span:nth-child(1){
		color:#FE9;
		margin-left: 10px;
		cursor:pointer;
	}
	.loginfoot span:nth-child(2){
		color:#CF7;
		float: right;
		margin-right:10px;
		cursor: pointer;
	}
	.f_p_l{
		text-align: center;
	}
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(0.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
</style>