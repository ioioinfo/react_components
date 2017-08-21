function Music(options){
  // audio标签对象
  var audios = {};

  return {
    // src音频地址  audioId  audio标签id
    registerSound: function(src,audioId) {
      // 创建audio标签对象
      var audio = document.createElement('audio');
      // 创建audio标签的子元素source标签
      var source = document.createElement('source');
      // 给audio添加id
      audio.setAttribute('id',audioId);
      // audio的父级容器的id
      var audio_container;
      if (options && options.audio_container) {
        audio_container = document.getElementById(options.audio_container);
      }

      if (audio_container) {
        audio_container.appendChild(audio);
      } else {
        document.body.appendChild(audio);
      }
      source.type='audio/mpeg';
      source.src=src;
      audios[audioId] = audio;

      audio.appendChild(source);
    },
    // 点击打开关闭音频功能
    play: function(audioId) {
      var audioId = audios[audioId];
      // 判断音频播放状态
      if(audioId.paused){
        audioId.play();
      }else {
        audioId.pause();
      }
    }
  }
}
