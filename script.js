const advice = document.getElementById("advice");
const adviceId = document.getElementById("adviceId");
const button = document.getElementById("button");

const renderAdvice = (id, text) => {
    adviceId.textContent = id;
    advice.textContent = text;
};

const getAdvice = async () => {
  const url = "https://api.adviceslip.com/advice";

  let adviceBubble = "";
  let adviceId = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    adviceId = `ADVICE #${data.slip.id}`;
    adviceBubble = `${data.slip.advice}`;
  } catch (e) {
    console.log(e);
  }

  renderAdvice(adviceId, adviceBubble);
  giveMeAdviceAJoke(adviceBubble);
}

const giveMeAdviceAJoke = (advice) => {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: advice,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

button.addEventListener("click", getAdvice);