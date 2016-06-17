angular.module('FriendServices', []).factory('FriendServices', FriendServices);
FriendServices.$inject = ['$stateParams', '$rootScope', 'localStorageServices'];

function FriendServices($stateParams, $rootScope, localStorageServices) {

    var services = {
        init: init,  //初始化所有的好友
        getAllFriends: getAllFriends,  //获得所有的好友
        remove: remove,//移除
        get: get //根据id获得对象数据
    }
    return services;

    //初始化所有的数据
    function init(friends){
       this.friends = friends;
        localStorageServices.update("friends",friends);
        if(friends.top_common){
            localStorageServices.update("top_common",friends.top_common);
        }
        if(friends.top_friends){
            localStorageServices.update("top_friends",friends.top_friends);
        }
        if(friends.common_friends){
            localStorageServices.update("common_friends",friends.common_friends);
        }

    }


    //获得所有的数据
    function getAllFriends() {
        return localStorageServices.get("friends");;
    }

    //移除
    function remove(chat) {
        friends.splice(friends.indexOf(chat), 1);
    }

    //根据id获得对象数据
    function get(chatId) {
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].id === parseInt(chatId)) {
                return friends[i];
            }
        }
        return null;
    }


}
