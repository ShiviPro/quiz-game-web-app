const quizData = {
    'intro_quiz': [{
            'category': 'Introductory Quiz',
            'total': 5
        },
        {
            question: "How old is the sun ?",
            a: "3.2 billion years",
            b: "1.8 billion years",
            c: "4.6 billion years",
            d: "none of the above",
            correct: "c"
        }, {
            question: "What was the most used programming language in 2019 ?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d"

        }, {
            question: "Who is the current president of Zimbabwe ?",
            a: "Nelson Chamisa",
            b: "Emmerson Mnangagwa",
            c: "Robert Mugabe",
            d: "Jonathan Moyo",
            correct: "b"
        }, {
            question: "What does CTF stand for in context to Cyber Security ?",
            a: "Capture The Flag",
            b: "Caught The Snake",
            c: "Crack The System",
            d: "Catch The Ship",
            correct: "a"
        }, {
            question: "What year was JavaScript launched ?",
            a: "1997",
            b: "1994",
            c: "1995",
            d: "1991",
            correct: "c"
        }
    ],

    'asia_quiz': [{
            'category': 'All About Asia Quiz',
            'total': 15
        },
        {
            question: "When did Buddhism arrive in Japan?",
            a: "1 CE",
            b: "200 BCE",
            c: "400 CE",
            d: "1200 CE",
            correct: "c"
        }, {
            question: "What country does the Mekong River not flow through?",
            a: "Vietnam",
            b: "Mongolia",
            c: "Laos",
            d: "China",
            correct: "b"

        }, {
            question: "Which of these cities lies on the Saigon River?",
            a: "Hong Kong",
            b: "Hanoi",
            c: "Ho Chi Minh City",
            d: "Haiphong",
            correct: "c"
        }, {
            question: "In what country is Sichuan found?",
            a: "Bangladesh",
            b: "Indonesia",
            c: "China",
            d: "Japan",
            correct: "c"
        }, {
            question: "Which of these rivers does not flow through Bangladesh?",
            a: "Brahmaputra",
            b: "Yangtze",
            c: "Sangu",
            d: "Ganges",
            correct: "b"
        },
        {
            question: "Which of these is not a Japanese city?",
            a: "Taipei",
            b: "Tokyo",
            c: "Osaka",
            d: "Sapporo",
            correct: "a"
        },
        {
            question: "What is the main color of China’s flag?",
            a: "green",
            b: "blue",
            c: "white",
            d: "red",
            correct: "d"
        },

        {
            question: "What is the capital of Bangladesh?",
            a: "Deccan",
            b: "Dhaka",
            c: "Accra",
            d: "Aden",
            correct: "b"
        },
        {
            question: "In what ocean does Indonesia lie?",
            a: "Atlantic",
            b: "Pacific",
            c: "Southern",
            d: "Arctic",
            correct: "b"
        },
        {
            question: "What body of water separates India from Sri Lanka?",
            a: "the Molucca Strait",
            b: "the Torres Strait",
            c: "the Palk Strait",
            d: "the Strait of Hormuz",
            correct: "c"
        },
        {
            question: "Which of following bodies of water separates Asia from the African continent?",
            a: "Red Sea",
            b: "Bering Strait",
            c: "Suez Canal",
            d: "Arabian Sea",
            correct: "c"
        },
        {
            question: " 'Spice Islands' is the alternative name for which of these islands of Indonesia ? ",
            a: "Lembata",
            b: "Peleng",
            c: "Moluccas",
            d: "Buru",
            correct: "c"
        },
        {
            question: "Which temple complex appears on the flag of Cambodia?",
            a: "Angkor Thom",
            b: "Wat Phnom",
            c: "Royal Palace",
            d: "Angkor Wat",
            correct: "d"
        },
        {
            question: "When was the South Asian Association for Regional Co-operation (SAARC) founded?",
            a: "2011",
            b: "1985",
            c: "1958",
            d: "2003",
            correct: "b"
        },
        {
            question: "What is Dunhuang, a city in northwestern China, famous for?",
            a: "Forbidden City",
            b: "Summer Palace",
            c: "Temple Of Heaven",
            d: "Mogao Caves",
            correct: "d"
        }
    ],

    'art_quiz': [{
            'category': 'Ultimate Art Quiz',
            'total': 10
        },
        {
            question: "Which of these is a paint made from pigments and plastic?",
            a: "acetone",
            b: "acrylic",
            c: "tempera",
            d: "gesso",
            correct: "b"
        },
        {
            question: "Early photographers made their images on which of these materials?",
            a: "paper",
            b: "glass",
            c: "stone",
            d: "plastic",
            correct: "b"
        },
        {
            question: "To which artistic movement does Paul Gauguin’s The Yellow Christ belong?",
            a: "Impressionism",
            b: "Cloisonnism",
            c: "Bauhaus",
            d: "Fauvism",
            correct: "b"
        },
        {
            question: "What does the Venus of Brassempouy represent?",
            a: "a human figure",
            b: "an angel",
            c: "a woman's head",
            d: "an old man",
            correct: "c"
        },
        {
            question: "Which architect founded the Bauhaus school of design?",
            a: "Frank Gehry",
            b: "Frank Lloyd Wright",
            c: "Walter Groplus",
            d: "I.M. Pei",
            correct: "c"
        },
        {
            question: "Who designed the Vietnam Veterans Memorial?",
            a: "Henri Matisse",
            b: "Frank Gehry",
            c: "Maya Lin",
            d: "Frank Lloyd Wright",
            correct: "c"
        },
        {
            question: "What did I.M. Pei design outside the Louvre, in Paris?",
            a: "ziggurat",
            b: "pyramid",
            c: "obelisk",
            d: "sacrophagus",
            correct: "b"
        },
        {
            question: "Which one of these is not a well-known Indian sculptor?",
            a: "Ramkinkar Baij",
            b: "Henry Moore",
            c: "Kumaradeva",
            d: "Krishna Reddy",
            correct: "b"
        },
        {
            question: "What animal often symbolizes peace in art?",
            a: "dog",
            b: "deer",
            c: "duck",
            d: "dove",
            correct: "d"
        },
        {
            question: "What was the subject of the earliest known paintings?",
            a: "flowers",
            b: "landscapes",
            c: "animals",
            d: "sports",
            correct: "c"
        },
    ],

    'w_and_d_quiz': [{
            'category': 'Wining & Dining Quiz',
            'total': 9
        },
        {
            question: "What varietal fragrance is found in some Cabernet wines?",
            a: "bell pepper",
            b: "squash",
            c: "arugula",
            d: "lemon",
            correct: "a"
        },
        {
            question: "Which is not a step in wine tasting?",
            a: "noting viscosity",
            b: "visual assessment",
            c: "deep smelling",
            d: "tasting",
            correct: "a"
        },
        {
            question: "What quality are the majority of French wines?",
            a: "villages",
            b: "grand cru",
            c: "supérieure",
            d: "vins ordinaries",
            correct: "d"
        },
        {
            question: "Which district is not included in the Burgundy region?",
            a: "Chablis",
            b: "Champagne",
            c: "Côte d’Or",
            d: "Mâcon",
            correct: "b"
        },
        {
            question: "What kind of wine does the Rhône region mostly produce?",
            a: "red",
            b: "white",
            c: "rose",
            d: "sparkling",
            correct: "a"
        },
        {
            question: "What kind of wines contain over 14 percent alcohol?",
            a: "Sherry wines",
            b: "Fortified wines",
            c: "Champagne",
            d: "Sparkling wines",
            correct: "b"
        },
        {
            question: "What French delicacy consists of the liver of a goose or duck that has been fattened by a process of force-feeding?",
            a: "escargots",
            b: "foie gras",
            c: "sweetbread",
            d: "confit de canard",
            correct: "b"
        },
        {
            question: "Which dish is the meat of calves slaughtered between 3 and 14 weeks of age?",
            a: "sweetbread",
            b: "foie gras",
            c: "venison",
            d: "veal",
            correct: "d"
        },
        {
            question: "Which is savoury or sweet dish with the consistency of a dense foam, composed of a puréed chief ingredient mixed with stiffly beaten egg whites, whipped cream, or both?",
            a: "mousse",
            b: "whipped cream",
            c: "custard",
            d: "meringue",
            correct: "a"
        }
    ],
    'bird_quiz': [{
            'category': 'Predatory Birds Quiz',
            'total': 6
        },
        {
            question: "Which bird has been known to kill human beings with slashing blows of its feet, as the innermost of its three toes bears a long daggerlike nail?",
            a: "Cassowary",
            b: "Ostrich",
            c: "Emu",
            d: "Lammergeier",
            correct: "a"
        },
        {
            question: "Which flightless bird once proved a danger to American country singer Johnny Cash?",
            a: "Ostrich",
            b: "Emu",
            c: "Moa",
            d: "Kiwi",
            correct: "a"
        },
        {
            question: "Which bird dines on bone marrow from carrion, which it accesses by dropping its prey from great heights to crack open the bones?",
            a: "Great Horned Owl",
            b: "Barred Owl",
            c: "Moa",
            d: "Lammergeier",
            correct: "d"
        },
        {
            question: "Which bird attacked a jogger in Salem, Oregon, in 2015, striking the scalp repeatedly before the jogger escaped?",
            a: "Great Horned Owl",
            b: "Barred Owl",
            c: "Magpie",
            d: "Bearded Vulture",
            correct: "a"
        },
        {
            question: "What bird was invoked in a murder case when the defense argued that it was the bird, rather than the defendant, attacked the victim?",
            a: "Great Horned Owl",
            b: "Bearded Vulture",
            c: "Red-Shouldered Hawk",
            d: "Barred Owl",
            correct: "d"
        },
        {
            question: "Which bird can run at nearly 50 km (30 miles) per hour and is capable of eviscerating animals (or, more rarely, humans) under the right conditions?",
            a: "Great Northern Loon",
            b: "Ostrich",
            c: "Emu",
            d: "Spur-winged Goose",
            correct: "c"
        }
    ],
    'p_table_quiz': [{
            'category': 'The Periodic Table Quiz',
            'total': 15
        },
        {
            question: "What is the chemical element for the symbol B?",
            a: "Boron",
            b: "Barium",
            c: "Bromine",
            d: "Beryllium",
            correct: "a"
        },
        {
            question: "What is the chemical element for the symbol Se?",
            a: "Selenium",
            b: "Seaborgium",
            c: "Scandium",
            d: "Silver",
            correct: "a"
        },
        {
            question: "What is the chemical element for the symbol I?",
            a: "Iridium",
            b: "Iron",
            c: "Iodine",
            d: "Indium",
            correct: "c"
        },
        {
            question: "What is the chemical element for the symbol S?",
            a: "Strontium",
            b: "Seaborgium",
            c: "Sulfur",
            d: "Scandium",
            correct: "c"
        },
        {
            question: "What is the chemical element for the symbol Rg?",
            a: "Argon",
            b: "Radium",
            c: "Roentgenium",
            d: "Rubidium",
            correct: "c"
        },
        {
            question: "What is the chemical element for the symbol Cs?",
            a: "Curium",
            b: "Ceasium",
            c: "Cerium",
            d: "Cadmium",
            correct: "b"
        },
        {
            question: "What is the chemical element for the symbol Fl?",
            a: "Flerovium",
            b: "Francium",
            c: "Fluorine",
            d: "Fermium",
            correct: "a"
        },
        {
            question: "What is the chemical element for the symbol P?",
            a: "Palladium",
            b: "Platinum",
            c: "Polonium",
            d: "Phosphorus",
            correct: "d"
        },
        {
            question: "What is the chemical element for the symbol Mt?",
            a: "Manganese",
            b: "Meitnerium",
            c: "Magnesium",
            d: "Mendelevium",
            correct: "b"
        },
        {
            question: "What is the chemical element for the symbol Ga?",
            a: "Gallium",
            b: "Germanium",
            c: "Gold",
            d: "Gadolinium",
            correct: "a"
        },
        {
            question: "What is the chemical element for the symbol Rb?",
            a: "Rhodium",
            b: "Rhenium",
            c: "Rutherfordium",
            d: "Rubidium",
            correct: "d"
        },
        {
            question: "What is the chemical element for the symbol Sn?",
            a: "Tin",
            b: "Thorium",
            c: "Titanium",
            d: "Tellurium",
            correct: "a"
        },
        {
            question: "What is the chemical element for the symbol Ce?",
            a: "Chlorine",
            b: "Cerium",
            c: "Cesium",
            d: "Curium",
            correct: "b"
        },
        {
            question: "What is the chemical element for the symbol Lr?",
            a: "Lawrencium",
            b: "Livermorium",
            c: "Lutetium",
            d: "Lanthanum",
            correct: "a"
        },
        {
            question: "What is the chemical element for the symbol At?",
            a: "Astatine",
            b: "Argon",
            c: "Arsenic",
            d: "Actinium",
            correct: "a"
        }
    ],
    'geo_quiz': [{
            'category': 'The Map Quiz',
            'total': 15
        },
        {
            question: "Which of these is the largest landlocked country in the world?",
            a: "Central African Republic",
            b: "Paraguay",
            c: "Kazakhstan",
            d: "Bolivia",
            correct: "c"
        },
        {
            question: "What country has the largest Muslim population?",
            a: "Indonesia",
            b: "Libya",
            c: "Iraq",
            d: "Nigeria",
            correct: "a"
        },
        {
            question: "What European country is divided into departments?",
            a: "France",
            b: "Switzerland",
            c: "Germany",
            d: "Sweden",
            correct: "a"
        },
        {
            question: "Which of these countries is said to be shaped like an elephant’s head?",
            a: "Thailand",
            b: "Zaire",
            c: "France",
            d: "Australia",
            correct: "a"
        },
        {
            question: "In what country might one hear the song 'Waltzing Matilda ' frequently played?",
            a: "Brazil",
            b: "Australia",
            c: "Paraguay",
            d: "Congo",
            correct: "b"
        },
        {
            question: "What is the name of the long, narrow country on South America’s Pacific coast?",
            a: "Argentina",
            b: "Ecuador",
            c: "Chile",
            d: "Peru",
            correct: "c"
        },
        {
            question: "Which of these countries is considered the world’s oldest republic?",
            a: "Andorra",
            b: "Monaco",
            c: "San Marino",
            d: "Iceland",
            correct: "c"
        },
        {
            question: "Which is the world’s smallest fully independent nation?",
            a: "Vatican City",
            b: "Togo",
            c: "Vanuatu",
            d: "Kiribati",
            correct: "a"
        },
        {
            question: "Which country participated at the Olympic Games in 1924 for the first time and won the gold medal in football (soccer)?",
            a: "Israel",
            b: "Croatia",
            c: "Uruguay",
            d: "Liberia",
            correct: "c"
        },
        {
            question: "Which country was called “the pearl of Africa” by Sir Winston Churchill?",
            a: "Mozambique",
            b: "Netherlands",
            c: "Uganda",
            d: "Mauritius",
            correct: "c"
        },
        {
            question: "Which country in eastern Europe was formerly known as White Russia?",
            a: "North Macedonia",
            b: "Saint Lucia",
            c: "Belarus",
            d: "Moldova",
            correct: "c"
        },
        {
            question: "Which country did the communist movement, Khmer Rouge, rule?",
            a: "Maldives",
            b: "Sudan",
            c: "Bulgaria",
            d: "Cambodia",
            correct: "d"
        },
        {
            question: "In which country are the aflāj, an ancient system of water channels that have been designated a UNESCO World Heritage site, found?",
            a: "Angola",
            b: "Jordan",
            c: "Kuwait",
            d: "Oman",
            correct: "d"
        },
        {
            question: "Which country was formerly known as French Somaliland and the French Territory of the Afars and Issas?",
            a: "Mauritania",
            b: "Botswana",
            c: "Djibouti",
            d: "Malta",
            correct: "c"
        },
        {
            question: "Which African country is known as the 'land of a thousand hills '?",
            a: "Rwanda",
            b: "Georgia",
            c: "Czech Republic",
            d: "Mall",
            correct: "a"
        }

    ],
    'misconcept_t_or_f': [{
            'category': 'True or False: Famous Misconceptions Quiz',
            'total': 8
        },
        {
            question: "Napolean was short",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "b"
        },
        {
            question: "Marie-Antoinette probably never said “Let them eat cake.”",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "a"
        },
        {
            question: "Dracula was a real person.",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "b"
        },
        {
            question: "Dracula may have been based on Vlad the Impaler.",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "a"
        },
        {
            question: "There are no artifacts that attest to what Cleopatra actually looked like.",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "b"
        },
        {
            question: "Humans have not left anything behind from visits to the Moon.",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "b"
        },
        {
            question: "George Washington never said “I can’t tell a lie.”",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "a"
        },
        {
            question: "Johnny Appleseed traveled on foot across the United States planting apple trees.",
            a: "True",
            b: "False",
            c: "",
            d: "",
            correct: "a"
        },
    ],
    'history_of_war': [{
            'category': 'History Of War',
            'total': 10
        },
        {
            question: "In what country did the Battle of Waterloo take place?",
            a: "Belgium",
            b: "Germany",
            c: "France",
            d: "the Netherlands",
            correct: "a"
        },
        {
            question: "Which treaty ended the War of 1812?",
            a: "Treaty of Versailles",
            b: "Maastricht Party",
            c: "Treaty of Ghent",
            d: "Treaty of Brest-Litovsk",
            correct: "c"
        },
        {
            question: "What was the world’s first nuclear-powered aircraft carrier?",
            a: "Forrestal",
            b: "Invincible",
            c: "Enterprise",
            d: "Yamato",
            correct: "c"
        },
        {
            question: "Which of these was not a battle fought in World War II?",
            a: "Okinawa",
            b: "Gettysburg",
            c: "Anzio",
            d: "two Jima",
            correct: "b"
        },
        {
            question: "The D-Day invasion of June 6, 1944, took place in:",
            a: "Belgium",
            b: "Ireland",
            c: "France",
            d: "Canada",
            correct: "c"
        },
        {
            question: "Which river did George Washington’s troops cross to engage in the Battle of Trenton?",
            a: "Delaware",
            b: "Potomac",
            c: "Hudson",
            d: "Mississippi",
            correct: "a"
        },
        {
            question: "Which leader was overthrown by the U.S. invasion of Iraq in 2003?",
            a: "Indira Gandhi",
            b: "Saddam Hussain",
            c: "Abdei Gamel Nasser",
            d: "King Saud",
            correct: "b"
        },
        {
            question: "Where did the abortive 1961 invasion of Cuba take place?",
            a: "Havana Bay",
            b: "Bay of Biscay",
            c: "Bay of Pigs",
            d: "Guantanamo Bay",
            correct: "c"
        },
        {
            question: "In what year was the Battle of Hastings fought?",
            a: "1061",
            b: "1011",
            c: "1055",
            d: "1066",
            correct: "d"
        },
        {
            question: "Which of these is another name for World War I?",
            a: "Yugoslav Wars",
            b: "Austro-Prussian Wars",
            c: "Great War",
            d: "Revolution of 1917",
            correct: "c"
        }
    ],

    'moons_quiz': [{
            'category': 'Moons Quiz',
            'total': 7
        },
        {
            question: "Triton is the moon of which planet ?",
            a: "Mercury",
            b: "Earth",
            c: "Mars",
            d: "Neptune",
            correct: "d"
        },
        {
            question: "Phobos is the moon of which planet ?",
            a: "Mars",
            b: "Jupiter",
            c: "Mercury",
            d: "Venus",
            correct: "a"
        },
        {
            question: "Nereid is the moon of which planet ?",
            a: "Mars",
            b: "Venus",
            c: "Neptune",
            d: "Mercury",
            correct: "c"
        },
        {
            question: "Amalthea is the moon of which planet ?",
            a: "Uranus",
            b: "Jupiter",
            c: "Mars",
            d: "Venus",
            correct: "b"
        },
        {
            question: "Phoebe is the moon of which planet ?",
            a: "Neptune",
            b: "Uranus",
            c: "Saturn",
            d: "Earth",
            correct: "c"
        },
        {
            question: "Deimos is the moon of which planet ?",
            a: "Jupiter",
            b: "Uranus",
            c: "Mars",
            d: "Venus",
            correct: "c"
        },
        {
            question: "Cordelia is the moon of which planet ?",
            a: "Mars",
            b: "Uranus",
            c: "Mercury",
            d: "Jupiter",
            correct: "b"
        }
    ]

};

document.addEventListener('DOMContentLoaded', function () {
    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.querySelector('#question');

    const a_text = document.querySelector('#a_text');
    const b_text = document.querySelector('#b_text');
    const c_text = document.querySelector('#c_text');
    const d_text = document.querySelector('#d_text');

    var submitBtn = document.querySelector('#submit');

    const minute_el = document.getElementById('minutes');
    const second_el = document.getElementById('seconds');

    const q_res_box = document.getElementById('c-or-inc');

    var selectedQuiz = localStorage.getItem('quiz-name');

    const quiz_body = document.getElementById('quiz-body');

    var default_t_mins = 1;
    var default_t_secs = 0;

    let currentQuiz = 1;

    var score = 0;
    var max_score = quizData[selectedQuiz].length - 1;
    // although the quizData is nested JSON object , it can be accessed via subscripting, even though it's not an array of objects.

    var ID;

    loadQuiz();

    function loadQuiz() {
        resetEl();
        unmark();
        const currentQuizData = quizData[selectedQuiz][currentQuiz];
        
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
        
        if (currentQuizData.c === '') {
            document.getElementById('c').style.display = "none";
        }

        if (currentQuizData.d === '') {
            document.getElementById('d').style.display = "none";
        }

        ID = window.setInterval(updateTime, '1000');
    }

    function updateTime() {

        var t_mins = parseInt(minute_el.innerHTML);
        var t_secs = parseInt(second_el.innerHTML);

        if (t_mins == default_t_mins) {
            t_mins -= 1;
            t_secs = 59;
        } else {
            t_secs -= 1;
            if (t_mins == 0 && t_secs == 0) {
                alert("Time limit for this Question is over. Your response has been recorded, please attempt the next one !");
                onSubmitClick();
                return;
                // On debugging the above functionality, this was found
                // returning from here is mandatory, because when onSubmitCLick() is executed,
                // then loadQuiz() is also called, thenafter, resetEl() is called which 
                // resets the timer to default in this case; However when the scope returns to 
                // loadQuiz(), the innerHTML of mins and secs, updates to 0 and -1, 
                // causing an unnecessary overriding of the timer values.
            }
        }

        minute_el.innerHTML = t_mins;

        if (t_secs < 10)
            second_el.innerHTML = "0" + t_secs;
        else
            second_el.innerHTML = t_secs;

    }

    submitBtn.addEventListener('click', onSubmitClick);

    function onSubmitClick() {
        window.clearInterval(ID);
        const answer = isSelected();

        if (answer) {
            if (answer === quizData[selectedQuiz][currentQuiz].correct) {
                score += 1;
                markCorrect();

            } else {
                markIncorrect();
            }
        }

        currentQuiz++;

        if (currentQuiz < quizData[selectedQuiz].length) {
            resetAnimations();
            loadQuiz();
        } else {
            const body = document.querySelector('#quiz-body');

            var res1 = 'Congratulations, you have completed the test.';
            var res2 = 'You have scored a total of ' + score + '/' + max_score + 'points.';
            resetAnimations();
            body.innerHTML = '<h2 style="padding: 20px;">' + res1 + '</h2>' + '<h2 style="padding: 20px;">' + res2 + '</h2>';
        }
    }

    function markCorrect() {
        answerEls.forEach(answerElem => {

            if (answerElem.id === quizData[selectedQuiz][currentQuiz].correct) {

                q_res_box.classList.remove('ans-slidefromrightNdfadeaway');

                void q_res_box.offsetWidth;

                q_res_box.classList.add('ans-slidefromrightNdfadeaway');

                q_res_box.innerText = "Correct";

                q_res_box.classList.remove('incorrect-style');

                q_res_box.classList.add('correct-style');

            }

        });
    }

    function markIncorrect() {
        answerEls.forEach(answerElem => {

            if (answerElem.checked) {
                if ((answerElem.id != quizData[selectedQuiz][currentQuiz].correct)) {

                    q_res_box.classList.remove('ans-slidefromrightNdfadeaway');

                    void q_res_box.offsetWidth;

                    q_res_box.classList.add('ans-slidefromrightNdfadeaway');

                    q_res_box.innerText = "Incorrect";

                    q_res_box.classList.remove('correct-style');

                    q_res_box.classList.add('incorrect-style');

                }
            }

        });
    }

    function unmark() {
        answerEls.forEach(answerElem => {

            answerElem.classList.remove('correctAnswerAnimator');
        });
    }

    function resetAnimations() {

        quiz_body.classList.remove('run-fadein');
        void quiz_body.offsetWidth;

        quiz_body.classList.add('run-fadein');

    }

    function isSelected() {

        var answer = undefined;

        answerEls.forEach(answerEl => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });
        return answer;

    }

    function resetEl() {

        answerEls.forEach(answerEl => {
            answerEl.checked = false;
        });
        minute_el.innerHTML = default_t_mins;
        second_el.innerHTML = "0" + default_t_secs;

    }

});