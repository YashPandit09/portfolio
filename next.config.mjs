import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root so stray lockfiles in parent folders can't
  // confuse Turbopack's root inference (breaks the client manifest).
  turbopack: { root: __dirname },
};

export default nextConfig;
