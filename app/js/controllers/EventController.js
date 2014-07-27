/**
 * Created by abatjarg on 7/26/14.
 */

eventsApp.controller('EventController',
    function EventController($scope, eventData){
        $scope.btnDisabled = true;
        $scope.event = eventData.getEvent(function(event){
            $scope.event = event;
        });

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);