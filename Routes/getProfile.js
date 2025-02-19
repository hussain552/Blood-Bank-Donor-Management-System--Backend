import express from 'express';
import BloodDonor from '../models/DonorsList.js'; // Ensure correct case

const router = express.Router();

// GET route to fetch profile details for a specific user
router.get('/profile', async (req, res) => {
    const { emailId } = req.query; // Get email from query parameters

    if (!emailId) {
        return res.status(400).json({ success: false, message: 'Email ID is required' });
    }

    try {
        const donorProfile = await BloodDonor.findOne({ emailId });
        console.log("this is data: ",donorProfile)

        if (!donorProfile) {
            return res.status(404).json({ success: false, message: 'No profile found for this email' });
        }

        res.status(200).json({ success: true, data: donorProfile });
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

export default router;
