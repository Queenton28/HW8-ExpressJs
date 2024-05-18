const express = require('express');
const router = express.Router();
const { Actor, Film, Category } = require('../models');

// Menampilkan seluruh list film
router.get('/films', async (req, res) => {
  const films = await Film.findAll();
  res.json(films);
});

// Menampilkan data film berdasarkan ID
router.get('/films/:id', async (req, res) => {
  const film = await Film.findByPk(req.params.id);
  res.json(film);
});

// Menampilkan seluruh list category
router.get('/categories', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

// Menampilkan list film berdasarkan category
router.get('/categories/:id/films', async (req, res) => {
  const films = await Film.findAll({ where: { categoryId: req.params.id } });
  res.json(films);
});

module.exports = router;
