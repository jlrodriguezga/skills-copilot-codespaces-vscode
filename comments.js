// Create web server
// 1. Create a web server
// 2. Load the comments array
// 3. Add a new comment to the comments array
// 4. Save the comments array
// 5. Redirect the user back to the main page
// 6. Display the comments array in the main page

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let comments = fs.readFileSync('./comments.json');
  comments = JSON.parse(comments);
  let html = '';
  comments.forEach((comment) => {
    html += `<p>${comment.name}: ${comment.message}</p>`;
  });
  res.send(`
    <h1>Comments</h1>
    <form action="/" method="post">
      <input type="text" name="name" placeholder="Name" required>
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Add Comment</button>
    </form>
    ${html}
  `);
});

app.post('/', (req, res) => {
  let comments = fs.readFileSync('./comments.json');
  comments = JSON.parse(comments);
  comments.push(req.body);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});