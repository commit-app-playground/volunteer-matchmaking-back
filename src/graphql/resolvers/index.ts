import { CreateUserData, MutationResolvers, QueryResolvers, Resolvers } from '../generated';

import config from '../../config'
import mongoose from 'mongoose'
import { User } from '../../db/connector'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const createUser: MutationResolvers['createUser'] = async (parent, args) => {
    const { email, password, type }: CreateUserData = args.userData;
    try {
        const user = await User.findOne({
            email: email
        });
        if (user) {
            throw new Error('User already Exists');
        } else {
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                email: email,
                password: password,
                type: type
            });
            const savedUser = await newUser.save();
            const token = jwt.sign({ userId: savedUser.id }, config.jwtSecret!, {
                expiresIn: '1h'
            });
            return {
                userId: savedUser.id,
                token,
                expiration: 1
            };
        }
    } catch (error) {
        throw error;
    }
};

const updateUser: MutationResolvers['updateUser'] = async ( parent, { userId, userData }, context ) => {
    if (!context.isAuth) {
        throw new Error('Non Authenticated');
    }
    const { email, password, type } = userData!;
    let updateData = {}
    if (email) {
        updateData = { email }
    }
    if (password) {
        updateData = { ...updateData, password }
    }
    if (type) {
        updateData = { ...updateData, type }
    }
    
    try {
        const user = await User.findByIdAndUpdate(userId, updateData, {
            new: true
        });
        return user;
    } catch (error) {
        throw error;
    }
};

const loginUser: QueryResolvers['login'] = async ( parent,{ email, password } ) => {
    try {
        const user: any = await User.findOne({ email, password });
        if (!user) {
            throw new Error('User does not Exists');
        }
        const token = jwt.sign({ userId: user.id }, config.jwtSecret!, {
            expiresIn: '1h'
        });
        return {
            userId: user.id,
            token,
            expiration: 1
        };
    } catch (err) {
        throw err;
    }
}

const findUser: QueryResolvers['user'] = async (parent,{ userId }) => {
    try {
        const user = await User.findById(userId);
        return user
    } catch (err) {
        throw err;
    }
}

const listUsers: QueryResolvers['users'] = async (parent, args, context) => {
    try {
        const users = await User.find();
        return users.map((user) => {
            return user;
        });
    } catch (err) {
        throw err;
    }
}

const resolvers: Resolvers = {
  Mutation: {
      createUser: createUser,
      updateUser: updateUser
  },
  Query: {
      login: loginUser,
      user: findUser,
      users: listUsers
  }
};

export default resolvers;