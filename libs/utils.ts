import path from "path";
import { fileURLToPath } from "url";

const getDirname = function (moduleUrl: string): string {
  const filename: string = fileURLToPath(moduleUrl);
  return path.dirname(filename);
};

export { getDirname };
