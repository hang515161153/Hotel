function sonslide(That,c){
	var Content1 = document.getElementsByClassName("content1"); // 获取内容中左边 这个div
	var Content2 = document.getElementsByClassName("content2"); // 获取 内容中右边 这个div
	var Address = document.getElementsByClassName("address");
	var LiLength= Content1[That].getElementsByTagName("li"); // 获取当前点击的这大的div下的li
	var sonContent = Content2[That].getElementsByTagName("li"); // 获取当前点击的这大的div 下的content1 下的div
	for(var j=0;j<Content2[That].getElementsByTagName("li").length;j++){
		//点击当前的li，当鼠标按下的时候变色
		LiLength[j].onmousedown=function(){ 
           this.style.background="#369da3";
         }
         //当鼠标在li上面的时候会有另外一个颜色
		LiLength[j].onmouseover=function(){ 
           this.style.background="#485066";
         }

        LiLength[j].onmouseout=function(){ 
           this.style.background="";
         }
		LiLength[j].onclick=function(){
			slide1(That,this);	
			var b = this.getElementsByTagName("span")[0].innerHTML+'>';
		    Address[That].getElementsByTagName("span")[0].innerHTML=c+b;
		}
	}
};

function slide1(That,This){
  	var Content1 = document.getElementsByClassName("content1");
	var Content2 = document.getElementsByClassName("content2");
	var LiLength = Content1[That].getElementsByTagName("li");
	var sonContent = Content2[That].getElementsByTagName("li");
	var xufang = document.getElementById("xufangUI");
	var checkout_num1 = document.getElementById("select_housenum1");     // 获取结账房间号码
	var checkout_btn = document.getElementById("select_house");         // 获取结账房间号按钮
	var checkout_num = document.getElementById("select_housenum");     //获取输入结账房间div
	var checkout_content = document.getElementById("checkout_content");
	for(var j=0;j<Content2[That].getElementsByTagName("li").length;j++){
		LiLength[j].Indexs=j;	                           // 检索所有li 的序号
		LiLength[j].className="";                          //将所有的li的类名字置为空
		sonContent[j].style.display="none";                ///将所有的li 下的对应内容隐藏
	}
	// 对续房模块进行操作
	if(That==0&&This.Indexs==2){                            
		This.className="gongneng"; sonContent[2].style.display="block";
		xufang.style.display="block";                  //将续房界面显示出来
		xufang.style.top=-400+'px';
		starmove();
	}           
	// 对结账模块进行操作
	else if(That==0&&This.Indexs==4){  
	    xufang.style.display="none";
	    // checkout_content.style.display="none";	                 
		checkout_content.style.filter='alpha(opacity:'+20+')';
		checkout_content.style.opacity=0.2;
		checkout_num.style.display="block";
		This.className="gongneng";
		sonContent[4].style.display="block";
		// checkout_content.onclick=function (e){                    //锁定页面事件
		// 	if (e && e.preventDefault){
		// 		e.preventDefault();//如果是FF下执行这个
		// 	}else{ 
		// 	 window.event.returnValue = false;//如果是IE下执行这个
		// 	}
		// }
		// 点击结账按钮进行操作
		checkout_btn.onclick = function(){
		 	var t = checkout_num1.value;
			if(t=='1000'){	                         // 判断结账的房间号是否匹配，然后进行操作
			 	checkout_num.style.display="none";
				This.className="gongneng";
				sonContent[4].style.display="block";
				checkout_num1.value='';                   // 当解决匹配完房间后，更新输入框
				checkout_content.style.filter='alpha(opacity:'+100+')';
				checkout_content.style.opacity=1.0;
                var checkout_content_list = checkout_content.getElementsByTagName('input');
            	for(var i = 0;i<checkout_content_list.length-3;i++){
                	checkout_content_list[i].value='10';
                }  		
			}
			else{
				alert("房间不存在!");
				checkout_num1.value='';
			}
		}
	}
	else if(That==4&&This.Indexs==0){
		This.className="gongneng"; sonContent[0].style.display="block";
		loand();
	}
	else if(That==0&&This.Indexs==1){
		This.className="gongneng"; sonContent[1].style.display="block";
		dengji();
	}
	else{
		This.className="gongneng";								//将当前的li的类名置为gongneng
		sonContent[This.Indexs].style.display="block";         //显示当前li下的内容                                   
		xufang.style.display="none";	
	}
}
//续房界面从上面到下面缓冲下来的函数
var timer1=null;
function starmove(){
  var a = document.getElementById("xufangUI");
     clearInterval(timer1);
     timer1=setInterval(function(){
         var speed = (200 - a.offsetTop)/10;
         speed=speed>0?Math.ceil(speed):Math.floor(speed);
         a.style.top= a.offsetTop+speed+'px';
     },50);
 } 
//当点击其他功能时，再点回来时默认是第一个小功能
function reset1(That){
	var Content1 = document.getElementsByClassName("content1"); // 获取content1 这个div
	var LiLength= Content1[That].getElementsByTagName("li"); // 获取当前点击的这大的div下的li
	slide1(That,LiLength[0]);
	
};
//  删除房间

function delhouse(){
	var tr2 = document.getElementById("House2").getElementsByTagName("tr");
	var table2 = document.getElementById("House2").getElementsByTagName('table')[0];
	var p = 0;
	var dex = 0;
	var del = document.getElementById("delhouse");
	del.onclick=function DEL(){alert("请选择要删除的房间!");}
	//var td2 = This.getElementsByTagName("td");       //创建选中tr的td
	for(var n = 1;n<tr2.length;n++){
		tr2[n].dex=1;
		tr2[n].onclick=function(){
			for(var n = 1;n<tr2.length;n++){tr2[n].Index=n;}    // 将所有的tr序列用Index 保存下
			if(this.dex==1){                      //判断是否是1
	 			this.style.background="#3d759e";       //如果是1，将其变化为灰蓝色
	 			this.dex=0;                           //再将其置为0	
	 			p++;
 			}
 			else if(this.dex==0){
 				this.style.background="";       //如果是1，将其变化为灰蓝色
 				this.dex=1;
 				p--;
 			}
 			for(var k = 1;k<tr2.length;k++){     //   遍历所有的tr
	 			if(tr2[k].dex==0){                // 如果dex为0  就将其传递到add函数 进行增加房间
	 				var a=tr2[k].Index;
	 				dex=1;	
	 				break;
			    } 
			    else{dex=0;}	                     
			}
 			del1(this,p,this.dex,a,dex);
 			p=0;
 			
    	}			    	
	}			
}	
function del1(This,p,b,a,dex){
	var tr2 = document.getElementById("House2").getElementsByTagName("tr");
	var table2 = document.getElementById("House2").getElementsByTagName('table')[0];
	var del = document.getElementById("delhouse");
	del.onclick=function DEL(){
			//tr2.getElementsByTagName('tbody')[0].removeChild(tr2);
			if(p>1){alert("对不起！一次只能删除一间房！")}
			else{
				if(dex==0){alert("请选择要删除的房间");}
				else{
				 tr2[a].remove();
				 dex=0;
			    }
			    
 	        }
    }
}
//设置预定房间那个表的颜色
function tablecolor(){
	var tr1 = document.getElementById("House1").getElementsByTagName("tr");
	var tr2 = document.getElementById("House2").getElementsByTagName("tr");
	var reset = document.getElementById("chongzhi");
	var p=0;
	var ary = new Array();
	tr1[0].style.background='#4778c9';
	tr2[0].style.background='#4778c9';
	for(var j=1;j<=tr1.length;j+=2){
	 	tr1[j].style.background='#b1d1e4';	
	}
}
// 	// 将table1中的房间添加到table2中
// 	for(var i = 1;i<tr1.length;i++){
// 	 	tr1[i].dex=1;       // 设置一个标杆进行判断，如果为1，就让tr变色，如果不是就变回原来的颜色
// 	 	tr1[i].Index=i;
// 	 	tr1[i].onclick=function(){    	           
// 	 		if(this.dex==1){                      //判断是否是1
// 	 			this.style.background="#3d759e";       //如果是1，将其变化为灰蓝色
// 	 			p++;
// 	 			this.dex=0;                            //再将其置为0	
// 	 		}
// 	 		// for(var k = 1;k<tr1.length;k++){
	    	
//             // 		}
// 	 		else{    
// 	 			if(this.Index%2==0){                              //再次点击变回原来的颜色     
// 		 			this.style.background="";
// 		 			this.dex=1;
// 		 			p--;
// 	 			}
// 	 			if(this.Index%2==1){
// 	 				this.style.background="#b1d1e4";
// 	 				this.dex=1;
// 	 				p--;
// 	 			}
// 	 		}
	 		
// 	 		for(var k = 1;k<tr1.length;k++){     //   遍历所有的tr
// 	 			if(tr1[k].dex==0){                // 如果dex为0  就将其传递到add函数 进行增加房间
// 	 				var a=tr1[k].Index;
					
// 				}
// 				if(p==0){
// 					var a=0;
// 				}

// 			}
// 			// for(var m = 1;m<ary.length;m++){      // 进行多房间选定，每一个a 代表一个房间的编号
// 			// 	ary[k]=a;
// 			// }
// 	 		addhouse(a,p);

// 	 	}	
// 	}
// 	reset.onclick=function(){
// 		arr = [];
// 	}
		
// }
// var arr = new Array();                    //  创建一个数组用来存放要加入的房间号
// 	var t=0; 
// function addhouse(That,p){
// 	var tr1 = document.getElementById("House1").getElementsByTagName("tr");
// 	var tr2 = document.getElementById("House2").getElementsByTagName("tr");
// 	var table1 = document.getElementById("tablehouse").getElementsByTagName('table')[0];
// 	var table2 = document.getElementById("House2").getElementsByTagName('table')[0];
// 	var add = document.getElementById("addhouse");
//    	var td1 = tr1[That].getElementsByTagName("td");       //创建选中tr的td
//     var dex = 0;
// 	var orderHouse= document.getElementById("orderhousenum");
// 	var orderHouses= document.getElementById("orderhouses");
// 	add.onclick=function(){	
	
// 		if(p==0){alert("请先选择房间!");}
// 		else if(p>1){alert('对不起！一次只能添加一间房！');}
// 		else{
// 			for(var f=0;f<arr.length;f++){ 
// 				 // 判断数组中是否有这个房间号，如果重复就返回1，并跳出循环              
// 				if(arr[f]==td1[0].innerHTML){var num = 1;break;}      
// 				else{var num = 0;}              //如果不存在这个房间号，就返回0
// 		 	}
// 		 	if(num==1){								//如果为1，就提示重复
// 				alert("房间已经被选入，不能重复！");
// 		 	}		
			
// 			else {				//如果为0，就将房间号存入在创建好的数组中。并且动态创建tr
// 				arr[t]=td1[0].innerHTML;
// 	 			t++;
// 	 			orderHouse.value=orderHouse.value+td1[0].innerHTML+',';
				
// 				}

// 		}
		
//     }	
// }


				// var tr = document.createElement("tr");    // 创建tr
				// table2.appendChild(tr);
				// for(o=0;o<4;o++){
			 //    	var td = document.createElement("td");    //创建td
			 //    	tr.appendChild(td);
				// 	td.appendChild(document.createTextNode(td1[o].innerHTML));   //将td的内容加入到tr中 
	    			
	    		//}
	    		// 点击tr2的td变回原来的颜色 
	   //  		for(var j=1;j<tr2.length;j++){
				//  	if(j%2==1){
				//  	tr2[j].style.background='#b1d1e4';}
				//  	else{tr2[j].style.background='';}	
				// }
		    	
			
			// for(var i = 1;i<tr1.length;i++){
		  //   	if(That%2==0){                                   
		 	// 		tr1[That].style.background="";
		 	// 		tr1[That].dex=1;
		 			
				// }
				// if(That%2==1){
				// 	tr1[That].style.background="#b1d1e4";
				// 	tr1[That].dex=1;

				// }
	  		// }

	  	 	//将table2中的房间删除掉
			// for(var n = 1;n<tr2.length;n++){
			// 	tr2[n].dex=1;
			// 	tr2[n].Index=n;
			// 	tr2[n].onclick=function(){
			// 		
		 // 			for(var k = 1;k<tr2.length;k++){     //   遍历所有的tr
		 // 			if(tr2[k].dex==0){                // 如果dex为0  就将其传递到add函数 进行增加房间
		 // 				var a=tr2[k].Index;	
			// 	    }
			// 	    else{dex = 1;}
			// 		}
			// 		delhouse(this,a,this.dex,dex);
			// 		alert(dex);
			// 		alert(a);
			// 	}

			// }



	// for(var e=0;e<arr.length;e++){
	// 					if(arr[e]==This.getElementsByTagName("td")[0].innerHTML){
	// 						for(var v=e;v<arr.length;v++){
	// 							arr[v]=arr[v+1];
	// 						}
	// 						arr.length--;	
	// 					}	
	// 				}
	// 				dex=0;               //  每次删除后都要将所有的dex置为0，不能连续删除。
					
	// 				for(var j=1;j<tr2.length;j++){
	// 			 	if(j%2==1){
	// 			 	tr2[j].style.background='#b1d1e4';}
	// 			 	else{tr2[j].style.background='';}	
	// 				}
	// 			}