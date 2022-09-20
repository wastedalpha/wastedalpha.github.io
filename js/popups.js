
var clubArray = ['ew why', 'uh you sure mate', "dressed like that?!",
 "no chance", "can't afford entry", "lol good luck", "they don't accept $ETH",
  "at your age?", "nice try degen", "music sounds awful", "😂", "wrong",
   "pick again", "bouncer looks scary", "not feeling it", "looks dead", "£20 entry?!"];
var homeArray = ['nope, wrong', 'Obviously not', 'come ooooon', 'hahah try again',
 'no chance', 'dweeeeb', "it's 9pm wtf", "she changed the locks dude", "boring",
  "WTF", "it's friday mate", "unacceptable", "🤨", "got something better to do?",
   "no mints on tonight", "😲", "you're killing me here", "loser", "why"];

var bubbleHeight = 30;
var vw = window.innerWidth;
var vh = window.innerHeight;
var width = 100;
var pad = 6;

var elastic = Elastic.easeOut.config(0.3, 0.3);

function choose(option) {
  if (option == 'home'){array = homeArray}
  if (option == 'club'){array = clubArray}

const rando = array[Math.floor(Math.random() * array.length)];
return rando;
}

function homeChoose(){
  const rando = choose('home');
  return rando
}

function clubChoose(){
  const rando = choose('club');
  return rando
}

function createBubble(option) {

  var element = document.createElement("div");
  document.body.appendChild(element);
  element.className = "bubble";
  //element.style.height = bubbleHeight + "px";
  element.textContent = choose(option);

  return {
    element: element,
    placed: false,
    width: width,
    height: bubbleHeight,
    left: 0,
    top: 0,
    right: width,
    bottom: bubbleHeight
  };

}

function createClubBubble(){
  createBubble('club');
}

function createHomeBubble(){
  createBubble('home');
}

function placeBubble(bubble) {

  bubble.placed = true;
  bubble.width  = width;
  bubble.left   = randomInt(pad, vw - (bubble.width + pad));
  bubble.top    = randomInt(pad, vh - (bubble.height + pad));
  bubble.right  = bubble.left + bubble.width;
  bubble.bottom = bubble.top  + bubble.height
}

function animateBubble(option) {
var bubble = createBubble(option)
placeBubble(bubble)

  TweenLite.set(bubble.element, {
    width: bubble.width,
    x: bubble.left,
    y: vh
  });

  var tl = new TimelineLite({ onComplete: placeBubble, onCompleteParams: [bubble] })
    .to(bubble.element, random(0.5, 2), { autoAlpha: 1, y: bubble.top, ease: elastic }, 0.1)
    .add("leave", "+=" + 0)
    .add(function() { bubble.placed = false; }, "leave") // When bubble is leaving, it is no longer placed
    .to(bubble.element, 1, { autoAlpha: 0, y: -vh }, "leave");
}

function animateHomeBubble(){
  animateBubble('home');
}

function animateClubBubble(){
  animateBubble('club');
}


function randomInt(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return Math.floor(min + (max - min + 1) * Math.random());
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}
