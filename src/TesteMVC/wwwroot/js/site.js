var app = angular.module("produtosApp", []);

app.controller("produtosCtrl", function ($scope, $http) {

    $('.money').mask('000.000.000.000.000,00', { reverse: true });

    var url = 'http://localhost:51238/api/Produto/';

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
        
        var dado = angular.fromJson(model);

        $scope.ValidarDados(dado);

        //$scope.NovoProduto = model;
        var strJson = JSON.stringify(model);
                
        $http({
            method: 'POST',
            url: url,
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
            url: url,
            data: strJson,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    $scope.ValidarDados = function (dado) {

        if ($scope.dado.produto.Id == '' || null) {
            console.log("Id inválido!");
        }
        else if ($scope.dado.produto.Nome == '' || null) {
            console.log("Nome inválido!!");
        }
        else if ($scope.dado.produto.Descricao == '' || null) {
            console.log("Descrição inválida!");
        }
        else if ($scope.dado.produto.Fornecedora == '' || null) {
            console.log("Fornecedora inválido!");
        }
        else if ($scope.dado.produto.Preco == '' || null) {
            console.log("Preço inválido!");
        }
    }

    $scope.LimparCampos = function () {
        $('#nome').val('');
        $('#descricao').val('');
        $('#fornecedora').val('');
        $('#preco').val('');
        console.log("Campos limpos!");
    }
});