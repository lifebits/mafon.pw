routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider
        .state('music', {
            url: '/music',
            template: '<music-app/>'
        })
        .state('music.playlist', {
            url: '/:playlistId',
            template: '<music-board-cards/>'
        });
}