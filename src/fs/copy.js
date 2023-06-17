import { access, constants } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { removeSmthing, copySmthing } from "../utils/utils.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const from = join(__dirname, "files");
  const to = join(__dirname, "files__copy");

  access(from, constants.F_OK, (err) => {
    if (err) throw new Error("We have not been able to copy from a non-existing folder");
  });
  access(to, constants.F_OK, async (err) => {
    if (!err) {
      throw new Error("The destination folder have already been created earlier");
    } else {
      copySmthing(from, to);
    }
  });
};

await copy();
