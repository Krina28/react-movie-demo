import axios from "axios";

const METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
}

const API_BASE_URL = 'your api base url';
// CHECK BELOW FOR SAMPLE DATA TO BE PASSED
class Api {
    isLoggedIn = false;
    userData = {};

    constructor() {
        this.baseURL = API_BASE_URL;
        this.getAuthenticationInfo();
    }

    getAuthenticationInfo() {
        if (true) { //check if user has authenticated
            this.isLoggedIn = true;
        }
    }

    // URL FOR API
    // REFER SAMPLE JSON AT BOTTOM FOR DATA VALUES
    get(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.GET, url, data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    console.log(error);
                })
        })
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.POST, url, data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    console.log(error);
                })
        })
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.PUT, url, data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    console.log(error);
                })
        })
    }

    delete(url, data) {
        return new Promise((resolve, reject) => {
            this.api(METHOD.DELETE, url, data)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    console.log(error);
                })
        })
    }

    api(method, url, data) {
        return new Promise((resolve, reject) => {
            let axiosConfig = {};
            axiosConfig.method = method;
            axiosConfig.url = this.baseURL + url;

            axiosConfig.headers = this.setHeaders(data);
            if (data) {
                if (data.params)
                    axiosConfig.params = data.params;

                if (data.data)
                    axiosConfig.data = data.data;
            }

            axios(axiosConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (!data.skipErrorHandling)
                        alert(error.message);
                    else
                        resolve(error)
                })
        })
    }

    setHeaders(data) {
        let headers = {}
        headers['accept-language'] = 'en'

        if (data) {
            if (data.isMultipart)
                headers['Content-Type'] = 'multipart/form-data'

            if (data.headers)
                for (var key in data.headers)
                    if (data.headers.hasOwnProperty(key))
                        headers[key] = data.headers[key];
        }

        if (this.isLoggedIn !== false) {
            //set all headers here
        }
        return headers;
    }
}

export default Api;
