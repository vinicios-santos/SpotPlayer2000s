let allMusics = [
    {
        titleMusic:'Dont lie',
        titleArtist: 'The Black Eyed Peas',
        src: "musics/The Black Eyed Peas - Don't Lie.mp3",
        imgArtist: "img/black-eyed-peas.jpg",

    },
    {
        titleMusic:'Beatiful Girls',
        titleArtist: 'Sean Kingston',
        src: "musics/Sean Kingston - Beautiful Girls.mp3",
        imgArtist: 'img/sean.jpg'

    },
    {
        titleMusic:'Price Tag',
        titleArtist: 'Jessie J',
        src: "musics/Jessie J - Price Tag ft. B.o.B.mp3",
        imgArtist: 'img/jessie.jpg'

    },
    {
        titleMusic:'Dilemma',
        titleArtist: 'Nelly',
        src: "musics/Nelly - Dilemma.mp3",
        imgArtist: 'img/nelly.jpeg'

    }
]




let music = document.querySelector('audio');
let musicDuration = document.querySelector('.finish');
let artist = document.querySelector('.artist');
let musicName = document.querySelector('h2');
let artistName = document.querySelector('i');
let imgName = document.querySelector('.artist')
let indexMusic = 0;


document.querySelector('.play').addEventListener('click', playMusic);
document.querySelector('.pause').addEventListener('click', pauseMusic);
document.querySelector('.back').addEventListener('click', () => {
    indexMusic--;
    if(indexMusic < 0){
        indexMusic = 3;
    }
    renderMusic(indexMusic);
});
document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if(indexMusic > 3){
        indexMusic = 0;
    }
    renderMusic(indexMusic);
});

musicDuration.textContent = transformMinutes(Math.floor(music.duration));

music.addEventListener('timeupdate', updateBar);

function  renderMusic(index){
    music.setAttribute('src', allMusics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = allMusics[index].titleMusic;
        artistName.textContent = allMusics[index].titleArtist;
        imgName.src = allMusics[index].imgArtist;
        musicDuration.textContent = transformMinutes(Math.floor(music.duration));
    });
}


function playMusic(){
    music.play();
    document.querySelector('.pause').style.display = 'inline';
    document.querySelector('.play').style.display = 'none';
}
function pauseMusic(){
    music.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'inline';
}
function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let timeElapsed = document.querySelector('.first');
    timeElapsed.textContent = transformMinutes(Math.floor(music.currentTime));
}

function transformMinutes(seconds){
    let localMinute =  Math.floor(seconds / 60);
    let localSecond = seconds % 60;
    if(localSecond < 10){
        localSecond = '0' + localSecond;
    }

    return localMinute+ ':' +localSecond;
} 
