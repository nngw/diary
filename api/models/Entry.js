const db = require ('../database/connect')

class Entry{
    constructor ({entry_id, entry_date, entry_time, catagory,entry_title, diary_entry }) {
        this.id = entry_id
        this.date = entry_date
        this.time = entry_time
        this.catagory = catagory
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

    static async create (data){
        const catagory = data.catagory
        const title = data.title
        const entry = data.entry
        console.log(data)

        const response = await db.query("INSERT INTO entries (entry_date, entry_time, catagory, entry_title, diary_entry) VALUES (CURRENT_DATE, CURRENT_TIME, $1, $2, $3);", [catagory, title, entry])
        
        return "entry created"
    }    

}

module.exports = Entry
