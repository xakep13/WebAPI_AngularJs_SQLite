app.service("APIService", function ($http) {
    this.getItems = function (index) {
        return $http.get("/api/Item/?index="+index)
    }

    this.updateItem = function (item) {
        return $http(
            {
                method: 'put',
                data: item,
                url: '/api/Item'
            });
    }

    this.deleteItem = function (itemId) {
        var url = '/api/Item/' + itemId;
        return $http(
            {
                method: 'delete',
                data: itemId,
                url: url
            });
    }  

    this.saveItem = function (item) {
        return $http(
            {
                method: 'post',
                data: item,
                url: '/api/Item'
            });
    }  
});   

app.service("StatService", function ($http) {
    this.getItems = function (index) {
        return $http.get("/api/Stat/?pageIndex=" + index )
    }
});
