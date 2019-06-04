var photos = [
  "http://www.hd-freeimages.com/uploads/large/hd-inspirational-wallpapers/free-hd-inspirational-wallpapers-desktop-download.jpg",
  "http://www.christian-psychology.net/images/synapses.jpg",
  "http://www.energyenhancement.org/ENERGY-BLOCKAGE-HIDDEN-POWER-OF-YOUR-SOUL.jpg",
  "http://isoulscience.com/wp-content/uploads/2015/02/3d-earth.jpg",
  "https://i.vimeocdn.com/video/465657593.jpg?mw=1920&mh=1080&q=70",
  "http://www.publicdomainpictures.net/pictures/170000/velka/hintergrund-tapete-14609786765KL.jpg   ",
  "http://images.yalantis.com/uploads/article/image/7/virtual_reality-wallpaper-1680x1050.jpg",
  "https://i.ytimg.com/vi/Rj_ISTkZYvY/maxresdefault.jpg",
  "http://i2.wp.com/www.scriptonitedaily.com/wp-content/uploads/2013/10/C1.jpg",
  "http://juliansarokin.com/wp-content/uploads/2014/10/maxresdefault.jpg ",
  "http://www.milegu.org/wp-content/uploads/2012/03/coverart1080p.jpg "
];

var quotes = [
  [
    "Men (people) are rarely aware of the real reasons which motivate their actions. Edward  Bernays"
  ],
  [
    "The universe is immaterial-mental and spiritual.”  – R.C. Henry, Professor of Physics and Astronomy at Johns Hopkins University"
  ],
  [
    "“Observation not only disturbs what has to be measured, they produce it. We compel the electron to assume a definite position. We ourselves produce the results of the measurement.”     Institute of Noetic Sciences,USA."
  ],
  [
    "“We are what we think, all that we are arises with our thoughts, with our thoughts we make the world.” – Gautama Buddha"
  ],
  [
    "“Control of consciousness determines the quality of life.” - Mihaly Csikszentmihalyi, Flow"
  ],
  [
    "“When you change the way you look at things, the things you look at change.” - Wayne W. Dyer"
  ],
  [
    "The power of the word is real whether or not you are conscious of it. - Sonia Choquette"
  ],
  [
    "“As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.” - Albert Einstein"
  ],
  [
    "“Theology, philosophy, metaphysics, and quantum physics are merely ways for God to have his smart people believe in him” ― Jeremy Aldana"
  ]
];

function random(e) {
  return Math.floor(Math.random() * e.length + 1 - 1);
}

function randombackGroundPhoto() {
  var one = random(photos);
  return photos[one];
}

function randomQuote() {
  var two = random(quotes);
  return quotes[two];
}

var button = document.getElementById("btn");

button.onclick = function() {
  var i = document.getElementById("ican");
  var ii = document.getElementById("one");
  var ranQuote = randomQuote();
  var ranBack = randombackGroundPhoto();
  i.background = ranBack;
  ii.textContent = ranQuote;
};
