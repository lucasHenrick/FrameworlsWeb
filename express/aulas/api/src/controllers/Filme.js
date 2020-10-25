module.exports = app => {
    app.get('/Filme', (req,res) =>{
        res.send('Get  de Filme')
    });

    app.post('/Filme',(req,res)=>{
        console.log(req.body);
    });
    
    app.put('/Filme', (req, res) => {
        res.send('Atualização do filme');
    })
    
    app.delete('/Filme', (req, res) => {
        res.send('Removendo Filme');
    });
  
}