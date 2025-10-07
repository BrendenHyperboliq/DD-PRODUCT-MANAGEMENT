# Double Diamond Framework Presentation

An interactive slideshow presentation showcasing a professional development journey through the Double Diamond design thinking framework.

## About

This presentation documents the transition from front-end development to taking on product management responsibilities, specifically focusing on becoming a communication bridge between clients and development teams. The content is organized using the Double Diamond Framework's four phases:

- **Discover**: Identifying opportunities and understanding the problem space
- **Define**: Scoping the role and defining responsibilities
- **Develop**: Creating deliverables and building the approach
- **Deliver**: Demonstrating impact and value

## What is the Double Diamond Framework?

The Double Diamond is a design thinking framework for problem-solving and innovation. It consists of two diamonds representing the problem space (Discover → Define) and solution space (Develop → Deliver), emphasizing divergent and convergent thinking at each stage.

## Installation

\`\`\`bash
npm install
\`\`\`

## Running Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the presentation.

## Navigation

- **Arrow Keys**: Navigate between slides
- **Left/Right Buttons**: Click to move between slides
- **Dot Indicators**: Click to jump to a specific slide

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main slideshow component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles and theme
├── components/
│   └── double-diamond-indicator.tsx  # Progress indicator
└── README.md
\`\`\`

## Customization

The presentation content can be customized by editing the `slides` array in `app/page.tsx`. Each slide includes:
- Title
- Content (cards with icons and descriptions)
- Phase indicator (discover, define, develop, deliver, or none)

## License

This project is open source and available for personal and educational use.
