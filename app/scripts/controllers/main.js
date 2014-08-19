'use strict';

/**
 * @ngdoc function
 * @name dailyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dailyApp
 */
angular.module('dailyApp')
  .controller('MainCtrl', function ($scope, $resource) {
    $scope.topics = ['topic1', 'topic2', 'topic3']

    $scope.refreshTopics = function() {
    	// Todo
    	console.log("refreshTopics !");
    	var twitterAPI = $resource(
    		"https://api.twitter.com/1.1/statuses/user_timeline.json?clude_rts=true&screen_name=:screen_name",
    		{ screen_name: '@screen_name' }
    		);

    	var results = twitterAPI.get({ screen_name: "Le_Figaro"}, function() { console.log("DONE")});
    	console.log(results);
    	// Recover all the twitts from LeMonde

    	// Order Them

    	// create all the topics

    	// update the variable $scope.topics -> it will automaticaly refresh the view.
    }

  });
