import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, _, callback) {
      callback(null, `${chunk.toString().split("").reverse().join("")}\n`);
    },
  });
  stdin.pipe(reverseString).pipe(stdout);
};

await transform();
