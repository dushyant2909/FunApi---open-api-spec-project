import { Router } from 'express';

const quotesRouter = Router();

// Example quotes data
const quotes = [
    { id: 1, author: 'Albert Einstein', quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.' },
    { id: 2, author: 'Dr. Seuss', quote: 'Don’t cry because it’s over, smile because it happened.' },
    { id: 3, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.' },
    { id: 4, author: 'Maya Angelou', quote: 'You will face many defeats in life, but never let yourself be defeated.' },
    { id: 5, author: 'Mark Twain', quote: 'The secret of getting ahead is getting started.' },
];

// Route: Get a random quote
quotesRouter.get('/', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});


export default quotesRouter;
