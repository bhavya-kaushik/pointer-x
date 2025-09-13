import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    settings: {
      react: {
        version: "detect"
      }
    },
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js, pluginReact }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: globals.browser 
    },
    rules: {
      "@/quotes": ["error", "double"],
      "@/semi": ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"]
]);
