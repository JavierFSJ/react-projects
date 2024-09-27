import 'dotenv/config';
import { get } from 'env-var';

const buildEnv = () => ({
  PORT: get('PORT').required().asPortNumber(),
})

const Env = buildEnv();

Object.freeze(Env);
Object.seal(Env);

export default Env;