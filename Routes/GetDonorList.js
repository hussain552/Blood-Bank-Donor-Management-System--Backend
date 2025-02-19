import express from 'express';
import BloodDonor from '../MOdels/DonorsList.js';

const router = express.Router();

// GET all donors
router.get('/donors', async (req, res) => {
    try {
        const donors = await BloodDonor.find(); // Fetch all donors
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;
