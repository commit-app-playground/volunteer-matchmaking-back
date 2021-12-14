

import config from '../config'
import mongoose from 'mongoose';
import user from '../models/user'

/**
 * Mongoose Connection
**/

mongoose.connect(config.db!, {});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const User = mongoose.model('User', user);

export { User };