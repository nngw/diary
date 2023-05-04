const Entry = require('../models/Entry')

async function index (req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getOneById(id);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function showYear (req, res) {
    try {
        const year = parseInt(req.params.year);
        const entry = await Entry.getByYear(year);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function showByCatagory (req, res) {
    try {
        const catagory = req.params.catagory;
        console.log(catagory)
        const entry = await Entry.getByCatagory(catagory);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        console.log(req.params.body)
        const entry = await Entry.create(req.body);
        res.json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, create, show, showYear, showByCatagory
}
