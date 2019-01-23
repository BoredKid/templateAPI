const express = require('express');

// on va chercher le controller qui contient toutes les fonctions utiles
// pour les routes hello
const HelloController = require('../../controllers/hello.controller.js');

const router = express.Router();

// le commentaire ci-dessous sera exploité par APIDoc lors du build de la documentation
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
 *    "message": "Hello World!"
 *  }
 *
 */
router.get('/', HelloController.helloWorld);

// le commentaire ci-dessous sera exploité par APIDoc lors du build de la documentation
/**
 * @api {get} /hello/:name Say hello to someone
 * @apiName GetHelloWithName
 * @apiGroup BonjourAvecNom
 * @apiDescription Cette route dit bonjour à une personne bien précise
 *
 * @apiParam {String} name Prénom ou Pseudo de la personne à qui il faut dire bonjour
 *
 * @apiParamExample String Request-Example:
 * name: Jackie
 *
 * @apiSuccess {String} message "Hello {your name here}"
 * @apiSuccess {String} success true
 *
 *
 * @apiSuccessExample Success-Response:
 *  {
 *    "message": "Hello Jackie!"
 *  }
 *
 */
router.get('/:name', HelloController.helloName);

// le commentaire ci-dessous sera exploité par APIDoc lors du build de la documentation
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
 *    "message": "Hello Jackie!"
 *  }
 *
 */
router.post('/', HelloController.helloName);

module.exports = router;
