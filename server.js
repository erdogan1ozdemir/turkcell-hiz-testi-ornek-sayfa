// Sıfır bağımlılıklı statik sunucu · Railway/Render/Node host'ları için.
// Vercel statik olarak servis eder ve bu dosyayı yok sayar (yalnızca PORT'lu host'lar kullanır).
// "/" -> index.html (rapor), "/demo" -> demo/index.html (tasarım). cleanUrls davranışı.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8', '.woff2': 'font/woff2', '.woff': 'font/woff'
};

function resolve(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let fp = path.normalize(path.join(ROOT, p));
  if (!fp.startsWith(ROOT)) return null;                 // path traversal koruması
  if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) fp = path.join(fp, 'index.html');
  else if (!fs.existsSync(fp) && fs.existsSync(fp + '.html')) fp = fp + '.html';
  else if (!fs.existsSync(fp) && fs.existsSync(path.join(fp, 'index.html'))) fp = path.join(fp, 'index.html');
  return fs.existsSync(fp) && fs.statSync(fp).isFile() ? fp : null;
}

http.createServer((req, res) => {
  const fp = resolve(req.url === '/' ? '/index.html' : req.url);
  if (!fp) { res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }); res.end('<h1>404</h1>'); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(fp)] || 'application/octet-stream' });
  fs.createReadStream(fp).pipe(res);
}).listen(PORT, () => console.log('Turkcell Hız Testi raporu http://localhost:' + PORT + ' adresinde'));
