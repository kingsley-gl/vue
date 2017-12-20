<template>
	<div class="warp">
		<!-- <uploader :options="options" class="uploader-example">
		    <uploader-unsupport></uploader-unsupport>
		    <uploader-drop>
		      <p>拉我拖我</p>
		      <uploader-btn>选择文件</uploader-btn>
		      <uploader-btn :attrs="attrs">选择相片</uploader-btn>
		      <uploader-btn :directory="true">选择文件夹</uploader-btn>
		    </uploader-drop>
		    <uploader-list></uploader-list>
		 </uploader> -->
	</div>
</template>
<script>
	// import cEx from '../ex/ex'
	export default{
		data (){
			return{
				options: {
		          // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
		          //http://192.168.1.172:8000/gfsList/fs
		          target: 'http://192.168.3.7:8000/gfsSave/',
		          testChunks: false,

		        },
		        attrs: {
		          accept: 'image/*'
		        }
			}
		},
		created: function() {

		},
		computed:{

		},
		methods:{

		},
		components:{
		
		},
		mounted() {

		}
	}
</script>
<style scoped>
  .uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>