import axios from 'axios';

export function request(config){
    return new Promise((resolve,reject)=>{
        //1.创建axios的实例
        const instance=axios.create({
            baseURL:'http://152.136.185.210:8000/api/z8',
            timeout:5000
        })

        //1，1 axios的拦截器 request 非全局
        // instance.interceptors.request.use(config=>{
        //     console.log(config);//拦截到的配置文件   信息：url，baseURL，timeout...等等
        //
        //     /**
        //      * 必须要返回出去
        //      * */
        //     return config;
        // },err=>{
        //     console.log(err);
        // })

        //1.2 响应拦截 response
        instance.interceptors.response.use(res=>{
            resolve(res)  //传递参数  通过then可获取结果
            return config; //可以返回你只想要的数据   例如：return config.data 只返回data数据
        },err=>{
            reject(err)  //传递参数  通过catch捕获异常
            console.log(err);
        })

        //2.获取request中的参数 axios发送真正的网络请求
        return instance(config)  //返回的是一个Promise
    })

}
