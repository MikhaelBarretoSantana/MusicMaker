
function convertUrlToString(url) {
    urlVideoString = url.slice(17,150)
    return urlVideoString;
}

function verificador(link){ 
    const player = document.getElementById('box')
        player.src = link;            
        player.autoplay = true;
        player.hidden = true;
}

function url(codigoUrl) {
    var link = "https://www.youtube.com/embed/" + codigoUrl + "?autoplay=1";
        verificador(link)
    }   

function linkarUrl() {
        urlVideo = document.getElementById('url').value;
        stringUrl = convertUrlToString(urlVideo);
        if (stringUrl.length == 0) {
            alert("Campo Vazio");
        } else {
            setInterval(url(stringUrl),4000);
            lista_links.push(urlVideo);
            esconder();
            ativacaoDeTeclas = true;
        }
}

function PauseVideo() {
    var div = document.getElementById("box");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    func = state == 'pausado' ? 'playVideo' : 'pauseVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function esconder(){
    const startbotao = document.getElementById('botao-start');
    startbotao.hidden = true
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
    };

    let lista_links = [];
    var node = document.createElement('LI');
    lista_links.forEach(element => {
        var nodetext = document.createTextNode(element);
        node.appendChild(nodetext);
        document.getElementById('lista').appendChild(node);
        console.log(lista_links)
    });
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
