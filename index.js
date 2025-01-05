// pure js, I couldn't get any api to deal with this stuff

// ? variables & list objects

const memes = [
    './library.jpg',
    './mario-run.gif',
    './studio.png',
    './test-hero.png',
    './twoBikers.jpg'
];

const jokes = [
    'This statement!',
    'Eight bytes walk into a bar. The bartender asks, "Can I get you anything?" "Yeah," reply the bytes. "Make us a double".',
    'There are only 10 kinds of people in this world: those who know binary and those who do not',
    'All programmers are playwrights, and all computers are lousy actors.',
    'Have you heard about the new Cray super computer? It is so fast, it executes an infinite loop in 6 seconds.',
    'The generation of random numbers is too important to be left to chance.',
    'Debugging: Removing the needles from the haystack.',
    '"Debugging" is like being the detective in a crime drama where you are also a murderer.',
    'There are two ways to write error-free programs, only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'
];

const quotes = [
    {
        quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
        author: 'Harold Abelson'
    },
    {
        quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the Universe is winning.',
        author: 'Rick Cook'
    },
    {
        quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
        author: 'John Woods'
    },
    {
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
    },
    {
        quote: 'Truth can only be found in one place: the code.',
        author: 'Robert C. Martin'
    },
    {
        quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.',
        author: 'Steve Jobs'
    },
    {
        quote: 'A language that doesn\'t affect the way you think about programming not worth knowing.',
        author: 'Alan J. Perlis'
    },
    {
        quote: 'The most disastrous thing that you can ever learn is your first programming language.',
        author: 'Alan Kay'
    },
    {
        quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.',
        author: 'Joseph Weizenbaum'
    },
    {
        quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'are as clever as you can be when you write it, how will you ever debug it?',
        author: 'Brian Kernighan'
    },
    {
        quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.',
        author: 'Ram Ray'
    }
];

const riddles = [
    {
        question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
        answer: 'An Echo'
    },
    {
        question: 'You measure my life in hours and I serve you by expiring. I\'m quick when I\'m thin and slow when I\'m fat. The wind is my enemy.',
        answer: 'A Candle'
    },
    {
        question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am i?',
        answer: 'A Map'
    },
    {
        question: 'What is seen in the middle of March and April that can\'t be seen at he beginning or end of either month?',
        answer: 'The letter "R"'
    },
    {
        question: 'You see a boat filled with people. It has not sunk, but when you look again you don\'t see a single person the boat. Why?',
        answer: 'All people were married'
    },
    {
        question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?',
        answer: 'Heroine'
    }
];

const data = {
    memes,
    jokes,
    quotes,
    riddles,
};


// ? Document Objects linking

let memes_flag = false;
let jokes_flag = false;
let quotes_flag = false;
let riddles_flag = false;
let riddle_ans_flag = false;

let riddle_answer;

const memesDiv = document.getElementById('memesDiv');
const jokesDiv = document.getElementById('jokesDive');
const quotesDiv = document.getElementById('quotesDiv');
const riddlesDiv = document.getElementById('riddlesDiv');


// ? user defined methods

function getRandomData(type) {
    return data[type][Math.floor(Math.random() * data[type].length)];
}

function clearOutput() {
    try {
        if (memes_flag) {
            memesDiv.querySelector('img').remove();
            memes_flag = false;
        }
        if (jokes_flag) {
            jokesDiv.querySelector('p').remove();
            jokes_flag = false;
        }
        if (quotes_flag) {
            quotesDiv.querySelector('p').remove();
            quotes_flag = false;
        }
        if (riddles_flag) {
            riddlesDiv.querySelector('p').remove();
            riddles_flag = false;
        }
        if (riddle_ans_flag) {
            riddlesDiv.querySelector('p').remove();
            riddle_ans_flag = false;
        }
    } catch (error) {
        console.log('already cleared');
    }
}
function showMeme() {
    clearOutput();
    const newImg = document.createElement('img');
    newImg.src = getRandomData('memes');
    newImg.alt = '_Memes.png';
    memesDiv.append(newImg);
    memes_flag = true;

}

function showJoke() {
    clearOutput();
    const newPara = document.createElement('p');
    newPara.textContent = getRandomData('jokes');
    jokesDiv.append(newPara);
    jokes_flag = true;
}

function showQuote() {
    clearOutput();
    const newPara = document.createElement('p');
    const quoteObject = getRandomData('quotes');
    newPara.innerHTML = `"${quoteObject['quote']}"<br>(${quoteObject['author']})`;
    quotesDiv.append(newPara);
    quotes_flag = true;
}

function showRiddle() {
    clearOutput();
    const newPara = document.createElement('p');
    const riddleObject = getRandomData('riddles');
    riddle_answer = riddleObject['answer'];
    newPara.textContent = riddleObject['question'];
    riddlesDiv.append(newPara);
    riddles_flag = true;
}

function revealAnswer() {
    if (riddles_flag) {
        if (!riddle_ans_flag) {
            const newPara = document.createElement('p');
            newPara.textContent = riddle_answer;
            newPara.setAttribute('id', 'riddle_answer');
            riddlesDiv.append(newPara);
            riddle_ans_flag = true;
        }
        else {
            alert(riddle_answer);
        }
    }
    else {
        alert('Please get riddled first! 😊');
    }
}