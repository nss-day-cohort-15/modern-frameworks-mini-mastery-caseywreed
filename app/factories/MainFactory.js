"use strict";

app.factory('MainFactory',function($q,$http,FBCreds, FirebaseURL) {


  let getFlowersFromFirebase = () => {
    return $q((resolve,reject) => {
      $http.get(`https://flower-power-angular.firebaseio.com/arrangements.json`)
      .then((data) => {
        console.log(data)
        resolve(data);
      }, (error) => {
        console.error(error);
        reject(error);
      })
    })
  }

  return {getFlowersFromFirebase}

  // This is a comment to get a new pull request in. Whoops

})
