angular.module('testController', [])

  //.controller('AddressBook', function ($scope, ChatServices) {
  //  $scope.chats = Chats.all();
  //  $scope.remove = function (chat) {
  //    Chats.remove(chat);
  //  };
  //})

  .controller('Discovery', function ($scope, $stateParams, ChatServices) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('PersonalCenter', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
