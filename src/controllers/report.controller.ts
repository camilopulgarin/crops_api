import {Request, Response} from 'express'
import report, {IReport} from '../models/reports'
import jwt from 'jsonwebtoken'
import config from '../config/config'

export const getReports = async (req: Request , res: Response ): Promise<Response> =>{
    console.log("body: ", req.body)
    /*if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'})
    }*/
    const Report = await report.find()
    /*if(Report){
        return res.status(400).json({msg: 'The report already existe'})
    }*/
    //const newReport = new report(req.body);
    //await newReport.save();

    return res.status(201).json({Report})
}

export const Inreports = async (req: Request , res: Response ): Promise<Response> =>{
    console.log("body: ", req.body)
    /*if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'})
    }*/
    /*const Report = await report.findOne()
    if(Report){
        return res.status(400).json({msg: 'The report already existe'})
    }*/
    const newReport = new report(req.body);
    await newReport.save();
    
    return res.status(201).json({msg:req.body})
}
