// Plik: /data/articles.js

// 1. Pobieramy artykuły z folderu 'articles' (dlatego ścieżka to ./articles/index)
export { allArticles, articles } from './articles/index';

// 2. Pobieramy resztę danych z pliku blogData.js
export { categories, recentPosts, tags } from './blogData';