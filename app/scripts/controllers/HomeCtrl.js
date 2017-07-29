(function() {
    function HomeCtrl(Room, $uibModal) {
      this.sidebarTitle = "Bloc Chat";
      this.rooms = Room.all;

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
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
