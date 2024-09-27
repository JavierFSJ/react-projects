import 'dotenv/config';
import { get } from 'env-var';

const buildEnv = () => ({
  PORT: get('PORT').required().asPortNumber(),
  DB_SERVER: get('DB_SERVER').required().asString(),
  DB_USER: get('DB_USER').required().asString(),
  DB_PASSWORD: get('DB_PASSWORD').required().asString(),
  DB_NAME: get('DB_NAME').required().asString()
})

const Env = buildEnv();

Object.freeze(Env);
Object.seal(Env);

export default Env;