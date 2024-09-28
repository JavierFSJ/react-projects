import { Sequelize } from "sequelize-typescript";

type Config = {
  server: string;
  user: string;
  password: string;
  database: string;
};

class DbConnection {
  private db: Sequelize;

  constructor(config: Config) {
    const { server, user, password, database } = config;
    this.db = new Sequelize(database, user, password, {
      host: server,
      dialect: "mariadb",
      models: [__dirname + "/../models/**/*.ts"],
    });
  }

  public async connect() {
    try {
      this.db.sync();
      console.log("Database connected");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }
}

export default DbConnection;
