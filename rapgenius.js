// Currently not tested, but ready for work.
 angular.module('music', []).factory('$music', ['$http', function($http) {
      return { $artist : function (name,genre)
                  {
                          var method = 'POST';
                          var url = "http://genius-api.com/ap/artistInfo";
                          $http({method: method, url: url  + "name=" + artist + 
                                                                           "genre=" + genre}).
                          success(function(data, status) {}).
                          error(function(data, status) {});   
                  },
               $song : function (name,genre)
                  {
                          var method = 'POST';
                          var url = "http://genius-api.com/ap/songInfo";
                          $http({method: method, url: url  + "name=" + artist + 
                                                                           "genre=" + genre}).
                          success(function(data, status) {}).
                          error(function(data, status) {});   
                  },
               $lyrics : function (link,genre)
                  {
                          var method = 'POST';
                          var url = "http://genius-api.com/ap/lyricsInfo";
                          $http({method: method, url: url  + "link=" + artist + 
                                                                           "genre=" + genre}).
                          success(function(data, status) {}).
                          error(function(data, status) {});   
                  }
            };
    }
  ]);
