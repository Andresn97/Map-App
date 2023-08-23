const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetRootPath = './src/environments';
const targetPath = `${targetRootPath}/environment.ts`;

const envFileContent = `
  export const environment = {
    maps_key: "${ process.env['MAPS_KEY'] }",
  };
`;

mkdirSync( targetRootPath, { recursive: true } );

writeFileSync( targetPath, envFileContent );