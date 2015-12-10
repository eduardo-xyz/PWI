angular.module('xmlinterceptor.services', [])

.run(function($http) {
  // $http.defaults.headers.common.Accept = '*/*';
  // delete $http.defaults.headers.common['Origin'];
})

.factory('$exchangerate', function($http){
  var compra = 0;
  var venta = 0;

  function getExchangeRate(type){
    return new Promise(function(success, error){
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
        if (type == 'compra') {
          compra = data.data.DataSet.diffgram.Datos_de_INGC011_CAT_INDICADORECONOMIC.INGC011_CAT_INDICADORECONOMIC.NUM_VALOR;
          success(compra);
        }else{
          venta = data.data.DataSet.diffgram.Datos_de_INGC011_CAT_INDICADORECONOMIC.INGC011_CAT_INDICADORECONOMIC.NUM_VALOR;
          success(venta);
        };
      }, function(err){
        console.error(error);
        error(err);
      });
    });    
  };

  return {
    get: getExchangeRate
  };  
});