<template>
   <div id="cesiumContainer">
   		<div id="toolbar">
			<div id="elevationPoints"></div>
			<div id="picturePoints"></div>
			<div id="controlMonitor"></div>
			<div id="drone"></div>
			<div id="gltfmodel"></div>
			<div id="roam"></div>
			<div id="cancelRoam"></div>
			<div id="draggablePlacemark"></div>
		</div>
		<div id="videoBox">		
			<video id= "video" width="658" height="444"  preload="none" controls="controls" poster="static/Resources/img/poster.jpg">
				<source src="static/Resources/video/hedong.mp4" />
			</video>
			<div id="cancel">+</div>
		</div>
		<div id="monitor">
			<div id="monitorCancel">+</div>
		</div>
   </div>
</template>

<script>
export default {
  name: 'cesiumContainer',
  data () {
    return {
      
    }
  },
  mounted() {
  	var self = this;
  	//获得影像服务bing的权限。即大地球。
	Cesium.BingMapsApi.defaultKey = 'Ap2z3Su_tKy7X9Zdy5EuFqzLmEa6bPKtLCS8_Gnsq-btg91SoZDGTto22NoEO4FB';

	// 构造地形源的默认列表
	var terrainModels = Cesium.createDefaultTerrainProviderViewModels(),
		imageryProviderViewModels = Cesium.createDefaultImageryProviderViewModels();

	// 我们需要的基本应用程序构造查看器
	var viewer = new Cesium.Viewer('cesiumContainer', {
		// 时间轴
		timeline:true,
		// 时间动画调度器
		animation:true,
		// VR影像
		vrButton:true,
		// 场景模式选择器,3d 2d 2.5d模式切换
		sceneModePicker:true,
		// 信息窗
		infoBox:true,
		//3d选择
		scene3DOnly:true,
		// 影像服务商选择
		baseLayerPicker: true,

		navigationInstructionsInitiallyVisible:false,

		projectionPicker:true,

		sceneModePicker:true,

		imageryProviderViewModels:imageryProviderViewModels,

		selectedImageryProviderViewModel:imageryProviderViewModels[3]

		// 地形服务商模型
		// terrainProviderViewModels: terrainModels,
		// // 选择地形服务商模型
		// selectedTerrainProviderViewModel: terrainModels[1]  // Select STK high-res terrain
	});
	window.viewer = viewer
	var scene =viewer.scene;
	var canvas = viewer.canvas;
	var ellipsoid = scene.globe.ellipsoid;
	var handler = new Cesium.ScreenSpaceEventHandler(canvas);
	//Add Cesium Inspector
	// viewer.extend(Cesium.viewerCesiumInspectorMixin);

	// 在选择开启地形模式的时候需开启此功能，避免地形高低层级混乱的现象
	viewer.scene.globe.depthTestAgainstTerrain = true;
	//去掉cesium logo
	viewer._cesiumWidget._creditContainer.style.display="none"

	// 在左下方添加logo
	viewer.scene.frameState.creditDisplay.addDefaultCredit(new Cesium.Credit('Cesium 3D Tiles produced by Bentley ContextCapture', '/static/Resources/img/logoBentley.png', 'http://www.bentley.com/'));

	// 创建初始相机视角
	var homeCameraView = {
		// 设置相机位置
	    destination :new Cesium.Cartesian3(-2317772.7894708775,5394388.218457567,2486105.274832578),
	    // 相机拍摄视角参数设置
	    orientation: {
	    	// 相机拍摄方向设置
	        heading :3.811253944982147,
	        // 相机拍摄视角仰俯角度设置
	        pitch :-0.6696694469672124,
	        // 相机拍摄视角旋转度设置
	        roll :6.281293056985881
	    }
	}
	//首次进入相机停留位置
	viewer.scene.camera.setView(homeCameraView);

	// 点击home键动作持续时间
	homeCameraView.duration = 2.0;
	// 点击home键回弹最大高度
	homeCameraView.maximumHeight = 200;
	// 点击home键回弹仰俯最大高度
	homeCameraView.pitchAdjustHeight = 200;
	homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
	// 回到初始视角
	viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(commandInfo) {
		// 阻止home键默认事件
		commandInfo.cancel = true;
		// 重载home键的行为
		viewer.camera.flyTo(homeCameraView);	
	});

	//移动端，用于调整屏幕空间错误和内存使用的功能
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// 添加 tileset.用数据流的形式引入模型数据 
	var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
		// debugColorizeTiles:true,
		// debugShowContentBoundingVolume:true,
		show : true,
		url: 'static/Scene/cesium3dm1009_small.json',
		dynamicScreenSpaceError : true,
		maximumScreenSpaceError : isMobile.any() ? 8 : 1, // Temporary workaround for low memory mobile devices - Increase maximum error to 8.
		maximumNumberOfLoadedTiles : isMobile.any() ? 10 : 1000 // Temporary workaround for low memory mobile devices - Decrease (disable) tile cache.
	}));

	 var heightOffset = -72;
	tileset.readyPromise.then(function(tileset) {
	    // Position tileset
	    var boundingSphere = tileset.boundingSphere;
	    var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
	    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
	    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
	    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
	    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
	});


	var elevationPointFlag = true,
	picturePointFlag = true,
    picturePoints = [],
	elevationPoints = [],
    pinBuilder = new Cesium.PinBuilder();

	(function () {
		//信息点
		var geocachePromise = Cesium.KmlDataSource.load('/static/Resources/kml/placeMarks.kml',{
	      camera : viewer.scene.camera,
	      canvas : viewer.scene.canvas,
	      clampToGround : false
	    });
	    geocachePromise.then(function(dataSource) {
	      viewer.dataSources.add(dataSource);
	      var geocacheEntities = dataSource.entities.values;//数据源的实体数组,重点语句
	      for(let entity of geocacheEntities) {
	        if(Cesium.defined(entity.billboard)) {
	          entity.label.show = false;
	          entity.show = false;
	          if(entity.name==='图片点') {
	          	picturePoints.push(entity);
	          	entity.billboard.image = pinBuilder.fromText(entity.name, Cesium.Color.BLUE, 68).toDataURL();
	          	entity.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
	            entity.billboard.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(0.0,20000);
	          }else{
	      	    elevationPoints.push(entity);
	      	    entity.billboard.image = pinBuilder.fromText(entity.name, Cesium.Color.FUCHSIA, 68).toDataURL();
	            entity.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
	            entity.billboard.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(0.0,20000);
	          
	            // Cesium.JulianDate.now()取得系统当前时间
	            // entity.position.getValue()当前时间点实体的笛卡尔坐标位置点
	            // Cesium.Cartographic.fromCartesian()将笛卡尔坐标位置点转换为地理坐标
	            var cartographicPosition = Cesium.Cartographic.fromCartesian(entity.position.getValue(Cesium.JulianDate.now()));
	            var latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
	            var longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
	            var height = cartographicPosition.height;
	            //description部分修改的是iframe里面的东西
	            var description = '<table class = "cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter"><tbody>';
	            description += '<tr><th>' + "纬度" + '</th><td>' + latitude + '</td></tr>';
	            description += '<tr><th>' + "经度" + '</th><td>' + longitude + '</td></tr>';
	            description += '<tr><th>' + "高度" + '</th><td>' + height + '</td></tr>';
	            description += '</tbody></table>';
	            entity.description = description;
	          }
	        }
	      }
	    })

		// viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);取消双击事件

	    // If the mouse is over a point of interest, change the entity billboard scale and color
		var previousPickedEntity = undefined;
		handler.setInputAction(function(movement) {
		    var pickedPrimitive = viewer.scene.pick(movement.endPosition);
		    var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;
		    // Unhighlight the previously picked entity
		    if (Cesium.defined(previousPickedEntity)) {
		        previousPickedEntity.billboard.scale = 1.0;
		        previousPickedEntity.billboard.color = Cesium.Color.WHITE;
		    }
		    // Highlight the currently picked entity
		    if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {
		        pickedEntity.billboard.scale = 4.0;
		        pickedEntity.billboard.color = Cesium.Color.WHITE;
		        previousPickedEntity = pickedEntity;
		    }
		}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

	})();

	Sandcastle.addToolbarButton('高程点',function(){
		if(elevationPointFlag) {
			elevationPointFlag = false;
			for(let entity of elevationPoints) {
				entity.show = true;
			}
		}else{
			elevationPointFlag = true;
			for(let entity of elevationPoints) {
				entity.show = false;
			}
		}
	},'elevationPoints');

	var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
	Cesium.Cartesian3.fromDegrees(113.23317696345877,23.075269372285486,0));
	Sandcastle.addToolbarButton('gltf模型',function(){
		var model = scene.primitives.add(Cesium.Model.fromGltf({
		    url : '/static/Resources/gltf/fangzi.gltf',
		    modelMatrix : modelMatrix,
		    scale :0.1
		}));
		self.axios.post('http://192.168.1.144:8000/bim/model')
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		})
	},'gltfmodel');

	Sandcastle.addToolbarButton('图片点',function(){
		if(picturePointFlag) {
			picturePointFlag = false;
			for(let entity of picturePoints) {
				entity.show = true;
			}
		}else{
			picturePointFlag = true;
			for(let entity of picturePoints) {
				entity.show = false;
			}
		}
	},'picturePoints');

	Sandcastle.addToolbarButton('无人机视频',function(){
		videoBox.style.display = 'block';
	},'drone'); 

	var oFragmeng = document.createDocumentFragment(),
	toolbar = document.getElementById('toolbar'),
	roamDefinition = document.createElement('div') ;
	roamDefinition.style.color='#fff';
	roamDefinition.style.display='none';
	roamDefinition.innerHTML = '<div>W:向前</div>'
	+'<div>S:向后</div>'
	+'<div>A:向左</div>'
	+'<div>D:前右</div>'
	+'<div>Q:上升</div>'
	+'<div>E:下降</div>'
	+'<div>按住鼠标向上:视角向上</div>'
	+'<div>按住鼠标向下:视角向下</div>'
	+'<div>按住鼠标向左:视角向左</div>'
	+'<div>按住鼠标向右:视角向右</div>'
	+'<div>同时按住shift键:加速</div>';

	oFragmeng.appendChild(roamDefinition);
	toolbar.appendChild(oFragmeng); 

	var startMousePosition;
	var mousePosition;
	var flags = {
	    looking : false,
	    moveForward : false,
	    moveBackward : false,
	    moveUp : false,
	    moveDown : false,
	    moveLeft : false,
	    moveRight : false
	};
	var handler1 = new Cesium.ScreenSpaceEventHandler(canvas);

	function getFlagForKeyCode(keyCode) {
		    switch (keyCode) {
		    case 'W'.charCodeAt(0)://返回的是位于指定位置的字符的编码
		        return 'moveForward';
		    case 'S'.charCodeAt(0):
		        return 'moveBackward';
		    case 'Q'.charCodeAt(0):
		        return 'moveUp';
		    case 'E'.charCodeAt(0):
		        return 'moveDown';
		    case 'D'.charCodeAt(0):
		        return 'moveRight';
		    case 'A'.charCodeAt(0):
		        return 'moveLeft';
		    default:
		        return undefined;
		    }
		}
	var shiftFlag;
	function keydown(e) {
		shiftFlag = e.shiftKey;
	    var flagName = getFlagForKeyCode(e.keyCode);
	    if (typeof flagName !== 'undefined') {
	        flags[flagName] = true;
	    }
	}
		
	function keyup(e) {
		shiftFlag = e.shiftKey;
	    var flagName = getFlagForKeyCode(e.keyCode);
	    if (typeof flagName !== 'undefined') {
	        flags[flagName] = false;
	    }
	}
	function clock(clock) {//循环刷新
	    var camera = viewer.camera;

	    if (flags.looking) {
	        var width = canvas.clientWidth;
	        var height = canvas.clientHeight;

	        // Coordinate (0.0, 0.0) will be where the mouse was clicked.
	        var x = (mousePosition.x - startMousePosition.x) / width;
	        var y = -(mousePosition.y - startMousePosition.y) / height;

	        var lookFactor = 0.03;
	        // camera.lookRight(x * lookFactor);
	        // camera.lookUp(y * lookFactor);
	        if(Math.abs(mousePosition.x - startMousePosition.x)>Math.abs(mousePosition.y - startMousePosition.y)){
	        	camera.lookRight(x * lookFactor);
	        }else{
	        	camera.lookUp(y * lookFactor);
	        }
	    }

	    // Change movement speed based on the distance of the camera to the surface of the ellipsoid.
	    var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
	    var moveRate = cameraHeight / 100.0;
	    	   

	    if (flags.moveForward) {
	    	if(flags.moveForward&&shiftFlag) {
		    	moveRate = cameraHeight/50;
		    	camera.moveForward(moveRate);
		    }
	        camera.moveForward(moveRate);
	    }
	    
	    if (flags.moveBackward) {
	    	if(flags.moveBackward&&shiftFlag) {
		    	moveRate = cameraHeight/50;
		    	camera.moveBackward(moveRate);
		    }
	        camera.moveBackward(moveRate);
	    }
	    if (flags.moveUp) {
	    	if(flags.moveUp&&shiftFlag) {
		    	moveRate = cameraHeight/50;
		    	camera.moveUp(moveRate);
		    }
	        camera.moveUp(moveRate);
	    }
	    if (flags.moveDown) {
	    	if(flags.moveDown&&shiftFlag) {
		    	moveRate = cameraHeight/50;
		    	camera.moveDown(moveRate);
		    }
	        camera.moveDown(moveRate);
	    }
	    if (flags.moveLeft) {
	    	if(flags.moveLeft&&shiftFlag) {
		    	moveRate = cameraHeight/50;
		    	camera.moveLeft(moveRate);
		    }
	        camera.moveLeft(moveRate);
	    }
	    if (flags.moveRight) {
	    	if(flags.moveRight&&shiftFlag) {
		    	moveRate = cameraHeight/50;
		    	camera.moveRight(moveRate);
		    }
	        camera.moveRight(moveRate);
	    }
	}
	Sandcastle.addToolbarButton('自由漫游',function(){
		canvas.setAttribute('tabindex', '0'); // needed to put focus on the canvas
		canvas.onclick = function() {
		    canvas.focus();
		};
		// disable the default event handlers
		scene.screenSpaceCameraController.enableInputs = false;
		scene.screenSpaceCameraController.enableRotate = false;
		scene.screenSpaceCameraController.enableTranslate = false;
		scene.screenSpaceCameraController.enableZoom = false;
		scene.screenSpaceCameraController.enableTilt = false;
		scene.screenSpaceCameraController.enableLook = false;		

		handler1.setInputAction(function(movement) {
		    flags.looking = true;
		    mousePosition = startMousePosition = Cesium.Cartesian3.clone(movement.position);
		}, Cesium.ScreenSpaceEventType.LEFT_DOWN);

		handler1.setInputAction(function(movement) {
		    mousePosition = movement.endPosition;
		}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

		handler1.setInputAction(function(position) {
		    flags.looking = false;
		}, Cesium.ScreenSpaceEventType.LEFT_UP);

		document.addEventListener('keydown', keydown, false);
		document.addEventListener('keyup', keyup, false);
		
		viewer.clock.onTick.addEventListener(clock);

		roamDefinition.style.display = 'block';
		
	},'roam');

	Sandcastle.addToolbarButton('取消漫游',function(){
		handler1.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
		handler1.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
		handler1.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
		
		document.removeEventListener('keydown', keydown, false);
		document.removeEventListener('keyup', keyup, false);
		viewer.clock.onTick.removeEventListener(clock);
		scene.screenSpaceCameraController.enableInputs = true;
		scene.screenSpaceCameraController.enableRotate = true;
		scene.screenSpaceCameraController.enableTranslate = true;
		scene.screenSpaceCameraController.enableZoom = true;
		scene.screenSpaceCameraController.enableTilt = true;
		scene.screenSpaceCameraController.enableLook = true;

		roamDefinition.style.display = 'none';
	},'cancelRoam');


	var iframe1=document.createElement("IFRAME");
	iframe1.height=300+"px"
	iframe1.width=360+"px"
	var monitor=document.getElementById("monitor");
	monitor.appendChild(iframe1);
	Sandcastle.addToolbarButton("实时视频",function(){	
		iframe1.src="http://www.iermu.com/svideo/1c1dce68e1577a2ed555b0c926c6626b/199509";
		monitor.style.display = 'block';
	},"controlMonitor")


	var videoFlag = true,
		videoBox = document.getElementById('videoBox'),
		video = document.getElementById('video'),
		monitorCancel = document.getElementById('monitorCancel'),
		monitor = document.getElementById('monitor'),
		cancel = document.getElementById('cancel');
		cancel.onclick = function() {
			videoBox.style.display = 'none';
			video.pause();
		};
		monitorCancel.onclick = function() {
			monitor.style.display = 'none';
		}

	new Drag('videoBox');
	new Drag('monitor');

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#toolbar{
		position:absolute;
		left :0;
		top :10%;
		width :300px;
		height:80%;
		/*border :1px solid;*/
		/*background-color: rgba(0,0,0,0.6);*/
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		z-index: 100;
	}
	#cesiumContainer{
  		position: relative;
	}
	.cesium-button{
		display: inline-block;
		position: relative;
		background-color: #333;
		border:1px solid #666;
		fill:#edffff;
		border-radius: 4px;
		padding: 5px 12px;
		margin:2px 3px;
		cursor: pointer;
		overflow: hidden;
		user-select:none;
	}
	#videoBox {
		display: none;
		position: absolute;
		width:658px;
		height:444px;
		top :0;
		right :0;
		bottom: 0;
		left : 0;
		margin: auto;
		background-color:#fff;
		cursor: move;
		z-index: 100;
	}
	#cancel {
		position: absolute;
		width :30px;
		height:30px;
		line-height: 30px;
		top :2px;
		right :2px;
		font-size: 40px;
		transform: rotate(45deg);
	}
	#monitor {
		position: absolute;
		display: none;
		width:300px;
		height:300px;
		top :0;
		right :0;
		bottom: 0;
		left : 0;
		margin: auto;
		background-color:#fff;
		z-index: 100;
	}
	#monitorCancel {
		position: absolute;
		width :30px;
		height:30px;
		line-height: 30px;
		top :9px;
		right :-62px;
		font-size: 40px;
		color: #fff;
		cursor: move;
		transform: rotate(45deg);
	}
</style>