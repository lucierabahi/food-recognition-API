const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '35eabaa49d44498e9631438e8e505d7d'
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FOOD_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

module.exports = {
  handleApiCall
};