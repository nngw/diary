const db = require ('../database/connect')

class Entry{
    constructor ({entry_id, entry_date, entry_time, category,entry_title, diary_entry }) {
        this.id = entry_id
        this.date = entry_date
        this.time = entry_time
        this.category = category
        this.title = entry_title
        this.entry = diary_entry
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM entries ORDER BY entry_date, entry_time DESC;");
        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        }
        return response.rows.map(g => new Entry(g));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM entries WHERE entry_id = $1;",[id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Entry(response.rows[0]);
    }


    static async getByYear(year){ 
        const response = await db.query("SELECT * FROM entries WHERE EXTRACT(YEAR FROM entry_date) = $1 ORDER BY entry_date, entry_time DESC;", [year]);
        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        }
        return response.rows.map(g => new Entry(g));
    }

    static async getByCategory(category){ 
        const response = await db.query("SELECT * FROM entries WHERE category = $1 ORDER BY entry_date, entry_time DESC;", [category]);
        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        }
        return response.rows.map(g => new Entry(g));
    }

    static async create (data){
        const category = data.category
        const title = data.title
        const entry = data.entry

        const response = await db.query("INSERT INTO entries (entry_date, entry_time, category, entry_title, diary_entry) VALUES (CURRENT_DATE, CURRENT_TIME, $1, $2, $3);", [category, title, entry])
        
        return "entry created"
    }    

}

module.exports = Entry
