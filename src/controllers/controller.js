const mongoose = require('mongoose');

let database;
let userSchema;

const connectDatabase = async () => {
    database = database || mongoose.connect('mongodb+srv://usuario:senha@cluster0.go3jm.mongodb.net/development?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return database;
}


const createUserSchema = async (database) => {
    if (userSchema) {
        return;
    }

    userSchema = new database.Schema({
        name: String
    }, {
        timestamps: true
    });

    database.model('User', userSchema);
}

const getUSer = async () => {
    const database = await connectDatabase();

    await createUserSchema(database);

    const {
        User
    } = database.models;

    const users = User.find();

    return users;
};

const createUSer = async ({
    name
}) => {
    const database = await connectDatabase();

    await createUserSchema(database);

    const {
        User
    } = database.models;

    const user = new User({
        name
    });

    user.save();
};

const updateUser = async ({
    id
}, {
    name
}) => {
    const database = await connectDatabase();

    await createUserSchema(database);

    const {
        User
    } = database.models;

    return User.update({
        _id: id
    }, {
        name
    });
};

const deleteUser = async ({
    id
}) => {
    const database = await connectDatabase();

    await createUserSchema(database);

    const {
        User
    } = database.models;

    return User.deleteOne({
        _id: id
    });
};

module.exports = {
    getUSer,
    createUSer,
    updateUser,
    deleteUser
}