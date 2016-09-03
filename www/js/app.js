// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
  });
})



var module=angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',]);








module.controller('loginCtrl', function($scope, $http, $ionicPopup, $location) {
    $scope.data = {};
    $scope.users={};
 
    $scope.submit = function(){
       // var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
       
       
       /* $http.get('http://app.planeers.com/api.php/user').success(function(cards){
  var alertPopup = $ionicPopup.alert({
                title: 'ABC',
                template: JSON.parse(cards);
            });
}).error(function(error) {
  alert(error);
});*/


        if (($scope.data.uname =="username") && ($scope.data.pwd=="passwd"))
          { 
            $http.get('http://app.planeers.com/api.php/user?filter[]=username,eq,'+$scope.data.uname+'&filter[]=password,eq,'+$scope.data.pwd+'&columns=username&transform=1')
    .success(function(data, status, headers,config){
     var userss=JSON.stringify(data);
     userss=userss.split('[');
     userss=userss[1].split(']');
     userss=userss[0];
      obj = JSON && JSON.parse(userss) || $.parseJSON(userss);
       $scope.users=obj;

      
      if(obj.username==$scope.data.uname)
      $location.path('/home');

       // for browser console
      // for UI

    })
    .error(function(data, status, headers,config){
      alert("We can't connect to the server right now. Please Try later or check your internet connection");
    })
         // 

          }
          else  {
            var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
            template: 'Please check your credentials!'
            });
        }
        //$http.post(link, {username : $scope.data.username}).then(function (res){
         
        }
    
});



module.controller('homeCtrl', function($scope, $http, $ionicPopup, $location) {
  $scope.items=[
        {
            img: "img/Armadillo.png",
            title: 'Animals',
            description: 'Poems on Animals'
        }
    ];
$scope.setCategory = function(category){
        localStorage.setItem('category', category);
        

$location.path('/alphabets');
}
  });


//Alphabets Page
module.controller('alphabetsCtrl', function($scope, $http, $ionicPopup, $location) {
 $scope.alphabets = [
        "A",
        "B",
        "C"
    ];

    $scope.getPlaylist = function(id) {
        localStorage.setItem('alphabet', id);
        $location.path('/poem');

    }
});



//Poem Page
module.controller('poemCtrl', function($scope, $http, $ionicPopup, $location) {
  $scope.images=[
                {
                  url:"img/Armadillo.png",
                  description: "Armadillo"
                },
                {
                  url:"img/Armadillo.png",
                  description: "Armadillo2"
                },
  ];

  $scope.poem=[
       "Adabadaba was an Armadillo always blue and sad, \n He wanted to be strong and tall ever so bad. \nBut all he had on was this funny body armor, \n The Aye-Aye and Anoa found it strange – he was no charmer.",
        "So he went to the Aardvark, they tried to pull it off in vain, \n The Antelope and the Addax thought it to be a bane.\n What to do – how do I, become not strange but mighty? \n He tried asking the Anteater, but she was just too flighty.",
        "What was the point of his rather ugly shell, thought he,\n Said the Aardwolf, it’s not great looking, I agree. \n It's good protection, from dangers big and small, \n For when you feel threatened you curl up into a ball.",

        "Said the Alpaca to Adabadaba, this is indeed a great trick,\n Your armor is awesome, it protects you from cuts and nicks.\n No longer did Adabadaba want to be tall and towering, \n His mighty Armadillo armor was very, very empowering. "
    ];

    
    
  });