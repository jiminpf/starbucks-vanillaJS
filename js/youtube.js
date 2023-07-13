
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생 할 유튜브 영상 ID
    playerVars: {
      autoplay:true,
      loop:true,
      playList: 'An6LvWQuj_8',
    },
    events:{
      onReady:function(event){
        event.target.mute() // 음소거
      },
    }
  });
}