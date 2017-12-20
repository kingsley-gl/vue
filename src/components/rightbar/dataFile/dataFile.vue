<template>
	<div class="warp">
		<c-sidebar></c-sidebar>
		<div class="navChild">
			<div class="navL">
				<div class="title">数据文件管理系统</div>
			</div>
		</div>
		<div class="navChildBar">
			<input type="text" class="FileInput" placeholder="输入搜索...">	
			<div class="ChildBarWarp">
				<c-fileChild></c-fileChild>
			</div>
		</div>
	</div>
</template>
<script>
	import cSidebar from '../../sidebar/sidebar'
	import cFileChild from './dataFileChild'
	export default{
		data (){
			return{

			}
		},
		created: function() {

		},
		computed:{

		},
		methods:{

		},
		components:{
			cSidebar,
			cFileChild
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.navChild{
		margin-top:50px;
		overflow:hidden;
		background-color:#023d75;
		border:2px solid #0381e8;
		border-radius:4px;
		margin-bottom:20px;
		margin-right: 20px;
	}
	.title{
		font-size:28px;
		line-height:60px;
		margin-left:20px;
	}
	.navL{
		float:left;
	}
	.navChildBar{
		border:2px solid #0381e8; 
		border-radius:4px;
		margin-right: 20px;
		height: 1200px;
		overflow:hidden;
		/*margin-bottom:50px;*/
	}
	.ChildBarWarp:before{
		content:"";
		display:inline-block;
		position: absolute;
		width: 34px;
		height: 33px;
		left:-2px;
		background: url(/static/images/left-l.png);
		bottom:-3px;
	}
	.ChildBarWarp:after{
		content:"";
		display:inline-block;
		position: absolute;
		width: 34px;
		height: 33px;
		right:-2px;
		background:url(/static/images/right-j.png);
		top:-3px;
	}
	.ChildBarWarp{
		clear:both;
		border:1px solid #0381e8;
		margin:20px;
		background: rgba(0,76,152,.6);
		position: relative;
		border-bottom-left-radius:20px;
		border-top-right-radius:20px;
		/*height: 800px;*/
	}
	.FileInput{
		float:right;
		margin:20px 20px 20px 0;
		background: #004a92;
		border: 1px solid #0381e8;
		height:28px;
		color:#fff;
		font-size: 14px;
	}
	.warp{
		overflow: hidden;
	}
</style>