// @ts-nocheck
const Fit = require('../models/fit');

//créer un resto
exports.newfit = (req, res, next) => {
  const fit = new Fit({
    cibles: req.body.cibles, 
    exercice: req.body.exercice, 
    frozen: false,
    serie: req.body.serie,
    detail: req.body.detail, }); 
  fit.save()
    .then(() => { res.status(201).json({ message: 'fit céer' }); })
    .catch((error) => { res.status(401).json({ error: 'Invalid requete!'+error }); });
};

//liste de tous les resto
exports.getAllFit = (req, res, next) => {
  Fit.find()
  .then((fits) => { res.status(200).json({ fits }); })
  .catch((error) => { 
    console.log(error)
    res.status(401).json({ error: 'Invalid request!' }); 
  }); 
};
//pour un resto
exports.getOneFit = (req, res, next) => {
  Fit.findById({ _id: req.params.id })
  .then((fit) => { res.status(200).json({ data: fit }); })
  .catch((error) => { res.status(401).json({ error: 'Invalid request!' }); }); 
};

exports.updateFit = (req, res, next) => {
  const fit = { ...req.body }; 
  Fit.updateOne({ _id: req.params.id }, { ...resto, _id: req.params.id })
  .then(() => { res.status(200).json({ message: 'mise à jour' }); })
  .catch((error) => { res.status(401).json({ error: 'Invalid request!' }); }); 
};
exports.deleteFit = (req, res, next) => {
  Fit.findOne({ _id: req.params.id })
  .then(fit => { 
    Fit.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'todo supprimé' }))
    .catch(error => res.status(401).json({ error: 'Invalid request!' })); 
  })
  .catch(error => res.status(401).json({ error: 'Invalid request!' })); 
};