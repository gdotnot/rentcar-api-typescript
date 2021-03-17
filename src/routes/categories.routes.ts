import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoute = Router();

const categories = [];

categoriesRoute.post('/categories', (req, res) => {
  const { name, description } = req.body;

  const newCategory = {
    id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(newCategory);

  return res.status(201).json(newCategory);
});

export { categoriesRoute };
