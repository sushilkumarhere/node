const dbconnect = require("./mongodb")


const main = async ()=>{
 let data = await dbconnect();
 data = await data.find({rolId:1}).toArray();
 console.warn(data);
}  

main();
