var mysql = require('mysql'),
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'nodejs'
    });
connection.query('CREATE TABLE IF NOT EXISTS `profile` (`id` int(11) NOT NULL AUTO_INCREMENT, `first_name` varchar(255) NOT NULL,`last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `street_address` varchar(255) NOT NULL, `street_address_2` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `state` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `profile_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1', function(err, result){
    // Case there is an error during the creation
    if(err) {
        console.log(err);
    }
    else{
        console.log("Table profile Created");
    }
});
