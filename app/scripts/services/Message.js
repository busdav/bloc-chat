(function() {

  function Message($firebaseArray, $cookies) {
    var Message = {};

    /**
    * @desc All messages from all chatrooms
    * @type {Object}
    */
    var ref = firebase.database().ref().child("messages");

    /**
    * @desc All message from all chatrooms as an array
    * @type {Array}
    */
    var messages = $firebaseArray(ref);




    /**
    * @function getByRoomId
    * @desc Get all messages of a certain room specified by roomId
    * @param {String} roomId
    * @returns {Array}
    */
    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };


    /**
    * @function send
    * @desc Submit message object to firebase server
    * @param {Object} newMessage
    */
    Message.send = function(newMessage) {
      messages.$add(newMessage);
    };


    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
