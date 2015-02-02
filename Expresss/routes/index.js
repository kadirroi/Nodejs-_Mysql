var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//Connecyion
var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: '',
        password: '',
        database: ''

    }
);

connection.connect(function (err) {
        if (err)
            console.log('Database connection failed');
        else
            console.log('Database connection ');


    }
);


/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("Req : " + req)
    console.log("Res : " + res)
    res.render('index', {title: 'İndex'});
});


/* Post */
router.post('/UserAd', function (req, res) {
        var data = {
            Product_Name: req.body.Product_Name,
            Product_Stock: req.body.Product_Stock,
            Product_Price: req.body.Product_Price
        };
        connection.query('INSERT INTO products SET ?', data, function (err, result) {
                if (err)
                    console.log('Data insert failed ');
                else
                    console.log('Data insert ');
                    res.send('Data İnsert');


            }
        );

    }
);


module.exports = router;
