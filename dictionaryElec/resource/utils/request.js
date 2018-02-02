import "whatwg-fetch";

let header = {
    "Content-Type": "application/json"
};

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let err = new Error(response.statusText);
        err.response = response;
        throw err;
    }
};

const parseJSON = response => {
    return response.json();
};

const status = {
    301: "辞典查询失败",
    302: "翻译查询失败",
    303: "服务端的其它异常"
};
const list = [301, 302, 303];

const request = (url, data) => {
    fetch(url, data)
        .then(checkStatus)
        .then(data => {
            return new Promise((resolve, reject) => {
                if (data.errorCode === 0) {
                    resolve(data);
                } else {
                    reject(new Error(data));
                }
            });
        })
        .catch(err => {
            if (list.indexOf(err.errorCode)) {
                console.log(status[err.errorCode]);
            }
        });
};

export const get = (url, params) => {
    let data = { method: "get" };
    data = Object.assign(data, header, { body: JSON.stringify(params) });
    return request(url, data);
};

export const post = (url, params) => {
    let data = { method: "post" };
    data = Object.assign(data, header, { body: JSON.stringify(params) });
    return request(url, data);
};
