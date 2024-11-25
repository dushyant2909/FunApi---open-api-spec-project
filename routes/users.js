import { Router } from 'express';
import axios from 'axios'; // To fetch data from an external API

const userRouter = Router();

// Route: Get a random user profile
userRouter.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/'); // Fetch random user from external API
        const user = response.data.results[0];
        res.json({
            name: `${user.name.first} ${user.name.last}`,
            gender: user.gender,
            email: user.email,
            location: `${user.location.city}, ${user.location.country}`,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch random user', error: error.message });
    }
});

export default userRouter;
