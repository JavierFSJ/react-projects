import DbConnection from "./config/db";
import Env from "./config/envs";
import createApplicationRouter from "./routes";
import Server from "./server";


(async () => {

  const db = new DbConnection({
    server:   Env.DB_SERVER,
    user:     Env.DB_USER,
    password: Env.DB_PASSWORD,
    database: Env.DB_NAME
  })

  db.connect();

  main();
})();

function main() {
  const server = new Server({
    port: Env.PORT,
    router: createApplicationRouter()
  });

  server.start();
}
