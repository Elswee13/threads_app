import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
    id:{type: String, required: true},
    username:{type:String, required: true, unique: true},
    name:{type: String, required: true},
    image: String,
    bio: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
    }
    threads: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread'
        }
    ],
    onboarded:{
        type:Boolean,
        default: false,
    },
    communities:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
        }
    ]
});

const User = mongoose.models.User || mongoose.model('User',userSchema);

export default User;