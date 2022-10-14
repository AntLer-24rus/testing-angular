# Тестовое задание. Angular <!-- omit in toc -->

- [Необходимо сделать](#необходимо-сделать)
- [Способ запуска и дополнительные скрипты](#способ-запуска-и-дополнительные-скрипты)
- [Дополнительный набор пакетов](#дополнительный-набор-пакетов)
- [Формат сообщения коммита](#формат-сообщения-коммита)

Выполненная работа доступна на [GitHub Pages](https://antler-24rus.github.io/testing-angular)

## Необходимо сделать

Работаем с ресурсом https://reqres.in

Реализовать приложение на Angular:

- [x] Страницу, которая выводит:

  - [x] список пользователей GET(https://reqres.in/api/users?page=2);
  - [x] и список ресурсов GET(https://reqres.in/api/unknown).

- [x] При нажатии на пользователя должен быть переход на страницу подробной карточки о нём GET(https://reqres.in/api/users/2).

- [x] На странице подробной карточки пользователя сделать возможность изменить его данные PUT(https://reqres.in/api/users/2).

- [x] На странице списка пользователей сделать возможность удалить пользователя из списка DELETE(https://reqres.in/api/users/2).

Не обязательное задание с повышенной сложностью:

- [ ] Сделать страницу авторизации
      POST(https://reqres.in/api/login)
- [ ] и регистрации
      POST(https://reqres.in/api/register)

## Способ запуска и дополнительные скрипты

Запуск приложения в режиме разработки:

```bash
git clone https://github.com/AntLer-24rus/testing-angular.git
cd testing-angular
npm i
npm start
```

Дополнительные скрипты:

- `npm run build` - Запускает сборку приложения.
- `npm run lint` - Запускает проверку TypeScrypt, Prettier, ESLint.

## Дополнительный набор пакетов

- `eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier` - обеспечивают линтинг.
- `husky` - удобное добавление git хуков.
- `lint-staged` - запуск скриптов на файлах находящихся на git staging.
- `prettier` - автоматическое форматирование кода.
- `tailwindcss postcss autoprefixer` - CSS framework tailwind
- `@commitlint/cli @commitlint/config-conventional` - проверка git message на соответствие [конвенции](https://www.conventionalcommits.org/en/v1.0.0/).

## Формат сообщения коммита

```
<тип>[(необязательный контекст)]: <описание>

[необязательное тело]

[необязательная(ые) сноска(и)]

<тип>: обязательно должен быть одним из перечисленных
       feat      ✨ Добавление нового функционала
                    (MINOR в Cемантическом Версионировании)
       fix       🐛 Исправление ошибок
                    (PATCH в Cемантическом Версионировании).
       docs      📚 Только обновление документации
       style     💎 Правки по кодстайлу
                    (табы, отступы, точки, запятые и т.д.)
       refactor  📦 Правки кода без исправления ошибок или
                    добавления новых функций
       perf      🚀 Изменения направленные на улучшение
                    производительности
       test      🚨 Добавление или исправление существующих тестов
       build     🛠️ Сборка проекта или изменения внешних зависимостей
       ci        ⚙️ Настройка CI и работа со скриптами
       chore     ♻️ Другие изменения не модифицирующие
                    исходный код или тесты
       revert    🗑️ Откат на предыдущие коммиты

<описание>: должно формулироваться, как продолжение фразы:
            "В случае применения этого коммита будет...",
            начинаться с маленькой буквы, быть не длиннее 72 символов
            и не заканчиваться точкой '.'

[необязательное тело]: должно описывать смысл изменения.
                       Не "что было поменяно" (это видно в диффе),
                       не где было поменяно (это тоже было в диффе),
                       а ПОЧЕМУ.

BREAKING CHANGE: коммит, который имеет сноску BREAKING CHANGE или
коммит, заканчивающийся восклицательным знаком (!) после типа или
контекста, вводящий изменение(я), нарушающие обратную совместимость
(соответствует MAJOR в Cемантическом Версионировании).
BREAKING CHANGE может быть частью коммита любого типа.
```

Подробнее смотри: https://www.conventionalcommits.org
