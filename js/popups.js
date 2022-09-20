
var clubArray = ['Ew why', 'Lol you sure mate?!', "Should've dressed up a bit surely"];
var homeArray = ['Nope, wrong', 'Obviously not loser', 'Come ooooon'];

var bubbleHeight = 70;
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
  element.style.height = bubbleHeight + "px";
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
    .to(bubble.element, random(0.5, 2), { autoAlpha: 1, y: bubble.top, ease: elastic }, random(10))
    .add("leave", "+=" + random(5, 10))
    .add(function() { bubble.placed = false; }, "leave") // When bubble is leaving, it is no longer placed
    .to(bubble.element, random(0.5, 2), { autoAlpha: 0, y: -vh }, "leave");
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
