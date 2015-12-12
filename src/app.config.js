routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            url: '',
            template: ''
        })
        //Временный стейт
        .state('humor', {
            url: 'humor',
            template: ''
        });

    $urlRouterProvider.otherwise('music');

}