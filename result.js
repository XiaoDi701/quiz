const traits = ["leadership", "ambition", "innocence", "pride", "indifference"];
const scores = {
  leadership: 0,
  ambition: 0,
  innocence: 0,
  pride: 0,
  indifference: 0
};

const resultNames = {
  leadership: "Yevgeniya",
  ambition: "Saionji Tōkei",
  innocence: "Aristina",
  pride: "Ritsu Shimizu",
  indifference: "The Avalons"
};

const questions = [
  "In a team setting, your role is usually:",
  "If you suddenly gained great wealth, you would:",
  "Your favorite kind of story character is:",
  "The statement that offends you the most:",
  "In a competition, your true goal is:",
  "Which motto resonates most with you?",
  "After a fight with a friend, you'd most likely:",
  "Your dream life looks like:",
  "When you fail, your first reaction is:",
  "You wish to be understood by someone who:"
];

const options = [
  ["The one who assigns tasks and keeps things organized", "The one who charges ahead and sets the bar", "A quiet companion who supports from the side", "Someone who challenges authority and shines alone", "A laid-back helper who stays away from drama"],
  ["Build something long-lasting for others", "Invest and climb even higher", "Buy gifts and fun things for yourself and friends", "Use it to show the world what you're capable of", "Donate most of it or let it sit unused"],
  ["A wise leader with a strong moral compass", "A powerful, relentless force chasing glory", "A sweet, good-hearted person who means well", "An elegant, untouchable genius", "A wanderer with no attachments"],
  ["You're not leadership material.", "You’ll never be anything special.", "You're too naive.", "You’re not as impressive as you think.", "You must chase success."],
  ["Keeping the team together and on task", "Winning—plain and simple", "Enjoying the experience", "Standing out and being admired", "Being present for someone else’s sake"],
  ["To lead is both burden and honor.", "If I do it, I do it best.", "The world could be a little kinder.", "I don’t need proof. I am enough.", "True peace is detachment."],
  ["Talk it through and fix the group dynamics", "Try to one-up them next time", "Apologize first, even while crying", "Act normal but cut emotional ties", "Let it go and move on"],
  ["A purposeful role where you guide others", "At the top of your field, admired by all", "A soft life with people you love", "A life where you're above the noise", "A quiet, drifting existence"],
  ["Review what went wrong and take responsibility", "Plot your comeback", "Feel sad but smile through it", "Stay cool, but burn inside", "Accept it and let it pass"],
  ["Has vision and can build with you", "Shares your hunger to achieve", "Is gentle and genuine", "Sees your brilliance without explanation", "Respects your space and silence"]
];

const answerMap = [
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"],
  ["leadership", "ambition", "innocence", "pride", "indifference"]
];

let currentQuestion = 0;
const quizContainer = document.getElementById("quiz");

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }
document.body.style.backgroundImage = `url("img/back.jpg")`;
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

  const q = questions[currentQuestion];
  const opts = options[currentQuestion];

  quizContainer.innerHTML = `<div class="question"><h3>${q}</h3></div>`;
  opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      const trait = answerMap[currentQuestion][i];
      scores[trait]++;
      currentQuestion++;
      showQuestion();
    };
    quizContainer.appendChild(btn);
  });
}


const themeColors = {
  "Yevgeniya": {
    text: "#b71c1c",
    background: "#ffebee"
  },
  "The Avalons": {
    text: "#1565c0",
    background: "#e3f2fd"
  },
  "Saionji Tōkei": {
    text: "#6a1b9a",
    background: "#f3e5f5"
  },
  "Abigail": {
    text: "#5d4037",
    background: "#efebe9"
  },
  "Aristina": {
    text: "#c2185b",
    background: "#fce4ec"
  },
  "Ritsu Shimizu": {
    text: "#0288d1",
    background: "#e1f5fe"
  }
};

function showResult() {
  const maxScore = Math.max(...Object.values(scores));
  const topTraits = traits.filter(trait => scores[trait] === maxScore);
  let finalResult = "";

  if (scores.leadership === maxScore && scores.innocence === maxScore && topTraits.length === 2) {
    finalResult = "Abigail";
  } else {
    const picked = topTraits[Math.floor(Math.random() * topTraits.length)];
    finalResult = resultNames[picked];
  }


  document.body.style.backgroundImage = `url("img/${finalResult}.jpg")`;
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";

  quizContainer.innerHTML = "";

  quizContainer.style.display = "flex";
  quizContainer.style.alignItems = "center";
  quizContainer.style.justifyContent = "center";
  quizContainer.style.minHeight = "100vh";
 
  const theme = themeColors[finalResult];
  const resultDescriptions = {
    "Yevgeniya": `The character most like you is Yevgenia, a once-in-a-century genius and ambitious figure of the Piauoto Empire. She is both innocent and cruel—an idealist who would stop at nothing to build a perfect world. She dreamed of a utopia, a world driven by passion and ideals. But her extreme beliefs led to pain, death, and war for the people. In the end, she was hanged at the gallows. To later generations, she became known as a notorious extremist—not because she was evil, but because she was far too idealistic.`,
    "Saionji Tōkei": `The character most like you is Saionji Tōkei, a ruthless and cunning political mastermind from history. Unlike the idealistic dreamer Yevgenia, Saionji never believed in equality or truly cared about others. She turned her rivals into addicts, slaughtered civilians in the name of religion, and during her time ruling from behind the scenes, she manipulated both the people and the government by using science and religion as tools of control. She was intelligent, strategic, and always several steps ahead. Under her leadership, the country made major progress in technology, politics, and the economy—while the dirty and cruel things she did were later blamed on scapegoats after her death.`,
    "The Avalons": `The character most like you is the Avalons. They are not a single person, but a hive-minded species of highly advanced alien beings, hidden from human sight. After their home was destroyed by a black hole, they came to Earth and, through hybrid experiments, took on human-like forms. But they remain a true hive—sharing thoughts, emotions, and even physical connection. This transparency gives them perfect understanding of one another and a shared purpose, leading to incredibly advanced science, literature, and social systems. They don’t seek to conquer humanity; instead, they see Homo sapiens as part of their own kind, hoping that one day humans will abandon conflict and, like them, become united in mind and body—a true utopia.`,
    "Ritsu Shimizu": `The character most like you is Ritsu Shimizu. As a descendant of the Avalons, he possesses exceptional intelligence and advanced technological knowledge. After leaving Avalon, he traveled the world and eventually settled in Kin-koku , where he caught the attention of the powerful Saionji shogunate family and was invited to stay. There's no denying his brilliance in academic fields and his high-level skills—but he was overly confident and failed to take the Saionji family seriously. Over time, he fell into the trap of the pleasures and illusions carefully set by the family’s eldest daughter, and in the end, became nothing more than a pawn in their game.`,
    "Abigail": `The character most like you is Abigail—or as many called her, Ms. Magic. She was a shining symbol of resistance against colonial revolution, a legendary performer and social activist. “In chaotic times, heroes rise to meet the moment”—and she was just that, a dazzling talent who made her home in the city of Modenburg. She mastered magic, tap dance, stand-up comedy, singing—an all-around star of the stage. To the people, she was a guiding light: young, beautiful, brave, radiant. That’s how history books describe her, and how she’s remembered in stories. Her death—shot in court during the revolution—was seen as the spark that ignited the anti-colonial uprising. But who she truly was behind the legend… is something no one really knows anymore.`,
    "Aristina": `The character most like you is Aristina, the mother of the famous revolutionary, Abigail. Though born into privilege and raised as a noble in the colonies, the rebellion of her older sister—and her sister’s death—made her realize that her comfortable life was built on the suffering of countless others. She secretly fell in love with a spy from the colonies, and after giving birth to their daughter, he was soon discovered and executed. To protect the child, Aristina claimed Abigail was her adopted daughter. She was a woman of knowledge and conscience. Though the revolution took from her the three people she loved most—her sister, her husband, and eventually her daughter—she never gave up. Aristina lived on with strength and continued to contribute to the final stages of the revolution.`
  };
  
 
  const resultContainer = document.createElement("div");
  resultContainer.className = "result-container";
 
  const img = document.createElement("img");
  img.src = `img/${finalResult}.png`;
  img.alt = finalResult;
  img.className = "result-image";
 
  const resultText = document.createElement("div");
  resultText.className = "result-text";
  resultText.innerHTML = `<h2>Your match is: ${finalResult}</h2>`;
 
const description = document.createElement("p");
description.className = "result-description";
description.textContent = resultDescriptions[finalResult] || "";
resultText.appendChild(description);

 
const retryBtn = document.createElement("button");
retryBtn.textContent = "Take the quiz again";
retryBtn.className = "retry-button";
retryBtn.onclick = () => location.reload();
resultText.appendChild(retryBtn);

 
  if (theme) {
    resultText.style.color = theme.text;
    resultText.style.backgroundColor = theme.background;
    resultText.style.border = `2px solid ${theme.text}`;

  }

  resultContainer.appendChild(img);
  resultContainer.appendChild(resultText);
  quizContainer.appendChild(resultContainer);
}





showQuestion();