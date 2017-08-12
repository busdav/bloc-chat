(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/modalNewUser.html',
        controller: 'ModalNewUserCtrl as modalNewUser',
        backdrop: 'static',
        keyboard: false
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
