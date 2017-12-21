<template>
	<div class="warp">
		<div class="myCharts" id="main1"></div>
	</div>
</template>
<script>
	// import cEx from '../ex/ex'
	import echarts from 'echarts'
	export default{
		data (){
			return{
				xAxisData:[
	                        'xx系统1',
	                        'xx系统2',
	                        'xx系统3',
	                        'xx系统4',
	                        'xx系统5',
	                        'xx系统6',
	                        'xx系统7',
	                        '其他'
	                    ]
			}
		},
		created: function() {

		},
		computed:{

		},
		methods:{
			drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
               		tooltip : {
	                trigger: 'axis',
	                backgroundColor: 'rgba(0, 76, 152, .6)',
	                borderColor: '#0381e8',
	                borderWidth: 1,
	                padding: [5, 10],
	                formatter: '<span style="font-size: 10px">{b}</span><br/>{c}'
	            },
	            grid: {
	                left: '10%',
	                right: '10%',
	                bottom: '5%',
	                containLabel: true
	            },
	            xAxis : [
	                {
	                    type : 'category',
	                    data :this.xAxisData,
	                    axisTick: {
	                        show: false,
	                        alignWithLabel: true,
	                    },
	                    axisLabel: {
	                        interval: 0,
	                        textStyle: {
	                            fontSize: 10,
	                            color: '#fff'
	                        }
	                    },
	                    axisLine: {
	                        lineStyle: {
	                            color: '#0366ba'
	                        }
	                    }
	                }
	            ],
	            yAxis : [
	                {
	                    type : 'value',
	                    axisTick: {
	                        inside: true,
	                        lineStyle: {
	                            color: '#0366ba'
	                        }
	                    },
	                    axisLabel: {
	                        textStyle: {
	                            color: '#fff'
	                        }
	                    },
	                    axisLine: {
	                        lineStyle: {
	                            color: '#0366ba'
	                        }
	                    },
	                    splitLine: {
	                        lineStyle: {
	                            color: '#0366ba'
	                        }
	                    }
	                }
	            ],
	            series : [
	                {
	                    name:'直接访问',
	                    type:'bar',
	                    barWidth: '60%',
	                    data:[120, 52, 200, 334, 390, 550, 310, 200],
	                    itemStyle: {
	                        normal: {
	                            borderWidth: 2,
	                            borderColor: '#418df1',
	                            color: new echarts.graphic.LinearGradient(
	                                0, 0, 0, 1,
	                                [
	                                    {offset: 0, color: '#a0c5f8'},
	                                    {offset: 0.5, color: '#418cf0'},
	                                    {offset: 1, color: '#2e62a8'}
	                                ]
	                            )
	                        }
	                    },
	                }
	            ]
               	})
            }
		},
		components:{
			// cEx,
		},
		mounted() {
			this.$nextTick(function() {
              console.log(this)
                this.drawPie('main1')
            })
		}
	}
</script>
<style scoped>
	.myCharts{
		  width: 100%;
		  height: 400px;
		  /*float:left*/
	}
	.warp{
		position: relative;
		float: right;
		width:50%;
		border:1px solid #0381e8;
		border-bottom-left-radius:20px;
		border-top-right-radius:20px;
		background:rgba(0,76,152,.6);
		/*margin-left:20px;*/
	}
	.warp::before{
		content: "";
		display:inline-block;
		position:absolute;
		width: 34px;
		height: 33px;
		left:-2px;
		background:url(/static/images/left-l.png);
		bottom:-3px;
	}
	.warp::after{
		content: "";
		display:inline-block;
		position:absolute;
		width: 34px;
		height: 33px;
		right:-2px;
		background:url(/static/images/right-j.png);
		top:-3px;
	}
</style>