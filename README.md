## Введение

Создам сайт, который будет выводить календарь и подсвечивать неделю по типу.
Верхняя неделя - синий, нижняя неделя - желтый.

## Установка

### Установка NodeJS

```bash
sudo apt update
sudo apt install -y curl

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash
sudo apt install -y nodejs

# node -v
# npm -v
```

### Установка git

```bash
sudo apt update
sudo apt install -y git
```

### Установка make

```bash
sudo apt update
sudo apt install -y make
```

### Установка Docker и docker-compose

```bash
sudo apt update
sudo apt install -y docker.io docker-compose

sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
reboot
```

### Клонирование репозитория

```bash
ssh-keygen # Enter, Enter, Enter
cat ~/.ssh/id_rsa.pub # copy and paste key to https://github.com/settings/ssh/new
git clone git@github.com:Pavel-Innokentevich-Galanin/what-week-site.git

cd what-week-site
```

### Установка npm пакетов

```bash
yarn
```

### Установка расширений в VS Code

- [VS Code Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
<!-- - [VS Code Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) -->
- [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Разработка

```bash
yarn start
```

## Тестирование

```bash
yarn test
```

## Загрузка образа на DockerHub

```bash
docker login
docker build --file prod.Dockerfile -t pavelinnokentevichgalanin/what-week-site .
docker push pavelinnokentevichgalanin/what-week-site
```

## Дерево проекта

```bash
sudo apt update
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
|-- LICENSE
|-- Makefile
|-- package.json
|-- .prettierignore
|-- .prettierrc.json
|-- prod.docker-compose.yml
|-- prod.Dockerfile
|-- prod.nginx.default.conf
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
|-- README_bash_history.md
|-- README.md
|-- src
|   |-- App.css
|   |-- App.tsx
|   |-- components
|   |   |-- CalendarPage
|   |   |   |-- CalendarPage.module.css
|   |   |   `-- CalendarPage.tsx
|   |   |-- Error404Page
|   |   |   `-- Error404Page.tsx
|   |   `-- HomePage
|   |       `-- HomePage.tsx
|   |-- index.css
|   |-- index.tsx
|   |-- package
|   |   `-- DateController
|   |       |-- DateController.ts
|   |       |-- getMonthDays
|   |       |   |-- getMonthDays.test.ts
|   |       |   `-- getMonthDays.ts
|   |       |-- getNextYear
|   |       |   |-- getNextYear.test.ts
|   |       |   `-- getNextYear.ts
|   |       |-- getPrevYear
|   |       |   |-- getPrevYear.test.ts
|   |       |   `-- getPrevYear.ts
|   |       |-- getStringMonth
|   |       |   |-- getStringMonth.test.ts
|   |       |   `-- getStringMonth.ts
|   |       |-- getUniversityYearCalendar
|   |       |   `-- getUniversityYearCalendar.ts
|   |       `-- getWeekType
|   |           `-- getWeekType.ts
|   |-- react-app-env.d.ts
|   |-- reportWebVitals.ts
|   `-- setupTests.ts
|-- ssh.docker-compose.yml
|-- tsconfig.json
`-- yarn.lock

16 directories, 47 files
```
