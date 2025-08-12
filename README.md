# no-focus
A landing page about concentration struggles in the modern world. Built with pure HTML/CSS/JS, featuring responsive design and theme switching.

**🔗 [Live Demo on GitHub Pages](https://frogush.github.io/no-focus/)**  
**🎨 [Design in Figma](https://www.figma.com/design/OLGflTfD3YTyRjdKVU3WqU/HTML-CSS-3?node-id=0-1&t=oeB5vqdcn5OBnTbn-1)**

## Preview

![Project Preview](./images/preview.jpg)

## 🇬🇧 English Version

Scroll down for the Russian version of the project description — ⬇️

## 📋 Project Description

The project is a single-page website dedicated to the problem of attention span in the modern world. Key features:

- Responsive design for three device types: mobile (375px+), tablets (768px+), desktops (1024px+)
- Two color schemes (light/dark) with automatic detection of system settings
- Interactive theme switching with user preference saved
- Optimized image loading (AVIF/WebP formats with JPEG fallback)
- Semantic markup and accessibility (ARIA attributes, lazy loading)

The project has been tested with the **Pixel Perfect** utility and has a high percentage of match with the design mockup.

## 🧩 Technology Stack

* **HTML5** — semantic markup
* **CSS3** (variables, Grid, Flexbox, media queries)
* **JavaScript (ES6+)** — theme management, event handling

## 🧩 Additional Stack

* **Stylelint** — CSS quality check
* **Prettier** — automatic code formatting

## 📁 Project Structure

```

├── .vscode/                # Editor configuration (Stylelint + Prettier)
├── fonts/                  # Embedded fonts
├── images/                 # Images
├── scripts/
│   └── script.js           # Main theme management script
├── styles/
│   ├── dark.css            # Dark theme styles
│   ├── light.css           # Light theme styles
│   ├── global.css          # Style reset and base settings
│   ├── style.css           # Main component styles
│   └── variables.css       # CSS variables
├── .stylelintrc.json       # Stylelint configuration
├── .prettierrc             # Prettier configuration
├── index.html              # Main page
└── (other files)

````

## 🎨 Color Themes

The project supports three display modes:

1. **Automatic** – determined by system settings
2. **Light Theme** ("Day") – light tones with pink accents
3. **Dark Theme** ("Neon") – dark background with purple-pink elements

All color variables are defined in `variables.css` and overridden for each theme.

## 🚀 Project Launch

1. Clone the repository:
```bash
git clone https://github.com/Frogush/no-focus.git
cd no-focus
````

2. Open in the browser:

* Simply open `index.html` in the browser
* Or use Live Server in VS Code

3. (Optional) Install linters:

```bash
npm install
npx stylelint "**/*.css" --fix
npx prettier --write .
```

## 📜 JavaScript Functionality

### Main Functions

| Function            | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `initTheme()`       | Initializes theme from localStorage on page load              |
| `initManifest()`    | Loads the appropriate .webmanifest based on system theme      |
| `setTheme(theme)`   | Sets the specified theme and saves the choice to localStorage |
| `setActiveButton()` | Activates the corresponding theme selection button            |

**Refer to comments in the code for more details**

### Workflow

1. On page load, localStorage is checked for a saved theme
2. If no theme is selected, the system setting (prefers-color-scheme) is used
3. The user can switch themes through the menu in the site header
4. The selected theme is saved in localStorage for future visits

## 🌐 Responsiveness

The project is fully adapted for different devices:

* **Mobile** (≥375px): grid adaptation, compact layout, smaller fonts
* **Tablets** (≥768px): grid adaptation, size adjustments
* **Desktops** (≥1024px): full layout using all capabilities

Approaches used:

* CSS Grid and Flexbox for adaptive layouts
* Media queries with breakpoints for different devices
* Clamp() for smooth font size scaling
* Optimized images with different resolutions

## 🧰 Developer Settings

### Linting Commands

```bash
# Check styles
npx stylelint "**/*.css"

# Auto-fix styles
npx stylelint "**/*.css" --fix

# Check formatting
npx prettier . --check

# Format code
npx prettier . --write
```

## 🎨 Prettier Formatter Settings

| Rule                | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `printWidth: 100`   | Maximum line length — 100 characters                              |
| `tabWidth: 2`       | Indentation size — 2 spaces                                       |
| `useTabs: false`    | Use spaces instead of tabs                                        |
| `semi: true`        | Add semicolons at end of statements                               |
| `singleQuote: false`| Use double quotes                                                 |
| `trailingComma: es5`| Trailing commas in objects/arrays per ES5 standard                |
| `bracketSpacing: true` | Spaces inside curly braces (e.g., `{ a: 1 }`)                   |
| `arrowParens: avoid` | Omit parentheses around single parameter in arrow functions      |

## 🧼 Stylelint Configuration

| Rule                                             | Description                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| `color-no-invalid-hex`                          | Disallow invalid hex colors                                               |
| `value-keyword-case: lower`                     | Lowercase keyword values                                                  |
| `declaration-block-no-duplicate-properties`     | Disallow duplicate properties (except with different values)              |
| `declaration-block-no-shorthand-property-overrides` | Prevent shorthand property overrides                                  |
| `media-feature-name-no-unknown`                 | Disallow unknown media features                                           |
| `comment-no-empty`                              | Disallow empty comments                                                   |
| `no-descending-specificity`                     | Prevent specificity conflicts                                             |
| `no-duplicate-selectors`                        | Disallow duplicate selectors                                              |
| `no-invalid-position-at-import-rule`            | `@import` only allowed at beginning of file                               |
| `alpha-value-notation: number`                  | Alpha values must be numbers (not percentages)                            |
| `color-function-notation: modern`               | Use modern color function syntax                                          |
| `color-hex-length: short`                       | Use short hex notation (#fff instead of #ffffff)                          |
| `length-zero-no-unit: true`                     | Omit units for zero values (`0px` → `0`)                                  |
| `import-notation: url`                          | Imports must use `url()` syntax                                           |
| `shorthand-property-no-redundant-values`        | Disallow redundant values in shorthand properties                         |
| `declaration-block-single-line-max-declarations: 1` | Maximum 1 declaration per line                                        |
| `no-unknown-animations`                         | Disallow undefined animations                                             |
| `selector-type-case: lower`                     | Type selectors in lowercase                                               |
| `at-rule-empty-line-before: always`             | Require empty line before `@`-rules                                       |
| `selector-class-pattern: null`                  | Don't enforce class naming conventions                                    |
| `font-family-name-quotes: always-where-recommended` | Quotes around font names where recommended                           |

## 🇷🇺 Русская версия

## 📋 Описание проекта

Проект представляет собой одностраничный сайт, посвящённый проблемам концентрации внимания в современном мире. Основные особенности:

- Адаптивный дизайн для трёх типов устройств: мобильные (375px+), планшеты (768px+), десктопы (1024px+)
- Две цветовые схемы (светлая/тёмная) с автоматическим определением системных настроек
- Интерактивное переключение тем с сохранением выбора пользователя
- Оптимизированная загрузка изображений (форматы AVIF/WebP с fallback на JPEG)
- Семантическая вёрстка и доступность (ARIA-атрибуты, lazy loading)

Проект проверен с помощью утилиты **Pixel Perfect** и обладает высоким процентом совпадения с макетом.

## 🧩 Технологический стек

* **HTML5** — семантическая разметка
* **CSS3** (переменные, Grid, Flexbox, медиазапросы)
* **JavaScript (ES6+)** — управление темами, обработка событий

## 🧩 Дополнительный стек

* **Stylelint** — проверка качества CSS
* **Prettier** — автоматическое форматирование кода

## 📁 Структура проекта

```
├── .vscode/                # Конфигурация редактора (Stylelint + Prettier)
├── fonts/                  # Подключенные шрифты
├── images/                 # Изображения
├── scripts/
│   └── script.js           # Основной скрипт управления темами
├── styles/
│   ├── dark.css            # Стили для тёмной темы
│   ├── light.css           # Стили для светлой темы
│   ├── global.css          # Сброс стилей и базовые настройки
│   ├── style.css           # Основные стили компонентов
│   └── variables.css       # CSS-переменные
├── .stylelintrc.json       # Конфигурация Stylelint
├── .prettierrc             # Настройки Prettier
├── index.html              # Главная страница
└── (другие файлы)
```

## 🎨 Цветовые темы

Проект поддерживает три режима отображения:

1. **Автоматический** - определяется настройками системы
2. **Светлая тема** ("День") - светлые тона с розовыми акцентами
3. **Тёмная тема** ("Неон") - тёмный фон с фиолетово-розовыми элементами

Все цветовые переменные определены в `variables.css` и переопределяются для каждой темы.

## 🚀 Запуск проекта

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Frogush/no-focus.git
cd no-focus
```

2. Откройте в браузере:
- Просто откройте `index.html` в браузере
- Или используйте Live Server в VS Code

3. (Опционально) Установите линтеры:
```bash
npm install
npx stylelint "**/*.css" --fix
npx prettier --write .
```

## 📜 Функционал JavaScript

### Основные функции

| Функция                | Описание                                                                 |
|------------------------|--------------------------------------------------------------------------|
| `initTheme()`          | Инициализирует тему из localStorage при загрузке страницы                |
| `initManifest()`       | Подключает соответствующий .webmanifest в зависимости от системной темы  |
| `setTheme(theme)`      | Устанавливает указанную тему и сохраняет выбор в localStorage            |
| `setActiveButton()`    | Активирует соответствующую кнопку выбора темы                            |

**Дополнительно читайте комментарии в коде**

### Логика работы

1. При загрузке страницы проверяется localStorage на наличие сохранённой темы
2. Если тема не выбрана, используется системная настройка (prefers-color-scheme)
3. Пользователь может переключать темы через меню в шапке сайта
4. Выбор темы сохраняется в localStorage для последующих посещений

## 🌐 Адаптивность

Проект полностью адаптирован под различные устройства:

- **Мобильные** (≥375px): адаптация сетки,компактное расположение элементов, уменьшенные шрифты
- **Планшеты** (≥768px): адаптация сетки, корректировка размеров
- **Десктопы** (≥1024px): полноценная вёрстка с использованием всех возможностей

Используемые подходы:
- CSS Grid и Flexbox для адаптивных layouts
- Медиазапросы с breakpoints для разных устройств
- Clamp() для плавного изменения размеров шрифтов
- Оптимизированные изображения с разными разрешениями

## 🧰 Настройки разработчика

### Команды linting

```bash
# Проверка стилей
npx stylelint "**/*.css"

# Автоисправление стилей
npx stylelint "**/*.css" --fix

# Проверка форматирования
npx prettier . --check

# Форматирование кода
npx prettier . --write
```

## 🎨 Настройки форматтера Prettier

| Правило                | Описание                                                       |
| ---------------------- | -------------------------------------------------------------- |
| `printWidth: 100`      | Максимальная длина строки — 100 символов                       |
| `tabWidth: 2`          | Размер отступа — 2 пробела                                     |
| `useTabs: false`       | Используются пробелы вместо табов                              |
| `semi: true`           | Ставить точку с запятой в конце каждого выражения              |
| `singleQuote: false`   | Использовать двойные кавычки                                   |
| `trailingComma: es5`   | В объектах и массивах по стандарту ES5 — запятая в конце       |
| `bracketSpacing: true` | Пробелы внутри фигурных скобок (например, `{ a: 1 }`)          |
| `arrowParens: avoid`   | Не ставить скобки вокруг одного параметра у стрелочных функций |

## 🧼 Настройки линтера стилей Stylelint

| Правило                                             | Описание                                                               |
| --------------------------------------------------- | ---------------------------------------------------------------------- |
| `color-no-invalid-hex`                              | Запрещает использовать невалидные HEX-цвета                            |
| `value-keyword-case: lower`                         | Ключевые слова в значениях пишутся строчными буквами                   |
| `declaration-block-no-duplicate-properties`         | Запрещает дублирование CSS-свойств, кроме случаев с разными значениями |
| `declaration-block-no-shorthand-property-overrides` | Предотвращает переопределение значений сокращённых свойств (шорткатов) |
| `media-feature-name-no-unknown`                     | Запрещает неизвестные медиа-фичи                                       |
| `comment-no-empty`                                  | Запрещает пустые комментарии                                           |
| `no-descending-specificity`                         | Предотвращает конфликты специфичности CSS                              |
| `no-duplicate-selectors`                            | Запрещает повторение одинаковых селекторов                             |
| `no-invalid-position-at-import-rule`                | `@import` разрешён только в начале файла                               |
| `alpha-value-notation: number`                      | Альфа-значения задаются только числами, не в процентах                 |
| `color-function-notation: modern`                   | Использовать современный синтаксис цветовых функций                    |
| `color-hex-length: short`                           | Использовать сокращённый HEX (#fff вместо #ffffff)                     |
| `length-zero-no-unit: true`                         | Не писать единицы измерения для нулевых значений (`0px` → `0`)         |
| `import-notation: url`                              | Импорты должны использовать синтаксис `url()`                          |
| `shorthand-property-no-redundant-values`            | Запрещает избыточные значения в сокращённых свойствах                  |
| `declaration-block-single-line-max-declarations: 1` | Максимум одно объявление на строку                                     |
| `no-unknown-animations`                             | Запрещает использование неопределённых анимаций                        |
| `selector-type-case: lower`                         | Типы селекторов в нижнем регистре                                      |
| `at-rule-empty-line-before: always`                 | Обязательный перенос строки перед `@`-правилами                        |
| `selector-class-pattern: null`                      | Не проверять стиль нейминга классов                                    |
| `font-family-name-quotes: always-where-recommended` | Кавычки вокруг имён шрифтов, когда это рекомендовано                   |