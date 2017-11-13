const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/reg',(req,res)=>{
    console.log('注册');
    // console.log(req.query);
    // if (req.query.username == 'jxz') {
        res.status(200).send('注册成功')
    // } else {
    //     res.status(200).send('注册失败')
    // }
});

app.post('/login',(req,res)=>{
    console.log('登录');
    console.log(req.body);
    if (req.body.password == '123') {
        res.status(200).send('登录成功')
    } else {
        res.status(200).send('登录失败')
    }
})




app.listen(4000,()=>{
    console.log('node running 4000');
})