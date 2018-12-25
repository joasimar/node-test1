const fs = require('fs');
const colors = require('colors');


let listartabla =(base, limite =10)=>{
     //let data='';
     console.log('=================='.green);
     console.log(`tabla de ${ base }`.green);
     console.log('=================='.green);
     for(let q=1;q<=limite;q++){
          console.log(base*q+ '\n')
          //data+=base*q+ '\n';
     }

}

let crearFile =(base, limite =10) =>{
     return new Promise ((resolve,Reject) =>{
          if(!Number(base)){
               Reject('base need number')
               return;
          }
          let data='';

          for(let q=1;q<=limite;q++){
               data+=base*q+ '\n';
          }
          fs.writeFile('tablas/tabla-'+base+'-al-'+limite+'.txt', data, (err) => {
               if (err) 
                    Reject(err);
               else
                    resolve ('tabla-'+base+'-al-'+limite+'.txt')
          });
     });
}

module.exports= {
     crearFile,
     listartabla
}