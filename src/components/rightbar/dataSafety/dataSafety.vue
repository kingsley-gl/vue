<template>
  <div class="warp">
    <c-sidebar></c-sidebar>
    <div class="navChild">
      <div class="navL">
        <div class="title">安全支持系统</div>
      </div>
    </div>
    <div class="navChildBar">
        <cesium-Container></cesium-Container>
    </div>
  </div>
</template>
<script>
  import cSidebar from '../../sidebar/sidebar'
  //import cesiumContainer from './cesiumContainer'
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
      cSidebar,
      //cesiumContainer
    },
    mounted() {

    }
  }
</script>
<style scoped>
    .navChild{
    margin-top:50px;
    overflow:hidden;
    background-color:#023d75;
    border:2px solid #0381e8;
    border-radius:4px;
    margin-bottom:20px;
    margin-right: 20px;
  }
  .title{
    font-size:28px;
    line-height:60px;
    margin-left:20px;
  }
  .navL{
    float:left;
  }
  .navChildBar{
    border:2px solid #0381e8; 
    border-radius:4px;
    margin-right: 20px;
    /*height: 1200px;*/
    overflow:hidden;
    /*margin-bottom:50px;*/
  }
</style>