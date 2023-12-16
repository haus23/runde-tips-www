# Changelog


## v0.2.0

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.1.0...v0.2.0)

### 🏡 Chore

- Upgrade remix to v2.4 ([248a6cb](https://github.com/haus23/runde-tips-www/commit/248a6cb))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.1.0

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.12...v0.1.0)

### 🚀 Enhancements

- Implement simple user menu with logout link. ([dcaabd7](https://github.com/haus23/runde-tips-www/commit/dcaabd7))
- Add (not working by now) manager link for admin users. ([fb5321f](https://github.com/haus23/runde-tips-www/commit/fb5321f))

### 🩹 Fixes

- Align search button height with remaining toolbar buttons. ([f652125](https://github.com/haus23/runde-tips-www/commit/f652125))

### 💅 Refactors

- Type the parsed roles string to an array of string enums. ([98d32c6](https://github.com/haus23/runde-tips-www/commit/98d32c6))

### 🏡 Chore

- Update deps. ([8d951c4](https://github.com/haus23/runde-tips-www/commit/8d951c4))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.12

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.11...v0.0.12)

### 🩹 Fixes

- (Temporary) solution for the svg problem, just use public assets. ([0d4fd9b](https://github.com/haus23/runde-tips-www/commit/0d4fd9b))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.11

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.10...v0.0.11)

### 🩹 Fixes

- Second try on the svg image problem. ([d38c470](https://github.com/haus23/runde-tips-www/commit/d38c470))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.10

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.9...v0.0.10)

### 🚀 Enhancements

- Hold last value if leaving the options box. ([466b979](https://github.com/haus23/runde-tips-www/commit/466b979))
- Add login and standings route. Keep current championship in state. ([0e3c987](https://github.com/haus23/runde-tips-www/commit/0e3c987))
- Add simple styled login form. ([abb109b](https://github.com/haus23/runde-tips-www/commit/abb109b))
- Add conform to handle forms. ([40481de](https://github.com/haus23/runde-tips-www/commit/40481de))
- Add auth session and provide secrets for both sessions. ([569b133](https://github.com/haus23/runde-tips-www/commit/569b133))
- Redirect if already authenticated. ([47467cc](https://github.com/haus23/runde-tips-www/commit/47467cc))
- Auth Step 1 - Validate email. ([78199d8](https://github.com/haus23/runde-tips-www/commit/78199d8))
- Auth Step 2 - Generate TOTP-Code and store auth infos in session. ([507969c](https://github.com/haus23/runde-tips-www/commit/507969c))
- Auth Step 3 - Onboarding user with valid code. ([1cc7aa2](https://github.com/haus23/runde-tips-www/commit/1cc7aa2))
- Add jsx-email and create send-totp email template. ([a02e29d](https://github.com/haus23/runde-tips-www/commit/a02e29d))
- Auth Step 4 - Provide logout route. ([188968f](https://github.com/haus23/runde-tips-www/commit/188968f))
- Auth Step 4 - Send email with TOTP. ([40c09ab](https://github.com/haus23/runde-tips-www/commit/40c09ab))

### 🩹 Fixes

- Redirect to referer. No need to switch foh-context here. ([5be0220](https://github.com/haus23/runde-tips-www/commit/5be0220))
- Try to resolve a security problem with svg sprites and data urls. ([5f52fa4](https://github.com/haus23/runde-tips-www/commit/5f52fa4))

### 💅 Refactors

- Move current championship state into foh context. ([98af384](https://github.com/haus23/runde-tips-www/commit/98af384))
- Make code more clean with explicit validation method. ([d1ca0b6](https://github.com/haus23/runde-tips-www/commit/d1ca0b6))

### 🏡 Chore

- Add TOTP library. ([47df665](https://github.com/haus23/runde-tips-www/commit/47df665))
- Ignore dev time files marked as local in filename. ([3d77fa0](https://github.com/haus23/runde-tips-www/commit/3d77fa0))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.9

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.8...v0.0.9)

### 🚀 Enhancements

- Add ruleset and championship schema. ([8259437](https://github.com/haus23/runde-tips-www/commit/8259437))
- Add championship model and queries. ([a2b409e](https://github.com/haus23/runde-tips-www/commit/a2b409e))
- Load championships and provide client hook. ([5baaad6](https://github.com/haus23/runde-tips-www/commit/5baaad6))
- Show current championship based on route param. ([7007672](https://github.com/haus23/runde-tips-www/commit/7007672))
- Return nav segment as well. ([980a010](https://github.com/haus23/runde-tips-www/commit/980a010))
- Add championship select command. ([aacd23d](https://github.com/haus23/runde-tips-www/commit/aacd23d))

### 🏡 Chore

- Add deps for zod and headlessui. ([6ddd49e](https://github.com/haus23/runde-tips-www/commit/6ddd49e))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.8

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.7...v0.0.8)

### 🚀 Enhancements

- Implement a simple toggle to switch color scheme. ([8a89aea](https://github.com/haus23/runde-tips-www/commit/8a89aea))
- Make the toggle a little bit more fancier. ([3c06898](https://github.com/haus23/runde-tips-www/commit/3c06898))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.7

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.6...v0.0.7)

### 🩹 Fixes

- Move tailwind helpers to prod deps. ([f9e82a3](https://github.com/haus23/runde-tips-www/commit/f9e82a3))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.6

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.5...v0.0.6)

### 🚀 Enhancements

- Switch to flat routes and add layout. ([4a3c6d8](https://github.com/haus23/runde-tips-www/commit/4a3c6d8))
- Add icon component. First reusable ui component. ([8ef0b28](https://github.com/haus23/runde-tips-www/commit/8ef0b28))
- Add button component. ([c2a6b3c](https://github.com/haus23/runde-tips-www/commit/c2a6b3c))
- Evaluate client prefs. Set or change cookie accordingly. ([f37309c](https://github.com/haus23/runde-tips-www/commit/f37309c))
- Load and use client hint in server. ([2d81df0](https://github.com/haus23/runde-tips-www/commit/2d81df0))
- Subscribe to client scheme changes. ([2be8683](https://github.com/haus23/runde-tips-www/commit/2be8683))

### 🩹 Fixes

- Text too bold. ([e0b1822](https://github.com/haus23/runde-tips-www/commit/e0b1822))
- Title must not have array of children. ([fba15ad](https://github.com/haus23/runde-tips-www/commit/fba15ad))

### 💅 Refactors

- Simplify by using @epic-web/client-hints ([e7c8c07](https://github.com/haus23/runde-tips-www/commit/e7c8c07))

### 🏡 Chore

- **dx:** Add tailwind class names helper utils. ([43844b2](https://github.com/haus23/runde-tips-www/commit/43844b2))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.5

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.4...v0.0.5)

### 🚀 Enhancements

- Create API module with singleton db instance. ([cddfba2](https://github.com/haus23/runde-tips-www/commit/cddfba2))
- Introduce app colors and add minimal foh header. ([93e0f71](https://github.com/haus23/runde-tips-www/commit/93e0f71))

### 🏡 Chore

- Add license. ([1448c3d](https://github.com/haus23/runde-tips-www/commit/1448c3d))
- **dx:** Configure import and path alias. ([b1e7c0d](https://github.com/haus23/runde-tips-www/commit/b1e7c0d))
- Update deps. ([4783ba3](https://github.com/haus23/runde-tips-www/commit/4783ba3))
- Re-adding comments. ([8148f59](https://github.com/haus23/runde-tips-www/commit/8148f59))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.4

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.3...v0.0.4)

### 🏡 Chore

- Add drizzle orm with initial schema. ([aea7b5a](https://github.com/haus23/runde-tips-www/commit/aea7b5a))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.3

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.2...v0.0.3)

### 🏡 Chore

- Add tailwindcss support. ([1889c06](https://github.com/haus23/runde-tips-www/commit/1889c06))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.2

[compare changes](https://github.com/haus23/runde-tips-www/compare/v0.0.1...v0.0.2)

### 🩹 Fixes

- Remove docker image name. ([d7aa5c8](https://github.com/haus23/runde-tips-www/commit/d7aa5c8))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

## v0.0.1


### 🏡 Chore

- Create initial app image. ([5c06ab9](https://github.com/haus23/runde-tips-www/commit/5c06ab9))

### ❤️ Contributors

- Micha Buchholz <micha@haus23.net>

