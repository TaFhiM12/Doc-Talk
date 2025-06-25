
```markdown
# Doc-Talk: Medical Appointment System



A modern web application for booking doctor appointments with real-time availability and patient management.

## Features

- 🩺 Doctor profile browsing and details
- 📅 Appointment booking system
- 📝 Medical blogs and articles
- 📞 Contact form for inquiries
- 📱 Responsive design for all devices

## Tech Stack

### Frontend
- React 19
- React Router v7
- Tailwind CSS + DaisyUI
- Recharts for data visualization
- Vite (Build Tool)

### Key Libraries
- React Hot Toast (Notifications)
- React CountUp (Animations)
- React Icons

## Installation

1. Clone the repository:
```bash
[git clone https://github.com/yourusername/doc-talk.git](https://github.com/TaFhiM12/Doc-Talk.git)
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Project Structure

```
doc-talk/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── root/            # Root layout
│   └── ...              # Other source files
├── public/              # Static assets
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Configuration

The app uses these configuration files:
- `vite.config.js` - Vite build settings
- `tailwind.config.js` - Tailwind CSS configuration

## Data Flow

- Doctor data loaded from `/public/doctor-data.json`
- Blog content loaded from `/public/blogs-data.json`
- All routes are client-side rendered with React Router

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

