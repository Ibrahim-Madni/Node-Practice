import path from "path";
import { fileURLToPath } from "url";
const getDirname = function (moduleUrl) {
  const filename = fileURLToPath(moduleUrl);
  return path.dirname(filename);
};
export { getDirname };
