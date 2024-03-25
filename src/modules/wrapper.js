import axios from "axios"; 
const APIKEY ="d1d43d48";

const OMDBSearchByPage = async(searchText, page = 1) =>{ 
    let returnObject = { 
        respuesta :false,
        cantidadTotal:0, 
        datos :{} 
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    console.log(requestString);

    try{        
        const responseData = await axios.get(requestString);
        returnObject.respuesta = responseData.data.Response;
        if(returnObject.respuesta == true){
            //console.log('responseData', responseData.data);
            console.log("adentro")
            returnObject.cantidadTotal = responseData.datos.totalResults;
            returnObject.datos = responseData.data.Search;
        }
        else if(returnObject.respuesta == false){
            returnObject.datos = null;
            returnObject.cantidadTotal = null;
            returnObject.respuesta = responseData.data.Response;
        }
    } catch (error) {
        console.error("ERROR al hacer la request: ", error)
    }

    return returnObject; 
}; 
    
const OMDBSearchComplete = async (searchText) => {
    let returnObject = { 
        respuesta :false, 
        cantidadTotal:0, 
        datos :{} };
        
        const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
        console.log(requestString);

    try{
        const responseData = await axios.get(requestString);
        returnObject.respuesta = responseData.data.Response;
        if(returnObject.respuesta  == true){
            console.log('responseData', responseData.data);
            returnObject.datos = responseData.data.Search;
            returnObject.cantidadTotal = responseData.datos.totalResults;
            returnObject.respuesta = responseData.data.Response;
        }
        else if(returnObject.respuesta == false){
            returnObject.datos = null;
            returnObject.cantidadTotal = null;
            returnObject.respuesta = responseData.data.Response;
        }
    } catch (error) {
        console.error("ERROR al hacer la request: ", error)
    }
        return returnObject; 
}; 

const OMDBGetByImdbID = async(imdbID) => { 
    let returnObject = { 
        respuesta : true, 
        cantidadTotal:0, 
        datos :{} }; 
        const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${imdbID}`;
        console.log(requestString);

    try{
        const responseData = await axios.get(requestString);
        returnObject.respuesta = responseData.data.Response;
        if(returnObject.respuesta == true){
            returnObject.datos = responseData.data.Search;
            returnObject.cantidadTotal = responseData.datos.totalResults;
            returnObject.respuesta = responseData.data.Response;
            console.log('responseData', responseData.data);
            return returnObject;
        }
        else if(returnObject.respuesta == false){ 
            returnObject.datos = null;
            returnObject.cantidadTotal = null;
            returnObject.respuesta = responseData.data.Response;
            return returnObject;
        }
    } catch (error) {
        console.error("ERROR al hacer la request: ", error)
    }
        
    }; 

export{OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};