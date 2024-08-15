export default function handleResponseFromAPI(promise){
    return new Promise((resolve, reject) =>{
        resolve(
            {
                status: 200,
                body: 'Successs'
            }
        );
        console.log('Got a response from the API');
        reject(
            new Error()
        )
    });
    
}