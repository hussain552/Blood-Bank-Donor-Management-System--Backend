import express from 'express';
import ContactUsInfo from '../MOdels/ContactUs.js';

const router = express.Router();

// POST route to handle ContactUs form submissions
router.post('/ContactUs', async (req, res) => {
    try {
        // Extract data from the request body
        const { Address, EmailId, ContactNo } = req.body;

        // Create a new document for the ContactUsInfo collection
        const newContact = new ContactUsInfo({
            Address,
            EmailId,
            ContactNo
        });

        // Save the new contact to the database
        await newContact.save();

        // Respond with a success message
        res.status(201).json({ message: 'Contact information saved successfully', contact: newContact });
    } catch (error) {
        // Handle errors    
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;
