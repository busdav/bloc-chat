(function() {

  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    /**
    * @function getByRoomId
    * @desc get all messages of a certain room specified by roomId
    * @param {String} roomId
    * @returns {Array}
    */
    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
