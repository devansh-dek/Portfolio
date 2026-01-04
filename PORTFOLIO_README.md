# Devansh Khandelwal - Portfolio Website

An innovative, problem-solving focused portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎨 Features

- **Interactive Hero Section** with animated typing effect and floating particles
- **Problem-Solving Showcase** - Projects presented as problems and solutions
- **Dynamic Skills Visualization** with progress bars and filtering
- **Interactive Timeline** for work experience
- **Modern Contact Form** with validation
- **Smooth Animations** and transitions throughout
- **Fully Responsive** design for all devices
- **Custom Color Scheme** with purple/pink gradients
- **Smooth Scrolling** navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /home/devanshkhandelwal/portfolio/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Update Personal Information

1. **Hero Section** - Edit `app/components/Hero.tsx`:
   - Change name and tagline
   - Update typing animation text
   - Modify call-to-action buttons

2. **Projects** - Edit `app/components/Projects.tsx`:
   - Update the `projects` array with your actual projects
   - Add real GitHub links or live demos
   - Modify categories and tech stacks

3. **Skills** - Edit `app/components/Skills.tsx`:
   - Update the `skills` array with your actual skills
   - Adjust proficiency levels (0-100)
   - Add or remove skill categories

4. **Experience** - Edit `app/components/Experience.tsx`:
   - Update the `experiences` array with your work history
   - Add achievements and responsibilities
   - Include relevant technologies

5. **Contact** - Edit `app/components/Contact.tsx`:
   - Update email, LinkedIn, and GitHub links
   - Configure form submission (currently simulated)
   - Update contact statistics

### Color Scheme

The portfolio uses a purple/pink gradient theme. To change colors:

1. Edit `app/globals.css` for global styles
2. Update Tailwind classes in components (purple-*, pink-*, slate-*)

### Resume

Place your resume PDF at `/public/Devansh_Khandelwal_Resume.pdf` or update the path in:
- `app/components/Navigation.tsx`

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Fixed navigation bar
│   │   ├── Hero.tsx          # Hero section with animations
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── Skills.tsx        # Skills visualization
│   │   ├── Experience.tsx    # Work experience timeline
│   │   └── Contact.tsx       # Contact form and info
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── public/                   # Static assets
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Next.js 16** - React framework with Turbopack
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Custom Animations** - CSS keyframes

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy easily to Vercel:

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

Or deploy to other platforms:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎨 Design Philosophy

This portfolio emphasizes **problem-solving** over just listing technologies:
- Each project shows Problem → Solution → Impact
- Skills presented as tools in a problem-solver's arsenal
- Experience framed as growth journey
- Interactive elements engage visitors

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## ✨ Credits

Designed and developed by Devansh Khandelwal
