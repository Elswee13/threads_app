import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema({
    text:{type: String, required: true},
    author:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
    }
});

const Thread = mongoose.models.Thread || mongoose.model('Thread',userSchema);

export default Thread;