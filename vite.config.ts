import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const app = express();

  app.use(cors());

  return {
    node: true,
    server: {
      host: "::",
      port: 8080,
      middleware: [
        (req: Request, res: Response, next: NextFunction) => {
          app(req, res, next);
        },
      ],
      proxy: {
        "/api": {
          target: "https://wakatime.com/api/v1/users/current/stats/last_7_days",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      NodeGlobalsPolyfillPlugin({
        process: true,
        buffer: true,
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
