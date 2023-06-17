import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const pathToFile = join(__dirname, "files/fileToRead.txt");
  const reader = createReadStream(pathToFile, { encoding: "utf-8" });
  reader.on("open", () => stdout.write("The first thing is open\n"));
  reader.on("ready", () => stdout.write("The second thing is ready\n"));
  reader.on("data", (chunk) => stdout.write(chunk));
  reader.on("end", () => stdout.write("There is an end of the file"));
};

await read();
