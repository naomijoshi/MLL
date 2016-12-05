(function(angular){
	'use strict';
    angular
        .module("mllApp.arhome")
        .controller("SinglePlaylistController", SinglePlaylistController);
    
    SinglePlaylistController.$inject = ['arHomeSerivce', 'authenticationService', 'id','plname'];

	function SinglePlaylistController(arHomeSerivce, authenticationService, id,plname) {
       this.authService = authenticationService;
       console.log("ID   " + id);
       var model = this;
       model.sortType = 'track';
       model.sortReverse = false;
       
       getSongsInPlaylist();       
       
       model.plname=plname;
       model.showPlaylist = function(){
    	   
       }
       
       function getSongsInPlaylist(){
//    	   arHomeSerivce.getSongsInPlaylist(id)
//           .then((response) => {
//        	   console.log(response);
//        	   var songs = response.data.songs;
//        	   model.tracks = response.data.songs;
//           })
//           .catch((rejection) => rejection);
        }
       }
})(window.angular);
