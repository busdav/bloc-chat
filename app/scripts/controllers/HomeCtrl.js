(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {

      this.rooms = Room.all;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');


      /**
      * @function setCurrentRoom
      * @desc Set the current room to be displayed by the home view
      * @param {Object} room
      */
      this.setCurrentRoom = function(room) {
        this.currentRoom = room;
        this.currentMessages = Message.getByRoomId(this.currentRoom.$id);
      };


      /**
      * @function addRoom
      * @desc Add a chat room to firebase database via $uibModal
      */
      this.addRoom = function() {
        $uibModal.open({
          // animation: this.animationsEnabled,
          // ariaLabelledBy: 'modal-title',
          // ariaDescribedBy: 'modal-body',
          templateUrl: '/templates/modal.html',
          size: 'size',
          controller: 'ModalCtrl as modal'
        });
      };


      /**
      * @function sendMessage
      * @desc Call Message.send in order to send current currentNewMessage
      */
      this.sendMessage = function() {
        this.currentNewMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        this.currentNewMessage.username = $cookies.get('blocChatCurrentUser');
        this.currentNewMessage.roomId = this.currentRoom.$id;
        Message.send(this.currentNewMessage);
      };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
