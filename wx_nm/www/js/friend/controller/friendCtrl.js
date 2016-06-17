  angular.module('FriendCtrl', ['FriendCtrl'])
  .controller('FriendCtrl', function ($scope, FriendServices, $ionicPopup, $ionicPopover, $state,$location) {

      $scope.onSwipeLeft = function() {
          $state.go("tab.chat");
      };
      $scope.onSwipeRight = function() {
          $state.go("tab.chat");
      };

      //所有的好友
      $scope.friends = FriendServices.getAllFriends();
      if($scope.friends.top_common){
          $scope.top_common = $scope.friends.top_common;
      }
      if($scope.friends.top_friends){
          $scope.top_friends = $scope.friends.top_friends;
      }
      if($scope.friends.common_friends){
          $scope.common_friends = $scope.friends.common_friends;
          console.log( $scope.common_friends);
      }
      //点击右侧快速定位
      $scope.goto=function(div){
          $location.hash(div);
      }





      //视图进入前触发
      $scope.$on("$ionicView.beforeEnter", function(){
          //$scope.operator = {
          //    isPopup: false,//是否有弹出操作区
          //    index: 0
          //};
      });


  });
