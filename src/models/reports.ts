import {model, Schema, Document} from "mongoose";
import bcrypt from 'bcrypt'

export interface IReport extends Document{
    device: string;
    temperature: string;
    humidity: string;
    ph: string;
}

const reportSchema = new Schema ({
    device: {
        type: String,
        unique: false,
        requiered: true,
        lowercase: true,
        trim: true
    },
    temperature: {
        type: String,
        unique: false,
        requiered: true,
        lowercase: true,
        trim: true
    },
    humidity: {
        type: String,
        required: true
    },
    ph: {
        type: String,
        required: true
    }
});

reportSchema.pre<IReport>('save', async function (next){
    const report = this;
    //report.Date = new Date()
    /*const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash;*/
    next();
});

reportSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<IReport>('report', reportSchema)