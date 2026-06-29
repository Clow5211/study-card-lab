const state = {
  topics: window.QUIZ_DATA.topics,
  activeTopicId: null,
  questionIndex: 0,
  answers: JSON.parse(localStorage.getItem("agenticrl-quiz-answers") || "{}"),
  filter: ""
};

const elements = {
  libraryCount: document.querySelector("#libraryCount"),
  topicList: document.querySelector("#topicList"),
  searchInput: document.querySelector("#searchInput"),
  sourcePath: document.querySelector("#sourcePath"),
  topicTitle: document.querySelector("#topicTitle"),
  summaryList: document.querySelector("#summaryList"),
  scoreText: document.querySelector("#scoreText"),
  questionIndex: document.querySelector("#questionIndex"),
  questionType: document.querySelector("#questionType"),
  questionText: document.querySelector("#questionText"),
  optionList: document.querySelector("#optionList"),
  feedback: document.querySelector("#feedback"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  resetButton: document.querySelector("#resetButton"),
  resourceLink: document.querySelector("#resourceLink")
};

function saveAnswers() {
  localStorage.setItem("agenticrl-quiz-answers", JSON.stringify(state.answers));
}

function currentTopic() {
  return state.topics.find((topic) => topic.id === state.activeTopicId) || state.topics[0];
}

function currentQuestion() {
  return currentTopic().questions[state.questionIndex];
}

function answerKey(topicId, questionId) {
  return `${topicId}:${questionId}`;
}

function getSavedAnswer(topicId, questionId) {
  return state.answers[answerKey(topicId, questionId)];
}

function setSavedAnswer(topicId, questionId, optionId) {
  state.answers[answerKey(topicId, questionId)] = optionId;
  saveAnswers();
}

function filteredTopics() {
  const query = state.filter.trim().toLowerCase();
  if (!query) return state.topics;
  return state.topics.filter((topic) => {
    const haystack = [topic.title, topic.source, ...topic.summary].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function renderTopicList() {
  const topics = filteredTopics();
  elements.libraryCount.textContent = `${state.topics.length} 个知识点`;
  elements.topicList.innerHTML = "";

  topics.forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-button${topic.id === state.activeTopicId ? " active" : ""}`;
    button.innerHTML = `<strong>${topic.title}</strong><span>${topic.questions.length} 题 · ${topic.source}</span>`;
    button.addEventListener("click", () => {
      state.activeTopicId = topic.id;
      state.questionIndex = 0;
      render();
    });
    elements.topicList.appendChild(button);
  });
}

function renderSummary(topic) {
  elements.summaryList.innerHTML = "";
  topic.summary.forEach((item) => {
    const div = document.createElement("div");
    div.className = "summary-item";
    div.textContent = item;
    elements.summaryList.appendChild(div);
  });
}

function renderScore(topic) {
  const correct = topic.questions.filter((question) => {
    return getSavedAnswer(topic.id, question.id) === question.answer;
  }).length;
  elements.scoreText.textContent = `${correct} / ${topic.questions.length}`;
}

function renderQuestion(topic) {
  const question = currentQuestion();
  const saved = getSavedAnswer(topic.id, question.id);
  elements.questionIndex.textContent = `第 ${state.questionIndex + 1} 题`;
  elements.questionType.textContent = question.type === "single" ? "单选" : "多选";
  elements.questionText.textContent = question.prompt;
  elements.optionList.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    const isSelected = saved === option.id;
    const isCorrect = option.id === question.answer;
    button.className = "option-button";
    if (saved && isCorrect) button.classList.add("correct");
    if (saved && isSelected && !isCorrect) button.classList.add("wrong");
    button.innerHTML = `<span class="option-key">${option.id}</span><span>${option.text}</span>`;
    button.addEventListener("click", () => {
      setSavedAnswer(topic.id, question.id, option.id);
      render();
    });
    elements.optionList.appendChild(button);
  });

  if (saved) {
    const verdict = saved === question.answer ? "答对了" : `答错了，正确答案是 ${question.answer}`;
    elements.feedback.className = "feedback show";
    elements.feedback.textContent = `${verdict}。${question.explanation}`;
  } else {
    elements.feedback.className = "feedback";
    elements.feedback.textContent = "";
  }

  elements.prevButton.disabled = state.questionIndex === 0;
  elements.nextButton.disabled = state.questionIndex === topic.questions.length - 1;
}

function render() {
  const topic = currentTopic();
  state.activeTopicId = topic.id;
  elements.sourcePath.textContent = topic.source;
  elements.topicTitle.textContent = topic.title;
  if (elements.resourceLink) {
    elements.resourceLink.href = topic.source;
    elements.resourceLink.textContent = topic.source.endsWith(".json") ? "完整题库" : "来源文件";
  }
  renderTopicList();
  renderSummary(topic);
  renderScore(topic);
  renderQuestion(topic);
}

elements.searchInput.addEventListener("input", (event) => {
  state.filter = event.target.value;
  renderTopicList();
});

elements.prevButton.addEventListener("click", () => {
  state.questionIndex = Math.max(0, state.questionIndex - 1);
  render();
});

elements.nextButton.addEventListener("click", () => {
  const topic = currentTopic();
  state.questionIndex = Math.min(topic.questions.length - 1, state.questionIndex + 1);
  render();
});

elements.resetButton.addEventListener("click", () => {
  const topic = currentTopic();
  topic.questions.forEach((question) => {
    delete state.answers[answerKey(topic.id, question.id)];
  });
  saveAnswers();
  render();
});

render();
