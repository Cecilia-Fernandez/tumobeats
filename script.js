window.onload = async function(){

    //carregar dados da internet (data.json) wowowowowowowowow
    let request = await fetch ("data.json");
    let audioData = await request.json()


    // variaveis de elementos 
    let title = document.querySelector ("#title")
    let previousButton = document.querySelector("#previous-button")
    let playButton = document.querySelector("#play-button")
    let nextButton = document.querySelector("#next-button")

    let scrubInput = document.querySelector ("#scrub-input")
    let volumeInput = document.querySelector ("#volume-input")

    let fileInput = document.querySelector("#file-input")

    let audio = document.querySelector("audio")
    let currentMusic = 1


    // Funções
    function changeTitle (value){
        title.innerText = value
    }
    function updateInputBar (value, bar){
        bar.style.transform = "scaleX(" + value / 100 + ")";
    }

    previousButton.onclick = function () {
    }

    playButton.onclick = function () {
        if(audio.paused){
            playAudio();
        } else {
            pauseAudio();
        }
    }

    nextButton.onclick = function () {
    }

    scrubInput.querySelector("input").oninput =function(event) {
        let bar = scrubInput.querySelector(".range-bar");
        updateInputBar(event.target.value, bar);
    }

    volumeInput.querySelector("input").oninput =function(event) {
        let bar = volumeInput.querySelector(".range-bar");
        updateInputBar(event.target.value, bar);
    }

    fileInput.oninput = function (){
        console.log("aqui!")
    }
    function playAudio(){
        console.log("qwl")
        audio.src = audioData[currentMusic].url;
        audio.play();
    }
    function pauseAudio(){
        audio.pause();
    }
    audio.onplay = function (){
        let playIcon = document.querySelector("#icon-play")
        let pauseIcon = document.querySelector("#icon-pause")
        playIcon.style.display = "none";
        pauseIcon.style.display = "block"
        
        console.log("audio esta a tocar!")
    }
    audio.onpause = function (){
        let playIcon = document.querySelector("#icon-play")
        let pauseIcon = document.querySelector("#icon-pause")
        playIcon.style.display = "block";
        pauseIcon.style.display = "none"
    
}
}