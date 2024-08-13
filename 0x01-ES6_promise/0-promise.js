function getResponseFromAPI(apiEndPoint){
    return new Promise((resolve, reject) =>{
        if (apiEndPoint){
            resolve({status: 200, body: 'Success'});
            reject(new Error('Failed to fetch the API'));
        }
    })
}

export default getResponseFromAPI;