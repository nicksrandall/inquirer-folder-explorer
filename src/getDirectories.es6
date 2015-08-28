'use strict';

import fs from 'fs';
import path from 'path';


export default function (srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}
