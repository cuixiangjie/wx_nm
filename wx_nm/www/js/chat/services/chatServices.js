angular.module('ChatServices', []).factory('ChatServices', ChatServices);
ChatServices.$inject = ['$stateParams', '$rootScope', '$ionicModal'];

function ChatServices($stateParams, $rootScope, $ionicModal) {
    var chats;
    var services = {
        getAllDatas: getAllDatas,  //获得所有的数据
        remove: remove,//移除
        get: get //根据id获得对象数据
    }
    return services;
    //获得所有的数据
    function getAllDatas() {
        chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png',
            showHints: true,//是否显示未读消息的数字提示标
            noReadMsg: 5 //未读消息数量
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png',
            showHints: true,//是否显示未读消息的数字提示标
            noReadMsg: 2//未读消息数量
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg',
            showHints: true,//是否显示未读消息的数字提示标
            noReadMsg: 3//未读消息数量
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png',
            showHints: true,//是否显示未读消息的数字提示标
            noReadMsg: 4//未读消息数量
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png',
            showHints: false,//是否显示未读消息的数字提示标
            noReadMsg: 6//未读消息数量
        }];
        return chats;
    }

    //移除
    function remove(chat) {
        chats.splice(chats.indexOf(chat), 1);
    }

    //根据id获得对象数据
    function get(chatId) {
        for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
                return chats[i];
            }
        }
        return null;
    }


}
