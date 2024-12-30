const eventTime = new Date("December 31, 2024 23:59:59").getTime();
const timerDisplay = document.getElementById("timer-display");

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = eventTime - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    if (timeRemaining < 0) {
        clearInterval(countdown);
        timerDisplay.innerHTML = "EXPIRED";
    } else {
        timerDisplay.innerHTML =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}, 1000);

const motivationalQuotes = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The only way to do great work is to love what you do.",author: "Steve Jobs"},
    { text: "Life is what happens when you're busy making other plans.",author: "John Lennon"},
    { text: "Get busy living or get busy dying.",author: "Stephen King"},
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",author: "Brian Tracy"},
    { text: "It always seems impossible until it's done.",author: "Nelson Mandela"},
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",author: "Winston Churchill"},
    { text: "Happiness is not something ready-made. It comes from your own actions.",author: "Dalai Lama"},
    { text: "Your time is limited, so don't waste it living someone else's life.",author: "Steve Jobs"},
    { text: "If you want to achieve greatness stop asking for permission.",author: "Anonymous"},
    { text: "Don’t let yesterday take up too much of today.",author: "Will Rogers"},
    { text: "The best way to predict the future is to create it.",author: "Peter Drucker"},
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

document.getElementById("new-quote-btn").addEventListener("click", () => {[]
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const selectedQuote = motivationalQuotes[randomIndex];

    document.getElementById("quote-text").innerText = `"${selectedQuote.text}"`;
    document.getElementById("quote-author").innerText = `- ${selectedQuote.author}`;
});
