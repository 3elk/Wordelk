const WORD_LIST = ["aback", "abate", "abbey", "abler", "abode", "abort", "about", "above", "abuzz", "acorn", "actor", "acute", "adapt", "addle", "adieu", "adlib", "adult", "affix", "agile", "aglow", "agree", "ahead", "alarm", "album", "alert", "alien", "align", "alike", "alive", "allay", "alley", "allot", "allow", "alone", "along", "aloof", "alpha", "altar", "alter", "amass", "amaze", "amber", "amble", "ample", "angel", "anger", "angle", "angry", "anise", "ankle", "apple", "apply", "apron", "argue", "arise", "armor", "arrow", "artful", "asset", "atlas", "audio", "audit", "augur", "aural", "avian", "avows", "axles", "azure", "bacon", "badge", "baker", "baldy", "bales", "balky", "ballo", "bambo", "banjo", "barge", "barks", "barns", "baron", "baste", "batch", "bated", "bates", "bathe", "baths", "bawdy", "beach", "beads", "beaks", "beams", "beans", "beard", "beast", "beats", "beers", "beets", "began", "begat", "began", "beige", "belch", "belts", "bench", "bends", "binge", "bison", "bites", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleed", "blend", "bless", "blimp", "blind", "blink", "bliss", "bloat", "block", "blood", "bloom", "blown", "blush", "board", "boast", "boats", "bobby", "bongo", "bonus", "booby", "books", "booth", "bored", "borer", "bored", "bough", "bound", "bouts", "brave", "bread", "break", "bream", "breeze", "briar", "bribe", "brick", "bride", "brief", "bring", "broad", "broil", "broke", "brood", "brown", "brush", "bubba", "bunch", "bunny", "burly", "burnt", "burst", "bushy", "butch", "butts", "buzzs", "bylaw", "byway", "cabin", "cable", "cacao", "cache", "cacti", "caddy", "cadet", "cagey", "cages", "cakey", "cakes", "calms", "camel", "cameo", "canal", "candy", "canes", "canny", "canoe", "caped", "caper", "carat", "cardi", "caret", "cargo", "carve", "casey", "cashy", "caste", "catch", "cater", "cause", "caved", "caves", "cease", "cedar", "celeb", "cello", "chafe", "chair", "chalk", "champ", "chant", "chaos", "charm", "chart", "chase", "cheap", "cheat", "check", "cheek", "cheer", "chest", "chill", "chime", "chirp", "chock", "choke", "chomp", "chore", "chose", "chuck", "churn", "cider", "cigar", "civet", "claim", "clash", "class", "claws", "clean", "clear", "clerk", "click", "cliff", "climb", "cling", "cloak", "clock", "close", "cloud", "clown", "clump", "coach", "coast", "cocoa", "colon", "color", "comet", "comic", "comma", "conch", "cooky", "cools", "coped", "copes", "coral", "cords", "cored", "cores", "cough", "count", "court", "crack", "craft", "crash", "crawl", "cream", "creek", "creep", "crepe", "cried", "cries", "crisp", "crook", "cross", "crowd", "crush", "cubic", "cuffs", "curly", "curve", "cushy", "cyber", "cycle", "daddy", "daily", "daisy", "dance", "dandy", "dared", "dares", "darky", "darts", "dashy", "dated", "dater", "dates", "daunt", "dealt", "death", "debit", "decaf", "decay", "decks", "defer", "defog", "deity", "delay", "delta", "demon", "dense", "depot", "depth", "derby", "desks", "deter", "devil", "diary", "diced", "dices", "diner", "dines", "dingo", "dinks", "dinky", "dints", "dippy", "dirt", "dirty", "disco", "ditch", "dizzy", "doily", "dolls", "dolly", "domey", "donor", "dopey", "doubt", "douse", "doves", "draft", "drain", "drama", "drank", "dream", "dread", "dress", "drift", "drink", "drive", "droll", "drone", "drove", "drown", "drums", "dryly", "ducks", "dully", "dunes", "dunks", "duped", "dupes", "dusty", "dwell", "dying", "eager", "eagle", "earls", "early", "earth", "eased", "eases", "eaten", "eater", "ebbed", "ebony", "edict", "edits", "eerie", "egged", "egret", "eight", "eject", "elder", "elect", "elevs", "elide", "elite", "email", "embed", "ember", "empty", "enact", "endow", "enemy", "enjoy", "enter", "entry", "equal", "equip", "erase", "error", "essay", "ether", "ethic", "every", "exile", "exist", "exits", "extra", "fable", "faced", "faces", "facto", "facts", "faded", "fader", "fades", "faery", "fails", "faint", "fairy", "faith", "faked", "faker", "fakes", "famed", "famer", "fames", "fancy", "fangs", "farce", "fared", "fares", "farms", "farts", "fasts", "fatal", "fated", "fates", "fault", "fauna", "fawns", "feast", "feats", "feces", "feeds", "feels", "feign", "fella", "fells", "felon", "femur", "fence", "fends", "feral", "feres", "ferry", "fetal", "fetch", "fifth", "fifty", "fixes", "flame", "flank", "flare", "flash", "flask", "flats", "flaws", "fleas", "fleek", "fleet", "flesh", "flews", "fling", "flint", "flips", "flora", "flour", "flout", "flown", "flush", "flyer", "foals", "foamy", "focus", "foggy", "foils", "folks", "folly", "force", "forgo", "forge", "forgo", "forte", "forty", "found", "fours", "frame", "frank", "fraps", "frays", "fresh", "frown", "froze", "fudge", "fugal", "fully", "funny", "fuzzy", "gains", "gaiter", "gala", "gales", "galls", "gambs", "gamey", "gamma", "gamut", "gandy", "gaped", "gapes", "garbs", "garbs", "gases", "gassy", "gates", "gavel", "gawks", "gayer", "gazes", "gears", "geese", "genus", "germs", "giddy", "gifts", "gilds", "gills", "gimpy", "girth", "given", "glade", "glare", "glass", "gleam", "glees", "glide", "glint", "gloat", "globe", "gloom", "glory", "gloss", "glove", "glows", "glued", "glues", "gnash", "gnats", "goals", "goats", "gobbs", "gobes", "goblin", "gocks", "goads", "goals", "golds", "golem", "gonna", "goofy", "gorge", "gouge", "grabs", "grace", "grade", "grand", "grape", "grasp", "grass", "grate", "grave", "gravy", "great", "greed", "green", "greet", "grief", "grind", "grins", "groan", "grove", "grown", "grubs", "guava", "guilt", "gully", "gummy", "gusto", "gutsy", "guyed", "gyros", "habit", "hacks", "hades", "hails", "hairy", "halls", "halos", "hands", "handy", "hangs", "hanky", "happy", "harsh", "haste", "hasty", "hatch", "hated", "hater", "hates", "haunt", "hazel", "heads", "heals", "heaps", "heard", "hears", "heart", "heats", "heavy", "hedge", "hedgy", "hello", "herbs", "herds", "hides", "highs", "hikes", "hilly", "hints", "hippo", "hired", "hires", "hives", "hoard", "hoary", "hobby", "hocks", "hodge", "hoist", "holds", "holly", "honed", "honer", "hones", "honor", "hoops", "horns", "horse", "hosts", "hotly", "house", "hover", "howdy", "huffy", "human", "humor", "hunch", "hunky", "hurls", "hurts", "hymns", "hyena", "ideal", "idiom", "idled", "idler", "idles", "image", "imago", "imbed", "imply", "inbox", "incur", "index", "indie", "inner", "input", "inset", "inter", "intro", "ionic", "irate", "irony", "isles", "issue", "itchy", "items", "ivory", "ivies", "igloo", "imply", "inert", "inlay", "inman", "inrun", "irons", "jacks", "jaded", "jades", "jaggy", "jails", "jambo", "jammy", "janky", "japan", "japed", "japes", "jargon", "jarks", "jarls", "javel", "jaws", "jeans", "jeers", "jelly", "jewel", "jiffy", "jiggy", "jills", "jingo", "jinks", "jivey", "jives", "jocks", "jodhp", "jolly", "jolts", "joust", "jowly", "joyed", "juicy", "jumps", "jumpy", "junta", "jutes", "kabob", "kaddy", "kaffe", "kails", "kails", "kamik", "kandy", "karat", "karma", "karst", "karts", "kasha", "kayak", "keels", "keeps", "kefir", "keggy", "kelly", "kelps", "kempt", "kenny", "kerbs", "ketch", "ketch", "keyed", "keyer", "khaki", "kicks", "kiddo", "kiddy", "kidney", "kills", "kilns", "kilos", "kilts", "kinda", "kinds", "kings", "kinky", "kiosk", "kites", "kithe", "knack", "knaps", "knees", "knelt", "knife", "knobs", "knock", "knots", "known", "koala", "kooky", "kudos", "kurta", "label", "laced", "laces", "lacks", "laddy", "laden", "lades", "ladle", "lager", "lairs", "lakes", "lanky", "lapse", "laser", "lasts", "later", "latex", "laugh", "layer", "leads", "leaky", "leaps", "leash", "least", "leech", "leers", "lefts", "legal", "lemon", "lends", "lends", "lento", "leper", "level", "lever", "liars", "libel", "libra", "licks", "lifts", "light", "liked", "liken", "liker", "likes", "lilac", "limes", "limos", "lined", "liner", "lines", "lingo", "links", "lions", "lithe", "liver", "lives", "loads", "loans", "lofty", "logic", "loins", "lolly", "lones", "loose", "lords", "loved", "lover", "loves", "lower", "loyal", "lunar", "lurch", "lurid", "lusty", "lyric", "madly", "magma", "magic", "mails", "mainly", "major", "maker", "makes", "mango", "manly", "march", "marks", "marry", "masks", "mated", "mates", "maths", "maxed", "meals", "meant", "medal", "media", "medic", "meets", "melts", "memos", "mends", "merit", "metal", "meter", "midge", "midst", "miles", "milky", "mimic", "mines", "minor", "mirth", "miser", "mixed", "mixer", "mixes", "mocha", "model", "molds", "molar", "money", "month", "moral", "mourn", "mouse", "mouth", "mover", "moves", "mowed", "mower", "mucus", "muffin", "muggy", "mules", "mummy", "music", "myths", "naked", "nails", "naive", "names", "nanny", "nasty", "naval", "nears", "necks", "needs", "needy", "neons", "nerdy", "nerves", "never", "newer", "newly", "niche", "night", "ninja", "noble", "nodes", "noisy", "noble", "nocks", "noble", "noses", "noted", "notes", "novel", "noway", "nudge", "nurse", "nutty", "nylon", "oasis", "oaths", "obese", "occur", "ocean", "octal", "odder", "odors", "offer", "often", "olive", "omega", "onion", "onset", "optic", "orbed", "order", "other", "outdo", "outer", "ovary", "ovate", "oxide", "paddy", "pains", "paint", "pairs", "palms", "palsy", "panda", "panel", "panic", "pants", "paper", "party", "pasty", "patch", "paved", "paves", "peace", "peach", "pearl", "peers", "penny", "perks", "perky", "pesky", "petty", "phase", "phone", "piano", "picks", "picky", "piece", "piety", "pilot", "pints", "pious", "pitch", "place", "plaid", "plain", "plank", "plant", "plate", "plaza", "plead", "pleas", "plumb", "plume", "plush", "poems", "point", "poker", "polar", "poles", "polls", "poppy", "ports", "posed", "poser", "poses", "pouch", "pound", "power", "prank", "pride", "prime", "print", "prize", "prose", "proud", "prove", "puffy", "punch", "pupil", "purse", "pushy", "pylon", "quack", "quads", "quaff", "quail", "quake", "qualm", "quant", "quark", "quart", "quash", "quasi", "queen", "queer", "quell", "query", "quest", "queue", "quick", "quiet", "quilt", "quint", "quirk", "quite", "quoth", "racer", "races", "radar", "radio", "raise", "rally", "ramps", "ranch", "range", "ranks", "rapid", "raspy", "rated", "rates", "raven", "reach", "react", "ready", "realm", "reals", "rebel", "refer", "regal", "relax", "relic", "remit", "renew", "rents", "reply", "reset", "resin", "rider", "rides", "ridge", "rifle", "right", "rigid", "riley", "rinse", "risks", "rival", "river", "roars", "robot", "rocks", "rodeo", "roles", "rolls", "romps", "rooms", "roots", "rough", "round", "route", "royal", "rubes", "ruler", "rumor", "runes", "rusty", "salad", "salty", "sandy", "sassy", "sauce", "scale", "scalp", "scary", "scene", "scent", "scoop", "score", "scorn", "scout", "scrap", "screw", "seals", "seams", "seats", "seeds", "seeks", "seems", "sense", "serve", "setts", "seven", "shaky", "shame", "share", "sharp", "sheep", "shelf", "shell", "shift", "shine", "shiny", "shirt", "shoes", "short", "shout", "shrub", "sight", "silly", "singe", "siren", "sissy", "skate", "skies", "skirt", "slack", "slant", "slash", "sleek", "sleet", "sling", "slope", "sloth", "smart", "smile", "smoke", "sneak", "snore", "soars", "socks", "solar", "solid", "solve", "sower", "space", "spade", "spare", "speak", "spear", "speed", "spend", "spice", "spine", "spite", "splat", "split", "spoke", "sport", "spout", "spray", "squad", "stack", "stage", "stale", "stalk", "stall", "stamp", "stand", "stare", "start", "state", "steam", "steep", "steer", "stiff", "still", "stock", "stone", "store", "storm", "story", "stout", "strap", "straw", "strip", "study", "style", "sugar", "suits", "sulky", "sunny", "sweep", "swing", "swoon", "sword", "sworn", "swung", "syrup", "table", "tacos", "tacty", "tales", "talks", "tally", "tamed", "tamer", "tames", "tango", "tanks", "taper", "tardy", "tarts", "tasks", "taste", "tasty", "tater", "tears", "tease", "teeth", "tempo", "tenor", "terms", "tests", "texts", "thank", "thick", "thief", "thigh", "thing", "think", "third", "thong", "thorn", "three", "threw", "throb", "throw", "thumb", "tight", "tilde", "timer", "times", "tired", "tires", "toads", "today", "tolls", "tools", "tooth", "topaz", "torch", "total", "touch", "tough", "tower", "toxic", "trace", "track", "trade", "trail", "train", "trait", "tramp", "trash", "tread", "treat", "trees", "trend", "trick", "tried", "tries", "tripe", "troop", "trout", "truce", "trust", "truth", "tubas", "tulip", "tummy", "tunes", "turfed", "turns", "twice", "twist", "twits", "type", "ulcer", "ultra", "umbra", "uncle", "under", "undue", "unfit", "unify", "union", "unite", "units", "unity", "unzip", "upend", "upset", "urban", "urged", "urges", "usage", "usual", "utens","vague", "valve", "value", "vapid", "vases", "vault", "vegan", "veins", "venom", "verse", "vices", "video", "vigor", "vigor", "vines", "vocal", "vogue", "volts", "voter", "votes", "wacky", "wages", "wagon", "waist", "waits", "wakes", "waltz", "wands", "wants", "waste", "watch", "water", "weary", "weave", "weeds", "weigh", "weird", "welch", "wells", "whelp", "whale", "wharf", "wheat", "wheel", "where", "whiff", "whims", "whine", "whips", "whirl", "whisk", "white", "whole", "widen", "wider", "wides", "wield", "wight", "wince", "wince", "wings", "winks", "witty", "woken", "world", "worry", "worth", "wound", "woven", "wrath", "write", "wrote", "xenon", "xerox", "xylem", "yacht", "yawns", "yearn", "yeast", "yield", "yikes", "youth", "yummy", "zebra", "zesty", "zippy", "zonal", "zoned", "zones" ];
const WORD = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
const MAX_GUESSES = 6;

const board = document.getElementById("board");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-guess");
const message = document.getElementById("message");

let currentRow = 0;

function initializeBoard() {
  for (let i = 0; i < MAX_GUESSES; i++) {
    for (let j = 0; j < 5; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.setAttribute("data-row", i);
      tile.setAttribute("data-col", j);
      board.appendChild(tile);
    }
  }
}

guessInput.addEventListener("input", (event) => {
  guessInput.value = guessInput.value.replace(/[^a-zA-Z]/g, "");
});

function checkGuess(guess) {
  if (guess.length !== 5) {
    message.textContent = "Please enter a 5-letter word.";
    return;
  }

  const guessTiles = Array.from(document.querySelectorAll(`[data-row='${currentRow}']`));
  let remainingWord = WORD;

  guess.split("").forEach((letter, index) => {
    if (letter === WORD[index]) {
      guessTiles[index].textContent = letter;
      guessTiles[index].classList.add("correct");
      remainingWord = remainingWord.replace(letter, "");
    }
  });

  guess.split("").forEach((letter, index) => {
    if (!guessTiles[index].classList.contains("correct")) {
      if (remainingWord.includes(letter)) {
        guessTiles[index].textContent = letter;
        guessTiles[index].classList.add("present");
        remainingWord = remainingWord.replace(letter, "");
      } else {
        guessTiles[index].textContent = letter;
        guessTiles[index].classList.add("absent");
      }
    }
  });

  if (guess === WORD) {
    message.textContent = "Congratulations! You guessed the word!";
    guessInput.disabled = true;
    submitButton.disabled = true;
    addResetButton();
  } else if (currentRow === MAX_GUESSES - 1) {
    message.textContent = `Game over! The word was "${WORD}".`;
    guessInput.disabled = true;
    submitButton.disabled = true;
    addResetButton();
  } else {
    message.textContent = "";
    currentRow++;
  }
}

function addResetButton() {
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Game";
  resetButton.style.marginTop = "20px";
  resetButton.style.padding = "10px 20px";
  resetButton.style.fontSize = "18px";
  resetButton.style.cursor = "pointer";
  resetButton.style.backgroundColor = "#6aaa64";
  resetButton.style.color = "#ffffff";
  resetButton.style.border = "none";
  resetButton.style.borderRadius = "5px";
  resetButton.style.transition = "background-color 0.3s ease, transform 0.2s ease";
  resetButton.style.fontFamily = "'Space Grotesk', Arial, sans-serif"

  resetButton.addEventListener("click", () => {
    location.reload();
  });

  document.getElementById("game").appendChild(resetButton);
}

submitButton.addEventListener("click", () => {
  const guess = guessInput.value.toLowerCase();
  checkGuess(guess);
  guessInput.value = "";
});

guessInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    submitButton.click();
  }
});

initializeBoard();