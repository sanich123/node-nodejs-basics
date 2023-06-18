import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { stdout } from "process";
import { isFileExist } from "../utils/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileName = join(__dirname, "files/fileToRead.txt");
  isFileExist(fileName);
  const readableStream = createReadStream(fileName);
  readableStream.on("open", () => stdout.write("There is a start in this tale\n"));
  readableStream.on("data", (data) => stdout.write(data));
  readableStream.on("end", () => stdout.write("\nТут и сказочке конец"));
};

await read();
