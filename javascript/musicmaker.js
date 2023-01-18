/* Fatiador de codigo para pegar apenas o Codigo do video */
function convertUrlToString1(url) {
    urlVideoString = url.slice(17,150)
    return urlVideoString;
}
/* Fatiador de codigo para pegar o URL dentro do link */
function convertUrlToString2(url) {
    urlVideoString = url.slice(32,43)
    return urlVideoString;
}

var tocador1 = false;
/* O primeiro Media player e suas funções */
function linkarUrl1() {
    urlVideo = document.getElementById('url').value;
    console.log(urlVideo)
    var valor = urlVideo;

    
        if (urlVideo.length == 0) {
            alert("Campo Vazio");
            } else {
                if (valor.includes("?list=") || valor.includes("&list=")) {
                    alert("A Aplicação não consegue tocar playlists")
                } else {                    
                    if (valor.includes("https://youtu.be/")) {
                        
                        var tag = document.createElement('script');
                        tag.src = "https://www.youtube.com/iframe_api";
                        var firstScriptTag = document.getElementsByTagName('script')[0];   
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        var player;
                        tocador1 = true;

                        ativacaoDeTeclas = true;
                        esconder1();
                        onYouTubeIframeAPIReady(urlVideo)
                        onPlayerReady1();
                    } else if (valor.includes("https://www.youtube.com/")) {
                        alert("Você Copiou o link do video não o URL")
                        urldovideo = convertUrlToString2(valor);
                        alert("O url do video é " + "https://youtu.be/" + urldovideo )
                    }
                }
            }
}

function onPlayerReady1(event) {
    if (player.getPlayerState() == -1) {
        player.destroy()
        alert("O Video Escolhido Não está disponivel Devido A Direitos Autorais!")
            ativacaoDeTeclas = false
        const startbotao = document.getElementById('espaco-linkagem-botao1');
            startbotao.hidden = false;
        const botoes = document.getElementById('dj-space-botoes')
            botoes.hidden = true;
        const urlLink = document.getElementById('espaco-linkagem1');
            urlLink.hidden = false;
        const urlLink2 = document.getElementById('espaco-linkagem2')
            urlLink2.hidden = true;
        const botaoPlayer2 = document.getElementById('botao-start2');
            botaoPlayer2.hidden = true;
        tocador1 = false;
    } else {
        event.target.playVideo();
    }
}

/* Função para o URL do video*/
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100',
        width: '300',
        videoId: convertUrlToString1(urlVideo),
        events: {
            'onReady': onPlayerReady1,
            'onStateChange': onPlayerStateChange,
        }
    });
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    } 
}

function esconder1(){
    const espacoLinkagem = document.getElementById('espaco-linkagem1');
        espacoLinkagem.hidden = true;
    const espacoLinkagemBotao = document.getElementById('espaco-linkagem-botao1');
        espacoLinkagemBotao.hidden = true;
    const botoes = document.getElementById('dj-space-botoes');
        botoes.hidden = false;
    const player2 = document.getElementById("espaco-linkagem2")
        player2.hidden = false;
    const botaoPlayer2 = document.getElementById("botao-start2");
        botaoPlayer2.hidden = false;
}

/* O Segundo media player e suas configurações */
var tocador2 = false;

function linkarUrl2() {
    urlVideo2 = document.getElementById('url2').value;
    var valor = urlVideo2;

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];

    if (urlVideo2.length == 0) {
        alert("Campo Vazio");
        } else {
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                var player2;
                tocador2 = true;

            if (valor.includes("https://youtu.be/")) {
                console.log("link 1")
                console.log(convertUrlToString1(valor))

                esconder2();
                onYouTubeIframeAPIReady3(urlVideo2)
                onPlayerReady2()
                
            } else if (valor.includes("https://www.youtube.com/")) {
                console.log("link 2");
                console.log(convertUrlToString2(valor))

                esconder2();
                onYouTubeIframeAPIReady4(urlVideo2)
                onPlayerReady2()
                
            }
    }
}

/* Função para o URL do video*/
function onYouTubeIframeAPIReady3() {
    player2 = new YT.Player('player2', {
        height: '100',
        width: '300',
        videoId: convertUrlToString1(urlVideo2),
        events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function pauseVideo() {
    if (player.getPlayerState() == 2) {
        player.playVideo()
    } else if(player.getPlayerState() == 1 ) {
        player.pauseVideo();
    };
}

function stopVideo() {
    if (player.getPlayerState() == 0) {
        alert("Não existe Video para ser tocado")
    } else {
        stopVideo2()
        player.destroy()
        ativacaoDeTeclas = false
        const startbotao = document.getElementById('espaco-linkagem-botao1');
            startbotao.hidden = false;
        const botoes = document.getElementById('dj-space-botoes')
            botoes.hidden = true;
        const urlLink = document.getElementById('espaco-linkagem1');
            urlLink.hidden = false;
        const player2 = document.getElementById("espaco-linkagem2")
            player2.hidden = true;
        const botaoPlayer2 = document.getElementById("botao-start2");
            botaoPlayer2.hidden = true;

        tocador1 = false;
    }
}

/* Função para o link do video */
function onYouTubeIframeAPIReady4() {
    player2 = new YT.Player('player2', {
        height: '100',
        width: '300',
        videoId: convertUrlToString2(urlVideo2),
        events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2,
        }
    });
}

function onPlayerReady2(event) {
    if (player2.getPlayerState() == -1) {
        player2.destroy()
        alert("O Video Escolhido Não está disponivel Devido A Direitos Autorais!")
        ativacaoDeTeclas = false
        const startbotao = document.getElementById('botao-start2');
        startbotao.hidden = false;
        const botoes = document.getElementById('dj-space-botoes')
        botoes.hidden = true;
        const urlLink = document.getElementById('espaco-linkagem2');
        urlLink.hidden = false;
        tocador1 = false;
    } else {
        event.target.playVideo();
    }
}

    var done2 = false;
    function onPlayerStateChange2(event) {
        if (event.data == YT.PlayerState.PLAYING && !done2) {
            done2 = true;
        } 
    }

    function pauseVideo2() {
        if (player2.getPlayerState() == 2) {
            player2.playVideo()
        } else if(player2.getPlayerState() == 1 ) {
            player2.pauseVideo();
        };
    }

    function stopVideo2() {
        if (player2.getPlayerState() == 0) {
            alert("Não existe Video para ser tocado")
        } else {
            player2.destroy()
            ativacaoDeTeclas = false
            const startbotao = document.getElementById('botao-start2');
            startbotao.hidden = false;
            const urlLink = document.getElementById('espaco-linkagem2');
            urlLink.hidden = false;
            const botaoStop2 = document.getElementById('botao-stop2');
                botaoStop2.hidden = true;
            const botaoPausePlay2 = document.getElementById('botao-pause2');
                botaoPausePlay2.hidden = true;
            tocador2 = false;
        }
    }


function esconder2(){
    const espacoLinkagem = document.getElementById('espaco-linkagem2');
        espacoLinkagem.hidden = true;
    const espacoLinkagemBotao = document.getElementById('botao-start2');
        espacoLinkagemBotao.hidden = true;
    const botaoStop2 = document.getElementById('botao-stop2');
        botaoStop2.hidden = false;
    const botaoPausePlay2 = document.getElementById('botao-pause2');
        botaoPausePlay2.hidden = false;
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
        if (tocador1 == false) {
            linkarUrl1();
        } else {
            linkarUrl2();
        }
    }
    else if (key_press == "Space" || key_code == 32 && ativacaoDeTeclas == true) {
        pauseVideo();
    }
    else if (key_press == "T" && ativacaoDeTeclas == true) {
        stopVideo();
    }
    else if (key_code == 100 && ativacaoDeTeclas == true) {
        pauseVideo2();
    }
    else if (key_code == 102 && ativacaoDeTeclas == true) {
        stopVideo2();
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

var info = false;

function botaoClose() {
    if (info == true){
        var tag = document.getElementById('informacao');
    
        var url = document.getElementById('espaco-linkagem1')

        var url2 = document.getElementById('espaco-linkagem2')
    
        var start = document.getElementById('botao-start')

        var start2 = document.getElementById('botao-start2')
        
        if (ativacaoDeTeclas == false){
            start.hidden = false;
            start2.hidden = false
            url.hidden = false;
            url2.hidden = false;
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
            tag.hidden = false;
            info = true;

    } else {
        console.log("A Janela de informação já está aberta")
    }
}
