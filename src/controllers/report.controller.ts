import {Request, Response} from 'express'
import report, {IReport} from '../models/reports'
import jwt from 'jsonwebtoken'
import config from '../config/config'

export const getReports = async (req: Request , res: Response ): Promise<Response> =>{
    console.log("body: ", req.body)
    /*if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'})
    }*/
    const filters = await report.find({
        date: {
           $gte: '2022-11-10T21:22:55.915Z',
           $lt: new Date()
        }
     });
    console.log("FILTROS: ", filters )
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
    req.body.date = await new Date();
    console.log("req.body.date: ", req.body.date)
    const newReport = new report(req.body);
    await newReport.save();
    
    return res.status(201).json({msg:req.body})
}

export const FilterReports = async (req: Request , res: Response ): Promise<Response> =>{
    console.log("body: ", req.query.InDate)
    /*if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'})
    }*/
    const DateIn = new Date(req.query.InDate as string)
    const DateEnd = new Date(req.query.EndDate as string)

    console.log("DateEnd: ", DateEnd)
    const Report = await report.find({
        date: {
           $gte: DateIn,
           $lt: DateEnd
        }
     });
    console.log("FILTROS: ", Report )
    //const Report = await report.find()
    /*if(Report){
        return res.status(400).json({msg: 'The report already existe'})
    }*/
    //const newReport = new report(req.body);
    //await newReport.save();

    return res.status(201).json({Report})
}