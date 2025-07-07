// scripts/build-posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

// Simuler __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, '../src/components/Fintech4esgInsights/articles');
const outputPath = path.join(__dirname, '../src/posts.json');
const outputDir = path.dirname(outputPath);

// ✅ Vérifier que le dossier d’articles existe
if (!fs.existsSync(postsDir)) {
  console.error(`❌ Dossier introuvable : ${postsDir}`);
  process.exit(1);
}

// ✅ Créer le dossier src/ si besoin
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

const posts = files.map((filename) => {
  const filePath = path.join(postsDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content: markdownContent } = matter(fileContent);
  const htmlContent = marked.parse(markdownContent);

  return {
    ...data,
    slug: filename.replace(/\.md$/, ''),
    content: htmlContent,
  };
});

fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2), 'utf-8');
console.log(`✅ ${posts.length} articles générés dans posts.json`);
