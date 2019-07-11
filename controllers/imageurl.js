const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.API_CLARIFAI
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