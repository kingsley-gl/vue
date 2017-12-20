<template>
	<div class="warp">
		<div class="warpTreeBar">
			<el-tree
			  :props="defaultProps"
			  :data="data1"
			  show-checkbox
			  @check-change="handleCheckChange">
			</el-tree>
		</div>
		<div class="warpmain">
			<div class="btnNew"><i class="el-icon-setting iconcss"></i>文件管理设置</div>
			<div class="btnNew"><i class="el-icon-upload2 iconcss"></i>文件输入监控</div>
			<div class="filemain">
				<div class="file_one" v-for="(item,index) in fileName">
					<i class="el-icon-news iconcss_1"></i>
					<div>{{item}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// import cEx from '../ex/ex'
	export default{
		data (){
			return{
		        data1: [{
		          label: 'For Sale',
		          children: [{
		            label: '二级 1-1',
		            children: [{
		              label: '三级 1-1-1'
		            }]
		          }]
		        }, {
		          label: 'Vehicles',
		          children: [{
		            label: '二级 2-1',
		            children: [{
		              label: '三级 2-1-1'
		            }]
		          }, {
		            label: '二级 2-2',
		            children: [{
		              label: '三级 2-2-1'
		            }]
		          }]
		        }, {
		          label: 'Rentals',
		          children: [{
		            label: '二级 3-1',
		            children: [{
		              label: '三级 3-1-1'
		            }]
		          }, {
		            label: '二级 3-2',
		            children: [{
		              label: '三级 3-2-1'
		            }]
		          }]
		        },{
		          label: 'For Sale',
		          children: [{
		            label: '二级 1-1',
		            children: [{
		              label: '三级 1-1-1'
		            }]
		          }]
		        }, {
		          label: 'Vehicles',
		          children: [{
		            label: '二级 2-1',
		            children: [{
		              label: '三级 2-1-1'
		            }]
		          }, {
		            label: '二级 2-2',
		            children: [{
		              label: '三级 2-2-1'
		            }]
		          }]
		        }, {
		          label: 'Rentals',
		          children: [{
		            label: '二级 3-1',
		            children: [{
		              label: '三级 3-1-1'
		            }]
		          }, {
		            label: '二级 3-2',
		            children: [{
		              label: '三级 3-2-1'
		            }]
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        },
		        fileName:["document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1","document1"]
			};
		},
		created: function() {

		},
		computed:{

		},
		methods:{
			  handleCheckChange(data, checked, indeterminate) {
		        // console.log(data, checked, indeterminate);
		      },
		      handleNodeClick(data) {
		        // console.log(data);
		      },
		      loadNode(node, resolve) {
		      	// console.log(node)

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
	.warpTreeBar{
		width: 20%;
		margin:20px 20px 0 20px;
		float:left;
		width: 20%;
	}
	.el-tree{
		background:rgba(255,255,255,0);
		color:#fff;
	}
	.warp>>>.el-tree-node__content:hover{
		background:#0381e8;
	}
	.warpmain{
		float: left;
		width:75%;
	}
	.btnNew{
		padding:6px 20px;
		color:#fff;
		border:1px solid #0381e8;
		float:left;
		margin-right:10px;
		margin-top:20px;
		cursor:pointer;
		margin-bottom:20px;
	}
	.iconcss{
		color:#fff;
		margin-right: 5px;
		font-size: 20px;
	}
	.iconcss_1{
		color:#fff;
		margin-right: 5px;
		font-size: 36px;
	}
	.file_one{
		background:#023d75;
		border:1px solid #0381e8;
		float:left;
		padding:23px 43px; 
		margin-right: 18px;
		margin-bottom:20px;
		text-align:center;
		cursor:pointer;
	}
	.file_one:hover{
		background:#0c2c4a;
		border:1px solid #0381e8;
		box-shadow:0px 1px 5px 1px #fff;

	}
	.filemain{
		/*overflow:hidden;*/
		clear:both;
	}
</style>