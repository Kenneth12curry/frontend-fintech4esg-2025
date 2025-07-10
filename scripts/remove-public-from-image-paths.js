import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesPath = path.join(__dirname, '../src/components/Fintech4esgInsights/articles');

fs.readdir(articlesPath, (err, files) => {
  if (err) {
    console.error('Erreur de lecture du répertoire des articles:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.md')) {
      const filePath = path.join(articlesPath, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Erreur de lecture du fichier ${file}:`, err);
          return;
        }

                const updatedContent = data.replace(/(image:\s*['"])\/public\/images\/blog\//, '$1/images/blog/').replace(/\(|\)/g, '');

        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
            console.error(`Erreur d'écriture du fichier ${file}:`, err);
          } else {
            console.log(`Chemins d'image mis à jour dans ${file}`);
          }
        });
      });
    }
  });
});