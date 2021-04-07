const fs=require('fs');
const bioData={
    name: "Adeel",
    age: 23,
    class: "4th year"
};
const jsonData= JSON.stringify(bioData); //for convert obj to json
// console.log(jsonData);
// console.log(jsonData.name);// it shows undefined b/c there is a different way to show json data
// const obj=JSON.parse(jsonData); //for convert json to obj
// console.log(obj);
// console.log(obj.name);
fs.writeFile("json1.json",jsonData,(err)=>{                 //this add data to json1 file
console.log("done");
});
fs.readFile("json1.json","utf-8",(err,data)=>{              //read data from json1 file
    const orgdata=JSON.parse(jsonData);                     //convert json data to obj
    console.log(data);
    console.log(orgdata);
});