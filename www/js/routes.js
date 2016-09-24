angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('kidsApp', {
    url: '/Index',
    templateUrl: 'templates/kidsApp.html',
    controller: 'kidsAppCtrl'
  })

  .state('login', {

    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

.state('forgot', {

    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl'
  })


  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl' 
  })

   .state('categoryLanding', {
    url: '/categoryLanding',
    templateUrl: 'templates/categoryLanding.html',
    controller: 'categoryLandingCtrl'
  })

    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('alphabets', {
    url: '/alphabets',
    templateUrl: 'templates/alphabets.html',
    controller: 'alphabetsCtrl'
  })

  .state('payments', {
    url: '/payments',
    templateUrl: 'templates/payments.html',
    controller: 'paymentsCtrl'
  })

.state('alphabetLanding', {
    url: '/alphabetLanding',
    templateUrl: 'templates/alphabetLanding.html',
    controller: 'alphabetLandingCtrl'
  })

.state('animalGlossary', {
    url: '/animalGlossary',
    templateUrl: 'templates/animalGlossary.html',
    controller: 'animalGlossaryCtrl'
  })

.state('wordsGlossary', {
    url: '/wordsGlossary',
    templateUrl: 'templates/wordsGlossary.html',
    controller: 'wordsGlossaryCtrl'
  })



.state('poem', {
    cache:false,
    url: '/poem',
    templateUrl: 'templates/poem.html',
    controller: 'poemCtrl'
  })
 

 

$urlRouterProvider.otherwise('/Index')

  

});