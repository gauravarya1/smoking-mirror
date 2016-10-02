// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova','app.controllers', 'app.routes', 'app.directives','app.services',])

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



var module=angular.module('app', ['ionic','ngCordova', 'app.controllers', 'app.routes', 'app.directives','app.services',]);

//------------------Controller for sound -------------------------------------------

module.controller('SoundCtrl', function($scope,$cordovaInAppBrowser, $http,$rootScope, $ionicPopup, $location) {
  

 $scope.play =function()
    {     

       

    }



   
      
});
//------------------Controller for sound ends ------------------------------


//------------------Controller for Introduction Page ----------------------------------------
module.controller('kidsAppCtrl', function($scope,$cordovaInAppBrowser, $http,$rootScope, $ionicPopup, $location) {
  


   var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
   };
 var user= localStorage.getItem('username');

        $scope.toWebsite =function()
        {
        

                   $cordovaInAppBrowser.open('http://www.alphabetastic.com', '_blank', options)
               
                  .then(function(event) {
                     // success
                     
                         
                  })
                
                  .catch(function(event) {
                     // error
                  });

                 
    
        }//toPayment function ends
    
    

        
      
});

//  ------------------------controller for Introduction ends----------------



//------------------Controller for T&C Page ----------------------------------------
module.controller('tncCtrl', function($scope,$cordovaInAppBrowser, $http,$rootScope, $ionicPopup, $location) {
  

 $scope.toEmail =function()
    {     

        cordova.plugins.email.isAvailable(
            function (isAvailable) {
                alert('Service is not available') ;
              });


       cordova.plugins.email.open({
                    to:      'info@alphabetastic.com',
                    subject: 'About Alphabetastic Mammals'
                  
                });

    }



   
      
});

//  ------------------------controller for T&C ends----------------


//------------------Controller for Login --------------------------------------------
module.controller('loginCtrl', function($scope, $http, $ionicPopup, $location, $state) {

    $scope.data = {};
    $scope.users={};

if(localStorage.getItem('token'))  //If token exists, redirect to home

  { 
    //alert(localStorage.getItem('token'));
    $location.path('/home');
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
        url: "http://alphabetastic.com/app/login.php",
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

             $location.path('/home');
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
$scope.$apply();
}
  });


//-------------------------------------------Forgot Password ends----------------------

//------------------Controller for Categories Home --------------------------------------------
module.controller('forgotCtrl', function($scope, $http, $ionicPopup, $location) {
  
$scope.data=[];

$scope.recover = function(category)
    {
     
        
     var dataString = 'email='+$scope.data.email ;
     $.ajax({
          type: "POST",
          url: "http://alphabetastic.com/app/cmail.php",
          data: dataString,
          cache: false,
          success: function(result)
            {
                  if(result=="success")
                      {
                            var confirmPopup = $ionicPopup.alert
                                        ({
                                            title: "Password Changed Successfully",
                                            template: 'Please check your email for the new password.'
                                        });
                            $location.path('/login');
                            $scope.$apply();
                      }
                  else 
                      {
                            var confirmPopup = $ionicPopup.alert
                                        ({
                                            title: "Password Change Failed",
                                            template: 'Please use your registered email id.'
                                        });
                      }
              

            }
          }); //Ajax call ends


      
      }
  });
//------------------Controller for Categories Home Ends--------------------------------------


//------------------Controller for CategoryLanding --------------------------------------------
module.controller('categoryLandingCtrl', function($scope, $http, $ionicPopup,$timeout, $ionicSlideBoxDelegate) {
 
  $scope.poem=[
        "What are Mammals? They are animals, of course!<br> Dogs, cats, elephants, lions, monkeys or a horse. <br> Most but not all of them can walk on land, <br> Some have paws, some fins and some like us have hands.",

"Mammals don’t fly, but give birth to babies so cute, <br> But there are birds who don’t fly and are still birds to boot! <br> And two mammals don’t give birth, but lay eggs! <br> And most mammals, but not the aquatic ones, seem to have legs!",

"Isn’t there anything common to all mammalian creatures? <br> Something that makes us say, now that’s a mammalian feature! <br>  The big brains, the scientists, have sorted out facts six. <br> All mammals have these, and in them lie no exceptions or tricks.",

"Fact number one, what’s so unique about mammals all? <br> Mommy mammals have milk for their babies big and small. <br>Then is fact number two that all mammals have body hair, <br> Whch could be soft, prickly or the kind to give you a scare!",

"Fact number three is a strange fact about the mammalian ear, <br> All mammals have three middle ear bones to allow them to hear. <br> Fact number four is also bone-related and something mammals can’t hide.<br> Each mammal’s lower jaw bone has a single bone on either side. ",

"Number five is a fact about the artery that forms the aortic arch,<br> In each mammal, the aorta curves to the left when leaving the heart.<br> Finally, we come to fact number six, all mammals have a diaphragm, <br> It’s what they need to breathe and stay alive without coming to harm!",

"So here’s a little  about all sorts of mammals for you, <br> Arranged alphabetically from A-to-Z – you might discover something new, <br> And at the end of each funny mammalian rhyme you’ll find, <br> Some of the big words explained so they come easily to mind.",

"Here’s hoping that you like Alphabetastic and all we’ve penned, <br> And that you’ll read it all over again once you’ve reached the end. <br> And in case you think we’ve missed a mammal in the world from, <br> Mail us with your thoughts at <a href='mailto:alphabetastic@smokingmirrormedia.com'>alphabetastic@smokingmirrormedia.com</a>!"

         ];


$scope.urlbase="http://alphabetastic.com/img/mammals/";
$scope.imgs=["A/armadillo.png","B/badger.png","C/camels.png",
               "D/deer.png","E/elephant.png","F/fossa.png",
                 "G/giraffe.png", "H/horse.png","I/impala.png",
                 "J/jaguar.png","K/kangaroo.png","L/leopard.png","M/monkey.png","N/narwhal.png",
                 "O/otter.png","P/pika.png","Q/quoll.png","R/rabbit.png",
                 "S/seal.png","T/tiger.png","U/uakari.png","V/vampire_bat.png","W/walrus.png",
                 "X/woollymammoth.png","Y/yak.png","Z/zebra.png"];

 $scope.interval = 3500;

$scope.slideHasChanged = function(index) {
    $scope.slideIndex = index;
    if ( ($ionicSlideBoxDelegate.count() -1 ) == index ) {
        $timeout(function(){
            $ionicSlideBoxDelegate.$getByHandle('pictures').slide(0);
        },$scope.interval);
    }
};
  });
//------------------Controller for CategoryLanding Ends--------------------------------------------

//-------------------------------------------Alphabets Page----------------------
module.controller('alphabetsCtrl', function($scope, $location,$ionicPopup,$timeout) {
  
  $scope.alphabets = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
        "P","Q","R","S","T","U","V","W","X","Y","Z"
    ];



    $scope.checkAccess = function(id) {
    localStorage.setItem('alphabet', id); 

     
      
         if(id=='A' || id=='B' || id=='C')
             {
                  $location.path('/alphabetLanding');
                  localStorage.setItem('alphabet', id); 
                  $scope.$apply();
              } 

            else
              {
    
                  var user=  localStorage.getItem('username');
                  var dataString = 'username='+user ;
                  $.ajax({
                      type: "POST",
                      url: "http://alphabetastic.com/app/access.php",
                      data: dataString,
                      cache: false,
                      success: function(result){
                        if(result=='success')
                          {
                              $location.path('/alphabetLanding');
                              localStorage.setItem('alphabet', id); 
                              $scope.$apply();
                          }
                      else
                        {
                             var confirmPopup = $ionicPopup.alert
                                  ({
                                      title: "Please Upgrade",
                                      template: 'Please complete payment of Rs. 99 to access premium content.'
                                  });
                          $location.path('/payments'); 
                          $scope.$apply();

                          }
                          

                  }
                  }); //Ajax call ends
  
        
                }  //if ends

    }
});

//------------------Controller for Categories Home Ends--------------------------------------------


//------------------Controller for Alphabet Landing Page ----------------------------------------

module.controller('alphabetLandingCtrl', function($scope,$state,$http,  $ionicPopup, $location, $ionicSlideBoxDelegate) {


$state.reload();
$scope.title="";
var alpha="";
alpha=localStorage.getItem('alphabet');
var urlbase="http://alphabetastic.com/img/mammals/";
var imgs={"A":"/armadillo.png",              "B":"/badger.png",              "C":"/camels.png",
              "D":"/deer.png",              "E":"/elephant.png",              "F":"/fossa.png",
              "G":"/giraffe.png",              "H":"/horse.png",              "I":"/indri.png",
              "J":"/jackal",              "K":"/kangaroo",              "L":"/lion",
              "M":"/mandrill",              "N":"/narwhal",              "O":"/otter",
              "P":"/possum",              "Q":"/quoll",              "R":"/rabbit",
              "S":"/seal",              "T":"/tiger",              "U":"/uakari",
              "V":"/vampire_bat",              "W":"/walrus",              "X":"/woollymammoth",
              "Y":"/yak",              "Z":"/zebra"

            };



  
  
  
     $scope.getURL = function() 
     {
      var dataString = 'cate=mammals&alpha='+localStorage.getItem('alphabet');


          $.ajax({
              type: "POST",
              url: "http://alphabetastic.com/app/poem_title.php",
              data: dataString,
              cache: false,
              success: function(result){

                  result=result.split("�").join("'");        
                $scope.title=result;     
                  
              }
              });
              alpha=localStorage.getItem('alphabet');
          return (urlbase+alpha+imgs[alpha]);
     }



});
//-----------------------Controller for Alphabet Landing Page ends-------------------------------------






//------------------Controller for Poem Page --------------------------------------------

module.controller('poemCtrl', function($scope, $http, $ionicPopup, $location, $ionicSlideBoxDelegate) {
 $scope.poem=[];
 $scope.poem_title;
 $scope.animals=[];

  
        
        var alpha= localStorage.getItem('alphabet');
        var user= localStorage.getItem('username');
        var dataString = 'cat=Mammals&alphabet='+alpha+'&username='+user ;
        //(alpha);
        $.ajax({
            type: "POST",
            url: "http://alphabetastic.com/app/poem.php",
            data: dataString,
            cache: false,
            success: function(result){
                
                if(result!="upgrade")
                {
                  result=unescape(result);
                  result=result.split("�").join("'");
                  result=result.split("\\n").join("<br>");
                  
                  var es = result.split('","');
                 
                  es[0]=es[0].replace('"','');
                  
                  es[3]=es[3].replace('"','');

                 // var es= ["Adabadaba was an armadillo rather blue and sad,\n He wanted to be strong and tall ever so bad.\n But all he had on was this funny body armor, \n The aye-aye and anoa found him to be no charmer. ","So he went to the aardvark who tried to pull it off in vain,\n The antelope and the addax thought it to be a bane.\n What to do? How do I become not strange but mighty?\n He tried asking the anteater, but she was just too flighty. ","What was the point of his ugly shell, he asked the agouti,\n Said the aardwolf, it's not great looking, I agree.\n It's good protection, from dangers big and small,\n For when you feel threatened you curl up into a ball. ","Said the alpaca to Adabadaba, this is indeed a great trick,\n Your armor is awesome, it protects you from cuts and nicks.\n No longer did Adabadaba want to be tall and towering,\n His mighty armadillo armor was very, very empowering. "];
                  $scope.poem=es;
                  $scope.$apply();
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
                  $scope.$apply();
                }

                        
            }
            }); //Ajax call for poem ends


// AJAX call for animals in slider at bottom

var alpha=  localStorage.getItem('alphabet');

    var dataString = 'cat=mammals&alphabet='+alpha ;
    $.ajax({
        type: "POST",
        url: "http://alphabetastic.com/app/image.php",
        data: dataString,
        cache: false,
        success: function(result){

            
            //var es = result.split('#');
          
           result=result.split("�").join("'");
          
            $scope.animals=JSON.parse(result);
            $scope.$apply();
           // alert($scope.animals.length);        
          
          

          
        }
        }); //Ajax call ends

  
           $scope.updateSlider = function () 
           {
                    $ionicSlideBoxDelegate.update(); //or just return the function
          }  

        $scope.toalphabets = function () 
        {
                localStorage.removeItem("alphabet");
                $location.path('/alphabets'); 
                  
        }
});
//------------------Controller for Poem Page  Ends--------------------------------------------




//------------------Controller for Word Glossary Page ----------------------------------------
module.controller('wordsGlossaryCtrl', function($scope, $http, $ionicPopup, $location) {
  


  $scope.words=[];

var alpha=  localStorage.getItem('alphabet');

    var dataString = 'cat=mammals&alphabet='+alpha ;
    $.ajax({
        type: "POST",
        url: "http://alphabetastic.com/app/meaning.php",
        data: dataString,
        cache: false,
        success: function(result){

            
            //var es = result.split('#');
          
           result=result.split("�").join("'");
          
            $scope.words=JSON.parse(result);
            $scope.$apply();
           // alert($scope.animals.length);        
          
          

          
        }
        }); //Ajax call ends
  
     $scope.toalphabets = function () 
        {
                localStorage.removeItem("alphabet");
                $location.path('/alphabets'); 
                  
        }
    
  });

//-----------------------wordsGlossaryCtrl ends-------------------------------------
//------------------Controller for Word Glossary Page ----------------------------------------
module.controller('animalGlossaryCtrl', function($scope,$ionicSlideBoxDelegate, $http, $ionicPopup, $location) {
  
$scope.animals=[];

  
  var alpha=  localStorage.getItem('alphabet');

    var dataString = 'cat=mammals&alphabet='+alpha ;
    $.ajax({
        type: "POST",
        url: "http://alphabetastic.com/app/image.php",
        data: dataString,
        cache: false,
        success: function(result){

            
            //var es = result.split('#');
          
           result=result.split("�").join("'");
          
            $scope.animals=JSON.parse(result);
            $scope.$apply();
           // alert($scope.animals.length);        
          
          

          
        }
        }); //Ajax call ends

  
   $scope.updateSlider = function () {
            $ionicSlideBoxDelegate.update(); //or just return the function
        }  
     $scope.toalphabets = function () 
        {
                localStorage.removeItem("alphabet");
                $location.path('/alphabets'); 
                  
        }
  });

//  ------------------------controller for animalGlossary ends----------------



//------------------Controller for Payment Page ----------------------------------------
module.controller('paymentsCtrl', function($scope,$cordovaInAppBrowser, $http,$rootScope, $ionicPopup, $location) {
  


   var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
   };
 var user= localStorage.getItem('username');

        $scope.toPayment =function()
        {
                  var url='http://alphabetastic.com/merchantpayment/index.php?user='+user;
                
                   var win=$cordovaInAppBrowser.open(url, '_blank', options)
               
                  .then(function(event) {
                     // success
                     alert("success");
                     $location.path('/alphabets'); 
                         
                  })
                
                  .catch(function(event) {
                     // error
                  });

                    $location.path('/alphabets'); 
                  
        }//toPayment function ends
    
    

        
      
});

//  ------------------------controller for animalGlossary ends----------------


