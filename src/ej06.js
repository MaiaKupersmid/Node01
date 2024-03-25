let miUrl = 'HOLA/alumnos.htm?curso';

function parsearUrl(miUrl)
{
    let objetoRespuesta, url;
    try {
        url = new URL(miUrl)
    } catch (e) {
        console.log("error")
    }
    return objetoRespuesta = {
        host: miUrl.host ?? "no tiene valor", 
        pathname: miUrl.pathname ?? "no tiene valor", 
        parametros: miUrl.searchParams ?? "no tiene valor",
    };
}

let objeto = parsearUrl(miUrl);
console.log(objeto);
