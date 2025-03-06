// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://languint.github.io",
  base: "/manim-docs",
  
  integrations: [
    starlight({
      title: "@rbxts/manim",
      logo: { src: "./src/assets/logo.svg", replacesTitle: true },
      customCss: ["./src/style.css"],
      social: {
        github: "https://github.com/languint/manim",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Starting Guide", slug: "guides/starting" },
            { label: "Initialization", slug: "guides/initialization" },
          ],
        },
        {
          label: "Reference",
          items: [
            "reference/registry",
            {
              label: "Objects",
              items: [
                "reference/objects/mobject",
                "reference/objects/scene",
                "reference/objects/scenewithcamera",
              ],
            },
            {
              label: "Decorators",
              items: [
                "reference/decorators/ticker",
                "reference/decorators/disabled",
                "reference/decorators/scene",
              ],
            },
          ],
        },
      ],
    }),
  ],
});
