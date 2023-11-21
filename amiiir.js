const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
  

 let users = [{ id: 47, name: "AmirElegant", age: 16 }];
let lastId = 47;
app. get ("/", (req, res) => {
    res.status(200) .send ( "Poor little backender");
  });

 app.post ("/user ", (req, res) => {    lastId++;
    let newUser = { ...req.body, id: lastId };
    users.push(newUser);
    return res.status(200).send(`id: ${lastId}`);
  });

app.get ("/user/:id" , (req , res) => {
    for ( let i = 0 ; i < users . lenghth ; i++ ) {
        if (users [i].id == req.params.id) { 
            return res . status (200).send (users[i]);
        }
    }
    return res . status (404) . send ("User Not Found")
});
 


 app . delete ("/user/:id" , (req , res ) => {
for (let i = 0 ; i <users . lenghth ; i ++ ) {
     if (req.params.id == users[i].id) {
        users.splice(i, 1);
        //splice : delete element from array 
        return res.status (200).send ("Deleted Successfully!"); 

}
 } 
 return res . status (400). send ( "Not Found ") 
 } ) ; 

app . put ("/:id" , (req , res) => {
for ( let i = 0 ; i < users. length ; i++ ) {
    if (users [i].id == req.params.id) {
        users [i]= {...users[i] ,... req.body , id :req.params.id } ;
        return res . status (200) . send ("Updated Successfully")
         
}
}
return res. status(404). send ("User Not Found")
});