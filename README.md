# svd-client-sample

This is a code sample abstracted from the source code of my former E-commerce website selling digital products.

[Live Demo](https://svd-client-sample.vercel.app/).

The code sample includes only bundle pages, About, and FAQ pages.

## Table of Contents

[Project Packages and Components](#project-packages-and-components)  
[Project Structure and Code Style](#project-structure-and-code-style)  
[Known Issues and Potential Optimizations](#known-issues-and-potential-optimizations)  
[How to Run the App](#how-to-run-the-app)

## Project Packages and Components

This project uses

- React + Next.js (for server-side rendering and static page generation);

- React Bootstrap (for Bootstrap grid and navigation bar component with custom styling);

- SCSS (mostly variables and mixins + a few functions) with CSS modules for styling. The project has responsive UI with custom styling.

- React hooks, including standard hooks (`useEffect`, `useState`, `useCallback`) and custom hooks (`useIsHovered`, `useIsMounted`, available in the `hooks` folder). The `useState` hook is used to store page-specific state;

- Redux for storing global app state (for example, checkout cart contents), `redux-persist` for persisting Redux store locally, and `redux-state-sync` for syncing Redux state across different browser tabs;

- a custom inline image gallery component with thumbnails. Third-party image gallery solutions did not fit my design concept, so I rolled out a fast gallery solution based on existing image galleries used on digital asset marketplaces.

Clicking on the large image preview in the inline image gallery opens the image directly in the browser.

- ESLint with custom config for analyzing the code;

- Jest with Enzyme for unit testing (sample tests are available in `src/components/common/Tags/Tag/Tag.test.js` and `src/components/common/Breadcrumbs/Breadcrumb/Breadcrumb.test.js`).

## Project Structure and Code Style

Components are arranged by folders:

- `pages` - app routes (Next.js routing is filesystem-based). They render top-level route-specific components and export `getServerSideProps` functions (for example, in `pages/bundle/[slug].js`) to enable server-side rendering.

- `src`
  - `components` - app components.
    - `assets` - inline SVG icons.
    - `common` - components, used often and on multiple pages, but not on all pages.
    - `dialogs` - modal dialogs/popups.
    - `pages` - route-specific components.
    - `shared` - components, present on all (or almost all) pages, like app navigation bar and footer.
  - `constants` - help avoid using "magic" strings and numbers.
  - `data` - hardcoded data for preview purposes.
  - `hooks` - custom hooks.
  - `redux` - global Redux store, Redux slices (which are organized by feature folders and contain feature-specific initial state, actions, reducers, and selectors), and custom dummy server-side storage.
  - `styles` - global app styles.
  - `utils` - small focused utility functions for working with strings, arrays, data etc.

Code style is validated by ESLint with a custom config (run `npm run lint` from the project folder) and manually.

Imports in each module are organized by categories and alphabetically, by module name and import names.

Exported constants are all caps, constants used locally are camel case. Object constants are named in singular, array constants are named in plural. Keys of object constants are in lowercase.

## Known Issues and Potential Optimizations

- There is a known issue with Next.js that it sometimes does not preserve the correct order of CSS chunk imports in development builds. Because of that, some overridden Bootstrap styles (padding and margins) might be re-enabled in development builds. Please use the production mode to preview the final styling.

- Large complex components (in particular, page containers) could be split into smaller and simpler components to simplify readability, maintenance, and testing. For now, the app layout is frequently changed, and splitting the components was not deemed a priority.

- The project is very image-heavy by design, the size of loaded images is much higher than the size of JS and CSS code, and thus the following optimizations were not planned for the initial release because for such type of project they would be only marginally useful:

- The project uses Bootstrap grid (to place components) with custom styling to speed up development and make collaboration with other developers, if necessary, easier. It is possible to replace Bootstrap navigation bar classes with custom code and instead of importing the whole React Bootstrap code import only Bootstrap grid. This would allow to remove several tens of kilobytes of code from page imports.

- Almost all SCSS variables and mixins are contained in the `theme.scss` file, for simplicity and development speed. This file is automatically prepended to each SCSS file with SASS loader. This file can be split into smaller files to be imported on demand.

## How to Run the App

Please install or update `npm` command-line utility.

`cd` in Terminal to the app's root directory (where `package.json` file is located) and run `npm install` to install the packages.

To run the development build (slow, with debugging info and hot module reloading on code change), run

```
npm run dev
```

To run the production build, run

```
npx next build
npx next start
```

Then open `http://localhost:3000/` in your browser.

## Demo

[Live Demo](https://svd-client-sample.vercel.app/)
