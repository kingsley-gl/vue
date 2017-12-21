<template>
	<div class="wrap">
		<div class="s_title">{{sysTitle}}</div>
		<div class="login">
			<div class="loginBtn" @click="goToLogin">登陆/注册</div>
			<div class="user"  @click="showPer_C()">
				<i class="el-icon-location"></i>
				<span>{{user}}</span>
				<i class="el-icon-caret-bottom"></i>
			</div>
			<div class="personalCenter" v-if="isPer_Center">
				<ul>
					<li><i class="el-icon-setting"></i>设置</li>
					<li><i class="el-icon-location-outline"></i>个人中心</li>
					<li><i class="el-icon-upload2"></i>退出</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data (){
			return{
				sysTitle:"管理服务平台",
				user:"Admin",
				isPer_Center:false
			}
		},
		methods:{
			showPer_C(){
				this.isPer_Center=!this.isPer_Center
				return this.isPer_Center
			},
			goToLogin(){
				this.$router.push("/login")
			}
		}
	}
</script>
<style scoped>

	.wrap{
		/*width: 100%;*/
		height:45px;
		color:#fff;
		font-size: 16px;
		line-height: 45px;
		padding-left:15px;
		background:url(/static/images/bg_navbar.png);
		/*overflow:hidden;*/
		/*clear: both;*/
	}
	.s_title{
		float: left;
	}
	.login{
		float:right;
	}
	.loginBtn{
		float:left;
		margin-right:10px;
		cursor:pointer;
	}
	.user{
		float:left;
		cursor:pointer;
		position: relative;
	}
	.personalCenter{
		position:absolute;
		background: #0e6fc6;
		top:43px;
		right: 5px;
		cursor:pointer;

	}
	.personalCenter ul{
		text-align:left;
		margin:0 !important;
		padding:0 !important;
		box-shadow: 0 2px 4px rgba(0,0,0,.2);

	}
	.personalCenter ul i{
		padding:8px;
	}
	.personalCenter ul li{
		text-align:left;
		padding-right: 66px;
		color:#fff;
	}
	.personalCenter ul li:hover{
		color:blue;
		background-color: #f5f5f5;
		opacity: 0.6
	}
</style>