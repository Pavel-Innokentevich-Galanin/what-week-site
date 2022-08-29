# README

Menu:

- [Task](#task)
- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Project structure](#project-structure)

## Task

Создать календарь, который показывает верхняя или нижняя неделя.

## How to run app

```bash
npm ci
npm run start
```

## Application stack

- [VS Code](https://code.visualstudio.com/#alt-downloads)
- [Node JS](https://nodejs.org/en/)
- [Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)
- [Docker, docker-compose](https://www.docker.com/)
- [make](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows#comments-32127632)
- [VS Code Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VS Code Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project structure

```bash
sudo apt install tree
tree --charset ascii -a -I ".git|node_modules|build"
```

```
.
|-- .browserslistrc
|-- .dockerignore
|-- .eslintrc.js
|-- .github
|   `-- workflows
|       |-- commit-other-repo.yml
|       `-- docker-publish.yml
|-- .gitignore
|-- .prettierignore
|-- .prettierrc.json
|-- Dockerfile
|-- LICENSE
|-- Makefile
|-- README.md
|-- docker-compose.build.yml
|-- docker-compose.prod.yml
|-- docker.nginx.default.conf
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
`-- src
    |-- App.css
    |-- App.jsx
    |-- components
    |   |-- CalendarPage
    |   |   |-- CalendarPage.jsx
    |   |   `-- CalendarPage.module.css
    |   |-- Error404Page
    |   |   `-- Error404Page.jsx
    |   `-- HomePage
    |       `-- HomePage.jsx
    |-- index.css
    |-- index.js
    `-- package
        `-- DateController
            |-- DateController.js
            |-- getMonthDays
            |   |-- getMonthDays.js
            |   `-- getMonthDays.test.js
            |-- getNextYear
            |   |-- getNextYear.js
            |   `-- getNextYear.test.js
            |-- getPrevYear
            |   |-- getPrevYear.js
            |   `-- getPrevYear.test.js
            |-- getStringMonth
            |   |-- getStringMonth.js
            |   `-- getStringMonth.test.js
            |-- getUniversityYearCalendar
            |   `-- getUniversityYearCalendar.js
            `-- getWeekType
                `-- getWeekType.js

16 directories, 42 files
```
