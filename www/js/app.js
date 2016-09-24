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

if(localStorage.getItem('token'))  //If token exists, redirect to home

  { 
    //alert(localStorage.getItem('token'));
    $location.path('/categoryLanding');
  $scope.$apply();
 }
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
            var a = JSON.parse(result);
            
            localStorage.setItem('token',JSON.stringify(a['token']));
            localStorage.setItem('category', 'mammals');

              //setting default category as mammals for now when more categories come this has to be automated form home page
            
            localStorage.setItem('username', $scope.data.uname);

             $location.path('/categoryLanding');
             $scope.$apply();
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
        }); //Ajax call ends

      }
      

         
        }
    
});

//------------------Controller for Login Ends --------------------------------------------


//------------------Forgot Password --------------------------------------------
module.controller('homeCtrl', function($scope, $http, $ionicPopup, $location) {
  
$scope.recover = function(category){
        

$location.path('/login');
}
  });


//-------------------------------------------Forgot Password ends----------------------

//------------------Controller for Categories Home --------------------------------------------
module.controller('forgotCtrl', function($scope, $http, $ionicPopup, $location) {
  
$scope.setCategory = function(category){
        localStorage.setItem('category', category);
        
        var dataString = 'email=mammals' ;
    $.ajax({
        type: "POST",
        url: "http://app.planeers.com/categorypoem.php",
        data: dataString,
        cache: false,
        success: function(result){

            var a = JSON.parse(result);
            
          $scope.poem1=result;          
        }
        }); //Ajax call ends


$location.path('/categoryLanding');
}
  });
//------------------Controller for Categories Home Ends--------------------------------------

//-------------------------------------------Alphabets Page----------------------
module.controller('alphabetsCtrl', function($scope, $location) {
  $scope.colors = ['#673ab7', '#3f51b5','#673ab7', '#009688' , '#99cc00', '#03a9f4', '#00bcd4', '#009688','#673ab7', '#e60000', '#2196f3', '#03a9f4', '#e60000', '#009688','#3f51b5', '#ff6600', '#ff3399', '#00bcd4', '#009688','#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#99cc00', '#ff6600'];
  $scope.alphabets = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
        "P","Q","R","S","T","U","V","W","Y","Z"
    ];
var a=0;
    $scope.getRandomColor = function() {
       // var randomNumber = ;
       // console.log(randomNumber)
            
       if (a>25)
        {a=1;}
        return $scope.colors[a++];


      };


    $scope.getPlaylist = function(id) {
        localStorage.setItem('alphabet', id);
        
        $location.path('/alphabetLanding');

    }
});

//------------------Controller for Categories Home Ends--------------------------------------------


//------------------Controller for CategoryLanding --------------------------------------------
module.controller('categoryLandingCtrl', function($scope, $http, $ionicPopup, $location) {
 
  $scope.poem=[
        "What are Mammals? They are animals, of course!\n Dogs, cats, elephants, lions, monkeys or a horse. \n Most but not all of them can walk on land, \n Some have paws, some fins and some like us have hands.",

"Mammals don’t fly, but give birth to babies so cute, \n But there are birds who don’t fly and are still birds to boot! \n And two mammals don’t give birth, but lay eggs! \n And most mammals, but not the aquatic ones, seem to have legs!",

"Isn’t there anything common to all mammalian creatures? \n Something that makes us say, now that’s a mammalian feature! \n  The big brains, the scientists, have sorted out facts six. \n All mammals have these, and in them lie no exceptions or tricks.",

"Fact number one, what’s so unique about mammals all? \n Mommy mammals have milk for their babies big and small. \n Then is fact number two that all mammals have body hair, \n Whch could be soft, prickly or the kind to give you a scare!",

"Fact number three is a strange fact about the mammalian ear, \n All mammals have three middle ear bones to allow them to hear. \n Fact number four is also bone-related and something mammals can’t hide.\n Each mammal’s lower jaw bone has a single bone on either side. ",

"Number five is a fact about the artery that forms the aortic arch, \n In each mammal, the aorta curves to the left when leaving the heart. \n Finally, we come to fact number six, all mammals have a diaphragm, \n It’s what they need to breathe and stay alive without coming to harm!",

"So here’s a little  about all sorts of mammals for you, \n Arranged alphabetically from A-to-Z – you might discover something new, \n And at the end of each funny mammalian rhyme you’ll find, \n Some of the big words explained so they come easily to mind.",

"Here’s hoping that you like Alphabetastic and all we’ve penned, \n And that you’ll read it all over again once you’ve reached the end. \n And in case you think we’ve missed a mammal in the world from, \n Mail us with your thoughts at alphabetastic@smokingmirrormedia.com!"

         ];

  /*
  var dataString = 'category=mammals' ;
    $.ajax({
        type: "POST",
        url: "http://app.planeers.com/categorypoem.php",
        data: dataString,
        cache: false,
        success: function(result){

            var a = JSON.parse(result);
            
          $scope.poem1=result;          
        }
        }); //Ajax call ends
*/

  });




//------------------Controller for CategoryLanding Ends--------------------------------------------



//------------------Controller for Poem Page --------------------------------------------

module.controller('poemCtrl', function($scope, $http, $ionicPopup, $location, $ionicSlideBoxDelegate) {
 $scope.poem=[];
 $scope.poem_title;

  
        
        var alpha= localStorage.getItem('alphabet');
        var user= localStorage.getItem('username');
        var dataString = 'cat=Mammals&alphabet='+alpha+'&username='+user ;
        //(alpha);
        $.ajax({
            type: "POST",
            url: "http://app.planeers.com/poem.php",
            data: dataString,
            cache: false,
            success: function(result){
                
                if(result!="upgrade")
                {
                  result=unescape(result);
                  result=result.split("\\n").join("<br>");
                  var es = result.split('","');
                  es[0]=es[0].replace('"','');
                  es[3]=es[3].replace('"','');
                 // var es= ["Adabadaba was an armadillo rather blue and sad,\n He wanted to be strong and tall ever so bad.\n But all he had on was this funny body armor, \n The aye-aye and anoa found him to be no charmer. ","So he went to the aardvark who tried to pull it off in vain,\n The antelope and the addax thought it to be a bane.\n What to do? How do I become not strange but mighty?\n He tried asking the anteater, but she was just too flighty. ","What was the point of his ugly shell, he asked the agouti,\n Said the aardwolf, it's not great looking, I agree.\n It's good protection, from dangers big and small,\n For when you feel threatened you curl up into a ball. ","Said the alpaca to Adabadaba, this is indeed a great trick,\n Your armor is awesome, it protects you from cuts and nicks.\n No longer did Adabadaba want to be tall and towering,\n His mighty armadillo armor was very, very empowering. "];
                  $scope.poem=es;
                //  alert(es);
                 
                // $location.path('/payment');
                }
                else
                {
                      var confirmPopup = $ionicPopup.alert
                        ({
                            title: "Please Upgrade",
                            template: 'Please complete payment of Rs. 99 to access premium content.'
                        });
                  $location.path('/payment'); 
                }

                        
            }
            }); //Ajax call for poem ends
      
//----------------------- AJAX CAll for title-------

var alpha=  localStorage.getItem('alphabet');

    var dataString = 'cate=mammals&alpha='+ alpha ;
    $.ajax({
        type: "POST",
        url: "http://app.planeers.com/poem_title.php",
        data: dataString,
        cache: false,
        success: function(result){

                     
          $scope.poem_title=result;          
        }
        }); //Ajax call for Poem Title ends
//----------------------------------


/* var alpha=  localStorage.getItem('alphabet');

    var dataString = 'category=mammals&password='+ alpha ;
    $.ajax({
        type: "POST",
        url: "http://app.planeers.com/images.php",
        data: dataString,
        cache: false,
        success: function(result){

            var a = JSON.parse(result);
            
          $scope.image=result;          
        }
        }); //Ajax call ends
*/

  $scope.images=[
                {
                  url:"img/Armadillo.png",
                  description: "Armadillo"
                },
                {
                  url:"img/Armadillo.png",
                  description: "Addax"
                },
  ];

   

   $scope.updateSlider = function () {
            $ionicSlideBoxDelegate.update(); //or just return the function
        }  

  });

//------------------Controller for Poem Page  Ends--------------------------------------------

//------------------Controller for Word Glossary Page ----------------------------------------
module.controller('wordsGlossaryCtrl', function($scope, $http, $ionicPopup, $location) {
  


  $scope.words=[
                {
                  name:"Armour",
                  desc: "The protective layer or shell of some animals and plants."
                },
                {
                  name:"Empower",
                  desc: "Make (someone) stronger and more confident,especially in controlling their life and claiming their rights."
                }
  ];

/*  var alpha=  localStorage.getItem('alphabet');

    var dataString = 'category=mammals&alphabet='+ alpha ;
    $.ajax({
        type: "POST",
        url: "http://app.planeers.com/poem.php",
        data: dataString,
        cache: false,
        success: function(result){

            var a = JSON.parse(result);
            
          $scope.words=result;          
        }
        }); //Ajax call ends
*/
  
    
    
  });