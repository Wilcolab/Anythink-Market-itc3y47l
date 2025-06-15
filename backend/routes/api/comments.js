const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
);

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid comment ID" });
    }
    try {
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully", deletedComment: comment });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/**
 * Comments API Routes
 *
 * This file defines API endpoints for managing comments.
 *
 * Endpoints:
 *
 * GET /api/comments/
 *   - Retrieves all comments, sorted by creation date (newest first).
 *   - Response:
 *       200 OK: Array of comment objects.
 *       500 Internal Server Error: On failure.
 *
 *   Example Response:
 *     [
 *       {
 *         "_id": "60c72b2f9b1e8a001c8d4567",
 *         "body": "Great item!",
 *         "seller": "60c72b2f9b1e8a001c8d1234",
 *         "item": "60c72b2f9b1e8a001c8d5678",
 *         "createdAt": "2025-06-15T12:34:56.789Z",
 *         "updatedAt": "2025-06-15T12:34:56.789Z",
 *         "__v": 0
 *       }
 *     ]
 *
 * DELETE /api/comments/:id
 *   - Deletes a comment by its MongoDB ObjectId.
 *   - Parameters:
 *       id (string, required): The ObjectId of the comment to delete.
 *   - Response:
 *       200 OK: Comment deleted successfully, returns deleted comment.
 *       400 Bad Request: Invalid comment ID.
 *       404 Not Found: Comment not found.
 *       500 Internal Server Error: On failure.
 *
 *   Example Response:
 *     {
 *       "message": "Comment deleted successfully",
 *       "deletedComment": {
 *         "_id": "60c72b2f9b1e8a001c8d4567",
 *         "body": "Great item!",
 *         "seller": "60c72b2f9b1e8a001c8d1234",
 *         "item": "60c72b2f9b1e8a001c8d5678",
 *         "createdAt": "2025-06-15T12:34:56.789Z",
 *         "updatedAt": "2025-06-15T12:34:56.789Z",
 *         "__v": 0
 *       }
 *     }
 *
 * Notes:
 * - Uses the Comment model from backend/models/Comment.js.
 * - Error messages are returned in JSON format.
 * - No authentication is required for these endpoints.
 * - Ensure that the MongoDB ObjectId is valid when deleting a comment.
 * - The comments are sorted by creation date in descending order.
 */