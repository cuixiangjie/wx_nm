// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in friendServices.js
// 'starter.controllers' is found in friendCtrl.js
angular.module('wx_nm', ['ionic', 'ChatController', 'ChatDetailCtrl','FriendCtrl','FriendServices', 'msgDetailServices','testController', 'starter.services', 'wechat.directives','localStorageServices'])

    .config(['$ionicConfigProvider', function ($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom'); // 导航栏放底部
    }])

    .run(function ($ionicPlatform,$http,msgDetailServices,FriendServices) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            var url = "";
            if (ionic.Platform.isAndroid()) {
                url = "/android_asset/www/";
            }

            //读取json文件
            $http.get(url + "data/msg.json").then(function (response) {
                msgDetailServices.init(response.data.msg);
            });
            //读取json文件
            $http.get(url + "data/friends.json").then(function (response) {
                FriendServices.init(response.data.friends);
            });


        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in friendCtrl.js
        $stateProvider

        // setup an abstract state for the tabs directive
        //底部导航栏
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'js/tab/templates/tabs.html'
            })

            // Each tab has its own nav history stack:
            //消息区
            .state('tab.chat', {
                url: '/chat',
                views: {
                    'tab-chat': {
                        templateUrl: 'js/chat/templates/tab-chat.html',
                        controller: 'Chat'
                    }
                }
            })
            .state('chat_detail', {
                url: '/chat_detail/:msgId ',
                templateUrl: 'js/chat/templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
            })
            //通讯录
            .state('tab.fiends', {
                url: '/fiends',
                views: {
                    'tab-fiends': {
                        templateUrl: 'js/friend/templates/tab-fiends.html',
                        controller: 'FriendCtrl'
                    }
                }
            })
            //发现、朋友圈
            .state('tab.discovery', {
                url: '/discovery',
                views: {
                    'tab-discovery': {
                        templateUrl: 'js/tab/templates/tab-discovery.html',
                        controller: 'Discovery'
                    }
                }
            })
            //个人中心
            .state('tab.personal-center', {
                url: '/personal-center',
                views: {
                    'tab-personal-center': {
                        templateUrl: 'js/tab/templates/tab-personal-center.html',
                        controller: 'PersonalCenter'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        //默认的导航
        $urlRouterProvider.otherwise('/tab/chat');

    });
