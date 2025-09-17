import dotenv from 'dotenv';
dotenv.config();

import { start } from './app';

const PORT = process.env.PORT || 4000;

start()
  .then((app) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start app', err);
    process.exit(1);
  });
