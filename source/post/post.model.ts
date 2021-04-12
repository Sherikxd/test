import mongoose,{Schema,Document} from 'mongoose'
import {post} from './post.interface'

const PostShema:Schema = new Schema({
    likes:{
        type: Array,
        required: false,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        id:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true
        },
        required:true
    },
    createdAt:{
        type: String,
        defult: Date.now()
    },
})

export default mongoose.model<post>('Post',PostShema)