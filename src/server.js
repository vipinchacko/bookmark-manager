'use strict';

const app = require('./app');

const { PORT } = require('./config');
const { connectToDb } = require('./lib/db/db');

/**  connectToDb is async but we can still start using mongodb models without waiting for connection to be established. */
connectToDb();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
