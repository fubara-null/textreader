
     const main          = document.getElementById('card'),
      voiceSelect   = document.getElementById('voice-list'),
      closeBtn      = document.getElementById('close-btn'),
      toggleBtn     = document.getElementById('toggle'),
      textarea      = document.getElementById('text'),
      readBtn       = document.getElementById('read');

   const words = new SpeechSynthesisUtterance();

  
let voices = [];


//get Accent
//get Accent
function getVoice(){
 voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const opt     = document.createElement('option');
    opt.value     = voice.name;
    opt.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(opt);
  })

}

//Set voice
function setVoice(e){
  words.voice = voices.find(voice => voice.name === e.target.value );
}

//set the words to speak
function setWords(text){
  words.text = text;
}

//set speaking ability
function speak(){
   speechSynthesis.speak(words);

}

//Add event Listener to choose voices
voiceSelect.addEventListener('change', setVoice);

//Add event listener to change voices
speechSynthesis.addEventListener('voiceschanged', getVoice);

readBtn.addEventListener('click', () => {
  setWords(textarea.value);
  speak();
});




const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

data.forEach(createCards);

function createCards(cards){
  const card = document.createElement('div')
  const {image, text} = cards;
  card.classList.add('card')
  card.innerHTML = `<img src='${image}' alt='${text}'>
    <p class='info'>${text}</p>
  `;
  card.addEventListener('click', () =>{
     setWords(text);
     speak();

          // Add active effect
     card.classList.add('active');
     setTimeout(() => card.classList.remove('active'), 800);
        
  });
    main.appendChild(card);

}

toggleBtn.addEventListener('click', () =>
document.getElementById('text-wrap').classList.toggle('show')
);

closeBtn.addEventListener('click', () =>
document.getElementById('text-wrap').classList.remove('show')
);
getVoice();