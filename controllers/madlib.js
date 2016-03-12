var madlibStore = require('../services/madlib-store')

module.exports = {
  createMadlib: function (req, res) {
    if (!req.body || !Array.isArray(req.body) || req.body.length !== 3) {
      return res.status(400).json('Malformed request body');
    }
    madlibStore.add(req.body)
    console.log(madlibStore.get())
    res.json('successfully added')
  },
  getMadlib: function (req, res) {
    if (!req.query.verb || !req.query.noun || !req.query.adj) {
      return res.status(400).json('Malformed query string');
    }
    res.json(generateMadlib(req.query.adj, req.query.verb, req.query.noun));
  },
  getSpecificMadlib: function (req, res) {
    if (!req.query.verb || !req.query.noun || !req.query.adj) {
      return res.status(400).json('Malformed query string');
    }
    var libIndex = req.params.madlibId;
    res.json(generateMadlib(req.query.adj, req.query.verb, req.query.noun, libIndex));
  }
}

function generateMadlib (adj, verb, noun, index) {
  var originalLib
  if (index) {
    var allLibs = madlibStore.get();
    originalLib = allLibs[index];
  } else {
    originalLib = madlibStore.getRandom();
  }
  var finalLib = originalLib[0] + adj + originalLib[1] + verb + originalLib[2] + noun + '.';
  return finalLib;
}


// http://accessories.us.dell.com/sna/category.aspx?c=us&category_id=4009&cs=19&l=en&s=dhs&&ST=best%20computer%20monitors&dgc=ST&cid=285949&lid=5464195&acd=123098073120560&ven1=sApCgRZin&ven2=e&ven3=412402905023006584
// http://localhost:9001/api/madlib?hello=world











/* temp */
