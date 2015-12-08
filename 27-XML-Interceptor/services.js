angular.module('xml.services', [])

.factory('$exchangerate', function($http){
  var compra;
  var venta;

  function getExchangeRate(type){
    var url = 'http://indicadoreseconomicos.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx/ObtenerIndicadoresEconomicosXML';
    var parameters;
    if (type == 'compra') {
      parameters = {
        url: url,
        method: 'GET',
        params: {
          tcIndicador: '317',
          tcFechaInicio: '07/12/2015',
          tcFechaFinal: '07/12/2015',
          tcNombre: 'Cenfotec',
          tnSubNiveles: 'No'
        }
      };
    }else{
      parameters = {
        url: url,
        method: 'GET',
        params: {
          tcIndicador: '318',
          tcFechaInicio: '07/12/2015',
          tcFechaFinal: '07/12/2015',
          tcNombre: 'Cenfotec',
          tnSubNiveles: 'No'
        }
      };
    };

    $http(parameters).then(function(data){
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