import express from 'express';
import ContactUsQuery from '../MOdels/ContactUsQuery.js'; // Import the model
const router = express.Router();

// POST route to handle ContactUsQuery submissions
router.post('/contactQuery', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, EmailId, ContactNumber, Message } = req.body;

        // Create a new document for the ContactUsQuery collection
        const newQuery = new ContactUsQuery({
            name,
            EmailId,
            ContactNumber,
            Message
        });

        // Save the new query to the database
        await newQuery.save();

        // Respond with a success message
        res.status(201).json({ message: 'Query submitted successfully', query: newQuery });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;
