const Entry = require('../models/Entry')

async function create (req, res) {
    try {
        const entry = await Entry.create(req.body);
        res.json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    create
}
