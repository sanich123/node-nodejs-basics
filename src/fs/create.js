import { writeFile, access, constants } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const targetFile = join(__dirname, "files/fresh.txt");
  access(targetFile, constants.F_OK, (err) => {
    if (err) {
      writeFile(targetFile, "I am fresh and young", (err) => {
        if (err) throw new Error(err.toString());
        console.log("The file has been successfully saved!");
      });
    } else {
      throw Error("Fs operation failed!");
    }
  });
};

await create();
