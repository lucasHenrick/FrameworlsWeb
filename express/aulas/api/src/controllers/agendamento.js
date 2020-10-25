module.exports = app => {
    app.get('/agendamento', (req,res) =>{
        res.send('Get Agendamento de Filme')
    });

    app.post('/agendamento',(req,res)=>{
        console.log(req.body);
    });
    
    app.put('/agendamento', (req, res) => {
        res.send('Atualização do filme');
    })
    
    app.delete('/agendamento', (req, res) => {
        res.send('Removendo Agendamento do Filme');
    });
  
}