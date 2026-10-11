# Humbu Mobile App

> React Native + Expo business platform — authentication, product catalog, cart, and order management.

**Live page:** https://humbulan.github.io/humbu-mobile-app/

---

## Overview

Humbu is a cross-platform mobile application built with React Native and Expo. It provides a complete client for the Humbu business platform.

## Features

- **User Authentication** — sign-up, login, session handling
- **Product Catalog** — browsable listings with detail views
- **Shopping Cart** — persistent cart state across screens
- **Order Management** — place orders and track their progress

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React Native |
| Toolchain | Expo |
| Language | JavaScript |
| Package manager | npm |
| Native targets | Android, iOS |

## Prerequisites

- Node.js 18+
- npm 9+
- Expo Go on your device, or an emulator

## Getting Started

```bash
git clone https://github.com/Humbulan/humbu-mobile-app.git
cd humbu-mobile-app
npm install
npx expo start
```

Then scan the QR with Expo Go, or press `a` / `i` / `w` for Android, iOS, or web.

## Project Structure

```
humbu-mobile-app/
├── App.js
├── HumbuApp.js
├── components/
├── services/
├── styles/
├── assets/
├── android/
└── ios/
```

## Roadmap

- [x] **v0.1** — Foundation
- [x] **v0.2** — Auth & Catalog
- [x] **v0.3** — Cart & Orders
- [ ] **v0.4** — Polish & Performance (in progress)
- [ ] **v1.0** — Public Release

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-change`
3. Commit with a clear message
4. Push and open a pull request against `main`

## License

Released under the [MIT License](LICENSE).

## Links

- Repository: https://github.com/Humbulan/humbu-mobile-app
- Live page: https://humbulan.github.io/humbu-mobile-app/
- Issues: https://github.com/Humbulan/humbu-mobile-app/issues
