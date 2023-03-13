const express = require('express')
const app = express()
const path = require('path')


app.set('view engine',"ejs")

app.get('/',(req,resp)=>{
    const user = {
        name:'aniket',
        list:['Javascript','html','css','node']
}
    resp.render('home',{user})
    
})

app.listen(5000,'localhost',()=>{
    console.log('listening on port 5000...')
});
