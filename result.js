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

  quizContainer.innerHTML = "";
  document.getElementById("final-result").textContent = "Your match is: " + finalResult;
}

showQuestion();