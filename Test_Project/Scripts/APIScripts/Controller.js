app.controller('APIController', function ($scope, APIService) {
    $scope.currentPage = 1
    $scope.totalCount = 52
    $scope.numPerPage = 4
    $scope.maxSize = 5;
    $scope.totalPage = Math.ceil($scope.totalCount / 4);

    getAll($scope.currentPage);

    function getAll(index) {
        var servCall = APIService.getItems(index);
        servCall.then(function (d) {
            $scope.items = d.data.Items;
            $scope.totalCount = d.data.Count; 
            $scope.totalPage = Math.ceil($scope.totalCount / 4);
        }, function (error) {
                $log.error('Oops! Something went wrong while fetching the data.')
            })
    };

    $scope.ChangeData = function (n) {
        $scope.currentPage = n;
        getAll($scope.currentPage);
    }

    $scope.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    $scope.makeEditable = function (obj) {
        obj.target.setAttribute("contenteditable", true);
        obj.target.focus();
    }; 

    $scope.updName = function (item, eve) {
        item.Name = eve.currentTarget.innerText;
        var upd = APIService.updateItem(item);
        upd.then(function (d) {
            getAll($scope.currentPage);
        }, function (error) {
                console.log('Oops! Something went wrong while updating the data.')
            })
    }; 
    $scope.updType = function (item, eve) {
        item.Type = eve.currentTarget.innerText;
        var upd = APIService.updateItem(item);
        upd.then(function (d) {
            getAll($scope.currentPage);
        }, function (error) {
            console.log('Oops! Something went wrong while updating the data.')
        })
    }; 

    $scope.dltItem = function (itemId) {
        var dlt = APIService.deleteItem(itemId);
        dlt.then(function (d) {
            getAll($scope.currentPage);
        }, function (error) {
                console.log('Oops! Something went wrong while deleting the data.')
            })
    };   

    $scope.saveItem = function () {
        var item = {
            Name: $scope.name,
            Type: $scope.type
        };
        if (item.Name != null && typeof item.Name !== "undefined") {
            item.Name = item.Name.trim();
        }
        if (item.Type != null && typeof item.Type !== "undefined") {
            item.Type = item.Type.trim();
        }
        
        if (!(!item.Name  || !item.Type) ){
            console.log(item.Name, item.Type)
            var saveItem = APIService.saveItem(item);
            saveItem.then(function (d) {
                getAll($scope.currentPage);
            }, function (error) {
                console.log('Oops! Something went wrong while saving the data.')
            })
        }
        else {
            alert('enter name or type');
        }
    };       
})   

app.controller('StatController', function ($scope, StatService) {
    $scope.currentPage = 1
    $scope.totalCount = 52
    $scope.numPerPage = 3
    $scope.maxSize = 5;
    $scope.totalPage = Math.ceil($scope.totalCount / 3);

    getAll($scope.currentPage);
   
    function getAll(index) {
        var servCall = StatService.getItems(index);
        servCall.then(function (d) {   
            $scope.items = d.data.items;
            $scope.totalCount = d.data.Count;
            $scope.totalPage = Math.ceil($scope.totalCount / 3);
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }

    $scope.ChangeData = function (n) {
        $scope.currentPage = n;
        getAll($scope.currentPage);
    }

    $scope.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
});