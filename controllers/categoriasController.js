const Categoria = require('../model/categoriasModel');
module.exports = app => {
    app.get('/categorias', (req, res) => {
        Categoria.list(res);
    });
    app.get('/categoria/:id', (req, res) => {
        const cd_categoria = parseInt(req.params.cd_categoria);
        Categoria.listId(id, res);
    });
    app.post('/categoria', (req, res) => {
        const dadosCategoria = req.body;
        Categoria.create(dadosCategoria, res);
    })
    app.put('/categoria/:id', (req, res) => {
        const cd_categoria = parseInt(req.params.id);
        const dadosCategoria = req.body;
        Categoria.update(cd_categoria, dadosCategoria, res);
    })
}