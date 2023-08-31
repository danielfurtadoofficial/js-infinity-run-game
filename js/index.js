var game = document.getElementById("game");
var gamer = document.getElementById("gamer");
var img_gamer = document.getElementById("img_gamer");
var ball1 = document.getElementById("ball1");
var img_ball = document.getElementById("img_ball");
var div_points = document.getElementById("points");
var fire = document.getElementById("fire");
var game_over_div = document.getElementById("game_over_div");
var killer = document.getElementById("killer");
var level = document.getElementById("level");
var points = 0;
var a1 = 0;
var a2 = 0;
var controlo = 0;
var controlo_sound = 0;

function jump(){

    if(window.innerWidth<700){

        if(points<33){
            gamer.style.animation="jump 1.4s linear";

            setTimeout( function(){
                gamer.style.animation="none";
            }, 1400);
        }else{
            gamer.style.animation="jump 1.1s linear";

            setTimeout( function(){
                gamer.style.animation="none";
            }, 1100);
        }
        
    }else{
        gamer.style.animation="jump 0.7s linear";

        setTimeout( function(){
            gamer.style.animation="none";
        }, 700);

    }

    if(localStorage.getItem('sound')=='on'){
        document.getElementById("jump_audio").play();

        if(controlo_sound==0){
            play();
            controlo_sound++;
        }
    }
    
}

function falling1(){

    a1 = setInterval(function(){
        ball1.style.animation="falling "+3+"s linear infinite";
    }, 3000);
    
    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/bin.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+2.75+"s linear infinite";
            }, 2750);

            level.innerHTML="<h1 style='font-size: 35px;'>Level 2</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear infinite";
                level.style.display="none";
            }, 1000);
        }

    }, 12000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/cone.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+2.5+"s linear infinite";
            }, 2500);

            level.innerHTML="<h1 style='font-size: 35px;'>Level 3</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear infinite";
                level.style.display="none";
            }, 1000);
        }

    }, 23000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/basket.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+2.25+"s linear infinite";
            }, 2250);
    
            level.innerHTML="<h1 style='font-size: 35px;'>Level 4 - Keep Going</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }
        

    }, 33000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/bomb.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+2+"s linear infinite";
            }, 2000);
    
            level.innerHTML="<h1 style='font-size: 35px;'>Level 5 </h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }
        

    }, 42000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/cube.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+1.75+"s linear infinite";
            }, 1750);
    
            level.innerHTML="<h1 style='font-size: 35px;'>Level 6 - Let's go</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }
        
    }, 50000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/cone.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+1.5+"s linear infinite";
            }, 1500);
    
            level.innerHTML="<h1 style='font-size: 35px;'>Level 7</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }
        
    }, 57000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/bomb.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+1.25+"s linear infinite";
            }, 1250);
    
            level.innerHTML="<h1 style='font-size: 35px;'>Level 8</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }

    }, 63000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/bin.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+1+"s linear infinite";
            }, 1000);
    
            level.innerHTML="<h1 style='font-size: 35px;'>Level 9 - ALMOST THERE</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }

    }, 68000);

    setTimeout(function(){

        clearInterval(a1);
        ball1.style.animation="none";
        img_ball.src="img/cube.gif"

        if(controlo==0){
            a1 = setInterval(function(){
                ball1.style.animation="falling "+0.75+"s linear infinite";
            }, 750);
    
            level.innerHTML="<h1 style='font-size: 40px;'>Level 10 - PRO LEVEL</h1>";
            level.style.display="block";
            setTimeout(function(){
                level.style.animation="die 1s linear";
                level.style.display="none";
            }, 1000);
        }

    }, 71000);

}

function aumentar_points(){

    a2 = setInterval(function(){
        div_points.innerHTML = "<center style='margin-top: 0px;'>Score: "+points+"</center>";
        points++;
      },1000);

}

function gravar_dados_jogo(valor){

    var i=0;
    var record="record0";
    var valor_antes = 0;

    if(valor > localStorage.getItem('record9')){
        regist_best_score(valor);
    }

    for(; i<10 ; i++){

        record="record"+i;
        record_anterior = "record"+(i-1);

        if(i==0){

            if(valor > localStorage.getItem(record)){
                
                localStorage.setItem(record, valor);

                //:::::::::::::: REGISTRAR BEST SCORE NO SERVER +::::::::::::::::::::::
            }

        }else{
            if(valor > localStorage.getItem(record)){
                valor_antes = localStorage.getItem(record);
                localStorage.setItem(record, valor);
                localStorage.setItem(record_anterior, valor_antes);
            }
        }
        
    }

    historico(valor);
    regist_last_score(valor);
}

function regist_best_score(score){
    //:::::::::::::::::::::::: SERVER CONNECTION :::::::::::::::::::::

			var request = new XMLHttpRequest();
			request.open("GET", "http://asfernandes.com/api/corridaObstakulo/registTopScore.php?table=a9508&user="+localStorage.getItem('username')+"&top_score="+score+"", true);
			
			request.onload= function(){
			var dados= JSON.parse(this.response);
				
				if(request.status>=200 && request.status<400){
					console.log(dados.response);
					if(dados.response="OK"){
						
						alert("Best Score. Registed on the Server.");
					}else{
						localStorage.clear();
						alert("Erro ao Registrar no Server.");
						
					}
			
				}else{
					console.log("Error");
					alert("Erro de Conexão. Verifique sua Internet.");
				}
			}

			request.send();

			//:::::::::::::::::::::::: SERVER CONNECTION FINISH:::::::::::::::::::::*/
}

function regist_last_score(score){
    //:::::::::::::::::::::::: SERVER CONNECTION :::::::::::::::::::::

    var request = new XMLHttpRequest();
    request.open("GET", "http://asfernandes.com/api/corridaObstakulo/registLastScore.php?table=a9508&user="+localStorage.getItem('username')+"&last_score="+score+"", true);
    
    request.onload= function(){
    var dados= JSON.parse(this.response);
        
        if(request.status>=200 && request.status<400){
            console.log(dados.response);
            if(dados.response="OK"){
                
            }else{
                localStorage.clear();
                alert("Erro ao Registrar Last Score no Server.");
            }
    
        }else{
            console.log("Error");
            alert("Erro de Conexão. Verifique sua Internet.");
        }
    }

    request.send();

	//:::::::::::::::::::::::: SERVER CONNECTION FINISH:::::::::::::::::::::*/
}


function historico(valor){

    //:::::: PEGAR DATA :::::::::
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = String(data.getFullYear());
    var dataFormatado = dia +"/"+ mes + "/" + ano;
    //:::::::::::::::::::::::::::

    //:::::: GRAVAR DATA ::::::::
    var historico_new = dataFormatado+" => "+ String(valor);
    
    
    var historico9 = localStorage.getItem('historico9');
    var historico8 = localStorage.getItem('historico8');
    var historico7 = localStorage.getItem('historico7');
    var historico6 = localStorage.getItem('historico6');
    var historico5 = localStorage.getItem('historico5');
    var historico4 = localStorage.getItem('historico4');
    var historico3 = localStorage.getItem('historico3');
    var historico2 = localStorage.getItem('historico2');

    localStorage.setItem('historico9', historico_new);

    localStorage.setItem('historico8', historico9);
    localStorage.setItem('historico7', historico8);
    localStorage.setItem('historico6', historico7);
    localStorage.setItem('historico5', historico6);
    localStorage.setItem('historico4', historico5);
    localStorage.setItem('historico3', historico4);
    localStorage.setItem('historico2', historico3);
    localStorage.setItem('historico1', historico2);

}

function game_over(){

    setInterval(function () {
        var left_A = gamer.offsetLeft;
        var width_A = gamer.offsetWidth;
        var top_A = gamer.offsetTop;
        var height_A = gamer.offsetHeight;
        var left_B = ball1.offsetLeft;
        var top_B = ball1.offsetTop;
        var left_width_A = left_A+width_A;
        var top_height_A = top_A+height_A;

        if(left_width_A >= left_B && left_A <left_B &&  top_height_A >= top_B){
            explosion();
            controlo=1;
            clearInterval(a1);
            clearInterval(a2);

            ball1.style.animation="none";
            gravar_dados_jogo(points);
            points = 0;
            fire.style.display="block";
            
            img_gamer.style.animation="0.5s die linear infinite";
            killer.style.animation="3s die_killer linear";

            setInterval(function () {
                killer.style.display="none";
            }, 3000);

            setInterval(function () {
                fire.style.display="none";
            }, 1000);

            setInterval(function () {
                img_gamer.style.display="none";
                game_over_div.style.display="block";
            }, 3000);

            setTimeout(function () {
                window.location.href='start.html';
            }, 3400);
            
        }
    }, 0);
}

function play(){
    document.getElementById('demo').volume=0.3;
    document.getElementById('demo').pause();
    document.getElementById('play').style.display='none';
    document.getElementById('pause').style.display='block';
    localStorage.setItem('sound','on');
}

function pause(){
    document.getElementById('demo').play();
    document.getElementById('pause').style.display='none';
    document.getElementById('play').style.display='block';
    localStorage.setItem('sound','off');
}

function explosion(){
    if(document.getElementById('play').style.display=='block'){
        document.getElementById('explosion_audio').volume=0.7;
        document.getElementById('explosion_audio').play();
    }
}

window.addEventListener("keyup", function (){
    jump();
} );

start_game();

function start_game(){
    falling1();
    game_over();
    aumentar_points();
}



//regist table user 
/*top_score lastscore

registLastScore table user last_score
registTopScore table user last_score*/
//topscore table return response com lista de scores 
