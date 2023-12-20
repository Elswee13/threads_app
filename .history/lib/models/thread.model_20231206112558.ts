import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema({

});

const Thread = mongoose.models.Thread || mongoose.model('Thread',userSchema);

export default Thread;