
Sweet Shiba Sketches
![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 

A portfolio website built with [Astro](https://astro.build) showcasing the art of Sweet Shiba Sketches.


## Overview

This project serves as a digital portfolio for Sweet Shiba Sketches, a collection of illustrations and comics created by DeerDog and Digi. It's built using Astro, taking advantage of its static site generation capabilities and performance optimizations.

## Key Features

*   Astro-powered: Built on the Astro framework
*   Clean, responsive design: Provides an optimal viewing experience across various devices.
*   Themeable: Offers customization options for colors and overall appearance.

## Under the Hood
This project is built on top of [Fuwari](https://github.com/saicaca/fuwari), a static blog template built with [Astro](https://astro.build).

## Content Management

This site uses [Contentful](https://www.contentful.com/) as its content management system.  Blog posts and other content are created and managed within Contentful and then dynamically rendered on the site.

## 📝 Blog Posts

Blog post content is written in Markdown within Contentful's Rich Text editor. The content can include embedded assets and other rich media supported by Contentful.

## 🧩 Contentful Rich Text Features

- **Embedded Content**: The site is configured to handle embedded content from Contentful, such as YouTube video embeds.
- **Markdown Support**: Standard Markdown syntax is supported within the Rich Text editor.

## ⚡ Commands (Additional)

All commands are run from the root of the project, from a terminal:

| Command              | Action                                                                                                 |
| :------------------- | :----------------------------------------------------------------------------------------------------- |
| `pnpm install`       | Installs dependencies                                                                                  |
| `pnpm dev`           | Starts local dev server at `localhost:4321`                                                             |
| `pnpm build`         | Build your production site to `./dist/`                                                                |
| `pnpm preview`       | Preview your build locally, before deploying                                                            |
| `pnpm check`         | Run checks for errors in your code                                                                     |
| `pnpm format`        | Format your code using Biome                                                                          |
| `pnpm astro ...`     | Run CLI commands like `astro add`, `astro check`                                                         |
| `pnpm astro --help`  | Get help using the Astro CLI                                                                           |
## 📄 License

This project is licensed under the MIT License.
