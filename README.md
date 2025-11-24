# Sentomate - n8n Automation Dashboard (FULLY AI GENERATED)

A modern, responsive dashboard for managing n8n workflows and automations. Built with Next.js and styled with vanilla CSS, featuring glassmorphism design, parallax effects, and mobile-responsive navigation.

![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![Claude](https://img.shields.io/badge/Claude-Sonnet_4.5-8B5CF6?style=for-the-badge&logo=anthropic)
![Gemini](https://img.shields.io/badge/Gemini-3.0_Pro-4285F4?style=for-the-badge&logo=google)

## ✨ Features

### 🎨 Design
- **Modern UI** - Premium glassmorphism effects with vibrant gradients
- **Parallax Scrolling** - Smooth floating gradient shapes with depth
- **Animated Components** - Gradient text, scroll reveal animations, and dropdown arrows
- **Responsive Design** - Mobile burger menu, stacking layouts, and optimized for all devices
- **Dark Theme** - Purple/pink gradients with Inter font from Google Fonts

### 🔧 Functionality
- **Form Submission** - Simple form to test data input through n8n webhook with real-time responses
- **News Scraper** - Configure and control news scraper bot with custom parameters:
  - Country selection (US, UK, Canada, Australia, etc.)
  - Category filtering (Business, Technology, Sports, etc.)
  - Source specification
  - Keyword search
- **Workflow Status** - Real-time n8n workflow connectivity indicator
- **n8n Integration** - Seamless webhook integration for workflow automation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- An n8n instance with webhooks configured

### Installation

1. Clone the repository:
```bash
git clone https://github.com/calzkmal/sentomate
cd n8n-form
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your n8n credentials:
```env
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/form-submission-id
N8N_API_KEY=your-api-key
N8N_HEALTH_CHECK_URL=https://your-n8n-instance.com/webhook/health-check-id
NEWS_SCRAPER_WEBHOOK_URL=https://your-n8n-instance.com/webhook/news-scraper-id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0.3 with App Router
- **Language**: TypeScript
- **AI Agents**: Claude Sonnet 4.5, Gemini 3.0 Pro
- **Styling**: Vanilla CSS with custom design system
- **Animations**: CSS animations with Intersection Observer API
- **Integration**: n8n webhook API

## 📁 Project Structure

```
n8n-form/
├── app/
│   ├── api/
│   │   ├── check-workflow/route.ts    # Workflow health check
│   │   ├── form-submission/route.ts   # Form submission webhook
│   │   └── news-scraper/route.ts      # News scraper webhook
│   ├── form-submission/page.tsx       # Form submission page
│   ├── news-scraper/page.tsx          # News scraper page
│   ├── page.tsx                       # Landing page
│   ├── layout.tsx                     # Root layout
│   └── globals.css                    # Design system & animations
├── components/
│   ├── FormComponent.tsx              # Form submission component
│   ├── NewsScraperForm.tsx            # News scraper form component
│   ├── Navbar.tsx                     # Responsive navigation
│   ├── Footer.tsx                     # Reusable footer
│   └── WorkflowStatusBadge.tsx        # Workflow status indicator
├── .env.local                         # Environment variables
└── package.json
```

## 🔧 Configuration

### n8n Webhook Setup

1. **Form Submission Workflow**:
   - Create a webhook node in your n8n workflow
   - Configure to accept POST requests with `name` and `message` fields
   - Copy the webhook URL to `N8N_WEBHOOK_URL`

2. **News Scraper Workflow**:
   - Create a webhook node for news scraping
   - Configure to accept `country`, `category`, `sources`, and `q` parameters
   - Copy the webhook URL to `NEWS_SCRAPER_WEBHOOK_URL`

3. **Health Check Workflow**:
   - Create a simple webhook that returns "Active"
   - Copy the webhook URL to `N8N_HEALTH_CHECK_URL`

### Environment Variables

| Variable | Description |
|----------|-------------|
| `N8N_WEBHOOK_URL` | Form submission webhook endpoint URL |
| `N8N_API_KEY` | API key for webhook authentication |
| `N8N_HEALTH_CHECK_URL` | Health check endpoint URL |
| `NEWS_SCRAPER_WEBHOOK_URL` | News scraper webhook endpoint URL |

## 📝 Usage

### Form Submission
1. Navigate to `/form-submission`
2. Fill out the form with name and message
3. Click "Send to n8n"
4. View the real-time response from your workflow

### News Scraper
1. Navigate to `/news-scraper`
2. Select country and category OR specify sources
3. Optionally add search keywords
4. Click "Start News Scraper"
5. View the response from your n8n workflow

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `N8N_WEBHOOK_URL`
   - `N8N_API_KEY`
   - `N8N_HEALTH_CHECK_URL`
   - `NEWS_SCRAPER_WEBHOOK_URL`
4. Deploy!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [n8n](https://n8n.io/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built on Next.js using Claude, Gemini, and styled with vanilla CSS

---

**Made with ❤️ using Next.js and n8n**

