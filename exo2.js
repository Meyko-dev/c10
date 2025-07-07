//Nous voulons savoir si les chauffeurs sont autorisés à conduire suivant leur âge. L’âge légal en France est maintenant de 17 ans.

    //Déclare une fonction qui prend en paramètre un prénom et un âge.
    // Dans cette fonction, nous allons afficher dans la console si le chauffeur est autorisé à conduire ou pas en comparant son âge à l’âge légal.
    //Appeler la fonction avec les chauffeurs suivant :

    //Mathieu 22 ans
    //Léa 15 ans
    //Jean 17 ans

let ageLegal = 17;
let age=Number
let prenom = ["Mathieu", "Léa", "Jean"];

    function eligibiltealaconduite(prenom, age) {
        const ageLegal =17 ;
        if (ageLegal <= age) {
            console.log(`$(prenom) est autorisé à conduire.`);
        } else if (ageLegal > age); {
            console.log(`${prenom} n'est pas autorisé à conduire.`)
        }
    }
    console.log(eligibiltealaconduite("Mathieu", 22));
    console.log(eligibiltealaconduite("Léa", 15));
    console.log(eligibiltealaconduite("Jean", 17));
  