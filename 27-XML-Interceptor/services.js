angular.module('xmlinterceptor.services', [])

.run(function($http) {
  // $http.defaults.headers.common.Accept = '*/*';
  // delete $http.defaults.headers.common['Origin'];
})

.factory('$exchangerate', function($http){
  var compra;
  var venta;

  function getExchangeRate(type){
    var url = 'http://indicadoreseconomicos.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx/ObtenerIndicadoresEconomicos';
    var request;
    if (type == 'compra') {
      request = {
        url: url,
        method: 'GET',
        params: {
          tcIndicador: 317,
          tcFechaInicio: '07/12/2015',
          tcFechaFinal: '07/12/2015',
          tcNombre: 'Cenfotec',
          tnSubNiveles: 'No'
        },
        headers: {
          'Content-Type': undefined
        }
      };
    }else{
      request = {
        url: url,
        method: 'GET',
        params: {
          tcIndicador: 318,
          tcFechaInicio: '07/12/2015',
          tcFechaFinal: '07/12/2015',
          tcNombre: 'Cenfotec',
          tnSubNiveles: 'No'
        }
      };
    };

    $http(request).then(function(data){
      console.log(data);

    }, function(error){
      console.error(error);
    });
  };

  getExchangeRate('compra');
  getExchangeRate('venta');

  return {
    compra: compra,
    venta: venta
  };  
});