import { 
    MutationResolvers, QueryResolvers, Resolvers,
    CreateUserInput,
    CreateVolunteerProfileInput,
    CreateOrganizationInput,
    CreateProjectInput,
} from './generated';

import config from '../config'
import mongoose from 'mongoose'
import { Organization, User, VolunteerProfile, Project } from '../db/connector'
import jwt from 'jsonwebtoken'

const createUser: MutationResolvers['createUser'] = async (parent, args) => {
    const { email, password, type }: CreateUserInput = args.userInput;
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

const updateUser: MutationResolvers['updateUser'] = async ( parent, { userId, userInput }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    let updateData = {};
    updateData = userInput!
    
    try {
        const user = await User.findByIdAndUpdate(userId, updateData, {
            new: true
        });
        return user;
    } catch (error) {
        throw error;
    }
};

const deleteUser: MutationResolvers['deleteUser'] = async ( parent, { userId }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    try {
        const user = await User.findByIdAndDelete(userId);
        if (user) {
            return true;
        }
        return false;
        
    } catch (error) {
        throw error;
    }
};

const loginUser: QueryResolvers['login'] = async ( parent,{ email, password } ) => {
    try {
        const user: any = await User.findOne({ email, password });
        if (!user) {
            throw new Error('Please verify your email and password, and try again.');
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

const findAllUsers: QueryResolvers['users'] = async (parent, args, context) => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        throw err;
    }
}

const createVolunteerProfile: MutationResolvers['createVolunteerProfile'] = async (parent, { profileInput }) => {
    const { 
        userId,
        name,
        description,
        remoteOptions,
        availableDays,
        interestedCauses,
        skills,
        availableHoursPerWeek
    }: CreateVolunteerProfileInput = profileInput;
    
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User doesn\'t Exists');
        } else {
            const newProfile = new VolunteerProfile({
                _id: new mongoose.Types.ObjectId(),
                name,
                description,
                remoteOptions,
                availableDays,
                interestedCauses,
                skills,
                availableHoursPerWeek
            });
            const savedProfile = await newProfile.save();
            return savedProfile;
        }
    } catch (error) {
        throw error;
    }
};

const updateVolunteerProfile: MutationResolvers['updateVolunteerProfile'] = async ( parent, { profileId, profileInput }, context ) => {
    let updateData = {}
    updateData = profileInput
    try {
        const volunteerProfile = await VolunteerProfile.findByIdAndUpdate(profileId, updateData, {
            new: true
        });
        return volunteerProfile;
    } catch (error) {
        throw error;
    }
};

const deleteVolunteerProfile: MutationResolvers['deleteVolunteerProfile'] = async ( parent, { profileId }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    try {
        const profile = await VolunteerProfile.findByIdAndDelete(profileId);
        if (profile) {
            return true;
        }
        return false;
        
    } catch (error) {
        throw error;
    }
};

const createOrganization: MutationResolvers['createOrganization'] = async (parent, args) => {
    const { name, description }: CreateOrganizationInput = args.orgInput;
    try {
        const org = await Organization.findOne({
            name: name
        });
        if (org) {
            throw new Error('Organization already Exists');
        } else {
            const newOrganization = new Organization({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                description: description
            });
            const savedOrganization = await newOrganization.save();
            return savedOrganization;
        }
    } catch (error) {
        throw error;
    }
};

const updateOrganization: MutationResolvers['updateOrganization'] = async ( parent, { orgId, orgInput }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    let updateData = {};
    updateData = orgInput!
    
    try {
        const org = await Organization.findByIdAndUpdate(orgId, updateData, {
            new: true
        });
        return org;
    } catch (error) {
        throw error;
    }
};

const deleteOrganization: MutationResolvers['deleteOrganization'] = async ( parent, { orgId }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    try {
        const org = await Organization.findByIdAndDelete(orgId);
        if (org) {
            return true;
        }
        return false;
        
    } catch (error) {
        throw error;
    }
};

const createProject: MutationResolvers['createProject'] = async (parent, args) => {
    const { 
        organizationId,
        name,
        description,
        remoteOptions,
        causes,
        startDate,
        endDate,
        isRecurring,
        recurringDays,
        requiredSkills,
     }: CreateProjectInput = args.projectInput;
    try {
        const newProject = new Project({
            _id: new mongoose.Types.ObjectId(),
            organization: organizationId,
            name,
            description,
            remoteOptions,
            causes,
            startDate,
            endDate,
            isRecurring,
            recurringDays,
            requiredSkills,
        });
        const savedProject = await newProject.save();
        return savedProject.populate('organization');
    } catch (error) {
        throw error;
    }
};

const updateProject: MutationResolvers['updateProject'] = async ( parent, { projectId, projectInput }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    let updateData = {};
    updateData = projectInput!
    
    try {
        const project = await Project.findByIdAndUpdate(projectId, updateData, {
            new: true
        });
        return project.populate('organization');
    } catch (error) {
        throw error;
    }
};

const deleteProject: MutationResolvers['deleteProject'] = async ( parent, { projectId }, context ) => {
    // if (!context.isAuth) {
    //     throw new Error('Non Authenticated');
    // }
    try {
        const project = await Project.findByIdAndDelete(projectId);
        if (project) {
            return true;
        }
        return false;
        
    } catch (error) {
        throw error;
    }
};

const findVolunteerProfile: QueryResolvers['volunteerProfile'] = async (parent,{ profileId }) => {
    try {
        const volunteerProfile = await VolunteerProfile.findById(profileId);
        return volunteerProfile
    } catch (err) {
        throw err;
    }
}

const findAllVolunteerProfiles: QueryResolvers['volunteerProfiles'] = async (parent, args, context) => {
    try {
        const volunteerProfiles = await VolunteerProfile.find();
        return volunteerProfiles;
    } catch (err) {
        throw err;
    }
}

const findOrganization: QueryResolvers['organization'] = async (parent,{ organizationId }) => {
    try {
        const org = await Organization.findById(organizationId);
        return org
    } catch (err) {
        throw err;
    }
}

const findAllOrganizations: QueryResolvers['organizations'] = async (parent, args, context) => {
    try {
        const orgs = await Organization.find();
        return orgs;
    } catch (err) {
        throw err;
    }
}

const findProject: QueryResolvers['project'] = async (parent,{ projectId }) => {
    try {
        const project = await Project.findById(projectId);
        return project.populate('organization');
    } catch (err) {
        throw err;
    }
}

const findAllProjects: QueryResolvers['projects'] = async (parent, args, context) => {
    try {
        const projects = await Project.find();
        return projects.map((project) => {
            const newproject = project.populate('organization');
            return newproject
        });
    } catch (err) {
        throw err;
    }
}

const projectMatchForVolunteer: QueryResolvers['projectMatchForVolunteer'] = async (parent, { profileId }, context) => {
    try {
        const profile = await VolunteerProfile.findById(profileId);
        const { skills, interestedCauses ,availableDays, remoteOptions, availableHoursPerWeek } = profile;
        let query = Project.find()
        if (availableDays) {
            query.where({"recurringDays": {
                "$elemMatch" : { "$in": availableDays }
            }})
        }
        if (interestedCauses) {
            query.where({"causes": {
                "$elemMatch" : { "$in": interestedCauses }
            }})
        }
        if (skills) {
            query.where({
                "requiredSkills": { "$not":{ "$elemMatch": { "$nin": skills }} }
            })
        }
    
        const projects = await query.exec();
        return projects.map((project) => {
            return project.populate('organization');
        });
    } catch (err) {
        throw err;
    }
}

const resolvers: Resolvers = {
    Mutation: {
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser, 
        createVolunteerProfile: createVolunteerProfile,
        updateVolunteerProfile: updateVolunteerProfile,
        deleteVolunteerProfile: deleteVolunteerProfile,
        createOrganization: createOrganization,
        updateOrganization: updateOrganization,
        deleteOrganization: deleteOrganization,
        createProject: createProject,
        updateProject: updateProject,
        deleteProject: deleteProject
    },
    Query: {
        login: loginUser,
        user: findUser,
        users: findAllUsers,
        volunteerProfile: findVolunteerProfile,
        volunteerProfiles: findAllVolunteerProfiles,
        organization: findOrganization,
        organizations: findAllOrganizations,
        project: findProject,
        projects: findAllProjects,
        projectMatchForVolunteer: projectMatchForVolunteer
    }
};

export default resolvers;