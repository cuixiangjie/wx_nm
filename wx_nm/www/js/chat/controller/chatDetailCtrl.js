angular.module('ChatDetailCtrl', ['ChatServices','msgDetailServices'])
    .controller('ChatDetailCtrl', function ($scope, $stateParams,$ionicScrollDelegate, $timeout,ChatServices, msgDetailServices) {
        var viewScroll = $ionicScrollDelegate.$getByHandle('messageDetailsScroll');
        //刷新，取历史聊天记录
        $scope.doRefresh = function(){
            //本页的聊天信息
            console.log($scope.msgNum);
            $scope.msgNum = $scope.msgNum + 5;
            $timeout(function() {
            $scope.msgDetails = msgDetailServices.getMsgDetailsByMsgId($scope.msgNum,$stateParams.msgId);
            $scope.$broadcast('scroll.refreshComplete');
            }, 200);


        }
        $scope.$on("$ionicView.beforeEnter", function() {
            $scope.msg = ChatServices.get($stateParams.msgId);//当前信息对象
            $scope.titleNmae =  $scope.msg.name;//当前人员
            $scope.msg.noReadMsg = 0;
            $scope.msg.showHints = false;
            //默认显示条数
            $scope.msgNum = 10;
            //本页的聊天信息
            $scope.msgDetails = msgDetailServices.getMsgDetailsByMsgId($scope.msgNum,$stateParams.msgId);

            $timeout(function() {
                viewScroll.scrollBottom();
            }, 0);
        });

        window.addEventListener("native.keyboardshow", function(e){
            viewScroll.scrollBottom();
        });






    });
