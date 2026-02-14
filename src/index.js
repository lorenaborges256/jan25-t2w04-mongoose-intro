// import the app
const {app} = require("./server.js")

// Get the PORT environment variable
const PORT = process.env.PORT || 3000;

// run the server
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})

// Connect to the database


