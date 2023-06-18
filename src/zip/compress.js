import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { isFileExist } from "../utils/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const gzip = createGzip();
  const sourceFile = join(__dirname, "files/fileToCompress.txt");
  const destinationFile = join(__dirname, "files/archive.gz");
  isFileExist(sourceFile);

  const destinationStream = createWriteStream(destinationFile);
  const sourceStream = createReadStream(sourceFile);

  pipeline(sourceStream, gzip, destinationStream, (err) => {
    if (err) {
      console.error("We were not able to write your file into the archive, sorry", err);
    }
  });
};

await compress();
