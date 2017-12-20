<template>
	<div class="warp">
		<file-upload :post-action="this.url"
                    v-model="file"
                    :data="data"
                    @input-file="upload(file)"
                    ref="upload">shangchuan</file-upload>
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
				data: {'file_name': 'model.nwd'} 
			}
		},
		created: function() {

		},
		computed:{
			
		},
		methods:{
			 upload (file) {
		        this.$refs.upload.active = true
		        const filedata = this.file[this.file.length - 1]
		        console.log('files',filedata.file)
		        if (filedata) {
		          axios({
		          	url:this.url,
		          	method:'post', 
		          	data:filedata,
		          	header:{'Content-Type':'application/x-www-form-urlencoded'}
		          })
		        }
		    },
		},
		components:{
			FileUpload
		},
		created() {
			this.url = 'http://192.168.3.7:8000/gfsSave/test/aaa'
		}
	}
</script>
<style scoped>
	.warp{
		background:#023d75 url(/static/images/bg_main_box.png) 216px 210px no-repeat;

	}
	
</style>