
function convertUrlToString(url) {
    urlVideoString = url.slice(17,150)
    return urlVideoString;
}

function linkarUrl() {
        urlVideo = document.getElementById('url').value;
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        if (urlVideo.length == 0) {
            alert("Campo Vazio");
        } else {
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
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
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
    /*let c = 0;*/

function botao1() {        
    var styleElem = document.createElement("style");
    styleElem.id = "efeitobotao1"
    styleElem.innerHTML = "#dj-space-botoes::after {content: ''; width: 40px; height: 40px; border-radius: 100%; border: 5px solid #c51350; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: ring 1s infinite;"
    document.head.appendChild(styleElem);
    var elemento = document.getElementById('efeitobotao1')

    const sleep = (duration) => {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

    sleep(450).then(() => {
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            elemento.remove();
        }
    })  

    const audio1 = new Audio("/ES_Bass Drop - SFX Producer.mp3");
    audio1.play();
    }

function botao2() {
    /*var styleElem2 = document.createElement("style");
    styleElem2.id = "efeitobotao2";
    styleElem2.innerHTML = '#botao-2: {box-shadow: 0px 0px 10px rgba(213,91,62,25);}';
    console.log(styleElem2)
    console.log(styleElem2.id)
    document.head.appendChild(styleElem2);
    var elemento2 = document.getElementById('efeitobotao2');

    const sleep = (duration) => {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

    sleep(1050).then(() => {
        while (elemento2.firstChild) {
            elemento2.removeChild(elemento2.firstChild);
            elemento2.remove();
        }
    })*/

    const audio2 = new Audio("/ES_Drum Hit High Hat 1 - SFX Producer.mp3")
    audio2.play()
}

function botao3() {
    const audio3 = new Audio("/ES_PREL Hit Digital 18 - SFX Producer.mp3")

    audio3.play()
}

function botao4() {
    const audio4 = new Audio("/ES_Hand Clap Indoors 3 - SFX Producer.mp3")

    audio4.play()
}
