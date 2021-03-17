import { Router } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRoute = Router();

categoriesRoute.post('/', (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = CategoriesRepository.listByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'Category already exists!' });
  }

  CategoriesRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRoute.get('/', (req, res) => {
  const allCategories = CategoriesRepository.list();

  return res.json(allCategories);
});

export { categoriesRoute };
