import * as qs from 'querystring';
//import {
//    AsyncStorage
//} from 'react-native';
//import storage from 'react-native-simple-store';
//import * as key from '../../constants/StoreKey';
import {formatLang} from './index'
export function FetchGetCache(host,url,args,language,clear=false,fetchFunc){
    let query=args.query;
    let k1=host+url,
        k2=formatLang(language),
        k3=qs.stringify(query);
    if(typeof sessionStorage=='undefined') {
        if(clear){
            return fetchFunc().then(value => {
                storage.save(k1+k3+k2, value);//存储
                return value;
            });
        }
        else{
            return storage.get(k1+k3+k2).then(value => {
                if (value) {
                    return value;
                } else {
                    return fetchFunc().then(value => {
                        storage.save(k1+k3+k2, value);//存储
                        return value;
                    });
                }
            });
        }
    }
    else {
        let cachedvalue=sessionStorage[k1+k3+k2];
        if (typeof cachedvalue!='undefined'&&!clear) {
            return new Promise(resolve => {resolve(JSON.parse(cachedvalue))});;
        } else {
            return fetchFunc().then(value => {
                sessionStorage[k1+k3+k2]=JSON.stringify(value);//存储
                return value;
            });
        }
    }
}