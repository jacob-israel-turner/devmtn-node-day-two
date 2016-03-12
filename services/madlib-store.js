var madlibs = [
  [
    "The man with the ",
    " hat ",
    " the "
  ],
  [
    "Hey girl, you must be ",
    " because I can't ",
    " when I'm around you with a "
  ],
  [
    "I really like kittens because they are ",
    " and they ",
    " all over my "
  ]
]

module.exports = {
  get: function () {
    return madlibs;
  },
  add: function (newLib) {
    madlibs.push(newLib);
  },
  getRandom: function () {
    var index = Math.floor(Math.random() * madlibs.length);
    return madlibs[index];
  }
}













/* temp */
