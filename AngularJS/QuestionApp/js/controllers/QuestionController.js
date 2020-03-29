questApp.controller('QuestionController',
    function QuestionController($scope, $http) {

        $scope.loaded = false;

        $scope.load = function () {
            //      $http.get('question.json').
            $http({
                method: 'GET',
                url: 'http://localhost:50428/api/question',
                headers: {
                    'Content-Type': undefined
                },
            },
                ).
                then(function success(response) {
                    $scope.question = response.data.question;
                    $scope.loaded = true;
                    console.log("код ответа: " + response.status);
                    console.log("объем данных: " + response.headers("content-length"));
                }, function error(response) {
                    console.log("Возникла ошибка");
                    console.log("код ответа: " + response.status);
                }
            );
        };

        $scope.loadFile = function () {
            //      $http.get('question.json').
            $http({
                method: 'GET',
                url: 'https://prod2.safexain.com/messenger/downloadByHash/2406534CDA0289EDE4A78BDCEAD567C789F06D62FA76C0E5423549F2E89DE502/filename',
                headers: {
                    /*'Content-Type': undefinedб*/
                    'Authorization':'SafeXain SafeXain eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaXNzIjoibWFydHlwcm9kMkBtYWlsaW5hdG9yLmNvbSIsImV4cCI6MTU5MjkwMjE3NH0.OI_M-VHPeUot1TqYTGUbKt-UCKdMVgBYI6dqM9CMITae-cNiM5wHXox1MVFB9U07GHySclGkx3gpKW7i9dvEUg'
                
                },

                responseType: 'arraybuffer',
            }).
                then(function success(response) {
           
                    console.log("код ответа: " + response.status);
                    console.log("объем данных: " + response.headers("content-length"));


                   // console.log(url.createObjectURL(new Blob([response.data]))); //Via ng-click the url generates correctly in the console.

                    //var a = document.createElement("a");
                    //document.body.appendChild(a);

                    //var file = new Blob([response.data]);
                    //var fileURL = window.URL.createObjectURL(file);

                    //a.href = fileURL;
                    //a.download = fileName;
                    //a.click();

                    var file = new Blob([ response.data ]);

                    var fileURL = URL.createObjectURL(file);
                    var a         = document.createElement('a');
                    a.href        = fileURL; 
                    a.target      = '_blank';
                    a.download    = $scope.selectedFile+'.zip';
                    document.body.appendChild(a);
                    a.click();


                }, function error(response) {
                    console.log("Возникла ошибка");
                    console.log("код ответа: " + response.status);
                }
            );
        };



        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)