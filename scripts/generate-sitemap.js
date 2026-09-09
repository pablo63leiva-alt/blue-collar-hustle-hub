#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;

var SITE_URL = 'https://tradelift.is-a.dev';
var ROOT = path.resolve(__dirname, '..');
var mainPages = ['index.html', 'trades.html', 'getting-started.html', 'resources.html'];
var pages = fs.readdirSync(ROOT).filter(function (f) {
  return mainPages.includes(f);
});

var urls = pages.map(function (file) {
  var loc = SITE_URL + '/' + file;
  var filePath = path.join(ROOT, file);
  var lastmod;
  try {
    lastmod = execSync('git log -1 --format=%ci -- ' + filePath, { cwd: ROOT })
      .toString()
      .trim()
      .split(' ')[0];
  } catch (_) {
    lastmod = new Date().toISOString().split('T')[0];
  }
  var priority = file === 'index.html' ? '1.0' : '0.8';
  return '  <url>\n    <loc>' + loc + '</loc>\n    <lastmod>' + lastmod + '</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>' + priority + '</priority>\n  </url>';
});

var xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.join('\n') + '\n' +
  '</urlset>\n';

var outPath = path.join(ROOT, 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log('sitemap.xml written with ' + urls.length + ' URLs');
