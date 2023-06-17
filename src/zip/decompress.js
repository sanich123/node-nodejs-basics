import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { isFileExist, isFileNotExist } from "../utils/utils.js";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const gzip = createGunzip();
  const sourceFile = join(__dirname, "files/archive.gz");
  const destinationFile = join(__dirname, "files/fileToCompress.txt");
  isFileExist(sourceFile);
  isFileNotExist(destinationFile);

  const sourceStream = createReadStream(sourceFile);
    const destinationStream = createWriteStream(destinationFile);

  pipeline(sourceStream, gzip, destinationStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
    }
  });
};

await decompress();
