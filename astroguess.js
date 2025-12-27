/***********************
 * CONFIG
 ***********************/

const SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

/*****************
 * FAME
 *****************/
const people = [
  //{
  //  "name": "Goose Wayne",
  //  "sign": {
  //    "sun": "scorpio"
  //  }
  //},
  { name: "Donald Trump" },
  { name: "Stevie Wonder" },
  { name: "Ray Charles" },
  { name: "Arthur Ashe" },
  { name: "Karol G" },
  { name: "Woody Guthrie" },
  { name: "Salma Hayek" },
  { name: "Edgar Allan Poe" },
  { name: "Tyler Perry" },
  { name: "Alejandro Sanz" },
  { name: "José Feliciano" },
  { name: "Jenni Rivera" },
  { name: "Carmen Miranda" },
  { name: "John Dunsworth" },
  { name: "Mike Smith (actor)" },
  { name: "Fred Armisen" },
  { name: "Marjorie Taylor Greene" },
  { name: "Joe Exotic" },
  { name: "Aretha Franklin" },
  { name: "Cynthia Erivo" },
  { name: "Charles Darwin" },
  { name: "Danny DeVito" },
  { name: "Kate Spade" },
  { name: "Divine (performer)" },
  { name: "RuPaul" },
  { name: "Laura Ashley" },
  { name: "Barbra Streisand" },
  { name: "Mary Cassatt" },
  { name: "Bob Ross" },
  { name: "Vincent van Gogh" },
  { name: "W. B. Yeats" },
  { name: "Gordon Ramsay" },
  { name: "F. Scott Fitzgerald" },
  { name: "Zelda Fitzgerald" },
  { name: "Andy Warhol" },
  { name: "Marlon Brando" },
  { name: "Jane Austen" },
  { name: "Frida Kahlo" },
  { name: "Louis Armstrong" },
  { name: "B. B. King" },
  { name: "Tracy Chapman" },
  { name: "Ella Fitzgerald" },
  { name: "Joni Mitchell" },
  { name: "Diana Wynne Jones" },
  { name: "Louisa May Alcott" },
  { name: "H. G. Wells" },
  { name: "H. P. Lovecraft" },
  { name: "Selena Gomez" },
  { name: "Pablo Picasso" },
  { name: "Edward Hopper" },
  { name: "MF Doom" },
  { name: "Afroman" },
  { name: "Cameron Diaz" },
  { name: "Whitney Houston" },
  { name: "Nayib Bukele" },
  { name: "Nicolás Maduro" },
  { name: "Nikola Tesla" },
  { name: "Henry Ford" },
  { name: "John F. Kennedy" },
  { name: "Levi Strauss" },
  { name: "Paulo Coelho" },
  { name: "George R. R. Martin" },
  { name: "Agatha Christie" },
  { name: "Pablo Neruda" },
  { name: "Gabriel García Márquez" },
  { name: "Diego Rivera" },
  { name: "Cy Twombly" },
  { name: "Marsha P. Johnson" },
  { name: "Anya Taylor-Joy" },
  { name: "Tokischa" },
  { name: "Fidel Castro" },
  { name: "Emiliano Zapata" },
  { name: "Michael Jackson" },
  { name: "Sting (musician)" },
  { name: "Frank Lloyd Wright" },
  { name: "Amelia Earhart" },
  { name: "Tyra Banks" },
  { name: "Jane Goodall" },
  { name: "Ruth Bader Ginsburg" },
  { name: "Clarence Thomas" },
  { name: "50 Cent" },
  { name: "Gwen Stefani" },
  { name: "Serena Williams" },
  { name: "Luigi Mangione" },
  { name: "Woody Allen" },
  { name: "Javier Milei" },
  { name: "Emmanuel Macron" },
  { name: "Hunter Schafer" },
  { name: "Billy Ray Cyrus" },
  { name: "Sydney Sweeney" },
  { name: "Millie Bobby Brown" },
  { name: "SZA" },
  { name: "D4vd" },
  { name: "Bob Marley" },
  { name: "Tom Cruise" },
  { name: "Jean-Michel Basquiat" },
  { name: "Kurt Cobain" },
  { name: "Alec Baldwin" },
  { name: "Bernie Sanders" },
  { name: "Alexandria Ocasio-Cortez" },
  { name: "Martha Stewart" },
  { name: "Snoop Dogg" },
  { name: "Ice Cube" },
  { name: "Raven-Symoné" },
  { name: "Lil Peep" },
  { name: "Tucker Carlson" },
  { name: "Jack Black" },
  { name: "Fergie (singer)" },
  { name: "6ix9ine" },
  { name: "Mark Zuckerberg" },
  { name: "Criss Angel" },
  { name: "LeVar Burton" },
  { name: "George Lopez" },
  { name: "America Ferrera" },
  { name: "Fred Rogers" },
  { name: "Dolly Parton" },
  { name: "Sade (singer)" },
  { name: "Meghan, Duchess of Sussex" },
  { name: "Kris Jenner" },
  { name: "JD Vance" },
  { name: "Candace Owens" },
  { name: "Christina Aguilera" },
  { name: "Avril Lavigne" },
  { name: "Barack Obama" },
  { name: "Holly Hunter" },
  { name: "Sofía Vergara" },
  { name: "Joe Biden" },
  { name: "Julia Child" },
  { name: "Bill Nye" },
  { name: "Zohran Mamdani" },
  { name: "Wendy Williams" },
  { name: "Oprah Winfrey" },
  { name: "Maya Angelou" },
  { name: "Michelle Obama" },
  { name: "Elliot Page" },
  { name: "Sabrina Carpenter" },
  { name: "Britney Spears" },
  { name: "Taylor Lautner" },
  { name: "Keanu Reeves" },
  { name: "Bhad Bhabie" },
  { name: "Jeffree Star" },
  { name: "Jason Momoa" },
  { name: "Greta Thunberg" },
  { name: "Lil Nas X" },
  { name: "JoJo Siwa" },
  { name: "Blaire White" },
  { name: "Nikita Dragun" },
  { name: "Steve Irwin" },
  { name: "Melania Trump" },
  { name: "Mary-Kate and Ashley Olsen" },
  { name: "Betty White" },
  { name: "Coco Chanel" },
  { name: "Yu Menglong" },
  { name: "Uma Thurman" },
  { name: "Al Capone" },
  { name: "David Bowie" },
  { name: "Paula Deen" },
  { name: "Jennifer Lawrence" },
  { name: "Ted Kaczynski" },
  { name: "Georgia O'Keeffe" },
  { name: "Eminem" },
  { name: "Claudia Sheinbaum" },
  { name: "Emma Stone" },
  { name: "Carl Sagan" },
  { name: "George Lucas" },
  { name: "Hunter Biden" },
  { name: "Judy Sheindlin" },
  { name: "Ariana Grande" },
  { name: "Abraham Lincoln" },
  { name: "Bad Bunny" },
  { name: "Howie Mandel" },
  { name: "Penn Jillette" },
  { name: "Stephen King" },
  { name: "Hikaru Nakamura" },
  { name: "Hayao Miyazaki" },
  { name: "Shakira" },
  { name: "Rosa Parks" },
  { name: "Matt Groening" },
  { name: "Kendrick Lamar" },
  { name: "Josephine Baker" },
  { name: "Mike Myers" },
  { name: "Alan Turing" },
  { name: "Simone Biles" },
];

let peopleList = people.map((p) => p.name);

/***********************
 * STATE
 ***********************/

let currentCorrectSign = null;

let score =
  JSON.parse(localStorage.getItem("zodiacScore")) ||
  Object.fromEntries(SIGNS.map((s) => [s, 0]));

/***********************
 * ZODIAC LOGIC
 ***********************/

function zodiacFromDate(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "Aries";
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "Taurus";
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return "Gemini";
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return "Cancer";
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "Leo";
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "Virgo";
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return "Libra";
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return "Scorpio";
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return "Sagittarius";
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "Capricorn";
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "Aquarius";
  return "Pisces";
}

/***********************
 * SCOREBOARD
 ***********************/

function saveScore() {
  localStorage.setItem("zodiacScore", JSON.stringify(score));
}

function renderScoreboard() {
  const ul = document.getElementById("scoreboard");
  ul.innerHTML = "";

  SIGNS.forEach((sign) => {
    const li = document.createElement("li");
    li.textContent = `${sign}: ${score[sign]}`;
    ul.appendChild(li);
  });
}

/***********************
 * WIKIPEDIA FETCH
 ***********************/

async function loadCelebrity() {
  document.getElementById("result").hidden = true;
  document.getElementById("next").hidden = true;

  const celeb = peopleList[Math.floor(Math.random() * peopleList.length)];

  const wUrl =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*` +
    `&prop=pageimages|extracts` +
    `&exintro=1&explaintext=1` +
    `&piprop=thumbnail&pithumbsize=300` +
    `&titles=${encodeURIComponent(celeb)}`;
  try {
    const res = await fetch(wUrl);
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];

    if (!page.extract) {
      console.log("missed the page for: ", celeb);
      loadCelebrity();
      return;
    }

    document.getElementById("celebrity-name").textContent = page.title;
    document.getElementById("celebrity-image").src =
      page.thumbnail?.source || "";

    // Try to extract birth date from intro text
    const birthMatch = page.extract.match(
      /\b(?:born\s+)?([A-Z][a-z]+ \d{1,2}, \d{4}|\d{1,2} [A-Z][a-z]+ \d{4})/i,
    );

    if (!birthMatch) {
      console.log("No birthdate for", celeb);
      console.log(page.extract);
      loadCelebrity(); // skip bad data
      return;
    }

    const birthDate = new Date(birthMatch[1]);

    if (isNaN(birthDate)) {
      console.log("failed to parse birthdate", birthMatch);
      loadCelebrity();
      return;
    }

    currentCorrectSign = zodiacFromDate(birthDate);
  } catch (err) {
    console.error("Wikipedia fetch failed", err);
    loadCelebrity();
  }
}

/***********************
 * GUESS HANDLING
 ***********************/

function guess(sign) {
  const result = document.getElementById("result");
  result.hidden = false;

  if (sign === currentCorrectSign) {
    result.textContent = "✔ Correct!";
    result.className = "correct";
    score[sign]++;
    saveScore();
    renderScoreboard();
    peopleList = peopleList.filter(
      (obj) => obj !== document.getElementById("celebrity-name").textContent,
    );
  } else {
    result.textContent = `✖ Wrong — ${currentCorrectSign}`;
    result.className = "wrong";
  }

  document.getElementById("next").hidden = false;
}

/***********************
 * BUTTON SETUP
 ***********************/

function setupButtons() {
  const container = document.getElementById("buttons");
  container.innerHTML = "";

  SIGNS.forEach((sign) => {
    const btn = document.createElement("button");
    btn.textContent = sign;
    btn.className = "sign";
    btn.onclick = () => guess(sign);
    container.appendChild(btn);
  });
}

/***********************
 * INIT
 ***********************/

document.getElementById("next").onclick = loadCelebrity;

async function loadPeopleList() {
  const res = await fetch("./list.json");
  const data = await res.json();
  peopleList = data.people.map((p) => p.name);
}

renderScoreboard();
setupButtons();
loadCelebrity();
