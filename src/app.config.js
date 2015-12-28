routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {

    /*$stateProvider
        .state('index', {
            url: '',
            template: ''
        })
        .state('humor', {
            url: 'humor',
            template: ''
        });
    */
    $urlRouterProvider.otherwise('music');

}
