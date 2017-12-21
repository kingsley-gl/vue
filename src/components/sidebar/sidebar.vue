<template>
	<div class="wrap">
		<c-header></c-header>
		<div class="box">
			<div class="sidebar">
				  <ul>
				  		<router-link v-bind:to="items" v-for="(items,index) in sidebarRouter" tag='li'>
				  			<img v-bind:src="sidebarImg[index]" alt="">
				  			<div>{{sidebarText[index]}}</div>
				  		</router-link>
				  </ul>
			</div>
			<!-- <router-view class = "rightBar"></router-view> -->
		</div>
	</div>
</template>
<script>
	import cHeader from '../header/header'
	export default{
		data (){
			return{
				sidebarText:['服务门户','服务器目录系统','管理系统','资源系统','文件管理系统','服务支持系统',"安全支撑系统"],
				sidebarRouter:['/dataHome/dtHomefirstChild','/dataCatalog/dtCatalogfirstChild','/dataInteraction/dtInteractionfirstChild','/dataResour/dtResourfirstChild','/dataFile','/dataDepend/dtDependfirstChild','/dataSafety'],
				sidebarImg:['static/images/icon_aside_portal.png','static/images/icon_aside_directory.png','static/images/icon_aside_change.png','static/images/icon_aside_resource.png','static/images/icon_aside_document.png','static/images/icon_aside_support.png','static/images/icon_aside_safe.png']
			}
		},
		methods:{

		},
		components:{
			cHeader,
		}
	}
</script>
<style scoped>
	ul{
		margin:0;
		padding:0;
	}
	.wrap{
		/*overflow: hidden;*/
	}
	.box{
		/*display:flex;*/
		overflow: hidden;
		float:left
	}
	.sidebar{
		/*flex:2;*/
		/*width:20%;*/
		float:left;
		position:static;
		margin-top:50px;
		margin-left:50px;
		margin-right:20px;
	}
	.router-link-active{
		background: #0e6fc6;
	}
	.sidebar ul{
		width:150px;
		border:2px solid #0381e8;
		background:rgba(0,76,152,0.9)
	}
	.sidebar ul li{
		width: 100%;
		text-align:center;
		padding:10px 0;
		/*font-weight:700*/
		border-bottom:2px solid #0381e8;
		cursor:pointer;
	}
	.sidebar ul li:hover{
		background-color:#0e6fc6;
	}
	.sidebar ul li:last-child{
		border-bottom:none
	}
	.sidebar ul li div{
		width: 100%;
	}
	.rightBar{
		/*max-width:100%;*/
		padding-left:200px;
	}
</style>