require("dotenv").config();
const { Client } = require("pg");

(async () => {
  const url = process.env.DATABASE_URL;
  console.log("DATABASE_URL =", url);

  const c = new Client({ connectionString: url });
  await c.connect();
  const r = await c.query("select current_user, current_database()");
  console.log(r.rows);
  await c.end();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
