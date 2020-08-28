const mongoose = require('mongoose');
const controller = require('./../../../controllers/controller');
const mockUserList = require('./../mock/userList.json')

jest.mock('mongoose')
let database;
const SRV = 'mongodb+srv://usuario:usuario@arbyte.obhjq.mongodb.net/development?retryWrites=true&w=majority';

describe('Suite de teste unitario do controller', () => {
beforeAll(() =>{
    database = class Mongoose {};

    database.Schema = class {};

    database.model = jest.fn().MockResolvedValue(null);

    database.models = {};
    database.models.User = class {
        constructor(params) {
            this.name = params.name;
        }

        save() {
            return {
                user: this.name,
                status: 200,
                message: 'OK'
            };
        }
    };

    database.models.User.find = jest.fn().MockResolvedValue(mockUserList);

    mongoose.connect.MockResolvedValue(database);
});
describe('getUser()', () => {
   it('Deve retornar um dado do banco de dados', async () => {
       const result = await controller.getUSer();

       expect(mongoose.connect).toHaveBeenCalledTimes(1);
       expect(mongoose.connect).toHaveBeenCalledWith(SRV, {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
       
       expect(database.model).toHaveBeenCalledTimes(1);
       expect(database.model).toHaveBeenCalledTimes('User', new database.Schema());

       expect(database.model.User.find).toHaveBeenCalledTimes(1);
       expect(database.model.User.find).toHaveBeenCalledWith();

       expect(result).toEqual({
           user: 'fakeData',
           status: 200,
           message: 'OK'
       });
       
       
   });
});
});

