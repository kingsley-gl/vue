<template>
	<div class="warp">
		<div class="tableR">
				<input type="text" class="Cinput" placeholder="输入搜索...">
		</div>
		<div class="main">
			<div class="sidebar">
				<li @click="">{{mainKind[0]}}</li>
				<li>{{mainKind[1]}}</li>
				<!-- <li>{{mainKind[2]}}</li> -->
			</div>
			<div class="maintable">
				<li class="licss" v-for="(items,index) in maintext">
					<div>{{items.text}}</div>
					<div>地址：{{items.address}}</div>
				</li>
			</div>
			<div class="pagination">
				  <el-pagination
				  	layout="prev, pager, next"
				    :prev-text="this.ptext"
				    :next-text="this.ntext"
				    :page-size="this.pageSize"
				    @size-change="handleSizeChange"
		      		@current-change="handleCurrentChange"
				    :total="getTotalSize">
				  </el-pagination>
		   </div>
		</div>
	</div>
</template>
<script>
	export default{
		data (){
			return{
					ptext:"上一页",
					ntext:"下一页",
					currentPage:1,
					pageSize:3,
					mainKind:["分类","分类"],
					maintext:[
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							{id:'1',text:"xxx",address:'xxxxxxxx'},
							]
			}
		},
		created: function() {

		},
		computed:{
			getTotalSize(){
				// console.log(this.tableData3.length)
				return this.maintext.length
			}
		},
		methods:{
			  handleCurrentChange(val) {
        		 console.log(`当前页: ${val}`);
        		 this.currentPage=val
      		  },
      		  handleSizeChange(val) {
       			 console.log(`每页 ${val} 条`);
     		  },
		},
		components:{
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.warp{
		background:#023d75 url(/static/images/bg_main_box.png) 216px 210px no-repeat;

	}
	.main::before{
		content: "";
		display:inline-block;
		position:absolute;
		width: 34px;
		height: 33px;
		left:-2px;
		background:url(/static/images/left-l.png);
		bottom:-3px;
	}
	.main::after{
		content: "";
		display:inline-block;
		position:absolute;
		width: 34px;
		height: 33px;
		right:-2px;
		background:url(/static/images/right-j.png);
		top:-3px;
	}
	.Cinput{
		background:#004a92;
		border:1px solid #0381e8;
		font-size: 14px;
		color:#fff;
		height: 28px;
		margin-bottom: 20px;
	}
	.tableR{
		float:right;
		margin:20px 20px 0 0;
		overflow: hidden;
	}
	.main{
		clear:both;
		/*display:flex;*/
		/*flex-wrap:wrap;*/
		margin:20px;
		position:relative;
		border:1px solid #0381e8;
		border-bottom-left-radius:20px;
		border-top-right-radius:20px;
		background:rgba(0,76,152,.6);
		height: 800px;
	}
	.sidebar{
		/*flex:1;*/
		width: 120px;
		float:left;
		margin-left:30px;
		margin-right: 30px;
	}
	.sidebar li{
		height: 50px;
		line-height: 50px;
		text-align: center;
		border: 1px solid #0381e8;
		margin:20px 0;
	}
	.maintable{
		/*flex:9;*/
		margin-top:20px;
		overflow:hidden;
	}
	.maintable li{
		display:inline-block;
		margin-left:30px;
		margin-bottom:30px;
	}
	.licss{
		background:#023d75;
		border:1px solid #0381e8;
		padding:8px 34px;
		/*float:left;*/
		/*overflow:hidden;*/
		width: 160px;
		height: 60px;
		cursor:pointer;
		/*display:inline-block;*/
		/*height: 50px;*/
		/*line-height: 50px;*/
	}
	.licss:hover{
		border:1px solid #0381e8;
		box-shadow: 0px 1px 5px 1px #fff;
	}
	.pagination{
		/*display:inline-block;*/
		/*float:right;*/
	}
	.warp>>>.pagination{
		/*width: 96%;*/
		margin-top:30px;
		float:right;
		margin-right:30px;
	}
	.warp>>>.btn-prev,.warp>>>.btn-next{
		border:1px solid #0381e8;
		background-color:rgba(0,76,152,.6);
		color:#fff;
	}
	.warp>>>.el-pager .number{
		border:1px solid #0381e8;
		background-color:rgba(0,76,152,.6)
	}
	.warp>>>.el-pager{
		color:#fff;
	}
</style>