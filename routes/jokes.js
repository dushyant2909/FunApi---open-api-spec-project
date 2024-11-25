import express from 'express'
const jokesRouter = express.Router()

// Example jokes data
const jokes = [
    { id: 1, category: 'general', joke: "Why don't skeletons fight? They don't have the guts." },
    { id: 2, category: 'general', joke: 'What do you call a bear with no teeth? A gummy bear!' },
    { id: 3, category: 'general', joke: "Why was the computer cold? It left its Windows open!" },
    { id: 4, category: 'general', joke: "Why can't your nose be 12 inches long? Because then it would be a foot!" },
    { id: 5, category: 'general', joke: 'What do you call cheese that isn’t yours? Nacho cheese!' },
    { id: 6, category: 'general', joke: 'Why did the bicycle fall over? Because it was two-tired!' },
    { id: 7, category: 'general', joke: "Why don't eggs tell jokes? They might crack up!" },
    { id: 8, category: 'general', joke: 'What did one wall say to the other wall? I’ll meet you at the corner!' },
    { id: 9, category: 'general', joke: "Why don't fish do well in school? Because they’re always below sea level!" },
    { id: 10, category: 'general', joke: "Why was the math book sad? It had too many problems." },
];

// Get a random joke
jokesRouter.get('/', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
});

export default jokesRouter