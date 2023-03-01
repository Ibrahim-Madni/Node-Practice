import path from 'path';
import {fileUrltoPath} from 'url';

const getDirname = function (moduleUrl: string): string {
    const filename: string =fileUrltoPath(moduleUrl);
    return path.dirname(filename);
}

export {
    getDirname
};