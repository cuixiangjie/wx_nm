  angular.module('ChatController', ['ChatServices'])
  .controller('Chat', function ($scope, ChatServices, $ionicPopup, $ionicPopover, $state) {

      $scope.onSwipeLeft = function() {
          $state.go("tab.address-book");
      };

      //所有的记录
      $scope.chats = ChatServices.getAllDatas();

      //视图进入前触发
      $scope.$on("$ionicView.beforeEnter", function(){
          $scope.operator = {
              isPopup: false,//是否有弹出操作区
              index: 0
          };
      });
      //长按聊天记录弹出操作区 定义
      $scope.openOperator = function(msg) {
          $scope.operator.optionsPopup = $ionicPopup.show({
              templateUrl: "js/chat/templates/operator-modal.html",
              scope: $scope,
          });
          $scope.operator.isPopup = true;
          $scope.operator.msg = msg;
      };
      //删除信息
      $scope.removeMsg = function (msg) {
          if(msg){
              ChatServices.remove(msg);
          }else{
              ChatServices.remove($scope.operator.msg);
          }
          $scope.closeOperator(); //关闭弹出的操作区
      };
      //置顶信息
      $scope.topMsg = function(msg) {
           var m;
           if(msg){
               m = msg;
           }else{
               m = $scope.operator.msg;
           }
          if (m.isTop) {
              m.isTop = 0;
          } else {
              m.isTop = new Date().getTime();//将该属性设置为true，为true的会排在最上边
          }
          $scope.closeOperator(); //关闭弹出的操作区
      };

      //关闭弹出的操作区
      $scope.closeOperator = function (){
          if( $scope.operator.optionsPopup){
              $scope.operator.optionsPopup.close();
          }
          $scope.operator.isPopup = false;
      };
      //标记消息为已读或未读
      $scope.markMessage = function (){
            if($scope.operator.msg.showHints){
                $scope.operator.msg.showHints = false;
            }else{
                $scope.operator.msg.showHints = true;
            }
          $scope.closeOperator(); //关闭弹出的操作区
      }

      //打开详情页面
      $scope.openDetail = function (msg) {
          if( !$scope.operator.isPopup){
              $state.go("chat_detail",{
                  "msgId": msg.id,
              });
          }
      };

  });
