import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

import db from './db/models';

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  })
})
