const miUrl = new URL ('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
function parsearUrl(miUrl)
{
    let objetoRespuesta = {
        host: miUrl.host, 
        pathname: miUrl.pathname, 
        parametros: miUrl.searchParams,
    }
    return objetoRespuesta;
}

console.log(parsearUrl(miUrl)); 