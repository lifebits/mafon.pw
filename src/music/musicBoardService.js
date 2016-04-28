'use strict';

musicAppService.$inject = ['$http', '$stateParams'];

export default function musicAppService($http, $stateParams) {

    this.getSectionList = () => {
        return {
            "exclusive": {domainName: "exclusive_muzic"},
            "club": {domainName: "public_of_music"},
            "indie": {domainName: "indie_music"},
            "instrumental": {domainName: "artmelody"},
            "life": {domainName: "gooddaday"},
            "overnight": {domainName: "nightmelody"},
            "pop": {domainName: "plmusic"},
            "rap": {domainName: "rapnewrap"},
            "rock": {domainName: "rock_music_on"},
            "rock-2": {domainName: "1rock.music"},
            "soundtrack": {domainName: "ostmelody"},
            "etc": {domainName: "mzk"},
            "18+": {domainName: "prayforsex.official"}
        }
    };

    this.getCardList = () => {
        return getJSONFromVK()
            .then(
                response => {
                    let data = response.data;

                    if ("error" in data) {
                        console.log("Error Code: " + data.error['error_code']);
                        console.log(data.error['error_msg']);
                        return false;
                    }
                    let itemsReceived = data.response.items;

                    let cardList = [];
                    let playlist = [];//????

                    itemsReceived.forEach(function(item) {
                        let checkMusic = false;
                        let newItem = {
                            photo: [],
                            audio: []
                        };

                        for (let prop in item) {

                            newItem.id = item.id;
                            newItem.date = item.date;

                            if (prop == "attachments") {

                                let attachmentsElem = item[prop];

                                for (let prop in attachmentsElem) {
                                    let incAttachmentsElem = attachmentsElem[prop];
                                    if (incAttachmentsElem.type == "photo") {
                                        newItem.photo.push(incAttachmentsElem.photo);
                                    }
                                    if (incAttachmentsElem.type == "audio") {
                                        checkMusic = true;
                                        newItem.audio.push(incAttachmentsElem.audio);
                                        playlist.push(incAttachmentsElem.audio);
                                    }
                                }

                            }

                        }

                        if (checkMusic == true) {
                            cardList.push(newItem);
                        }

                    });

                    /*let result = {
                        cardList: cardList,
                        playList: playlist
                    }

                    console.dir(result);*/

                    return cardList;
                }
            );
    };

    let getJSONFromVK = () => {
        //https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain=rock_music_on&count=4&offset=0&callback=JSON_CALLBACK
        return $http.jsonp(constructedURL())
            .then(
                response => response,
                error => console.log(error)
            )
    };

    let constructedURL = () => {
        let opts = {
            domainName: getDomainName(),
            count: 8
        };
        return 'https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain='+opts.domainName+'&count='+opts.count+'&offset=0&callback=JSON_CALLBACK'
    };

    let getDomainName = () => {
        let sectionList = this.getSectionList();
        let currentPlaylist = $stateParams.playlistId;

        return sectionList[currentPlaylist].domainName
    };
};