import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        // GET Method
        options.body = JSON.stringify(request);
    }
    
    return fetch(options.url, options).then((response) => {
        if (response.status === 200) {
            return response.json();
            // json 형태의 reponse로 반환
        } else if(response.status === 403){
            window.location.href = "/Login"; // redirect
        } else {
            Promise.reject(response);
            throw Error(response);
        }
    }).catch((error) => {
        console.log("http error");
        console.log(error);
    });
}
