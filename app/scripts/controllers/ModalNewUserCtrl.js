(function() {
  function ModalNewUserCtrl($uibModalInstance, $cookies) {
    this.submit = function() {
        $cookies.put('blocChatCurrentUser', this.newUser);
        $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalNewUserCtrl', ['$uibModalInstance', '$cookies', ModalNewUserCtrl])
})();
