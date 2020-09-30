module.exports = app => {
    app.get('/agendamento', (req,res) =>{
        res.send('Get Agendamento Lucas')
    });

    app.post('/agendamento',(req,res)=>{
        console.log(req.body);
    });

    
}