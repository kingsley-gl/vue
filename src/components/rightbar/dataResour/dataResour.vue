<template>
	<div class="warp">
		<c-sidebar></c-sidebar>
		<div class="navChild">
			<div class="navL">
				<div class="title">数据资源</div>
			</div>
			<div class="navR">
				<ul>
					<router-link :to="items" v-for="(items,index) in navChildRouter" tag="li">
						<div>{{navChildText[index]}}</div>
					</router-link>
				</ul>
			</div>
		</div>
		<router-view class = "navChildBar"></router-view>
	</div>
</template>
<script>
	import cSidebar from '../../sidebar/sidebar'
	export default{
		data (){
			return{
				navChildRouter:['/dataResour/dtResourfirstChild','/dataResour/dtResoursecChild','/dataResour/dtResourthrChild'],
				navChildText:["预留字段","预留字段","预留字段"]
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
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.warp{
	}
	.title{
		font-size:28px;
		line-height:60px;
		margin-left:20px;
	}
	.navChild{
		margin-top:50px;
		overflow:hidden;
		background-color:#023d75;
		border:2px solid #0381e8;
		border-radius:4px;
		margin-bottom:20px;
		margin-right: 20px;
	}
	.navChild ul{
		overflow: hidden;
		margin:0;
		padding:0;
	}
	.navChild ul li{
		width: 150px;
		height: 60px;
		float:left;
		line-height:60px;
		text-align:center;
		cursor: pointer;
	}
	.navChild ul li:hover{
		background-color: #002b58;
		border-bottom: 2px solid #fff;
	}
	.router-link-active{
		background-color: #002b58;
		border-bottom: 2px solid #fff;
	}
	.navChildBar{
		border:2px solid #0381e8; 
		border-radius:4px;
		margin-right: 20px;
		height: 1200px;
		overflow:hidden;
		/*margin-bottom:50px;*/
	}
	.navL{
		float:left;
	}
	.navR{
		float:right;
	}
</style>