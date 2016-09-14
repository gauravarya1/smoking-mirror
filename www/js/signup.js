angular.module('app').controller('signupCtrl', function($scope, $http, $ionicPopup, $location) {
  $scope.user={};

 $scope.submitSignup = function(){
   

if(($scope.user.username+"a")=="undefineda")   //Error if username is empty
    {
      var confirmPopup = $ionicPopup.alert({
         title: 'Fill in Username',
         template: 'Username cannot be empty.'
       });
    }
else if(($scope.user.name1+"a")=="undefineda")  //Error if name is empty
    {
      var confirmPopup = $ionicPopup.alert({
         title: 'Fill in Name',
         template: 'Name cannot be empty.'
       });
    }
else if(($scope.user.password+"a")=="undefineda") //Error if Password is empty
    {
      var confirmPopup = $ionicPopup.alert({
         title: 'Fill in Password',
         template: 'Password cannot be empty.'
       });
    }

else if(($scope.user.email+"a")=="undefineda")     //Error if Email is empty
    {
      var confirmPopup = $ionicPopup.alert({
         title: 'Fill in Email',
         template: 'Email cannot be empty.'
       });
    }

else if(($scope.user.phone+"a")=="undefineda")       //Error if phone number is empty
    {
      var confirmPopup = $ionicPopup.alert({
         title: 'Fill in Phone Number',
         template: 'Phone Number cannot be empty.'
       });
    }


 
 else if( (''+$scope.user.password)!=(''+$scope.user.password2) )  //Error if Password and Confirm Password do not match.
         {   var confirmPopup = $ionicPopup.alert({
         title: 'Password Mismatch',
         template: 'Password and Confirm Password do not match.'
       });
        }
  else if(((''+$scope.user.password).length>5)&&((''+$scope.user.username).length>4) )
  {
    


        var dataString = 'username='+ $scope.user.username
                          + '&password='+ $scope.user.password
                          + '&email=' + $scope.user.email
                          + '&number=' + $scope.user.phone
                          +'&name='+ $scope.user.name1 
              $.ajax
              ({
                    type: "POST",
                    url: "http://app.planeers.com/register.php/",
                    data: dataString,
                    cache: false,
                 success: function(result)
                 {
                  if(result!="success")
                  {
                      var confirmPopup = $ionicPopup.alert
                      ({
                          title: result + ' already exists.',
                          template: 'Please Try a different '+result
                      });
                   }
                   else
                   {
                        var confirmPopup = $ionicPopup.alert
                        ({
                            title: 'Signup Successful',
                            template: 'Please login to continue.'
                        });
                        confirmPopup.then(function(res) {
                            console.log('SIGNUP SUCCESS');
                          window.location='/#/login';
                          }) ;
                    }
                  }

              });
      }
  
  
} //        

  });


//------------------Controller for Singup Page Ends --------------------------------------------
