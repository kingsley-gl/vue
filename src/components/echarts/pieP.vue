<template>
	<div class="warp">
		<div class="myCharts" id="main"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	export default{
		data (){
			return{
				  charts: '',
			      legendData:[
	                    {name: '服务系统'},
	                    {name: '收银系统'},
	                    {name: '财务系统'},
	                    {name: '会计系统'},
	                    {name: '订单系统'},
	                    {name: '结算系统'},
	                    {name: '服务系统2'},
	                    {name: '其他'}
	                ],
	               seriesData:[
	                        {value: 335, name: '服务系统'},
	                        {value: 310, name: '收银系统'},
	                        {value: 274, name: '财务系统'},
	                        {value: 235, name: '会计系统'},
	                        {value: 400, name: '订单系统'},
	                        {value: 500, name: '结算系统'},
	                        {value: 200, name: '服务系统2'},
	                        {value: 300, name: '其他'}
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
                  title: {
	                show: false,
	                text: '生产信息系统',
	                left: 'center',
	                top: 20,
	                textStyle: {
	                    color: '#fff'
	                }
		            },

	            legend: {
	                left: 10,
	                top: 'middle',
	                orient: 'vertical',
	                textStyle: {
	                    color: '#fff'
	                },
	                data: this.legendData
	            },

	            tooltip: {
	                trigger: 'item',
	                backgroundColor: 'rgba(0, 76, 152, .6)',
	                borderColor: '#0381e8',
	                borderWidth: 1,
	                padding: [5, 10],
	                formatter: '<span style="font-size: 10px">{b}</span><br/>{d}%'
	            },

	            visualMap: {
	                show: false,
	                min: 80,
	                max: 600,
	                inRange: {
	                    colorLightness: [0, 1]
	                }
	            },
	            color: [
	                '#e66a16',
	                '#d41a50',
	                '#0670a4',
	                '#4cb621',
	                '#2c54c7',
	                '#0aa98d',
	                '#51e396',
	                '#ad13ab'
	            ],
	            series: [
	                {
	                    name: '生产信息系统',
	                    type: 'pie',
	                    radius: '80%',
	                    center: ['80%', '50%'],
	                    data:this.seriesData,
	                    roseType: 'area',
	                    label: {
	                        normal: {
	                            show: false,
	                        }
	                    },
	                    itemStyle: {
	                        normal: {
	                            borderColor: '#fff'
	                        }
	                    }
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
                this.drawPie('main')
            })
		}
	}
</script>
<style scoped>
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
	.warp{
		position: relative;
		float: left;
		width:45%;
		border:1px solid #0381e8;
		border-bottom-left-radius:20px;
		border-top-right-radius:20px;
		background:rgba(0,76,152,.6);
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
	.myCharts{
		  width:100%;
		  height: 400px;
		   /*float:left*/
}
</style>