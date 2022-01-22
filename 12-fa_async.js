const {readFile,writeFile} = require('fs');
 console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log("First"+err)
        return;
    }
   //console.log(result)
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log("second"+err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log("write"+err)
                    return;
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task');
// const fs = require('fs');
 
// fs.readFile('./content/first.txt',(err,result)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })
