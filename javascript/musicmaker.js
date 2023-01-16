
function convertUrlToString(url) {
    urlVideoString = url.slice(17,150)
    return urlVideoString;
}

function linkarUrl() {
        urlVideo = document.getElementById('url').value;
        var valor = urlVideo;
        if (urlVideo.length == 0) {
            alert("Campo Vazio");
            } else {
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                var player;
                esconder();
                ativacaoDeTeclas = true;
                onYouTubeIframeAPIReady(urlVideo)
                onPlayerReady()
        }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100',
        width: '300',
        videoId: convertUrlToString(urlVideo),
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    if (player.getPlayerState() == -1) {
        player.destroy()
        alert("O Video Escolhido Não está disponivel Devido A Direitos Autorais!")
        ativacaoDeTeclas = false
        const startbotao = document.getElementById('botao-start');
        startbotao.hidden = false;
        const botoes = document.getElementById('dj-space-botoes')
        botoes.hidden = true;
        const urlLink = document.getElementById('espaco-linkagem');
        urlLink.hidden = false;
    } else {
        event.target.playVideo();
    }
}

    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
        } 
    }
    function pauseVideo() {
        if (player.getPlayerState() == 2) {
            player.playVideo()
        } else if(player.getPlayerState() == 1 ) {
            player.pauseVideo();
        };
    }
    function hideVideo(){
        player.hidden()
    }

    function stopVideo() {
        if (player.getPlayerState() == 0) {
            alert("Não existe Video para ser tocado")
        } else {
            player.destroy()
            ativacaoDeTeclas = false
            const startbotao = document.getElementById('botao-start');
            startbotao.hidden = false;
            const botoes = document.getElementById('dj-space-botoes')
            botoes.hidden = true;
            const urlLink = document.getElementById('espaco-linkagem');
            urlLink.hidden = false;
            
        }
    }

function esconder(){
    const startbotao = document.getElementById('botao-start');
        startbotao.hidden = true;
    const botoes = document.getElementById('dj-space-botoes');
        botoes.hidden = false;
    const urlLink = document.getElementById('espaco-linkagem');
        urlLink.hidden = true;
    
}

var ativacaoDeTeclas = false;
var styleElem = document.createElement("style");

document.onkeydown = function(event) {
    var key_press = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;
    if (key_press == "A" && ativacaoDeTeclas == true) {
        botao1();
    }
    else if (key_press == "S" && ativacaoDeTeclas == true) {
        botao2();
        
    } 
    else if (key_press == "D" && ativacaoDeTeclas == true) {
        botao3();
    }
    else if (key_press == "W" && ativacaoDeTeclas == true) {
        botao4();
    }
    else if (key_press == "Enter" || key_code == 13) {
        linkarUrl();
    }
    else if (key_press == "Space" || key_code == 32 && ativacaoDeTeclas == true) {
        pauseVideo();
    }
    else if (key_press == "T" && ativacaoDeTeclas == true) {
        stopVideo();
    }
    };
    const sleep = (duration) => {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

function botao1() {    
    styleElem.id = "efeitobotao"
    styleElem.innerHTML = "#dj-space-botoes::after {content: ''; width: 40px; height: 40px; border-radius: 100%; border: 5px solid #c51350; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: ring 1s infinite} .botao-1{background: linear-gradient(45deg, #fda403, #e8751a); transition: 0.3s linear; box-shadow: 0px 0px 25px rgba(197,19,80,25)}";
    document.head.appendChild(styleElem);
    var elemento = document.getElementById('efeitobotao')

    sleep(450).then(() => {
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    })  

    const audio1 = new Audio("/ES_Bass Drop - SFX Producer.mp3");
    audio1.play();
    }
    
function botao2() {
    styleElem.id = "efeitobotao";
    styleElem.innerHTML = ".botao-2 {background: linear-gradient(45deg, #d55b3e, #fcf4d9); box-shadow: 0px 0px 25px rgba(0,170,160,25); animation: piscar 0.5ms;}";
    
    document.head.appendChild(styleElem);
    var elemento = document.getElementById('efeitobotao');

    sleep(250).then(() => {
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    })

    const audio2 = new Audio("/ES_Drum Hit High Hat 1 - SFX Producer.mp3")
    audio2.play()
}

function botao3() {
    styleElem.id = "efeitobotao";
    styleElem.innerHTML = ".botao-3 {background: rgba(255,255,255, 1); box-shadow: 0px 0px 25px rgba(0,0,0,25); animation: fade 0.5s; transition: 0.1s linear}";
    
    document.head.appendChild(styleElem);
    var elemento = document.getElementById('efeitobotao');
    
    sleep(250).then(() => {
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    })

    const audio3 = new Audio("/ES_PREL Hit Digital 18 - SFX Producer.mp3")

    audio3.play()
}

function botao4() {

    styleElem.id = "efeitobotao";
    styleElem.innerHTML = ".botao-4 {background-image: url(/img/palmas.png); background-size: 106%; box-shadow: 0px 0px 25px rgba(125,216,125,25)} #dj-space-botoes::after {content: ''; width: 40px; height: 40px; border-radius: 100%; border: 8px solid #facf5a; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: ring 0.5s infinite}";
    
    document.head.appendChild(styleElem);
    var elemento = document.getElementById('efeitobotao');

    sleep(280).then(() => {
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    })

    const audio4 = new Audio("/ES_Hand Clap Indoors 3 - SFX Producer.mp3")

    audio4.play()
}

var info = true;

function botaoClose() {
    if (info == true){
        var tag = document.getElementById('informacao');
    
        var url = document.getElementById('espaco-linkagem')
    
        var start = document.getElementById('botao-start')
        
        if (ativacaoDeTeclas == false){
            start.hidden = false;
            url.hidden = false;
        }
        tag.hidden = true;
        info = false;
    } else {
        console.log("A janela de informação já está fechada")
    }
}

function botaoInfo() {
    if (info == false) {
        var tag = document.getElementById('informacao');
    
        var url = document.getElementById('espaco-linkagem')
    
        var start = document.getElementById('botao-start')
            start.hidden = true;
            url.hidden = true;
            tag.hidden = false;
            info = true;

    } else {
        console.log("A Janela de informação já está aberta")
    }
}
