angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, callback) {
      $http ({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          q: 'guy on a buffalo',
          type: 'video',
          videoEmbeddable: true,
        },
      }).then(function(data) {
        console.log('success in GET request');
      }).catch(function(data) {
        console.log('failurrrrre');
      });
    };
  });
