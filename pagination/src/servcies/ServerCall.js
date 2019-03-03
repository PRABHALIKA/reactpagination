import axios from 'axios';
import $ from 'jquery';
const baseUrl="https://jsonplaceholder.typicode.com/"
class ServerCall {
   static fnGetAxios(url){
      return axios.get(baseUrl+url);
   }

   static fnGetJS(url){
       return new Promise(function(resolve,reject){
          let httpObj=new XMLHttpRequest();
          httpObj.open('get',baseUrl+url,true);
          httpObj.send();
          httpObj.onload=function(){
            resolve(httpObj.responseText);
          }
          httpObj.onerror=function(){
            reject(httpObj.responseText);
          }
       });
   }

   static fnGetJ(url){
      return $.get(baseUrl+url);
   }
}

export default ServerCall;