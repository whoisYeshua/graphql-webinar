# ВВЕДЕНИЕ

## Требования

- `Node.js` - можно скачать его с [официального сайта](http://nodejs.org/en/), ставим версию _18.18.X и выше или 20.11.X и выше (LTS)_. Это потребуется для запуска сборщика. Можно проверить установленную версию, написав команду `node -v` в терминале \ консоли.
- `npm` - он должен установиться вместе с Node.js . Потребуется для установки модулей и запуска скриптов. Можете проверить установленную версию, написав команду `npm -v` в терминале \ консоли.
- `Git`

## Установка

1. Склонируйте (нужен _git_) или скачайте репозиторий:

```bash
git clone https://github.com/whoisYeshua/graphql-webinar
```

2. Перейдите в папку

```bash
cd graphql-webinar
```

3. Установите зависимости через `npm`:

```bash
npm i
```

## Запуск

Пропишите в терминале \ консоли:

```bash
npm start
```

## Структура проекта

### backend

| Пакет                                                        | Описание                   |
| ------------------------------------------------------------ | -------------------------- |
| [@graphql-webinar/bd](./backend/db/)                         | 'БД' для проекта           |
| [@graphql-webinar/graphql-server](./backend/graphql-server/) | GraphQL-сервер для проекта |
| [@graphql-webinar/rest-server](./backend/rest-server/)       | REST-сервер для проекта    |

### frontend

| Пакет                                    | Описание                   |
| ---------------------------------------- | -------------------------- |
| [@graphql-webinar/frontend](./frontend/) | frontend-часть для проекта |

## Прочие команды

Запуск GraphQL-кодгена для frontend в watch режиме:

```bash
npm run codegen:watch -w frontend
```

Запуск GraphQL-сервера и frontend:

```bash
npm run start:gql
```

Запуск REST-сервера и frontend:

```bash
npm run start:rest
```

Запуск в `watch` режиме (пересборка + исполнение):

```bash
npm start:rest
```

Сборка пакетов:

```bash
npm run build
```

---

### Graphql Client Preset

Поставить сам [пресет](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client)

```bash
npm i -D @graphql-codegen/client-preset -w frontend
```

Вставить в [./graphql.config.json](./graphql.config.json) `frontend` -> `extensions` -> `codegen` -> `generates`:

```json
"./frontend/src/api/graphql/": {
  "preset": "client",
  "plugins": { "add": { "content": "/* eslint-disable */" } },
  "config": {
    "enumsAsTypes": true,
    "useTypeImports": true
  },
  "presetConfig": {
    "fragmentMasking": false
  }
}
```
