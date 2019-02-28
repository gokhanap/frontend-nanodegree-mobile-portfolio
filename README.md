![Website Performance Optimization preview](https://gokhanapaydin.com/img/project3_1200.jpg)

# Website Performance Optimization portfolio project

This projects aim is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques from [Critical Rendering Path course](https://www.udacity.com/course/ud884).

## How to run
- NodeJs and gulp should be installed.
- Download the repository.
- Head to the folder and type `npm install`.
- Type `gulp` to test automation.
- Any file changes made on `src` folder will be watched and optimized files will be processed to `dist` folder.
- Start checking by `dist/index.html` file.
- Click to check github hosted version [online](https://gokhanap.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html).

## Optimizations
### Part 1: Optimize PageSpeed Insights score for index.html
- Web font deactivated.
- Script and link tags moved before the closing body tag.
- `style.css` inlined.
- Media attribute added to print.css to reduce critical resources.
- Async attribute added to script js sources to reduce critical resources.
- HTML, CSS, JS files minified with gulp.
- Images optimized with gulp.

Page speed score achieved: 94/100 for mobile & 93/100 for Desktop.

### Part 2: Optimize Frames per Second in pizza.html
- determineDx function removed.
- Unnecesary DOM accesses in for functions(changePizzaSizes, updatePositions, pizzasDiv) avoided.
- Time to generate pizzas on load: 26.95ms
- Time to resize pizzas: 0.80ms
- will-change added to mover class to reduce painting.

## Project Criterias
#### PageSpeed Score
- **Critical Rendering Path** - `index.html` achieves a PageSpeed score of at least 90 for Mobile and Desktop.

#### Getting Rid of Jank
- **Frame Rate** - Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.
- **Computational Efficiency** - Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page. Resize time is shown in the browser developer tools.

#### Documentation
- **README** - A README file is included detailing all steps required to successfully run the application and outlines the optimizations that the student made in `index.html` and `views/js/main.js` for pizza.html.
- **Comments** - Comments in `views/js/main.js` for `pizza.html` are present and effectively explain longer code procedures.

#### Additionals
- Research, identify and use build tools (For example: Gulp - see Web Tooling and Automation) to automatically perform optimizations such as minification of CSS and JS and image optimizations. If build tools are implemented, include the package.json and js files as well as both the source and the destination directories in the submission. If build tools are used, the code in the dist folder will be evaluated, so be sure the dist folder contains a working, post-task-runner, version of the project. All steps necessary to download, configure and implement the task runner on the reviewer's desktop should be included in the README.md file.
