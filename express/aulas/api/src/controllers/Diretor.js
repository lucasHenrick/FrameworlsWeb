module.exports = app => {
    app.get('/Diretor', (req,res) =>{
        res.send('Get  de Diretor')
    });

    app.post('/Diretor',(req,res)=>{
        console.log(req.body);
    });
    
    app.put('/Diretor', (req, res) => {
        res.send('Atualização do Diretor');
    })
    
    app.delete('/Diretor', (req, res) => {
        res.send('Removendo Diretor');
    });
  
}