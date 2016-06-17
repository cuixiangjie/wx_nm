angular.module('localStorageServices', []).factory('localStorageServices', localStorageServices);
localStorageServices.$inject = [];

function localStorageServices() {
    return {
        get: get,
        update: update,
        clear: clear
    };

    function get(key, defaultValue) {
        var stored = localStorage.getItem(key);
        try {
            stored = angular.fromJson(stored);
        } catch (error) {
            stored = null;
        }
        if (defaultValue && stored === null) {
            stored = defaultValue;
        }
        return stored;
    }

    function update(key, value) {
        if (value) {
            localStorage.setItem(key, angular.toJson(value));
        }
    }

    function clear(key) {
        localStorage.removeItem(key);
    }


}
