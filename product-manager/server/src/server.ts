import express, { Router } from 'express';

interface Options {
  port: number;
  router: Router;
}

class Server {

  private app = express();
  private readonly port: number;
  private readonly router: Router;

  constructor(options: Options) {
    const { port, router } = options;
    this.port = port;
    this.router = router;
  }

  async start() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(this.router);

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;