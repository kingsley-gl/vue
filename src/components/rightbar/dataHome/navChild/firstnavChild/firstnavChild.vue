<template>
	<div class="warp">
		<div class="title1">生产信息系统</div>
		<div class="echart1">
			<c-pieP></c-pieP>
			<c-histogram></c-histogram>
			<c-dataHomeTable></c-dataHomeTable>
		</div>
	</div>
</template>
<script>
	import cPieP from '../../../../echarts/pieP'
	import cHistogram from '../../../../echarts/histogram'
	import cDataHomeTable from '../../../../element/dataHomeTable'
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
			cPieP,
			cHistogram,
			cDataHomeTable
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.title1{
		background-image:url("/static/images/bg_main_box_content_title.png");
		background-repeat:no-repeat;
		padding-left: 55px;
		line-height: 21px;
		margin-top:30px;
		/*font-size:px;*/
		/*width:250px;*/
		/*height:80px;*/
	}
	.echart1{
		margin: 20px;
		overflow:hidden;
		margin-bottom: 50px;
	}
	.warp{
		background:#023d75 url(/static/images/bg_main_box.png) 216px 210px no-repeat;
		/*overflow:hidden;*/
	}
	
</style>