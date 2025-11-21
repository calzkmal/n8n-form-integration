# n8n Form Integration

A modern, beautiful Next.js application with n8n workflow integration, featuring parallax scrolling effects, animated hero section, and professional footer.

![Hero Section](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

- 🎨 **Modern UI Design** - Premium glassmorphism effects with vibrant gradients
- 🌊 **Parallax Scrolling** - Smooth floating gradient shapes with depth
- 🎭 **Animated Hero Section** - Gradient text with shifting colors and pulsing status badge
- 📜 **Scroll Reveal Animations** - Content fades in smoothly as you scroll
- 🔗 **n8n Integration** - Seamless webhook integration for workflow automation
- 📱 **Fully Responsive** - Optimized for all devices
- 🔒 **Environment Variables** - Secure configuration management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- An n8n instance with a webhook configured

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd n8n-form
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your n8n credentials:
```env
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
N8N_API_KEY=your-api-key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0.3 with App Router
- **Language**: TypeScript
- **Styling**: CSS with custom design system
- **Animations**: CSS animations with Intersection Observer API
- **Integration**: n8n webhook API

## 📁 Project Structure

```
n8n-form/
├── app/
│   ├── api/submit/route.ts    # n8n webhook integration
│   ├── page.tsx               # Main page with hero & footer
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Design system & animations
├── components/
│   └── FormComponent.tsx      # Form component
├── .env.example               # Environment variables template
└── package.json
```

## 🎨 Design Highlights

- **Color Palette**: Purple/pink gradients with dark theme
- **Typography**: Inter font from Google Fonts
- **Animations**: Fade-in, gradient shift, parallax float, pulse effects
- **Glassmorphism**: Backdrop blur with subtle borders

## 🔧 Configuration

### n8n Webhook Setup

1. Create a webhook node in your n8n workflow
2. Configure authentication (if needed)
3. Copy the webhook URL
4. Add the URL and API key to `.env.local`

### Environment Variables

| Variable | Description |
|----------|-------------|
| `N8N_WEBHOOK_URL` | Your n8n webhook endpoint URL |
| `N8N_API_KEY` | API key for webhook authentication |

## 📝 Usage

1. Fill out the form with your data (name, email, message)
2. Click "Send to n8n"
3. View the response from your n8n workflow

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Make sure to set the environment variables in your deployment platform:
- `N8N_WEBHOOK_URL`
- `N8N_API_KEY`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [n8n](https://n8n.io/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ using Next.js and n8n**
