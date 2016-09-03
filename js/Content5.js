 function loand() {
 			var jichang = document.getElementById("jichang");
 			var huochezhan = document.getElementById("huochezhan");
 			var furongyuan = document.getElementById("furongyuan");
 			var zoos = document.getElementById("zoos");
 			var yanta = document.getElementById("yanta");
 			var car_time = document.getElementById("car_time");
 			var car = car_time.getElementsByTagName("div");
            var map = new BMap.Map("getmap");
            var point = new BMap.Point(108.913, 34.160); //默认中心点
            var marker = new BMap.Marker(point);
            var opts = {
                width: 50,     // 信息窗口宽度  
                height: 50,     // 信息窗口高度  
                title: "远航皇城大酒店"  // 信息窗口标题  
            }
            var infoWindow = new BMap.InfoWindow("我们为您提供最温馨的服务，欢迎您的到来！", opts);  // 创建信息窗口对象

            map.addControl(new BMap.NavigationControl()); //左上角控件
            map.enableScrollWheelZoom(); //滚动放大
            map.enableKeyboard(); //键盘放大

            map.centerAndZoom(point, 16); //绘制地图
            map.addOverlay(marker); //标记地图

            map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口   
           var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
			jichang.onclick=function(){
				driving.search(point, "咸阳机场");
				for(var i =0;i<car.length;i++){
				car[i].style.background="";
			   }
				jichang.style.background="#fff";
			}
			huochezhan.onclick=function(){
				driving.search(point, "西安站");
				for(var i =0;i<car.length;i++){
				car[i].style.background="";
			   }
				huochezhan.style.background="#fff";
			} 
			furongyuan.onclick=function(){
				driving.search(point, "大唐芙蓉园");
				for(var i =0;i<car.length;i++){
				car[i].style.background="";
			   }
				furongyuan.style.background="#fff";
			} 
			zoos.onclick=function(){
				driving.search(point, "秦岭动物园");
				for(var i =0;i<car.length;i++){
				car[i].style.background="";
			   }
				zoos.style.background="#fff";
			} 
			yanta.onclick=function(){
				driving.search(point, "大雁塔");
				for(var i =0;i<car.length;i++){
				car[i].style.background="";
			   }
				yanta.style.background="#fff";
			}
			for(var i =0;i<car.length;i++){
				car[i].style.background="";
			   }    
        }

