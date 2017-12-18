
//import FetchHttpClient, {json, form,credentials} from 'fetch-http-client';
import * as qs from 'querystring';
import 'isomorphic-fetch';
import {FetchGetCache} from './cache';
import {formatLang} from './index'

export function checkStatus(response) {

    if (!response.ok) {   // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText,-1);
        error.response = response;
        throw error;
    }
    return response;
}

export function parseJSON(response) {
    return response.json();
}

export function checkRsponseStatus(response) {
    if (response.status!='success') {   // (response.status < 200 || response.status > 300)
        let error = new Error(response.msg,response.code,response.flag);
        error.code=response.code;
        throw error;
    }
    return response;
}

//export function getClient(host,language){
//    let client=clients[host+'_'+language];
//    if(typeof client!='undefined'){
//    }
//    else {
//        clients[host+'_'+language]= new FetchHttpClient(host);
//        client=clients[host+'_'+language];
//        client.addMiddleware(request => {
//            request.options.headers['Accept-Language'] = language;
//        });
//        client.addMiddleware(credentials('include'));
//        client.addMiddleware(checkStatus);
//        client.addMiddleware(json());
//        client.addMiddleware(checkRsponseStatus);
//    }
//    return client;
//}


export function easyfetch(host,url, method, args={},language='',addrandversion=false,contenttype='json') {
    language=formatLang(language);
    if(addrandversion)
    {
        if(url.indexOf('?')<0){
            url+="?v="+(new Date()).valueOf();
        }
        else {
            url+="&v="+(new Date()).valueOf();
        }
    }
    let mheaders={};
    if(contenttype!=='json') {
        mheaders = {
            Accept: 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }else {
        mheaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }

    let result;
    const headers = mheaders;
    switch (method.toLowerCase()) {
        case 'post':
        case 'put':
        case 'delete':
            result = fetch(`${host}${url}`, {
                mode: 'cors',
                cache: 'default',
                method: method,
                credentials: 'include',
                headers: headers,
                body: JSON.stringify(args)
            })
            break;
        case 'get':
            let argstr="";
            if(args)
            {
                argstr=qs.stringify(args);
                if(argstr) {
                    if (url.indexOf('?') < 0) {
                        argstr = "?" + argstr;
                    }
                    else {
                        argstr = '&' + argstr;
                    }
                }
            }
            result = fetch(`${host}${url}${argstr}`, {
                method: method,
                credentials: 'include',
                headers:headers
            })

            break;
    }
    return result.then(checkStatus) .then(parseJSON).then(checkRsponseStatus);
}

export function easyFetchWithCache(host,url, method, args={},language='',clear=false,contenttype='form') {
    //alert('easyFetchWithCache')
    let result={};
    if(args==null){
        args={};
    }
    if(method=='get'){
        const fetchFunc = () => {
            return easyfetch(host,url,method,args,language,clear,contenttype);
        };
        result = FetchGetCache(host,url,args,language,clear,fetchFunc);
    }
    else{
        result = easyfetch(host,url,method,args,language,clear,contenttype);
    }
    return result;
}