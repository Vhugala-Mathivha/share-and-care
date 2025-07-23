/*document.addEventListener("DOMContentLoaded", function () {
  const shareCard = document.getElementById("shareStoryCard");
  const storyForm = document.getElementById("storyForm");

  shareCard.addEventListener("click", () => {
    // Toggle visibility
    storyForm.style.display = storyForm.style.display === "block" ? "none" : "block";
    // Scroll to the form if opening
    if (storyForm.style.display === "block") {
      storyForm.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const readCard = document.getElementById("readStoryCard");
  const readSection = document.getElementById("readSection");
  const tagSelect = document.getElementById("tagSelect");
  const storyResults = document.getElementById("storyResults");

  const dummyStories = [
    {
      name: "Anonymous",
      tag: "grief",
      story: "I lost my mom two years ago...",
      dealt: "Grief support group, journaling"
    },
    {
      name: "Lebo",
      tag: "bullying",
      story: "I was bullied in high school...",
      dealt: "Therapy, real friendships"
    },
    {
      name: "Musa",
      tag: "anxiety",
      story: "I used to get panic attacks before exams...",
      dealt: "Breathing techniques, meditation"
    },
    {
      name: "Nomsa",
      tag: "heartbreak",
      story: "A breakup nearly crushed me...",
      dealt: "Talking to friends and finding hobbies"
    }
  ];

  readCard.addEventListener("click", () => {
    readSection.style.display = readSection.style.display === "block" ? "none" : "block";
    if (readSection.style.display === "block") {
      readSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  tagSelect.addEventListener("change", function () {
    const selectedTag = this.value;
    storyResults.innerHTML = "";

    if (!selectedTag) return;

    const filtered = dummyStories.filter(story => story.tag === selectedTag);

    if (filtered.length === 0) {
      storyResults.innerHTML = "<p>No stories found for this tag.</p>";
      return;
    }

    filtered.forEach(story => {
      const card = document.createElement("div");
      card.classList.add("story-card");
      card.innerHTML = `
        <h4>${story.name}</h4>
        <p><strong>Story:</strong> ${story.story}</p>
        <p><strong>How they dealt with it:</strong> ${story.dealt}</p>
      `;
      storyResults.appendChild(card);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const adviseCard = document.querySelector(".advise");
  const adviceSection = document.getElementById("adviceSection");
  const questionForm = document.getElementById("questionForm");
  const questionInput = document.getElementById("questionInput");
  const adviceReplies = document.getElementById("adviceReplies");

  // Dummy reply list for demonstration
  const replies = [
    {
      id: 1,
      text: "Try practicing mindfulness and guided meditation. It helped me calm my anxiety.",
      upvotes: 3,
      answered: false
    },
    {
      id: 2,
      text: "Talking to a school counselor was life-changing for me.",
      upvotes: 5,
      answered: false
    }
  ];

  adviseCard.addEventListener("click", () => {
    adviceSection.style.display = adviceSection.style.display === "block" ? "none" : "block";
    if (adviceSection.style.display === "block") {
      adviceSection.scrollIntoView({ behavior: "smooth" });
    }
    renderReplies();
  });

  questionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const question = questionInput.value.trim();
    if (!question) return;

    alert("Your question has been submitted! (feature coming soon)");
    questionInput.value = "";
  });

  function renderReplies() {
    adviceReplies.innerHTML = "";
    replies.forEach((reply) => {
      const card = document.createElement("div");
      card.className = "reply-card";
      if (reply.answered) card.classList.add("answered");

      card.innerHTML = `
        <p>${reply.text}</p>
        <div class="actions">
          <span>👍 <span id="upvote-count-${reply.id}">${reply.upvotes}</span></span>
          <div>
            <button onclick="upvoteReply(${reply.id})">Upvote</button>
            <button onclick="markAnswered(${reply.id})">Mark as Answered</button>
          </div>
        </div>
      `;
      adviceReplies.appendChild(card);
    });
  }

  // Make replies globally accessible
  window.upvoteReply = function (id) {
    const reply = replies.find(r => r.id === id);
    if (reply) {
      reply.upvotes++;
      renderReplies();
    }
  };

  window.markAnswered = function (id) {
    replies.forEach(r => r.answered = false); // Only one can be marked
    const reply = replies.find(r => r.id === id);
    if (reply) {
      reply.answered = true;
      renderReplies();
    }
  };
});
*/

document.addEventListener("DOMContentLoaded", function () {
  // === SHARE STORY ===
  const shareCard = document.getElementById("shareStoryCard");
  const storyForm = document.getElementById("storyForm");

  shareCard.addEventListener("click", () => {
    storyForm.style.display = storyForm.style.display === "block" ? "none" : "block";
    if (storyForm.style.display === "block") {
      storyForm.scrollIntoView({ behavior: "smooth" });
    }
  });

  // === READ STORIES ===
  const readCard = document.getElementById("readStoryCard");
  const readSection = document.getElementById("readSection");
  const tagSelect = document.getElementById("tagSelect");
  const storyResults = document.getElementById("storyResults");

  const dummyStories = [
    {
      name: "Anonymous",
      tag: "gbv",
      story: "I lost my mom two years ago...",
      dealt: "Grief support group, journaling"
    },
    {
      name: "Lebo",
      tag: "bullying",
      story: "I was bullied in high school...",
      dealt: "Therapy, real friendships"
    },
    {
      name: "Musa",
      tag: "anxiety",
      story: "I used to get panic attacks before exams...",
      dealt: "Breathing techniques, meditation"
    },
    {
      name: "Nomsa",
      tag: "heartbreak",
      story: "A breakup nearly crushed me...",
      dealt: "Talking to friends and finding hobbies"
    }
  ];

  readCard.addEventListener("click", () => {
    readSection.style.display = readSection.style.display === "block" ? "none" : "block";
    if (readSection.style.display === "block") {
      readSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  tagSelect.addEventListener("change", function () {
    const selectedTag = this.value;
    storyResults.innerHTML = "";

    if (!selectedTag) return;

    const filtered = dummyStories.filter(story => story.tag === selectedTag);

    if (filtered.length === 0) {
      storyResults.innerHTML = "<p>No stories found for this tag.</p>";
      return;
    }

    filtered.forEach(story => {
      const card = document.createElement("div");
      card.classList.add("story-card");
      card.innerHTML = `
        <h4>${story.name}</h4>
        <p><strong>Story:</strong> ${story.story}</p>
        <p><strong>How they dealt with it:</strong> ${story.dealt}</p>
      `;
      storyResults.appendChild(card);
    });
  });

  // === ASK FOR ADVICE ===
  // === ASK FOR ADVICE ===
const adviseCard = document.querySelector(".advise");
const adviceSection = document.getElementById("adviceSection");
const questionForm = document.getElementById("questionForm");
const questionInput = document.getElementById("questionInput");
const questionsList = document.getElementById("questionsList");

let questions = [];
let questionIdCounter = 1;

adviseCard.addEventListener("click", () => {
  adviceSection.style.display = adviceSection.style.display === "block" ? "none" : "block";
  if (adviceSection.style.display === "block") {
    adviceSection.scrollIntoView({ behavior: "smooth" });
  }
  renderQuestions();
});

questionForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const questionText = questionInput.value.trim();
  if (!questionText) return;

  const newQuestion = {
    id: questionIdCounter++,
    text: questionText,
    responses: []
  };

  questions.push(newQuestion);
  questionInput.value = "";
  renderQuestions();
});

function renderQuestions() {
  questionsList.innerHTML = "";

  questions.forEach((question) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question-card";
    questionDiv.innerHTML = `
      <p><strong>Anonymous asked:</strong> ${question.text}</p>
      <form onsubmit="submitResponse(event, ${question.id})">
        <textarea placeholder="Write a response..." required></textarea><br>
        <button type="submit">Submit Response</button>
      </form>
      <div class="responses" id="responses-${question.id}"></div>
    `;

    questionsList.appendChild(questionDiv);
    renderResponses(question.id);
  });
}

function renderResponses(questionId) {
  const question = questions.find(q => q.id === questionId);
  const responsesDiv = document.getElementById(`responses-${questionId}`);
  responsesDiv.innerHTML = "";

  question.responses.forEach((res, index) => {
    const resDiv = document.createElement("div");
    resDiv.className = "reply-card";
    if (res.answered) resDiv.classList.add("answered");

    resDiv.innerHTML = `
      <p>${res.text}</p>
      <div class="actions">
        <span>👍 <span id="upvote-${questionId}-${index}">${res.upvotes}</span></span>
        <div>
          <button onclick="upvote(${questionId}, ${index})">Upvote</button>
          <button onclick="markAnswered(${questionId}, ${index})">Mark as Answered</button>
        </div>
      </div>
    `;
    responsesDiv.appendChild(resDiv);
  });
}

window.submitResponse = function (event, questionId) {
  event.preventDefault();
  const textarea = event.target.querySelector("textarea");
  const responseText = textarea.value.trim();
  if (!responseText) return;

  const question = questions.find(q => q.id === questionId);
  question.responses.push({
    text: responseText,
    upvotes: 0,
    answered: false
  });

  textarea.value = "";
  renderResponses(questionId);
};

window.upvote = function (questionId, index) {
  const question = questions.find(q => q.id === questionId);
  if (question) {
    question.responses[index].upvotes++;
    renderResponses(questionId);
  }
};

window.markAnswered = function (questionId, index) {
  const question = questions.find(q => q.id === questionId);
  if (question) {
    question.responses.forEach(r => r.answered = false); // Only one marked
    question.responses[index].answered = true;
    renderResponses(questionId);
  }
};
});  // <--- This closes the DOMContentLoaded listener function


const volunteerCard = document.querySelector(".volunteer");
const volunteerSection = document.getElementById("volunteerSection");
const volunteerForm = document.getElementById("volunteerForm");
const volunteerMessage = document.getElementById("volunteerMessage");

let volunteers = [];

volunteerCard.addEventListener("click", () => {
  volunteerSection.style.display = volunteerSection.style.display === "block" ? "none" : "block";
  if (volunteerSection.style.display === "block") {
    volunteerSection.scrollIntoView({ behavior: "smooth" });
  }
});

volunteerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("volunteerName").value.trim();
  const email = document.getElementById("volunteerEmail").value.trim();
  const skills = document.getElementById("volunteerSkills").value.trim();
  const availability = document.getElementById("volunteerAvailability").value.trim();

  if (!name || !email || !skills || !availability) {
    volunteerMessage.style.color = "black";
    volunteerMessage.textContent = "Please fill in all fields.";
    return;
  }

  volunteers.push({ name, email, skills, availability });

  volunteerMessage.style.color = "pink";
  volunteerMessage.textContent = "Thank you for signing up to volunteer! We will be in touch.";

  volunteerForm.reset       ``````````````````````````````````````````````````````````````````````````````````````````````````();
});

const backgrounds = [
  'images/portrait-happy-young-woman.jpg',
  'images/silhouette-group-people-have-fun-top-mountain-near-tent-sunset.jpg',
  'images/medium-shot-women-hugging-beach.jpg',
  'images/medium-shot-lesbian-couple-outdoors.jpg',
  'images/medium-shot-smiley-friends-taking-selfie.jpg',
  'images/people-office-work-day.jpg',
  'images/portrait-male-friends-sharing-affectionate-moment-friendship.jpg'
]

let i = 0;
setInterval(() => {
  document.body.style.backgroundImage = `url('${backgrounds[i]}')`;
  i = (i + 1) % backgrounds.length;
}, 5000); // changes every 5 seconds



