const fs = require('fs');
const handleErrors = (err) => {
    console.log('Error:', err.message);
}

fs.readFile("./no_file.txt", (err, data) => {
    if (err) handleErrors(err);
    const content = data.toString();
});

