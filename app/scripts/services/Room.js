(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms").orderByChild('name');
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    /**
    * @function add
    * @desc Add chat rooms to the firebase database
    * @param
    */
    Room.add = function(room) {
      rooms.$add(room);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
