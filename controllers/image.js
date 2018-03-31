const clarifai = require("clarifai");

const clarifaiApp = new clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

const handleApiCall = (req, res) => {
  clarifaiApp.models
    .predict(clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(error => res.status(400).json("unable to work with API"));
};

const handleImage = db => (req, res) => {
  const { id } = req.body;

  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then(entries => res.json(entries[0]))
    .catch(error => res.status(400).json("unable to update entries"));
};

module.exports = {
  handleImage,
  handleApiCall
};
