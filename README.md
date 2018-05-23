# Cozone - Tutoriel API NodeJS/Express

Qui dit CoZone dit Collaboration.  
Et pour pouvoir travailler efficacement en collaboration, avec les différentes membres de la CoZone, rien ne vaut les bonnes pratiques.

Dans ce tutoriel, tu vas pouvoir suivre la création d'une API, en passant par la mise en place de celle-ci mais aussi les bonnes pratiques du code ou de l'architecture.

## Sommaire
 - [Pourquoi l'API ?](#pourquoi)
 - [Installation des outils de bases](#installation)
 - [Initialisation du projet](#initialisation)
 - [Les packages npm utiles](#packages)
 - [EsLint: pourquoi et comment ?](#eslint)
 - [L'organisation de mon projet](#organisation)
 - [Pour aller plus loin ...](#plusloin)
    - [APIDoc](#apidoc)
    - [Base de données](#bdd)
      - [MySQL](#mysql)
      - [MongoDB](#mongodb)
      

## <a id="pourquoi"></a> I - Pourquoi l'API ?
> J'ai toujours réalisé mes projets sans passer par une API, pourquoi devrais-je commencer à le faire ?

Comme je te comprends, j'étais comme toi à l'époque, innocent et insouciant. D'ailleurs arrête de me perturber en posant des questions, je ne sais plus par quoi commencer...   
Bref, mettre en place une API pour un projet possède beaucoup d'avantages :
- Si, en parallèle à ton application, un autre projet nécessite de travailler avec les mêmes données, ce sera beaucoup plus simple à mettre en place. Les deux applications pourront utiliser les mêmes routes sans se marcher dessus.
- Elle peut être versionnée facilement. Ce qui permet aux projets utilisant celle-ci de ne pas être vulnérables aux modifications et aux mises à jour consécantes.
- La syntaxe des routes est compréhensible à la lecture. On comprend du premier coup d'oeil les routes suivantes :  
  > GET /api/users  
  DELETE /api/users/bladeous

En bref, l'utilisation d'une API sera un gros plus pour tes futures applications, qu'elles soient Web, Mobile, etc.  

## <a id="installation"></a>II - Installation

Finie la théorique, passons à la pratique !   
Mais avant celà, on doit être sûrs que tu aies les outils nécessaires.

**NodeJS**  
Clique sur ce magnifique lien qui suit, là juste en dessous, et suis les instructions  
https://nodejs.org/download/  

**IDE**  
Télécharge l'IDE, ou l'éditeur avec lequel tu es le plus habitué.  
Si tu n'as aucune idée, Visual Studio Code est un bon choix : https://code.visualstudio.com/download

## <a id="initialisation"></a>III - Initialisation

Je vois que tu t'impatientes. Ne t'en fais pas, petit filou, on y arrive !  
Il ne te manque plus que suivre ces instructions pour initialiser ton API.

- Dans le dossier où tu désires créer ton API, lance un terminal de commande et exécute la commande suivante : 
  ```sh
  $ npm init
  ```
- Passer les étapes jusqu'à, `entry point` auquel on associe `app.js` (si tu as été trop vite pas de panique, on peut le modifier directement dans le `package.json` au champ `main`)

  _Cette étape n'est pas obligatoire. On a décidé d'utiliser `app.js` à la place du classique `index.js` pour aucune raison valable :p_

- Passe les dernières étapes
- Utilise la commande
  ```sh
  $ npm install
  ```
- Ajoute les deux scripts de lancement `start` et `dev` dans le `package.json` :
  ```js
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js", // requiert l'installation du package nodemon expliquée dans le paragraphe suivant
  }
  
  ```
## <a id="packages"></a>IV - Les packages
### Dependencies

Au lieu d'essayer de réinventer la roue, rien ne vaut la communauté npm pour réaliser telle ou telle action.  
Sur [le site de npmjs](http://npmjs.com/), tu pourras trouver tout un tas de _package_ (aussi appelé _dependency_) pour ça.

Pour installer des dependencies :

```sh
$ npm install --save <package>
```

Par exemple pour le package `express` :
```sh
$ npm install --save express
```
Les indispensables :
- `express`
- `body-parser`

Les packages utiles selon les applications :
- `cors`  
utile pour accepter les requêtes externes (cross-domain)
- `node-fetch`  
si l'app doit elle même effectuer des requêtes http (il existe des alternatives comme `superagent`, etc.)
- `mysql`  
si un accès à une base SQL est nécessaire
- `mongoose`  
si il y a besoin d'intéragir avec une base de donnée MongoDB. Pour plus d'info, c'est [par ici](#mongodb)

### DevDependencies
Certains packages ne sont plus requis à partir du moment où l'application est mise en production. Comme par exemple un package permettant de corriger le formattage du code, etc.

Mais ne t'inquiètes pas, c'est prévu par `npm`... Ils sont vraiment forts.  
Pour installer des DevDependencies :

```sh
$ npm install --save-dev <package>
```

Par exemple pour le pacakge `nodemon` :
```sh
$ npm install --save-dev nodemon
```

Les package utiles pour développer ton api :
- `eslint`  
  Pour la config, c'est [par ici](#eslint)
- `nodemon`   
  surveille les fichiers présents dans le répertoire à partir duquel le _node_ est démarré et, si les fichiers changent, `nodemon` redémarrera automatiquement l'application. _Moins on en fait, mieux on se porte !_
- `apidoc`  
génère de la doc Web à partir des commentaires. [Par ici](#apidoc) pour voir comment ça marche.

## <a id="eslint"></a> V - EsLint 
### Pourquoi l'EsLint ?
Nous allons configurer EsLint qui est un linter. Un linter est un outil d'aide à la mise en forme du code et à la détection d'erreur. Le but est d'établir un ensemble de règles sur la structure, la mise en forme et la syntaxe du code. Le respect de ses règles au sein d'un projet permet une meilleure compréhension du code entre les membres de manière durable.

A la CoZone, nous avons décider d'utiliser le guide EsLint de Airbnb qui est l'un des modèles les plus stricts. Cela peut sembler dure à utiliser au début mais la propreté (pour ne pas dire la beauté) du code s'en ressentira fortement. De plus, cela permet d'apprendre beaucoup de chose sur le JavaScript.

En tout cas, pas de panique. La plupart des éditeurs de textes populaires intègrent des outils d'auto-correction qu'on peut reliés à son set de règles EsLint. Par exemple, sur Visual Studio Code, on a une extension dédiée. Une fois paramétrée, la plupart des erreurs pourront être corrigé grâce à des raccourcis ou même juste à la sauvegarde du fichier. Et puis pour les erreurs les plus tenaces, on peut aller chercher des explications directement sur [le site d'EsLint](https://eslint.org/) où on trouvera en général des éléménts de corrections pour l'erreur donnée.

### La mise en place
- Installe le package `eslint`
- Rends toi dans le dossier `./nodes_modules/.bin`
- Lance la commande `eslint --init` et suis les indications :
  > How would you like to configure ESLint ?  
  &nbsp;&nbsp;_Use a popular style guide_  
  <br>
  Which style guide do you want to follow ?  
  &nbsp;&nbsp;_Airbnb_  
  <br>
  Do you use React ?  
  &nbsp;&nbsp;_N_  
  <br>
  What format do you want your config file to be in ?  
  &nbsp;&nbsp;_JavaScript_
- Copie le fichier `.eslint.js` depuis le dossier `nodes_modules/.bin` jusqu'à la racine de ton projet
- Modifie le contenu de `.eslint.js` pour qu'il contienne
  ```js
  module.exports = {
    'extends': 'airbnb-base',
    'env': {
      'node': true,
    },
    'rules': {
      'no-console': 0,
    },
  };
  ```
- Rajoute la commande de test dans le `package.json` dans les scripts :
  ```js
  "scripts": {
    // après les scripts déjà présents
    "test": "eslint ./",
  },
  ```
- Configure ton éditeur préféré afin qu'il te signale les erreurs et encore mieux qu'il les corrige
- Utilise ```npm run test``` avant chaque commit pour vérifier le respect des règles du linter

### La configuration de mon éditeur de texte préféré pour EsLint 

#### VSCode (le choix de nous)
 - Télécharge l'extension EsLint via l'IDE
 - Accéde au paramètre de l'espace de travail en faisant, par exemple, CTRL+MAJ+P puis en tappant "settings"
 - Dans les paramètres de **l'espace de travail** (et non les paramètres utilisateurs)
 - Voici les différentes lignes que doit contenir le fichier pour exploiter l'eslint :
    ```js
    {
      "eslint.enable": true, // active eslint
      "eslint.options": {
        "configFile": ".eslintrc.js" // indique la localisation du fichier de config eslint
      },
      "editor.formatOnSave": false, // pour éviter que l'éditeur n'overwrite les règles eslint à la sauvegarde
      "editor.tabSize": 2,
      "eslint.autoFixOnSave": true, // si tu veux que l'éditeur règles les problèmes eslint à la sauvegarde (attention certaines erreurs doivent être corrigées à la main car trop complexe pour l'éditeur)
      "files.eol": "\n",
    }
    ```
 - Voilà c'est fait. Tu peux aussi corriger les erreurs grâce au classique ALT+Entrée
 - Si tu ne comprends pas une erreur n'hésite pas à la chercher sur le site dédié à EsLint tu auras des informations et des éléments de correction -> [Les règles EsLint](https://eslint.org/docs/rules/)
#### Atom
(En Construction)
#### SublimeText
(En Construction)
#### Notepad et Notepad++
> lol le Notepad  
_\- Clary, 22 Mai 2018_

(En Construction)

## <a id="organisation"></a> VI - Organisation: Comment structurer mon projet ?
Le contenu de ce paragraphe est une proposition d'organisation et de bonnes pratiques que nous avons décider d'adopter à la CoZone pour les APIs. Il en existe pleins d'autres valables mais on a choisi celle-ci encore une fois sans aucune raison valable en dehors du fait qu'elle permet d'avoir un projet propre et compréhensible. Du coup, nous te conseillons fortement (sans vouloir te commander) d'utiliser les mêmes conventions. Comme ca, il sera plus facile d'analyser le code pour un autre Cozonnard. Après si veux semer la Discord(!unjoke), personne ne peut t'en empêcher :/.

### Le fichier principal: app.js
Ce fichier est la base de l'application, le fichier principal qui contient le paramétrage du serveur et son lancement. 

Les logs sont importants, ils permettent de savoir quel est l'état du serveur et de connaître le port utilisé.

D'ailleurs pour le port et les autres variables d'environnements en général on utilisera:
```js
process.env.PORT || port // port est une variable à laquelle on donnera une valeur par défaut.
```

Par exemple dans le template:
```js
const port = 8080;
const server = app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${server.address().port}...`);
});
```

On précise ainsi qu'on va utiliser le port définit dans les variables d'environnement (obligatoire pour beaucoup de dispositif de mise en ligne eg:Heroku) et que si il n'y a pas de variable d'environnement on utilisera le port définit dans la variable `port` (8080 dans l'exemple ci-dessus).

### Routes: Mieux qu'un GPS
Les routes de notre API seront définies et documentées dans le dossier `route` dans lequel on trouvera un fichier appelé `gate.route.js` qui va accueillir toutes les requêtes comme indiqué dans le fichier `app.js` avec la ligne
```js
app.use('', require('./route/gate.route'));
```

Dans le fichier `gate.route.js`, on va pouvoir rediriger les différents services proposés par l'application comme l'api ou l'authentification (coming soon). On va `require` à chaque fois le dossier associée (qui contiendra un `index.js` qui sera donc automatiquement chargé). Par exemple, pour l'api:
```js
router.use('/api', require('./api'));
```
Et pour chacun de ces `index.js`, on va appeler les différentes routes associés à ce service de notre applications. Par exemple, pour une api d'application de messagerie, l'index pourrait contenir:
```js
router.use('/user', require('./user.route.js'));
router.use('/message', require('./message.route.js'));
router.use('/channel', require('./channel.route.js'));
```

# <a id="plusloin"></a> Et pour aller plus loin...

## <a id="apidoc"></a> I - ApiDoc

### Pourquoi ?
Il y a des chances qu'une autre personne que toi, celui qui a développé l'API, ait besoin d'utiliser cette dernière. À ce moment là, ca devient intéressant d'avoir une jolie documentation claire et précise. On est d'accord là dessus je pense (j'espère en tout cas ...).

Mais bon, un bon informaticien est un informaticien fainéant ;). Faire la doc à la main après avoir codé et commenté (un minimum) mon code très peu pour nous. C'est à ce moment là qu'entre en scène Apidoc <3. En effet, ce module va me permettre de générer une application web automatiquement à partir de commentaires glissé au milieu du code (ces commentaires seront un peu plus riches que ce qu'on a l'habitude de voir mais ca vaut le coup, **trust me**).

Pour te faire une idée de ce à quoi ressemble la doc après génération tu peux aller voir dans le dossier `doc` du template et ouvrir dans `index.html` avec ton navigateur préféré. Comme tu peux le voir, on peut organiser ses routes par groupes, donner toutes les infos nécessaires aux bons usages de ces routes (avec exemples à l'appui) et on peut même donner l'opportunité de tester directement l'API avec ses propres paramètres.

### Configuration
Je suis sur que t'es convaincu. Du coup, je vais te montrer comment configurer ton application pour que le fonctionnement avec Apidoc soit nickel et que tu puisses éblouir les gens avec ta magnifique documentation.

Voici les différentes étapes que tu peux suivre si le coeur t'en dit:

- Installer les packages Apidoc (si ca n'est pas déjà fait) comme indiqué [vers par ici](#packages)
- Renseigner les informations apidoc dans le `package.json` en tant que champ au même titre que `"scripts"` ou `"name"`
```js
    "apidoc": {
        "title": "ApiDoc pour le template API de la CoZone", //Titre de la doc
        "description": "Cette API est un template pour les CoZonards qui sont amenés à développer le propre API. \nCette documentation a été générée avec Apidoc. \nPour toute information ou réclamation, vous pouvez vous addresser à Clary MASSON ou Cissé KANE", // Description de l'API qui apparaît en début de documentation
        "url": "/api", // le préfix à mettre devant toute les routes
        "sampleUrl": "localhost:8080/api" // une URL permettant de tester directement l'API (le mieux c'est d'avoir l'adresse qu'à l'API en ligne mais bon pour ce test on vous laisse lancer l'application en local pour tester)
    },
```
- Ajouter le script consacré dans le `package.json`
```js
      "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "test": "eslint ./",
        "apidoc": "apidoc -i ./ -o ./doc -e ./node_modules ./doc"// cette ligne
    },
```
_`-i` indique les fichier à scanner (ici l'ensemble du dossier où ce trouve `package.json`)_

_`-o` indique l'emplacement cible de la doc (ici le dossier `doc` et si le dossier n'existe pas il est créé à la génération de doc)_

_`-e` indique les fichiers à exclure du scan de génération de doc (ici `nodes_modules` et `doc`)_

Voilà c'est fait. Tu peux essayer de lancer la commande avec un 
```sh
$ npm run apidoc
```
Ensuite, tu peux ouvrir la page `index.html` du dossier `doc` et tu constateras que tu as une doc super belle (et sûrement super vide aussi pour l'instant).

### Documentons !

Bon la doc est pas super remplie pour l'instant mais on va y remédier tout de suite. 

Si tu as regardé le contenu du template un peu en profondeur, tu peux voir que par convention on documente l'API principalement à la définition des routes (cf `./route/api/hello.route.js`) avec un (plus ou moins) long commentaire qui précède la définition même de la route.
_Si tu n'a pas encore été voir je t'invite à regarder, à comparer avec la doc et à faire des modifications pour sentir comment l'outil marche._

Ci-dessous un modèle de documentation d'une route assez général (tu n'es pas obligé d'avoir tous ces champs à chaque fois hein :p ) et si ca suffit pas tu peux trouver plus d'information sur [le site dédié à l'outil](http://apidocjs.com/).

```js
  /**
 * @api {<type de route (get, post, delete, put, patch)>} /<laroute> <Un nom pour la route>
 * @apiName <nom de la route eg: GetUser, PostMessage,...>
 * @apiGroup <Groupe auquel appartient la route>
 * @apiDescription <Une description de la route
 * qui continue à la ligne suivante>
 *
 * @apiParam {<type du paramètre eg: String,number,...>} <Nom du paramètre> <Description du paramètre>
 *  @apiParam {<type du paramètre eg: String,number,...>} <Nom du paramètre> <Description du paramètre>
 *
 * @apiParam {<type du paramètre eg: String,number,...>} [<Un paramètre optionnel car entre "[]">] 
 * <Description du paramètre>
 *
 * @apiParamExample  {<format du corps eg:json,...>}  Request-Example:
 *  {
 *    <Nom du premier paramètre>: <un exemple de valeur pour ce paramètre>,
 *    <Nom du deuxième paramètre>: <un exemple de valeur pour ce paramètre>,
 *  }
 *
 * @apiSuccess {<type d'un champ de réponse eg: String,number,...>} <nom du champ> <Description du champ>
 * @apiSuccess {<type d'un champ de réponse eg: String,number,...>} <nom du champ> <Description du champ>
 *
 * @apiSuccessExample {html} Success-Response:
 *  {
 *    <nom du champ> : <exemple de valeur de ce champ>,
 *    <nom du champ> : <exemple de valeur de ce champ>,
 *  }
 */
```

Voici deux exemples simples tirés directement du template:
```js
/**
 * @api {get} /hello Say hello
 * @apiName GetHello
 * @apiGroup Bonjour
 * @apiDescription Cette route dit bonjour.
 *
 * @apiSuccess {String} message "Hello World"
 * @apiSuccess {String} success true
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "success": true,
 *    "message": "Hello World!"
 *  }
 *
 */
router.get('/', HelloController.helloWorld);

/**
 * @api {post} /hello Say hello to someone also but with a post
 * @apiName PostHelloWithName
 * @apiGroup BonjourAvecNom
 * @apiDescription Cette route dit bonjour à une personne bien précise en utilisant un post
 *
 * @apiParam {String} name Prénom ou Pseudo de la personne à qui il faut dire bonjour
 *
 * @apiParamExample {json} Request-Example:
 *  {
 *    "name" : "Jackie"
 *  }
 *
 * @apiSuccess {String} message "Hello {your name here}"
 * @apiSuccess {String} success true
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "success": true,
 *    "message": "Hello Jackie!"
 *  }
 *
 */
router.post('/', HelloController.helloName);
```

## <a id="bdd"></a> II - Base de données
Une API c'est bien beau mais si elle ne sert qu'à nous renvoyer des Hello World, on ne va pas aller très loin - même si je peux comprendre le bonheur de recevoir un bonjour de quelqu'un, mais si ça vient d'un programme.

C'est là que rentrent en jeu les bases de données. On va présenter deux types de BDD à coupler avec une API NodeJS/Express, puisqu'on est habitués à travailler avec, mais sache qu'il en existe un bon nombre.

## <a id="mysql"></a>MySQL
Et on commence par (sûrement) le plus populaire, j'ai nommé MySql !  
(*En construction...*)

## <a id="mongodb"></a> MongoDB  
Pour en venir aux bases de données type NoSQL, nous avons choisi MongoDB.

Tout au long, nous allons réaliser l'API d'une Todo-List, où nous pourrons créer, modifier et supprimer des tâches à réaliser.  
L'exemple peut paraître simple mais il permettra tout de même de pouvoir voir la majorité des requêtes possibles dans une BDD.

Pour l'installer, il suffit de :

- Aller [sur ce lien](https://www.mongodb.com/download-center), puis sur l'onglet "Commnity Server" et enfin télécharger l'éxécutable.

  ![mongo website](https://i.imgur.com/peMQvvE.png)
- <a id="mongod"></a>Créer le dossier suivant : `C\data\db`.  
Il est nécessaire à MongoDB, mais n'est bizarrement pas généré automatiquement pendant l'installation.
- Lancer un terminal et d'éxécuter ces 2 commandes :
  ```sh
  # attention à mettre la version de votre Mongo
  $ cd C:\Program Files\MongoDB\Server\<version>\bin
  $ mongod
  ```
  Les derniers logs de Mongo vous permettront de savoir sur quel port a démarré l'instance, comme par exemple :
  > 2018-05-23T11:16:07.528+0200 I NETWORK  [initandlisten] waiting for connections on port 27017

### 1 - Packages  
Concernant les dépendances de MongoDB pour NodeJS, il n'y en a pas beaucoup, une seule à vrai dire.  
Il y a cependant un bon nombre qui peuvent compléter pour apporter des fonctionnalités très intéressantes.

Concernant la dépendance "mère", nous avons choisi d'utiliser l'ODM `mongoose`. Pour l'installer, rien de plus simple :

```sh
$ npm install --save mongoose
```

Pour les dépendances complémentaires, n'hésite pas à visiter [le site npmjs](https://www.npmjs.com/search?q=mongoose) pour trouver votre bonheur, comme par exemple :
- `mongoose-validator`  
pour gérer les contraintes sur un type de données (respecter une taille, un format, etc.)
- `mongoose-paginator`  
pour faciliter les requêtes sous forme paginée
- _et bien d'autres..._

D'autres packages peuvent être intéressants pour travailler de pair avec mongoose, comme `bluebird` qui est un utilitaire permettant de gérer les `Promise` retournées par les requêtes, et rendre le tout plus performant.

### 2 - `app.js`
Maintenant que tous les packages nécessaires sont installés, on va pouvoir passer à la préparation de notre fichier `app.js` pour gérer la base de données.

Premièrement, nous allons devoir importer quelques packages à notre projet :

```js
const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;
```

Concernant ta BDD Mongo, on suggère fortement de mettre en place un système d'utilisateur pour accéder aux données, ce qui n'est pas par défaut - aussi bizzare que cela puisse être.

> ⚠️ TODO Nico: Gérer les utilisateurs Mongo

Après avoir créé ton administrateur de BDD, il faut renseigner les informations pour te connecter à celle-ci :

```js
// ...
mongoose.Promise = bluebird;

const username = 'admin';
const password = '<password>'; // quelque chose de long et compliqué, pas besoin de le retenir, tun n'auras pas à le retaper
const serverUrl = 'localhost:27017'; // le port est à modifier si nécessaire, ou l'url toute entière si tu passes par des containers par exmeple
const db = '<database>'; // la base de données où ton utilisateur est défini

const dbUrl = `mongodb://${username}:${password}@${serverUrl}/${db}`;
mongoose.connect(dbUrl)
  .then(() => { console.log(`Erreur lors de la connection à ${dbUrl} !`); })
  .catch(() => { console.log(`Connecté à ${dbUrl} avec succès !`); });
// Ces logs permettent de voir en un coup d'oeil si la connection a bien eu lieu

const app = express();
// ...
```

Tu peux maintenant tester la connection en démarrant le script

```
$ npm run dev
```

Si tout se passe bien, tu es censé voir (ou quelque chose dans le genre)
> Connecté à mongodb://admin:7MTcEtLTjReYXk4tAJXd@localhost:27017/admin avec succès !

Sinon, vérfie l'url de la base de données, les paramètres de connexion ou qu'une instance de Mongo [a bien été lancée précédemment](#mongod).

### 3. La couche Modèle
Le modèle est l'équivalent d'une table dans les BDD classiques.

Pour continuer sur notre exemple de Todo List, nous allons créer le modèle `Task`, définit par :
- Un nom
- Une description
- Une date
- Un état (fini ou non)

Pour commencer, il faut donc créer le fichier contenant toutes ces informations : `task.model.js`, qui se trouvera dans `/models` :

**/models/task.model.js**
```js
const mongoose = require('mongoose');

// on crée le schéma du modèle
const TaskSchema = new mongoose.Schema({
  // on définit les différents attributs
  // pas besoin de définir un identifiant, mongoose le fera de lui même avec l'attribut `_id`
  name: {
    type: String,
    unique: true, // le package `mongoose-unique-validator` peut être utile pour cette ligne
  },
  desc: String,
  date: {
    type: Date,
    default: Date.now(), // optionnel
  },
  status: {
    type: Boolean,
    default: false, // optionnel
  },
});

// on crée le modèle à partir du schéma
const Task = mongoose.model('Task', TaskSchema);
// puis on exporte le modèle
module.exports = Task;
```

### 4. La couche Service
Les services vont effectuer les actions de bases (récupérer, modifier, supprimer, etc.) sur les modèles.

Nous allons donc créer le service lié à notre modèle `Task`, avec le fichier `task.service.js` dans le dossier `/services` :

**/services/task.service.js**
```js
// on récupère le modèle créé précédemment
const Task = require('../models/task.model');

// on définit ensuite les différentes actions possibles par la suite
// toutes les fonctions sont asynchrones pour être sur d'attendre la donnée venant de mongo avant de transmettre aux contrôleurs

// récupérer toutes les tâches
exports.getTasks = async () => {
  // toujours entourer de try catch pour détecter les plausibles erreurs
  try {
    return await Task.find({}, (err, tasks) => {
      // le .find() pourrait également déclencher une erreur
      if (err) throw err;
      return tasks;
    });
  } catch (e) {
    throw Error(`[GET Tasks] ${e}`);
  }
};

// récupérer une tâche par rapport à son id
exports.getTaskById = async (id) => {
  try {
    return await Task.findById(id, (err, task) => {
      if (err) throw err;
      return task;
    });
  } catch (e) {
    throw Error(`[GET Task by Id] : ${e.message}`);
  }
};

// récupérer une tâche par rapport à son nom
exports.getTaskByName = async (name) => {
   try {
    return await Task.findOne({ name }, (err, task) => {
      if (err) throw err;
      return task;
    });
  } catch (e) {
    throw Error(`[GET Task by Name] : ${e.message}`);
  }
};

// créer une tâche
exports.createTask = async (task) => {
  try {
    const newTask = new Task({
      name: task.name,
      desc: task.desc,
      date: task.date || Date.now(),
      status: task.status || false,
    });
    const result = await newTask.save();
    return result;
  } catch (e) {
    throw Error(`[POST Task] : ${e.message}`);
  }
};

// mettre à jour une tâche
exports.updateTask = async (task) => {
  try {
    const oldTask = await this.getTaskById(task.id);
    // si on ne touve pas de tâche avec cet id, on quitte
    if (!oldTask) return false;

    oldTask.name = task.name || oldTask.name;
    oldTask.desc = task.desc || oldTask.desc;
    oldTask.date = task.date || oldTask.date;
    oldTask.status = task.status || oldTask.status;
    
    const result = await oldTask.save();
    return result;
  } catch (e) {
    throw Error(`[PUT Task] : ${e.message}`);
  }
};

// supprimer une tâche
exports.deleteTask = async (id) => {
  try {
    await Task.remove({ _id: id });
    return true;
  } catch (e) {
    throw Error(`[DELETE Task] : ${e.message}`);
  }
};
```

On en a maintenant fini avec la couche Service, passons aux contrôleurs, que tu connais déjà de par l'API simple présente sur la branche _master_ du repo.

### 5. La couche Contrôleur
Si tu as pull le repo sur la branche _master_, tu auras déjà un dossier `/controllers` avec le `hello.controller.js` présent à l'intérieur, pour présenter la base d'une requête.  
Si ça t'a laissé sur ta faim, ne t'en fais pas, on va passer aux choses sérieuses à partir de maintenant !

Dans ce même dossier, tu vas donc devoir créer un `task.controller.js`.  
Il permettra de :
- Contrôler les requêtes, de les parser, etc.
- De les vérifier et les valider
- De répondre ou de renvoyer une erreur selon les résultats

**/controllers/task.controller.js**
```js
const TaskService = require('../services/task.service.ts');

// comme pour les services, on entour de try catch pour détecter les erreurs - dont celles générées par le service
// les services étant asynchrones, les contrôleurs doivent également l'être

exports.getTasks = async (req, res) => {
  try {
    // on récupère les tâches via le service
    const tasks = await TaskService.getTasks();
    // on renvoie une réponse avec un statut 200, pour prévenir que tout est ok
    // avec les informations demandées, ici la liste de toutes les tâches
    return res.status(200).json({
      success: true,
      data: tasks, // on pourrait utiliser .map(() si on devait formatter les infos envoyées, comme enlever les données sensibles (password pour un utilisateur), etc.
    });
  } catch (e) {
    // on renvoie une réponse avec un statut 500, pour prévenir que l'erreur est interne au serveur
    // on rajoute également le message pour pouvoir tracer et corriger l'erreur par la suite
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

exports.getTaskById = async (req, res) => {
  if (!req.params.id) {
    // on renvoie une réponse avec erreur 400, pour prévenir que l'erreur vient de la requête
    // ici, il manque l'id permettant de récupérer la tâche
    return res.status(400).json({
      success: false,
      message: 'Id missing',
    });
  }

  try {
    
  } catch (e){
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

exports.getTaskByName = async (req, res) => {
  if (!req.params.name) {
    return res.status(400).json({
      success: false,
      message: 'Name missing',
    });
  }
}
``` 