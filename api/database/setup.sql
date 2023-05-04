DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    entry_date DATE NOT NULL,
    entry_time TIME NOT NULL,
    catagory VARCHAR NOT NULL,
    entry_title VARCHAR(100) NOT NULL,
    diary_entry VARCHAR(500) NOT NULL,
    PRIMARY KEY (entry_id)
);
