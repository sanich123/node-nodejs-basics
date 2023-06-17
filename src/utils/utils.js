import { cp, access, constants, unlink } from "fs";
import { rm } from "fs/promises";

export function copySmthing(origin, destination) {
  return cp(origin, destination, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

export async function removeSmthing(folder) {
  return await rm(folder, { recursive: true, force: true });
}

export async function isFileExist(pathToFile) {
  return await access(pathToFile, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
}

export async function isFileNotExist(pathToFile) {
  return await access(pathToFile, constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
}

export async function unlinkFile(pathToFile) {
  return await unlink(pathToFile, (err) => {
    if (err) {
      throw new Error("We were not able to unlink this existing file");
    }
  });
}
