const promise = new Promise((resolve,reject) =>{
    if(/*비동기 작업수행성공*/){
        resolve('result');

    /*비동기 작업 실행시*/
    }else{
        reject('실패');
    }
})
