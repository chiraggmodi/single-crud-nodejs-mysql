var mysql = require('mysql'),
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'nodejs'
    });
connection.query('CREATE TABLE IF NOT EXISTS `test` (`id` int(11) NOT NULL, `name` varchar(50) NOT NULL,`address` int(11) NOT NULL, `phone` int(11) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1', function(err, result){
    // Case there is an error during the creation
    if(err) {
        console.log(err);
    }
    else{
        console.log("Table Ter_Stops Created");
    }
});
