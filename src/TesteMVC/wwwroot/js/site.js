var app = angular.module("produtosApp", []);

app.controller("produtosCtrl", function ($scope, $http) {

    $scope.produtos = [];
    $scope.NovoProduto = [];

    //$http.get('http://localhost:51238/api/Produto/').success(function (result) {
    //    $scope.produtos = result;
    //    //$("#strJson").val()  = angular.fromJson(result);
    //}).error(function (data) {

    //    console.log(data);
    //});

    var json = "http://localhost:51238/api/Produto/";

    $.getJSON( json, {
        tagmode: "any",
        format: "json"
    })
      .done(function (data) {
          //$("#strJson").val() = result;
          //$("#strJson").val() = angular.fromJson(result);
          console.log(data);
          $scope.produtos = data;
      });

    $scope.Cadastrar = function (model) {
        
        //$scope.NovoProduto = model;
        var strJson = JSON.stringify(model);

        var url = 'http://localhost:51238/api/Produto/';

        //$.ajax({
        //    type: "POST",
        //    url: "http://localhost:51238/api/Produto/",
        //    data: json,
        //    dataType: 'application/json;odata=verbose'
        //});

        //$http({
        //    method: 'POST',
        //    url: 'http://localhost:51238/api/Produto/',
        //}).then(function successCallback(response) {
        //    console.log("POST ENVIADO COM SUCESSO");
        //}, function errorCallback(response) {
        //    console.log("POST FALHOU");
        //});

            // jQuery.ajax({
            //    headers: {
            //        'Accept': 'application/json',
            //        'Content-Type': 'application/json'
            //    },
            //    'type': 'POST',
            //    'url': url,
            //    'data': JSON.stringify(model),
            //    'dataType': 'json',
            //    'success': callback
            //});

        $http({
            method: 'POST',
            url: 'http://localhost:51238/api/Produto/',
            data: strJson,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    $scope.RemoverProduto = function (model) {
        var id = model.id;

        $http({
            method: 'DELETE',
            url: 'http://localhost:51238/api/Produto/',
            data: strJson,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
});