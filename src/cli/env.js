import { env } from "process";

const parseEnv = () => console.log(`SOME=${env.SOME}, RSS_foo=${env.RSS_foo}, RSS_bar=${env.RSS_bar}`);

parseEnv();
