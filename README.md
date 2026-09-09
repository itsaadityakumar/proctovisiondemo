# Procto Vision

Secure online examination and proctoring platform for institutions, educators, and enterprises.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Student | student@demo.proctovision.com | demo1234 |
| Teacher | teacher@demo.proctovision.com | demo1234 |

## Tech Stack

- React 18
- Vite 5
- React Router v6
- Lucide React icons
- Vanilla CSS (no framework)

## Project Structure

```
src/
  config/brand.js      ← Logo, colors, pricing, team, contact info
  data/mockData.js     ← Institutions, teachers, students, exams
  services/            ← auth, exam, inquiry, pricing services
  hooks/               ← useAuth, useToast, useInView
  components/          ← Navbar, Footer, AuthenticatedHeader
  pages/public/        ← Home, About, Platform, HowIt Works, Security, Pricing, Contact, Terms, Privacy, 404
  pages/auth/          ← Login, SignUp, ForgotPassword
  pages/student/       ← StudentDashboard
  pages/teacher/       ← TeacherDashboard
  pages/admin/         ← AdminDashboard
  styles/global.css    ← All styles
```

## Replacing Brand Assets

1. **Logo/Favicon**: Replace `public/favicon.svg` and update `brand.name` in `src/config/brand.js`
2. **Team**: Edit `team` array in `src/config/brand.js`
3. **Contact**: Edit `brand.email`, `brand.whatsapp`, `brand.phone` in `src/config/brand.js`
4. **Pricing**: Edit `pricing` object in `src/config/brand.js`
5. **Colors**: Edit CSS variables in `src/styles/global.css` (`:root` section)

## Future Backend Integration

Services in `src/services/` are mock implementations. Replace with real API calls:

- `authService.js` → Authentication API
- `examService.js` → Examination API
- `inquiryService.js` → Inquiry/Contact API
- `pricingService.js` → Pricing API

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Framework: Vite
4. Root directory: `./`
5. Deploy

SPA routing is handled by `vercel.json`.
