# 📝 Modern Todo Application

<div align="center">

![Todo App Demo](./public/planpulse.vercel.app_3.png)

A beautiful, feature-rich todo list application built with React 19, Vite, and styled-components. Featuring glassmorphism design, smooth animations, and persistent storage.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![styled-components](https://img.shields.io/badge/styled--components-6.1.19-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](./LICENSE)

[Live Demo](https://planpulse.vercel.app) · [Report Bug](https://github.com/aarab-abderrahmane/Todo/issues) · [Request Feature](https://github.com/aarab-abderrahmane/Todo/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### Core Functionality
- 📝 **Quick Task Creation** - Add tasks with a single click
- ✏️ **Inline Editing** - Edit tasks directly in place
- ✅ **Task Completion** - Mark tasks as done with animated checkboxes
- 🗑️ **Easy Deletion** - Remove tasks you no longer need
- 💾 **Auto-save** - All changes automatically persist to localStorage

</td>
<td width="50%">

### Design & UX
- 🎨 **Glassmorphism UI** - Modern, frosted-glass aesthetic
- 🌊 **Smooth Animations** - Delightful micro-interactions
- 📱 **Fully Responsive** - Works on all devices
- ⌨️ **Keyboard Shortcuts** - Fast navigation and editing
- 🎭 **Interactive Elements** - Hover effects and transitions

</td>
</tr>
</table>

## 🎬 Demo

![App Demo](./public/planpulse.vercel.app_1.png)
![Features](./public/planpulse.vercel.app_2.png)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/aarab-abderrahmane/Todo.git
cd Todo

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🏗️ Project Structure

```
Todo/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── accordion.jsx
│   │   │   ├── button.jsx
│   │   │   ├── calendar.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── input.jsx
│   │   │   ├── slider.jsx
│   │   │   ├── sonner.jsx
│   │   │   ├── tooltip.jsx
│   │   │   └── ... (more UI components)
│   │   ├── TodoList.jsx     # Main todo list container
│   │   ├── List.jsx         # Individual todo item
│   │   ├── Checkbox.jsx     # Animated checkbox
│   │   ├── LiveCalendar.jsx # Calendar widget
│   │   ├── LiveClockDetailed.jsx # Clock widget
│   │   ├── Preferences.jsx  # Settings panel
│   │   └── AlertConfirm.jsx # Confirmation dialogs
│   ├── landingPage/         # Landing page components
│   ├── lib/                 # Utility functions
│   ├── App.jsx              # Root component
│   ├── Content.jsx          # Main content layout
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── ToastContext.jsx     # Toast notifications
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── components.json         # shadcn/ui configuration
└── README.md               # Documentation
```

## 🧩 Architecture

### State Management

The app uses **React Context API** for global state management:

```javascript
// Context Provider Structure
todosContext = {
  todos: Array<Todo>,        // All todo items
  handleAdd: Function,       // Create new todo
  handleCheck: Function,     // Toggle completion
  handleEdit: Function,      // Enable/disable edit mode
  handleInputChange: Function // Update todo content
}
```

### Todo Data Structure

```typescript
interface Todo {
  id: number;           // Unique identifier
  content: string;      // Task description
  modeEdit: boolean;    // Edit mode state
  check: boolean;       // Completion status
}
```

### Component Hierarchy

```
App (Context Provider)
└── Content
    ├── Header/Navigation
    ├── TodoList
    │   ├── Input (Add new todo)
    │   └── List (Multiple)
    │       ├── Checkbox
    │       ├── Edit controls
    │       └── Delete button
    └── Sidebar Widgets
        ├── LiveCalendar
        ├── LiveClockDetailed
        └── Preferences
```

## 💾 Data Persistence

All todos are automatically saved to browser localStorage:

```javascript
// Storage Key
'todos'

// Data Format
[
  {
    "id": 1,
    "content": "Learn React",
    "modeEdit": false,
    "check": false
  },
  {
    "id": 2,
    "content": "Build Todo App",
    "modeEdit": false,
    "check": true
  }
]
```

**Features:**
- ✅ Auto-save on every change
- ✅ Loads previous session on startup
- ✅ Fallback to default todos if empty
- ✅ Handles JSON parsing errors gracefully

## 🎨 Styling & Theming

### Technology Stack

- **Tailwind CSS 4.1** - Utility-first CSS framework
- **styled-components 6.1** - CSS-in-JS for animated components
- **Radix UI** - Headless UI components
- **shadcn/ui** - Beautiful pre-built components
- **Framer Motion** - Animation library

### Customization

Modify theme colors in `src/index.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  --color-background: #your-color;
  --color-text: #your-color;
}
```

### Glass Morphism Effect

The signature frosted-glass look uses:
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

## 🔧 Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React 19
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
<br>Vite 7
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br>Tailwind
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=styledcomponents" width="48" height="48" alt="styled-components" />
<br>styled-components
</td>
</tr>
</table>

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.2.0 | UI framework |
| react-dom | 19.2.0 | React DOM bindings |
| vite | 7.1.7 | Build tool & dev server |
| styled-components | 6.1.19 | CSS-in-JS styling |
| tailwindcss | 4.1.16 | Utility-first CSS |
| framer-motion | 12.23.24 | Animation library |

### UI Component Libraries

- **Radix UI** - Accessible, headless components
- **shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Icon library
- **date-fns** - Date manipulation
- **Sonner** - Toast notifications
- **Canvas Confetti** - Celebration effects

## 📜 Available Scripts

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code quality checks
```

## ⚡ Performance

- **Fast Refresh** - Instant feedback during development
- **Code Splitting** - Optimized bundle sizes
- **Tree Shaking** - Removes unused code
- **Lazy Loading** - Components load on demand
- **Optimized Build** - Minified production bundle

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚧 Roadmap

### Planned Features

- [ ] 🏷️ **Categories & Tags** - Organize tasks by type
- [ ] 📅 **Due Dates** - Set deadlines for tasks
- [ ] 🎯 **Priority Levels** - High, medium, low priority
- [ ] 🌙 **Dark Mode** - Toggle between themes
- [ ] 🔍 **Search & Filter** - Find tasks quickly
- [ ] ↕️ **Drag & Drop** - Reorder tasks
- [ ] 📤 **Export/Import** - Backup and restore todos
- [ ] ⌨️ **Keyboard Shortcuts** - Power user features
- [ ] 👥 **Collaboration** - Share todo lists
- [ ] 🔔 **Reminders** - Get notified about tasks

## 🐛 Known Issues

No major issues reported. [Create an issue](https://github.com/aarab-abderrahmane/Todo/issues) if you find bugs!



## 📄 License

This project is licensed under the [GPL-3.0 License](https://github.com/aarab-abderrahmane/Todo?tab=GPL-3.0-1-ov-file).

## 👨‍💻 Author

**Aarab Abderrahmane**

- GitHub: [@aarab-abderrahmane](https://github.com/aarab-abderrahmane)
- Portfolio: [Your Portfolio](https://planpulse.vercel.app)

## 💖 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features


## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The UI framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component collection

---

<div align="center">

**Built with ❤️ using React & Vite**

**Happy Task Managing! ✅**

[⬆ Back to Top](#-modern-todo-application)

</div>
