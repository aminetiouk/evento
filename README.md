# Evento - Event Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-6.8.2-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

A modern, full-stack event management platform built with Next.js 15, TypeScript, and PostgreSQL.

## 📑 Table of Contents

- [🚀 Features](#-features)
  - [Modern Tech Stack](#modern-tech-stack)
  - [Event Management](#event-management)
  - [User Experience](#user-experience)
- [🎥 Demo](#-demo)
- [🛠️ Tech Stack](#️-tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Development](#development)
- [📦 Installation](#-installation)
- [🔧 Development](#-development)
  - [Database Migrations](#database-migrations)
  - [Type Generation](#type-generation)
  - [Linting](#linting)
- [🏗️ Project Structure](#️-project-structure)
- [🔒 Security Features](#-security-features)
- [🚀 Deployment](#-deployment)
- [📝 License](#-license)
- [🤝 Contributing](#-contributing)
- [📧 Contact](#-contact)

## 🚀 Features

- **Modern Tech Stack**

  - Next.js 15 with App Router
  - TypeScript for type safety
  - PostgreSQL with Prisma ORM
  - Tailwind CSS for styling
  - Framer Motion for animations

- **Event Management**

  - Create and manage events
  - Event details with rich descriptions
  - Location and date management
  - Image upload support
  - Organizer information

- **User Experience**
  - Responsive design
  - Smooth animations
  - Pagination
  - Loading states
  - Error handling

## 🎥 Demo

![](/public/screen-recording.gif)

## 🛠️ Tech Stack

- **Frontend**

  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Lottie React

- **Backend**

  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL
  - Zod for validation

- **Development**
  - ESLint
  - TypeScript
  - Turbopack
  - Tailwind CSS

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aminetiouk/evento.git
   cd evento
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/evento"
   ```

4. Set up the database:

   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## 🔧 Development

- **Database Migrations**

  ```bash
  npx prisma migrate dev
  ```

- **Type Generation**

  ```bash
  npx prisma generate
  ```

- **Linting**
  ```bash
  npm run lint
  ```

## 🏗️ Project Structure

```
evento/
├── app/                   # Next.js app directory
│   ├── api/               # API routes
│   ├── events/            # Event pages
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema
└── public/                # Static assets
```

## 🔒 Security Features

- Type-safe database queries with Prisma
- Input validation with Zod
- Environment variable protection
- API route protection
- CORS configuration
- Rate limiting (to be implemented)
- Authentication (to be implemented)

## 🚀 Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- Name - [@aminetiouk](tiouk.amine@gmail.com)
- Project Link: [@evento](https://github.com/aminetiouk/evento)
