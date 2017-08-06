(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.currentRoom = null;


      /**
      * @function setCurrentRoom
      * @desc set the current room to be displayed by the home view
      * @param {Object} room
      */
      this.setCurrentRoom = function(room) {
        this.currentRoom = room;
        this.currentMessages = Message.getByRoomId(this.currentRoom.$id);
      };


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
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
