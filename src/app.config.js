routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {

    /* расширение функционала приложения
    $stateProvider
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
