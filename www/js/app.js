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







//------------------Controller for Login --------------------------------------------
module.controller('loginCtrl', function($scope, $http, $ionicPopup, $location, $state) {

    $scope.data = {};
    $scope.users={};

//if('yes'==localStorage.getItem('login'))
   //$location.path('/home');
 
    $scope.submitLogin = function(){

 
      if( (''+$scope.data.uname).length < 5)
     {   var confirmPopup = $ionicPopup.alert({
     title: 'Invalid Username or Password',
     template: 'Please make sure your username and password are more than 5 characters.'
   });
    }
  else{
        var dataString = 'username='+ $scope.data.uname + '&password='+ $scope.data.pwd;
              $.ajax({
        type: "POST",
        url: "http://app.planeers.com/login.php",
        data: dataString,
        cache: false,
        success: function(result){

        if(result!="fail")
          {
            
            
                    window.location='/#/home';
                    //alert("here");
              
             
          }
        else
          {
            var confirmPopup = $ionicPopup.alert
                        ({
                            title: 'Login Failed',
                            template: 'Incorrect username or password'
                        });
            
          }
        }
        });
      }
      

         
        }
    
});

//------------------Controller for Login Ends --------------------------------------------


//------------------Controller for Categories Home --------------------------------------------
module.controller('homeCtrl', function($scope, $http, $ionicPopup, $location) {
  $scope.items=[
        {
            img: "img/Armadillo.png",
            title: 'Mammals',
            description: 'Poems on Mammals'
        }
    ];
$scope.setCategory = function(category){
        localStorage.setItem('category', category);
        

$location.path('/categoryLanding');
}
  });


//Alphabets Page
module.controller('alphabetsCtrl', function($scope, $location) {
  $scope.colors = ['#673ab7', '#3f51b5','#673ab7', '#009688' , '#99cc00', '#03a9f4', '#00bcd4', '#009688','#673ab7', '#ff3399', '#2196f3', '#03a9f4', '#00bcd4', '#009688','#3f51b5', '#ff6600', '#ff3399', '#00bcd4', '#009688','#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#99cc00', '#ff6600'];
  $scope.alphabets = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
        "P","Q","R","S","T","U","V","W","Y","Z"
    ];
var a=0;
    $scope.getRandomColor = function() {
       // var randomNumber = ;
       // console.log(randomNumber)
            
       if (a>25)
        {a=0;}
        return $scope.colors[a++];

      };

      


    $scope.getPlaylist = function(id) {
        localStorage.setItem('alphabet', id);
        
        $location.path('/alphabetLanding');

    }
});

//------------------Controller for Categories Home Ends--------------------------------------------


//------------------Controller for Poem Page --------------------------------------------

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

//------------------Controller for Poem Page  Ends--------------------------------------------



