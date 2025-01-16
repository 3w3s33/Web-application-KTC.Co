const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Function to read order details from file
function readOrderDetails(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    const orderDetails = {};
    lines.forEach(line => {
        const [key, value] = line.split(':').map(item => item.trim());
        orderDetails[key] = value;
    });
    return orderDetails;
}

// Function to store data in SQLite database
function storeInDatabase(orderDetails) {
    const db = new sqlite3.Database('orders.db');

    db.serialize(() => {
        // Create table if not exists
        db.run(`CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            address TEXT,
            contact TEXT,
            items TEXT
        )`);

        // Insert order details
        const stmt = db.prepare(`INSERT INTO orders (name, address, contact, items) VALUES (?, ?, ?, ?)`);
        stmt.run(orderDetails['Name'], orderDetails['Address'], orderDetails['Contact'], orderDetails['Items']);
        stmt.finalize();
    });

    db.close();
}

// Main function to execute the process
function main() {
    const orderDetails = readOrderDetails('order-details.txt');
    storeInDatabase(orderDetails);
    console.log('Order details saved to database.');
}

// Run the main function
main();