window.onload=function main1(){
    var List = document.getElementById("list").getElementsByTagName("li");    //获取最前面最大的功能
    var o = List.length;
    var Content=document.getElementsByClassName("content");              //获取每一个最大的内容块
    var Address = document.getElementsByClassName("address");            //获取地址栏中放时间和目录的模块
    var Content1 = document.getElementsByClassName("content1");          // 内容中左边的模块
    tick();// 调用显示时间函数
    setInterval(tick,1000); // 定时器，更新时间
    Address[0].getElementsByTagName("span")[0].innerHTML='您当前的位置:'+List[0].getElementsByTagName("p")[0].innerHTML+'>'+'预订>';  //地址栏默认地址
    sonslide(0,'您当前的位置:首页>');
    tablecolor();
    delhouse();
    // 循环初始所有点击事件
    for(var i =0;i<o;i++){  
        List[i].indexs=i;
        // 鼠标移到功能块上面就会变色
        List[i].onmouseover=function(){ 
           this.style.background="#347a7c";
         }
          List[i].onmouseout=function(){ 
           this.style.background="";
         }

        // 鼠标点击功能就会出现相应的功能块
        List[i].onclick=function(){ 
            this.style.background="#267171";
            slide(this);
            Content[this.indexs].style.display='block';
            // 地址栏显示相应的目录
            span='您当前的位置:';
            if(this.indexs==1){Address[this.indexs].getElementsByTagName("span")[0].innerHTML=span+this.getElementsByTagName("p")[0].innerHTML+'>';
             house_status();
            }
            // +Content1[this.indexs].getElementsByTagName("li")[0].getElementsByTagName("span")[0].innerHTML ;}
            else{
            Address[this.indexs].getElementsByTagName("span")[0].innerHTML=span+this.getElementsByTagName("p")[0].innerHTML+'>'
            +Content1[this.indexs].getElementsByTagName("li")[0].getElementsByTagName("span")[0].innerHTML+'>';
            }
            var a =  span+this.getElementsByTagName("p")[0].innerHTML+'>';
            sonslide(this.indexs,a); 
            reset1(this.indexs);

        }
    }
    
    save_yuding();             // 点击预定保存按钮时，房太图将有所变化   
};
// 鼠标点击事件
function slide(This){
    var List = document.getElementById("list").getElementsByTagName("li");
    var o = List.length;    
    var Content=document.getElementsByClassName("content");
    for(var i = 0;i<o;i++){
         List[i].className="";
         Content[i].style.display='none';
    }
    This.className="Function";   
}
// 将单时间数转化为双时间数，例如1分转化为01分
function double(i){
    if(i<10){
     return(i='0'+i);
    }
    else{
     return i;
    }
}
   // 在地址栏显示当前时间
function tick(){
    var List = document.getElementById("list").getElementsByTagName("li");
    var Address = document.getElementsByClassName("address");
    var o = List.length;
    var a =new Date(); 
    var b = a.getMonth()+1; //月份输出要加1
    // 将阿拉伯星期转化为汉字星期
    var c = a.getDay();
    var arr=['日','一','二','三','四','五','六'];
    for(var t=0;t<=6;t++){
        if(c==t){var d=(arr[t]);}
    }
    for(var k=0;k<o;k++){
    // 每一个块都显示时间
        Address[k].getElementsByTagName("span")[1].innerHTML= double(a.getFullYear())+'年'+double(b)+'月'+double(a.getDate())+'日'+' '+
        double(a.getHours())+':'+double(a.getMinutes())+':'+double(a.getSeconds())+' '+'星期'+d;
    }
}

