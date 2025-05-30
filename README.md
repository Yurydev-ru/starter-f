# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


| Название         | Переменная         | HEX       | Описание                          |
| ---------------- | ------------------ | --------- | --------------------------------- |
| **Dark 1**       | `--c-dark-1`       | `#0A0A0A` | Фон основного контейнера          |
| **Dark 2**       | `--c-dark-2`       | `#1E1E1E` | Фон сайдбара в активном состоянии |
| **Dark 3**       | `--c-dark-3`       | `#2E2E2E` | Фон выпадающих меню и модалок     |
| **Gray 1**       | `--c-gray-1`       | `#B3B3B3` | Основной текст                    |
| **Gray 2**       | `--c-gray-2`       | `#7A7A7A` | Второстепенный текст              |
| **Gray 3**       | `--c-gray-3`       | `#4D4D4D` | Мутации, отключённые элементы     |
| **Accent Start** | `--c-accent-start` | `#FF0080` | Яркий акцент слева тумблера Home  |
| **Accent End**   | `--c-accent-end`   | `#FF4080` | Мягкая вторая точка градиента     |
| **White**        | `--c-white`        | `#FFFFFF` | Иконки и текст на тёмном фоне     |


:root {
  --c-dark-1: #0A0A0A;
  --c-dark-2: #1E1E1E;
  --c-dark-3: #2E2E2E;
  --c-gray-1: #B3B3B3;
  --c-gray-2: #7A7A7A;
  --c-gray-3: #4D4D4D;
  --c-accent-start: #FF0080;
  --c-accent-end: #FF4080;
  --c-white: #FFFFFF;
}

1.2 Токены пространства
--space-xxs: 4 px

--space-xs: 8 px

--space-sm: 12 px

--space-md: 16 px

--space-lg: 24 px

--space-xl: 32 px

--space-xxl: 48 px

1.3 Типографика
Шрифт: --font-base: 'Inter', sans-serif

Вес:

--fw-regular: 400;

--fw-medium: 500;

--fw-semibold: 600;

Размеры:

--fs-xs: 0.75rem; /* 12 px */

--fs-sm: 0.875rem; /* 14 px */

--fs-md: 1rem; /* 16 px */

--fs-lg: 1.25rem; /* 20 px */

--fs-xl: 1.5rem; /* 24 px */

2. Сетка и лэйаут
Контейнер: max-width 1200 px, auto-margins

Колонки: 12-колоночная сетка, gutter = var(--space-md)

Брейкпоинты:

--bp-sm: 576px

--bp-md: 768px

--bp-lg: 992px

--bp-xl: 1200px

