angular.module('video-player')
  .controller('videoCtrl', function($scope) {
    
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.url = `https://www.youtube.com/embed/${this.currentVideo.id.videoId}?autoplay=1`;
    this.select = (video) => {
      this.currentVideo = video;
      this.url = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    };
  })
  
  .component('app', {
    controller: 'videoCtrl',
    templateUrl: 'src/templates/app.html',

  });
 

