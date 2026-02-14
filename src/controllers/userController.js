const express = require("express");
const router = express.Router();

// Login route

// Resgister route

// Create route

// Read route
router.get("/:userID", (request, response) => {
    console.log ("Someone is trying to view data about user with the ID of " + request.params.userID);

    response.json({
        message: "Not yet implemented!",
        params: request.params
    })
})

// Update route

// Delete route


// Named exports within an object
// module.exports = {
//     router
// }

// Unnamed or "default" exports
module.exports = router;