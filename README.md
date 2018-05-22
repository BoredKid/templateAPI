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
 - [Pour aller plus loin ...](#plusloin)
    - [APIDoc](#apidoc)
    - [MongoDB](#mongodb)
    - [MySQL](#mysql)

## <a id="pourquoi"></a> 1 - Pourquoi l'API ?
> J'ai toujours réalisé mes projets sans passer par une API, pourquoi devrais-je commencer à le faire ?

Comme je te comprends, j'étais comme toi à l'époque, innocent et insouciant. Mais pourtant, mettre en place une API peut avoir beaucoup d'avantages :
- Si, en parallèle à ton application, un autre projet nécessite de travailler avec les mêmes données, ce sera beaucoup plus simple à mettre en place. Les deux applications pourront utiliser les mêmes routes sans se marcher dessus.
- Elle peut être versionnée facilement. Ce qui permet aux projets utilisant celle-ci de ne pas être vulnérables aux modifications et aux mises à jour consécantes.
- La syntaxe des routes est compréhensible à la lecture. On comprend du premier coup d'oeil les routes suivantes :  
  > GET /api/users  
  DELETE /api/users/bladeous

En bref, l'utilisation d'une API sera un gros plus pour tes futures applications, qu'elles soient Web, Mobile, etc.  

## <a id="installation"></a>2 - Installation

Finie la théorique, passons à la pratique !   
Mais avant celà, on doit être sûrs que tu aies les outils nécessaires.

**NodeJS**  
Clique sur ce magnifique lien qui suit, là juste en dessous, et suis les instructions  
https://nodejs.org/download/  

**IDE**  
Télécharge l'IDE, ou l'éditeur avec lequel tu es le plus habitué.  
Si tu n'as aucune idée, Visual Studio Code est un bon choix : https://code.visualstudio.com/download

## <a id="initialisation"></a>3 - Initialisation

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
## <a id="packages"></a>4 - Les packages
### Dependencies

Au lieu d'essayer de réinventer la roue, rien ne vaut la communauté npm pour réaliser telle ou telle action.  
Sur [le site de npmjs](http://npmjs.com/), tu pourras trouver tout un tas de _package_ (aussi appelé _dependency_) pour ça.

Pour installer des dependencies :

```sh
npm install --save <package>
```

Par exemple pour le package `express` :
```sh
npm install --save express
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
npm install --save-dev <package>
```

Par exemple pour le pacakge `nodemon` :
```sh
npm install --save-dev nodemon
```

Les package utiles pour développer ton api :
- `eslint`  
  Pour la config, c'est [par ici](#eslint)
- `nodemon`   
  surveille les fichiers présents dans le répertoire à partir duquel le _node_ est démarré et, si les fichiers changent, `nodemon` redémarrera automatiquement l'application. _Moins on en fait, mieux on se porte !_
- `apidoc`  
génère de la doc Web à partir des commentaires. [Par ici](#apidoc) pour voir comment ça marche.

## <a id="eslint"></a> 5 - EsLint 
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

# <a id="plusloin"></a> Et pour aller plus loin...

## <a id="apidoc"></a> 1 - ApiDoc
(En Construction)

## <a id="mongodb"></a> 2 - MongoDB
(En Construction)

## <a id="mysql"></a> 2 - MySQL
(En Construction)