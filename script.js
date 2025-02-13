const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Ты лучшее из всего, что со мной происходило! Спасибо, что ты у меня есть! Я безумно сильно тебя люблю!!! И с днем Святого Валентина! Всегда твоя Алёнка♥♥♥";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN21sYXB4NzMzM3g0aWdxZGd1OXdkMGUycGpwOTYyd2Q2czZ1cTJ1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qFmdpUKAFZ6rMobzzu/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});