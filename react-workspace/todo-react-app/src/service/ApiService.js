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

    return fetch(options.url, options).then((reponse) => {
        if (reponse.state === 200) {
            return reponse.json();
        }
    }).catch((error) => {
        console.log("http error")
        console.log(error)
    });
}
