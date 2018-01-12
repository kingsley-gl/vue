<template>
	<div class="warp">
		<file-upload :post-action="this.url"
                    v-model="file"
                    :data="data"
                    @input-file="upload(file)"
                    ref="upload">上传</file-upload>
        
        <el-dialog
		  title="上传文件"
		  :visible.sync="dialogVisible"
		  width="30%">
		  <span>正在上传文件 速度：{{speed}} {{units[speedflag]}}</span>
		  <el-progress 
		  :text-inside="true" 
		  :stroke-width="18"
		  :percentage="percent"></el-progress>
		</el-dialog>
	</div>
</template>
<script>
	import FileUpload from "../../../../upload/FileUpload.vue"
	import axios from 'axios'
	export default{
		data (){
			return{
				url: '',
				file: [],
				data: {'file_name': 'model.nwd'},
				dialogVisible : false,
				percent:0,
				speed:0,
				units:{0:'b/s',1:'Kb/s',2:'Mb/s'},
				speedflag:0
			}
		},
		created: function() {

		},
		computed:{
			
		},
		methods:{
			 upload (file)
			 {

		        this.$refs.upload.active=true
		        const filedata=this.file[this.file.length - 1]
		        this.dialogVisible=true
		        this.percent=filedata.progress
		        this.speed=filedata.speed
		        this.speedflag=0
		        //速度自动检测以及单位赋予
		        function speedcheck(spd,flag)
		        {
		        	if (spd > 1024)
		        	{
		        		spd=(spd/1024).toFixed(2)
		        		flag+=1
		        		return speedcheck(spd,flag)
		        	}
		        	else
		        	{
		        		return [spd,flag]
		        	}
		        }

		        [this.speed,this.speedflag]=speedcheck(this.speed,this.speedflag)
		        console.log(this.speed,this.speedflag)
				if (this.percent == 100)
				{
					this.dialogVisible=false
				}
		    }
		},
		components:{
			FileUpload
		},
		created() {
			this.url = 'http://192.168.0.100:8000/gfsSave/test/aaa'
		}
	}
</script>
<style scoped>
	.warp{
		background:#023d75 url(/static/images/bg_main_box.png) 216px 210px no-repeat;

	}
	
</style>