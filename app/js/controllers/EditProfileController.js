/**
 * Created by abatjarg on 7/27/14.
 */

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder){
        $scope.user = {};

        $scope.getGravatarUrl = function(email){
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
    }
);