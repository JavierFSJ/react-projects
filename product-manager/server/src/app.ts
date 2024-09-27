import Env from "./config/envs";
import createApplicationRouter from "./routes";
import Server from "./server";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: Env.PORT,
    router: createApplicationRouter()
  });

  server.start();
}
