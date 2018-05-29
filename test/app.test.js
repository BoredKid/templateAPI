const chai = require('chai');
const { expect } = require('chai');

// pour effectuer les requêtes
chai.use(require('chai-http'));

const app = require('../app');

describe('API', () => {
    // this.timeout(5000); // How long to wait for a response (ms)

    before(() => {

    });

    after(() => {

    });

    // GET - hello
    it('should return hello', () => chai.request(app)
        .get('/api/hello')
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body.result).to.equal('Hello World!');
        }));

    // POST - hello
    it('should return 400:"Name missing" if no name', () => chai.request(app)
        .post('/api/hello')
        .then((res) => {
            expect(res).to.have.status(400); // on vérifie le status 200
            expect(res).to.be.json; // on vérifie qu'on a bien un JSON
            expect(res.body.message).to.equal('Name missing'); // on vérifie que le message est bien 'Name missing'
        }));
});