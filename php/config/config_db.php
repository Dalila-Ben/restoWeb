<?php
//avec les define on cree des constantes qui vont me permettre de se connecter a ma base mysql
//pour la connexion je vais utiliser a PDO car il est universel 
define("DBHOST", "localhost");
define("DBUSER", "root");
define("DBPASS", "");
define("DBNAME", "resto");
//DSN DE CONNEXION (datasource name) 
$dsn='mysql:dbname='.DBNAME.';host='.DBHOST;

//je me connecte a la base avec le try catch pour que pdo releve une exeption 
try {

    //on commence par instancier le pdo donc un element de pdo
    $db= new PDO($dsn, DBUSER, DBPASS);
    
    //on s'assure d'envoyer les donnes en UTF8
    $db->exec("SET NAMES utf8");

    //on definit le mode "fetch" par default
    $db->setAttribute
    (PDO::ATTR_DEFAULT_FETCH_MODE,
    PDO::FETCH_ASSOC);
    
}catch(PDOException $e){
    die("Erreur:" .$e->getMessage()); 
    //le die va permettre de relever l'exception qui va nous dire s'il y a un probleme avec le try 
}

// // //a partir de mnt on est connectés à la base donc on peut la lire  et on peut recuperer la liste des desserts
// $sql = "SELECT * FROM `dessert`";

// $requete = $db->query($sql);

// //pour recuperer les donnes on fait un FETCH(un resultat donc le premier de la liste) ou un FETCH ALL (la totalité de la table)

// $user = $requete->fetchAll();
// //On écrit la requête
// // $sql = "SELECT * FROM `livre` ORDER BY `titre` ASC";

// //On exécute la requête
// $requete = $db->query($sql);

// //On récupère les données 
// $titles = $requete->fetchAll();

