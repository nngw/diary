const Entry = require('../models/Entry')

async function index (req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        const entry = await Entry.create(req.body);
        res.json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, create
}
