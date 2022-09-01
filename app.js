const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

const app =express();
const dbURI ='mongodb+srv://netninja1:test1234@cluster0.cloeemu.mongodb.net/note-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));




app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.set('view engine','ejs');





app.get('/',(req,res) =>{
res.redirect('/blogs')
});

app.get('/about',(req,res)=>{
res.render('about',{title:' About'});

});

app.use(blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})