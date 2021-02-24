alert('冀新宇，传说中的男人，沙雕界的王者，张德科一直仰望冀新宇的名号，想找到他，做他的儿子，从此张德科翻山越岭，不远万里来找冀新宇。有一天张德科终于找到了冀新宇，说出来自己的愿望，冀新宇为了考验他的'+
'诚意，就把他仍到了异世界吃够80个奥里给就让他回来，并且认可张德科的诚意收他为干儿子，你的任务就是帮助德科吃够80个奥里给。');

//墙壁类的构造函数
function Qiangbi(){

}
// 墙壁类方法 实现撞墙会死
Qiangbi.prototype.siwang = function(){
    if(zhangdeke.zheng[0][0] == 30 || zhangdeke.zheng[0][1] == 20 || zhangdeke.zheng[0][0] == -1 || zhangdeke.zheng[0][1] == -1){
        alert('故有守株待兔，兔子逃命撞死树桩。今有我张德科吃屎不小心撞墙而死。了不起，了不起');
        location.reload();
    }
   
}

//new一个墙壁类的对象
var qiang = new Qiangbi();

// qiang.siwang();

//食物类的构造函数
function Shiwu(){
    this.x = 0;
    this.y = 0;
}

//食物类方法，开局随机出现食物
Shiwu.prototype.show = function(){
    //没有食物变量的话，就定义一个食物的变量
    if(!shi){
        var shi = document.getElementById('shiwu');
    }

    this.x = Math.floor(Math.random()*30);
    this.y = Math.floor(Math.random()*20);
    for(var  i = 0;  i< zhangdeke.zheng.length;i++){
        if(this.x == zhangdeke.zheng[i][0] && this.y == zhangdeke.zheng[i][1]){
            this.x = Math.floor(Math.random()*30);
            this.y = Math.floor(Math.random()*20);
            i = 0;
        }
    }
    shi.style.left = this.x *40 + 'px';
    shi.style.top = this.y *40 + 'px';
   
}

//new一个食物类的对象
var shi = new Shiwu();
// shi.show();

//蛇类构造方法。
function She(){
    //获取张德科的头
    this.tou = document.getElementById('tou');

    //获取蛇的状态
    this.zt = '';
    //获取张德科的头的风格
    this.tou_style = document.querySelectorAll('.tou_style');

    //获取张德科的身体 
    this.body = document.querySelectorAll('.she');

    //一个二维数组，记录张德科此时在哪个位置
    //第一个为哪个位置，第二个是X轴，第三个是Y轴
    this.zheng = [[5,4],
                 [4,4],
                 [3,4]];

    this.fdt = false;

    this.yisu = 500;

    this.
    setInter = 0;
}

//蛇类初始化方法
She.prototype.chushihua = function(){
    //把张德科的所有头的风格隐藏掉
    for(var i = 0;i<this.tou_style.length;i++){
        this.tou_style[i].style.display = 'none';
    }
    //留出来一个初始化的右蛇头的风格
    this.tou_style[1].style.display = 'inline-block'

    //初始化蛇的状态
    this.zt = 'right';
    // 把张德科的身体遍历出来,并且给好位置
    for(var i = 0;i<this.zheng.length;i++){
        this.body[i].style.left = this.zheng[i][0] * 40 + 'px';
        this.body[i].style.top = this.zheng[i][1] * 40 +'px';
    }

}

//蛇类移动方法
She.prototype.move = function(yisu){
    //29
    //19
    console.log("move",this.yisu)
    this.setInter =  setInterval(function(){

        //console.log("?");

        if(zhangdeke.zt=='top'){
            for(var i =  zhangdeke.zheng.length-1; i>0; i--){
                zhangdeke.zheng[i][0] = zhangdeke.zheng[i-1][0];
                zhangdeke.zheng[i][1] = zhangdeke.zheng[i-1][1];
            }

            zhangdeke.zheng[0][1]--;
            

            for(var i = 0;i<zhangdeke.zheng.length;i++){
                zhangdeke.body[i].style.left = zhangdeke.zheng[i][0] * 40 + 'px';
                zhangdeke.body[i].style.top = zhangdeke.zheng[i][1] * 40 +'px';
            }

            for(var i = 0;i<zhangdeke.tou_style.length;i++){
                zhangdeke.tou_style[i].style.display = 'none';
            }
            //留出来一个初始化的右蛇头的风格
            zhangdeke.tou_style[0].style.display = 'inline-block'
        }

        if(zhangdeke.zt=='right'){
            for(var i =  zhangdeke.zheng.length-1; i>0; i--){
                zhangdeke.zheng[i][0] = zhangdeke.zheng[i-1][0];
                zhangdeke.zheng[i][1] = zhangdeke.zheng[i-1][1];
            }

            zhangdeke.zheng[0][0]++;
            

            for(var i = 0;i<zhangdeke.zheng.length;i++){
                zhangdeke.body[i].style.left = zhangdeke.zheng[i][0] * 40 + 'px';
                zhangdeke.body[i].style.top = zhangdeke.zheng[i][1] * 40 +'px';
            }

            for(var i = 0;i<zhangdeke.tou_style.length;i++){
                zhangdeke.tou_style[i].style.display = 'none';
            }
            //留出来一个初始化的右蛇头的风格
            zhangdeke.tou_style[1].style.display = 'inline-block'
        }

        if(zhangdeke.zt=='bottom'){
            for(var i =  zhangdeke.zheng.length-1; i>0; i--){
                zhangdeke.zheng[i][0] = zhangdeke.zheng[i-1][0];
                zhangdeke.zheng[i][1] = zhangdeke.zheng[i-1][1];
            }

            zhangdeke.zheng[0][1]++;
            

            for(var i = 0;i<zhangdeke.zheng.length;i++){
               
                // alert( zhangdeke.body.length);
                
                zhangdeke.body[i].style.left = zhangdeke.zheng[i][0] * 40 + 'px';
                zhangdeke.body[i].style.top = zhangdeke.zheng[i][1] * 40 +'px';
            }

            for(var i = 0;i<zhangdeke.tou_style.length;i++){
                zhangdeke.tou_style[i].style.display = 'none';
            }
            //留出来一个初始化的右蛇头的风格
            zhangdeke.tou_style[2].style.display = 'inline-block'
        }

        if(zhangdeke.zt=='left'){
            for(var i =  zhangdeke.zheng.length-1; i>0; i--){
                zhangdeke.zheng[i][0] = zhangdeke.zheng[i-1][0];
                zhangdeke.zheng[i][1] = zhangdeke.zheng[i-1][1];
            }

            zhangdeke.zheng[0][0]--;
            

            for(var i = 0;i<zhangdeke.zheng.length;i++){
                zhangdeke.body[i].style.left = zhangdeke.zheng[i][0] * 40 + 'px';
                zhangdeke.body[i].style.top = zhangdeke.zheng[i][1] * 40 +'px';
            }

            for(var i = 0;i<zhangdeke.tou_style.length;i++){
                zhangdeke.tou_style[i].style.display = 'none';
            }
            //留出来一个初始化的右蛇头的风格
            zhangdeke.tou_style[3].style.display = 'inline-block'
        }
        
       zhangdeke.fdt = true;
       zhangdeke.chi();
       zhangdeke.siwang();
       qiang.siwang();
       //console.log(zhangdeke.zheng[0][0]);
       //console.log(zhangdeke.zheng[0][1]);
    },zhangdeke.yisu);
}

//蛇类拐弯方法
She.prototype.guai = function(){
    window.onkeyup = function(e){
        var evt = e || window.event;
        // //console.log(evt.keyCode);
        // alert(evt.keyCode);
        if(!zhangdeke.fdt){
            return;
        }
        if(evt.keyCode == 37 && zhangdeke.zt != 'right'){
            //左
            // alert();
            zhangdeke.zt = 'left' ;
        }else if(evt.keyCode == 39  && zhangdeke.zt != 'left'){
            //右
            zhangdeke.zt = 'right'; 
    
        }else if(evt.keyCode == 38  && zhangdeke.zt != 'bottom'){
            //上
            zhangdeke.zt = 'top';

        }else if(evt.keyCode == 40  && zhangdeke.zt != 'top'){
            //下
            zhangdeke.zt = 'bottom';
        }
        zhangdeke.fdt = false;
    }
}

//蛇吃食物
She.prototype.chi = function(){
    if(zhangdeke.zheng[0][0] == shi.x && zhangdeke.zheng[0][1] == shi.y){
        shi.show();
        var zdk = document.getElementById('zdk');
        var div = zhangdeke.body[zhangdeke.body.length-1]

        var c =  div.cloneNode(true);
       
        zdk.appendChild(c);
        // //console.log(zhangdeke.body.length);
        zhangdeke.body = document.querySelectorAll('.she');

        zhangdeke.zheng.push([0,0]);
        if(this.yisu>200){

            this.yisu -= 50;
            console.log("she.yish",this.yisu)
            console.log(this)
            clearInterval(this.setInter);
            //console.log("set",this.setInter)
            // alert(this.yisu);
            this.move(zhangdeke.yisu);
            // this.setInter =  this.move(zhangdeke.yisu);
            // console.log("this.set",this.setInter)
        }
        
    }
    
}

//蛇不能碰到自己
She.prototype.siwang = function(){
    for(var i = 1;i<this.zheng.length;i++){
        if(this.zheng[0][0] == this.zheng[i][0] && this.zheng[0][1] == this.zheng[i][1]){
            alert('张德科你丫的是饿死鬼投胎吗? 吃屎竟然把自己咬死了,人才！！！！');
            location.reload();
        }
    }
}
var zhangdeke = new She();
zhangdeke.chushihua();
zhangdeke.move(zhangdeke.yisu);
zhangdeke.guai();
shi.show();
