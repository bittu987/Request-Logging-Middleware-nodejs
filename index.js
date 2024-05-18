const express = require('express');
const morgan = require('morgan');  

const app = express();

const port = 3333;

app.use(morgan("dev"));

// const requestLogger = (req,res,next)=>{
//      log = {
//         "request method": req.method,
//         "URL": req.url,
//         "statusCode": res.statusCode,
//         "IP address" : req.ip,
//         "timestamps" : new Date().toLocaleString()
//      }
//      console.log(log);
//      next();
// }

// app.use(requestLogger);

app.get('/',(req,res)=>{
   const data = {
    "Type" : "Message from API",
    message : "API Successfully Hit by Bittu "
  }
    res.send(data);
    console.log(data);
});



app.listen(port,()=> console.log(`Server is running on http://localhost:${port}`));

