<h1 align="center">ransom</h1>
<h4 align="center">
    Complete SAAS Starter Kit with Authentication, Authorization, Internationalization, payment gateway, and more.
</h4>

> [!WARNING]
> This project is still under development and not ready for production use. Please do not use it in production until the stable release.

<p align="center">
    <a href="ransom.jabed.dev" target="_blank">View Demo</a>
    ·
    <a href="/docs/architecture.md">Architecture</a>
    ·
    <a href="https://github.com/sponsors/jabedzaman">Support</a>
</p>

We all have that one side project we're eager to launch. But setting up authentication, authorization, payment gateways, and other crucial features can be a real time sink. Enter Ransom, the ultimate SaaS starter kit that accelerates your launch. Packed with all the must-have features, Ransom helps you get your project off the ground in no time. WHOOSH!! 🚀

Supercharge your launch with Ransom today!

## Features

- 🔐 **Authentication**: Login, Register, Forgot Password, Reset Password, Email Verification, Social Login with Google, Facebook, Twitter, and GitHub
- 🌍 **Internationalization**: Supports multiple languages with RTL support
- 💳 **Payment Gateway**: Stripe integration for subscription-based payment
- 🌑 **Dark Mode**: Light and Dark mode support
- 🌐 **SEO**: SEO friendly with meta tags and Open Graph support
- 📱 **Responsive**: Mobile-friendly design
- ⚡ **Performance**: Optimized for performance with lazy loading and caching
- 👨‍💻 **Developer-friendly**: Easy to understand, clean code with detailed documentation
- ☁️ **Fully Serverless**: Deploy on Vercel, Netlify, or any serverless platform
- 📄 **Landing & Blog**: Landing page and blog with mdx support
- 🆓 **Open Source**: Fully open-source with MIT license

## Tech Stack

- [Next.js](https://nextjs.org) - The Server-Side Rendering React Framework
- [shadcn-ui](https://ui.shadcn.com) - UI Library 
- [@reduxjs/toolkit](https://redux-toolkit.js.org) - The official, opinionated, batteries-included toolset for efficient Redux development
- [rtk-query](https://redux-toolkit.js.org/rtk-query/overview) - A powerful data fetching and caching tool
- [nestjs](https://nestjs.com) - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications
- [prisma](https://prisma.io) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org) - The World's Most Advanced Open Source Relational Database
- [Stripe](https://stripe.com) - Online payment processing for internet businesses
- [Vercel](https://vercel.com) - Develop. Preview. Ship.

## Folder Structure

```bash
.
├── .github
├── apps
│   ├── api (NestJS backend)
│   └── www (Next.js frontend)
├── docs
├── packages
│   └── types
├── .gitignore
├── .node-version
├── .npmrc
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── readme.md
└── turbo.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) - JavaScript runtime
- [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- [PostgreSQL](https://www.postgresql.org) - The World's Most Advanced Open Source Relational Database

### Installation

1. Click on "Use this template" and then "Create repository from template" to create a new project using the Ransom template on GitHub.

![Create a new project using the Ransom template on GitHub](/docs/images/step-1.png)

![Create a new project using the Ransom template on GitHub](/docs/images/step-2.png)

2. Clone the repository to your local machine.

```bash
git clone <your-repository-url>
```

3. Install the dependencies.

```bash
pnpm install
```

4. Follow the instructions in the `apps/api/.env.example` and `apps/www/.env.example` files to set up the environment variables.

5. Start the development server.

```bash
pnpm start:dev
```

## Port Configuration

<!-- table for ports -->

| App | Port |
| --- | --- |
| API | 3000 |
| WWW | 4000 |


## License

This project is open source and available under the [MIT License](/LICENSE).

## Security Vulnerabilities

If you discover a security vulnerability within Ransom, please send an e-mail to Jabed Zaman via [hi@jabed.dev](mailto:hi@jabed.dev). All security vulnerabilities will be promptly addressed. Please do not disclose security-related issues publicly until they have been addressed.



