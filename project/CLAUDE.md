# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NeedsCloud is a modern business management solutions website built with React, TypeScript, and Tailwind CSS. It showcases three main products: WMS (Warehouse Management System), E-Dönüşüm (E-Transformation), and TanaBanka (Multi-bank Account Management).

## Architecture

This is a full-stack application with:
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js API server with SMTP email functionality
- **Structure**: Monorepo with frontend in root and backend in `server/` directory

### Key Directories
- `src/` - React application source code
- `src/pages/` - Page components (HomePage, ProductDetailPage, etc.)
- `src/components/` - Reusable UI components
- `src/data/` - Static data (products, contact info)
- `server/` - Express.js API server
- `public/` - Static assets

## Development Commands

### Frontend (from project root)
```bash
npm run dev        # Start development server (localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend API Server
```bash
cd server
node index.js      # Start API server (localhost:3001)
```

### Full Development Setup
1. Start frontend: `npm run dev`
2. Start backend: `cd server && node index.js`

## Configuration

### Environment Variables
The backend requires SMTP configuration via environment variables:
- `SMTP_HOST` - SMTP server host (default: smtp.gmail.com)
- `SMTP_PORT` - SMTP port (default: 587)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `SMTP_FROM` - From email address
- `RECIPIENT_EMAIL` - Email recipient for form submissions

### Package Scripts
- No `npm start` script currently exists - use `npm run dev` for development
- No test scripts configured
- Build outputs to `dist/` directory

## API Endpoints

The Express server provides:
- `POST /api/demo-request` - Demo request form submission
- `POST /api/contact` - Contact form submission  
- `GET /api/health` - Health check endpoint

## Frontend Routing

- `/` - Homepage
- `/product/wms-depo-yonetim-sistemi` - WMS product page
- `/product/e-donusum-konnektoru` - E-Dönüşüm product page
- `/product/tanabanka-hesap-yonetimi` - TanaBanka product page
- `/about` - About page
- `/contact` - Contact page

## Tech Stack Details

- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **Email**: Nodemailer with SMTP
- **TypeScript**: Strict configuration with separate configs for app and Node

## Key Components

- `DemoModal` - Global demo request modal
- `NotificationContainer` - Toast notifications system
- `Header/Footer` - Layout components with navigation
- Product detail pages use shared layouts with different data

The application uses a notification system for user feedback and includes email integration for demo requests and contact forms.