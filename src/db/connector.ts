

import config from '../config'
import mongoose from 'mongoose';
import user from '../models/user'
import volunteerProfile from '../models/volunteerProfile'
import project from '../models/project'
import organization from '../models/organization'

/**
 * Mongoose Connection
**/

mongoose.connect(config.db!, {});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const User = mongoose.model('User', user);
const VolunteerProfile = mongoose.model('VolunteerProfile', volunteerProfile)
const Project = mongoose.model('Project', project)
const Organization = mongoose.model('Organization', organization)

export { User, VolunteerProfile, Project, Organization };