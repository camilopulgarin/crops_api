import {Request, Response} from 'express'
import user, {IUser} from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'

function createToken(user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn: 86400
    });

}
export const singUp = async (req: Request , res: Response ): Promise<Response> =>{
    console.log("body: ", req.body)
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'})
    }
    const User = await user.findOne({email: req.body.email})
    if(User){
        return res.status(400).json({msg: 'The user already existe'})
    }
    const newUser = new user(req.body);
    await newUser.save();

    return res.status(201).json({msg: 'Usuario Registrado'})
}

export const singIn = async (req: Request , res: Response ) =>{
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'})
    }
    const nowUser = await user.findOne({email: req.body.email})
    
    if (!nowUser) {
        return res.status(400).json({msg: 'The user does not exists'});
    }
    const isMatch = await nowUser.comparePassword(req.body.password);
    if(isMatch){
        return res.status(200).json({token: createToken(nowUser)});
    }
    return res.status(400).json({
        msg: 'The email or password are incorrect'
    });
    res.send('singin')
}