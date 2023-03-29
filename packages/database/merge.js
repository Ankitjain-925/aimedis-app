const { glob } = require('glob');
const fs = require('fs');

const config = `
generator client {
    provider        = "prisma-client-js"
}
  
datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}
`;

const readFile = (path, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

const writeFile = (path, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

const main = async () => {
  console.log('Reading files...');
  const data = [];
  const filePaths = await glob(['./prisma/**/*.prisma']);
  console.log(filePaths);
  console.log('Merging files...');
  for (let i = 0; i < filePaths.length; i++) {
    const filePath = filePaths[i];
    if (filePath.indexOf('schema.prisma') < 0) {
      const file = (await readFile(filePath))
        .split('\n')
        .filter((line) => line.indexOf('import') < 0)
        .join('\n')
        .replace(/generator[^}]*}/g, '');
        data.push(
          `\n//BEGIN ${filePath.replace('prisma/', '')}\n` +
            file +
            `\n//END ${filePath.replace('prisma/', '')}\n`
        );
    }
  }
  data.unshift(config);
  await writeFile('prisma/schema.prisma', data.join('\n'));
  console.log('Merged successfully!');
};

main();
