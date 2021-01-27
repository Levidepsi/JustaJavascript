const { json } = require('express')
const { create } = require('../models/bootcamp')
const Bootcamp = require('../models/bootcamp')


exports.getBootcamps = (req, res, next) =>{
    res.status(200).json({success: true, msg:` Get bootcamp }` })
}


exports.getBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg:` Show bootcamp ${req.params.id}` })
}

exports.createBootcamp = async (req, res, next) =>{
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
        successs:true,
        data: bootcamp

    })
}

exports.updateBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg:` Update bootcamp ${req.params.id}` })
}

exports.deleteBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg:` Delete bootcamp ${req.params.id}` })
}