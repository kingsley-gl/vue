<template>
	<div class="warp">
		<c-sidebar></c-sidebar>
		<div class="navChild">
			<ul>
				<router-link v-bind:to="items" v-for="(items,index) in navChildRouter" tag='li'>
			  			<img v-bind:src="navChildImg[index]" alt="">
			  			<div>{{navChildText[index]}}</div>
			  			<div v-bind:style="{color:activeColor[index]}">{{navChildNum[index]}}</div>
				</router-link>
			</ul>
		</div>
		<router-view class = "navChildBar"></router-view>
	</div>
</template>
<script>
	import cSidebar from '../../sidebar/sidebar'
	export default{
		data (){
			return{
				navChildRouter:['/dataHome/dtHomefirstChild','/dataHome/dtHomesecChild','#','#','#','#'],
				navChildText:['生产信息系统','数据服务对象','数据总量','实时数据源','数据交换频次','数据吞吐量'],
				navChildImg:['static/images/icon_email.png','static/images/icon_earth.png','static/images/icon_chart.png','static/images/icon_pie.png','static/images/icon_line_chart.png','static/images/icon_dial.png'],
				navChildNum:['34,652','23,234','68,543','34,121','78,234','56,334'],
				activeColor:["#51a7fe","#54fef3","#a25eff",'#ff984c','#83ff53','#ff703b']
			}
		},
		components:{
			cSidebar
		}
	}
</script>
<style scoped>
	.warp{
	}
	.navChild{
		margin-top:50px;
	}
	.navChild ul{
		overflow: hidden;
		margin:0;
		padding:0;
	}
	.navChild ul li{
		float:left;
		text-align:center;
		width:16.6%;

	}
	.navChild ul li:first-child{
		margin-left:0px;
	}
	.navChildBar{
		border:2px solid #0381e8; 
		border-radius:4px;
		margin:20px;
		/*height: 1200px;*/
		overflow:hidden;
		/*margin-bottom:50px;*/
	}
</style>