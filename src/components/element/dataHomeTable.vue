<template>
	<div class="warp">
		<div class="tableTool">
			<div class="tableL">
				<span class="CblueC"><i class="el-icon-circle-plus-outline Cblue"></i></span>
				<span class="CgreenC"><i class="el-icon-edit-outline Cgreen"></i></span>
				<span class="CredC"><i class="el-icon-delete Cred"></i></span>
				<span class="CblueC"><i class="el-icon-search Cblue"></i></span>
				<span class="CpinkC"><i class="el-icon-tickets Cpink"></i></span>
				<span class="CorangeC"><i class="el-icon-document Corange"></i></span>
				<span class="CgreenC"><i class="el-icon-printer Cgreen"></i></span>	
			</div>
			<div class="tableR">
				<input type="text" class="Cinput" placeholder="输入搜索...">
			</div>
		</div>
		<el-table
	    ref="multipleTable"
	    :data="tableDataShow"
	    tooltip-effect="dark"
	    style="width: 100%"
	    :default-sort = "{prop: 'date', order: 'descending'}"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      type="selection"
	      width="55">
	    </el-table-column>
	    <el-table-column
	      prop='date'
	      label="日期"
	      sortable
	      width="120">
	      <template slot-scope="scope">{{ scope.row.date }}</template>
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
	      show-overflow-tooltip>
	    </el-table-column>
	  </el-table>
	  <!-- 分页 -->
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
</template>
<script>
	// import cEx from '../ex/ex'
	export default{
		data (){
			return{	
					ptext:"上一页",
					ntext:"下一页",
					currentPage:1,
					pageSize:3,
					tableData3: [{
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        }, {
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        },{
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        }, {
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        },{
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        }, {
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        }, {
			          date: 'xxxx-xx-xx',
			          name: 'xxxx',
			          address: 'xxxxxxxxxxxxxxxxxxxxxx'
			        }],
			        multipleSelection: []
				}
		},
		created: function() {

		},
		computed:{
			tableDataShow(){
				  let array = [], startNum=0, endNum = 0;
			      let total = this.tableData3.length
			      startNum = (this.currentPage-1)*this.pageSize;
			      if(this.currentPage*this.pageSize<total){
			          endNum = this.currentPage*this.pageSize;
			      } else {
			          endNum = total;
			      }
			      array = this.tableData3.slice(startNum, endNum);
				  return array
			},
			getTotalSize(){
				// console.log(this.tableData3.length)
				return this.tableData3.length
			}
		},
		methods:{
			toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		      },
		      handleSelectionChange(val) {
		        this.multipleSelection = val;
		      },
		      handleSizeChange(val) {
       			 console.log(`每页 ${val} 条`);
     		  },
      		  handleCurrentChange(val) {
        		 console.log(`当前页: ${val}`);
        		 this.currentPage=val
      		  }
		},
		components:{
			// cEx,
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.warp{
		width:100%;
		border:1px solid #0381e8;
		border-bottom-left-radius:20px;
		border-top-right-radius:20px;
		background:rgba(0,76,152,.6);
		float:left;
		margin-top: 50px;
		padding:20px;
		position:relative;
		/*color:#fff !important;*/

	}
	.warp >>>.has-gutter tr{
		background-color:#0e487d;
	}
	.warp >>>.el-table__row:nth-child(odd){
		background-color:#0e6fc6;
	}
	.warp >>>.el-table__row:nth-child(even){
		background-color:#0e487d;
	}
	.warp >>>.el-table,.warp>>>.has-gutter tr{
		color:#fff;
	}
	.warp>>>.el-table--enable-row-hover .el-table__body tr:hover>td{
		background:skyblue;
	}
	.warp>>>.el-table td{
		border:0;
	}
	.warp>>>.el-table{
		width: 98% !important;
		border:1px solid #0269c2;
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
	.tableTool{
		width: 98%;
		margin:10px 0;
	}
	.tableTool span{
		border:1px solid #478fca;
		display:inline-block;
		width: 30px;
		height: 30px;
		text-align: center;
		line-height:30px;
		cursor:pointer;
	}
	.Cgreen{
		color:#69AA46;
	}
	.CgreenC{
		border:1px solid #69AA46!important;
	}
	.Cred{
		color:#DD5A43;
	}
	.CredC{
		border:1px solid #DD5A43!important
	}
	.Cblue{
		color:#478FCA;
	}
	.CblueC{
		border:1px solid #478FCA!important
	}
	.Corange{
		color:#FF892A;
	}
	.CorangeC{
		border:1px solid #FF892A!important
	}
	.Cpink{
		color:#C6699F;
	}
	.CpinkC{
		border:1px solid #C6699F!important
	}
	.tableL{
		display:inline-block;
	}
	.tableR{
		display: inline-block;
		float:right;
	}
	.Cinput{
		background:#004a92;
		border:1px solid #0381e8;
		font-size: 14px;
		color:#fff;
		height: 28px;
	}
</style>