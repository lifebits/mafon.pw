analytics.$inject = ['$rootScope', '$location', '$window'];

export default function analytics($rootScope, $location, $window) {
    // initialise google analytics
    $window.ga('create', 'UA-16562406-6', 'auto');

    // track pageview on state change
    $rootScope.$on('$stateChangeSuccess', function (event) {
        $window.ga('send', 'pageview', $location.path());
    });
}