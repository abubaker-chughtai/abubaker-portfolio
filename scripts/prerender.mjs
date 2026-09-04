import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const server = await createServer({
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const appHtml = renderToString(createElement(App));
  const outputPath = new URL("../dist/index.html", import.meta.url);
  const template = await readFile(outputPath, "utf8");

  if (!template.includes('<div id="root"></div>')) {
    throw new Error("Prerender target was not found in dist/index.html");
  }

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  await writeFile(outputPath, html);
} finally {
  await server.close();
}
