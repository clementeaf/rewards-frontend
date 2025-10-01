/**
 * Utilidad para pasar una cantidad de segundos a un formato un poco más humano
 *
 * @param segundos
 * La cantidad de segundos
 */
export default function (segundos){
  var min = ~~(segundos / 60);
  var sec = Math.floor( segundos % 60);

  function agregarUnidad(numero, magnitud){
    return numero + " " + magnitud + ((numero!==1) ? "s" : "");
  }

  return ((min > 0) ? agregarUnidad(min, "minuto") + " " : "" )+ agregarUnidad(sec, "segundo");
}
