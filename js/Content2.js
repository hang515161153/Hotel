function house_status(){
	var house_num = document.getElementById("house_num");
	var houses = house_num.getElementsByTagName("span");
	var biao_btn = document.getElementById("biao_btn");
	var da_btn = document.getElementById("da_btn");
	var hao_btn = document.getElementById("hao_btn");
	var allhouse_btn = document.getElementById("allhouse_btn");
	//这4个按钮分别显示不同的房间
	//显示全部房间
	allhouse_btn.onclick=function(){
		for(var i = 0; i<houses.length;i++){
			houses[i].style.display="block";
		}
	}
	//显示标准间	
	biao_btn.onclick=function(){
		for(var i = 0; i<houses.length;i++){
			houses[i].style.display="none";
		}
		for(var j=0;j<15;j++){
			houses[j].style.display="block";
		}
	}
	//显示大床房
	da_btn.onclick=function(){
		for(var i = 0; i<houses.length;i++){
			houses[i].style.display="none";
		}
		for(var j=15;j<30;j++){
			houses[j].style.display="block";
		}
	}
	//显示豪华套间
	hao_btn.onclick=function(){
		for(var i = 0; i<houses.length;i++){
			houses[i].style.display="none";
		}
		for(var j=30;j<houses.length;j++){
			houses[j].style.display="block";
		}
	}
}
function save_yuding(){
	var save_yuding = document.getElementById("save");
	var reset_yuding = document.getElementById("chongzhi");
	var remark = document.getElementById("remark");
	var infor_yuding = document.getElementById("customer").getElementsByTagName("input");
	var orderhousenum = document.getElementById("orderhousenum");
	var house_num_span = document.getElementById("house_num").getElementsByTagName("span");
	var house_num = document.getElementById("house_num").getElementsByTagName("p");
	var a = new Array();             // 用来存储所有的数据
	var flag=0;                      //定义flag 用来标记是否将数据填写完整
	// for(var n=0;n<house_num.length;n++){
	// 	 house_num[n].index=0;                         // 先设定所有的房间为0
	// }
    save_yuding.onclick=function(){                         // 预订房间按钮
    	for(var i=0;i<infor_yuding.length-2;i++){
    		a[i] = infor_yuding[i].value;                   // 将数据存储到数组a中
			if(infor_yuding[i].value!=""&&infor_yuding[i].value!=null){
				++flag;                       // flag 表示记录填写的所有数据，每个数据都要完整，每写一个数据flag++
			}
			else{
				continue;
			}
		}
    	if(flag==infor_yuding.length-2){
    		for(var n=0;n<house_num.length;n++){                   //  循环遍历房间号
    			if(orderhousenum.value == house_num[n].innerHTML){
    				house_num_span[n].style.background="#F8CC47";
    				house_num[n].style.background="#C1A240";
    				alert("预订成功!");
    				//house_num[n].index=1;				 //如果预订成功的房间将设置为1
    				for(var i=0;i<infor_yuding.length-2;i++){
    					infor_yuding[i].value="";
    					remark.value="";
    		        }
    				break;
    			}
    			// else if(orderhousenum.value == house_num[n].innerHTML && house_num[n].index==1){
    			// 	alert("该房间已经被预订,请重新选择房间!");
    			// 	break;
    			// }
                else{
                	continue;
                }
    		}	
    	}
    	else{
    		alert("信息不完整! 请重新填写!");
    		for(var i=0;i<infor_yuding.length-2;i++){
    			infor_yuding[i].value="";
    		}remark.value="";
        }
        flag=0;                     //  重新初始化flag
    }
    reset_yuding.onclick=function(){
    	for(var i=0;i<infor_yuding.length-2;i++){
    		infor_yuding[i].value="";
    	}
    	remark.value="";
    }   
}
 function dengji(){
 	var register_infor = document.getElementById("register_infor");
 	var register_infor_input = register_infor.getElementsByTagName("input");
 	var customer_submit = document.getElementById("customer_submit");
 	var customer_reset = document.getElementById("customer_reset");
 	var remark1 = document.getElementById("remark1");
 	var dengji_num = document.getElementById("dengji_num");
	var house_num_span = document.getElementById("house_num").getElementsByTagName("span");
	var house_num = document.getElementById("house_num").getElementsByTagName("p");
 	var a = new Array();
 	var flag = 0;
 	customer_submit.onclick=function(){
 		for(var i=0;i<register_infor_input.length-2;i++){
           a[i] = register_infor_input[i];
           if(register_infor_input[i].value!=""&&register_infor_input[i].value!=null){
				++flag;                       // flag 表示记录填写的所有数据，每个数据都要完整，每写一个数据flag++
			}
			else{
				continue;
			}
 		}
 		if(flag == register_infor_input.length-2){
 			for(var j=0;j<house_num_span.length;j++){
 				if(dengji_num.value == house_num[j].innerHTML){
 					house_num_span[j].style.background="#7899F6";
    				house_num[j].style.background="#2C4BB2";
    				alert("登记成功!");
    				for(var n=0;n<register_infor_input.length-2;n++){
    					register_infor_input[n].value="";
    		        }
    		        remark1.value="";
    				break;
 				}
 				else{
 					continue;
 				}
 			}
 		}
 		else{
 			alert("信息不完整,请填写完整!");
 		}
 		flag = 0;
 	}
 	customer_reset.onclick=function(){
    	for(var i=0;i<register_infor_input.length-2;i++){
    		register_infor_input[i].value="";
    	}
    	remark1.value="";
    }   
 }