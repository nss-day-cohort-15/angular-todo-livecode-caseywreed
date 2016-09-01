"use strict";

app.factory("ItemStorage", ($q, $http) => {

    let getItemList = () => {
        let items = []
        // Angular Promise syntax starts here
        return $q((resolve, reject) => {
            $http.get("../../data/itemList.json")
            .success((itemObject) => {
                resolve(itemObject)
            })
            .error((error) => {
                reject(error)
            })
        })
    }


    return {getItemList}

})