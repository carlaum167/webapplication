var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: "Customer registration", action: "/new"})
})

/*POST new page. */
router.post('/new', function(req, res, next){
//salvar clientes no futuro aqui
res.redirect('/?new-true')  
})

module.exports = router;
