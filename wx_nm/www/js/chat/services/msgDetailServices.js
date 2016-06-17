angular.module('msgDetailServices', []).factory('msgDetailServices', msgDetailServices);
msgDetailServices.$inject = ['$stateParams', '$rootScope', 'localStorageServices'];

function msgDetailServices($stateParams, $rootScope, localStorageServices) {
    var msgDaetails;
    var services = {
        init: init,  //初始化数据
        remove: remove,//移除
        getMsgDetailsByMsgId: getMsgDetailsByMsgId //根据id获得对象数据
    }
    return services;
    //获得所有的数据
    function init(msgDaetails) {
        this.msgDaetails = msgDaetails;
        localStorageServices.update("msgDaetails",msgDaetails);
    }

    //移除
    function remove(chat) {
        //msgDaetails.splice(chats.indexOf(chat), 1);
    }

    //根据id获得对象数据
    function getMsgDetailsByMsgId(num,chatId) {
        var res ;
        var count = 1;
        res = localStorageServices.get("msgDaetails");
        //for (var i = 0; i < res.length; i++) {
        //    if (res[i].chatId !== parseInt(chatId)) {
        //        res.pop(res[i]);
        //    }
        //}

        if(num < 0 || !res) return;
        var length = res.length;
        if(num < length){
            res = res.splice(length - num, length);
            return res;
        }else{
            return res;
        }

    }


}
