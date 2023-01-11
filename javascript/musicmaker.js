
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

function linkarUrl2() {
    urlVideo = document.getElementById('url').value;
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    if (urlVideo.length == 0) {
        alert("Campo Vazio");
    } else {
        esconder2();
        ativacaoDeTeclas = true;
        onYouTubeIframeAPIReady(urlVideo)
        onPlayerReady()
    }
}

function onYouTubeIframeAPIReady(url) {
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


function onYouTubeIframeAPIReady2(url) {
    player = new YT.Player('player2', {
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
    event.target.hideVideo();
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


function esconder2() {
    const startbotao2 = document.getElementById('botao-start2');
        startbotao2.hidden = true;
    const urlLink2 = document.getElementById('espaco-linkagem2');
        urlLink2.hidden = true;
    const botoesDeMidia2 = document.getElementById('botoes-de-midia2')
        botoesDeMidia2.hidden = false;

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
        botao1()
    }
    else if (key_press == "S" && ativacaoDeTeclas == true) {
        botao2()
    } 
    else if (key_press == "D" && ativacaoDeTeclas == true) {
        botao3()
    }
    else if (key_press == "W" && ativacaoDeTeclas == true) {
        botao4()
    }
    else if (key_press == "Enter" || key_code == 13) {
        linkarUrl()
    }
    else if (key_press == "P") {
        pauseVideo()
    }
    else if (key_press == "T") {
        stopVideo()
    }
    };
/* em desenvolvimento 
function launchpad(numero) {
    if (numero == 1) {
        let mudancaBotao2 = document.getElementsByClassName("botao-2")
        let mudancaBotao3 = document.getElementsByClassName("botao-3")
        let mudancaBotao4 = document.getElementsByClassName("botao-4")
        mudancaBotao2.style.background = 'background: linear-gradient(45deg, #8a1253,#c51350);';
        mudancaBotao2.style.transition = '0.3s linear;';

    }
}
*/

function botao1() {
    const audio1 = new Audio("/ES_Bass Drop - SFX Producer.mp3");
    audio1.play();
    /*launchpad(1)*/
}

function botao2() {
    const audio2 = new Audio("/ES_Drum Hit High Hat 1 - SFX Producer.mp3")
    audio2.play()
    /*launchpad(2)*/
}

function botao3() {
    const audio3 = new Audio("/ES_PREL Hit Digital 18 - SFX Producer.mp3")

    audio3.play()
    /*launchpad(3)*/
}

function botao4() {
    const audio4 = new Audio("/ES_Hand Clap Indoors 3 - SFX Producer.mp3")

    audio4.play()
    /*launchpad(4)*/
}
