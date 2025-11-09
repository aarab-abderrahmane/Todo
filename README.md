# 📝 PlanPulse - Modern Todo Application

<div align="center">

![PlanPulse Banner](./public/planpulse.vercel.app_3.png)

A beautiful, feature-rich todo list application with advanced customization, drag-and-drop functionality, stunning glassmorphism design, and powerful widget system. Built with React 19, Vite, and modern web technologies.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](./LICENSE)

[Live Demo](https://planpulse.vercel.app) · [Report Bug](https://github.com/aarab-abderrahmane/PlanPulse/issues) · [Request Feature](https://github.com/aarab-abderrahmane/PlanPulse/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📋 Core Functionality
- ✏️ **Quick Task Creation** - Add tasks instantly with validation
- 🎯 **Drag & Drop** - Reorder tasks and widgets with smooth animations
- ✅ **Task Completion** - Animated checkboxes with satisfying interactions
- 📝 **Inline Editing** - Edit tasks directly in place
- 🗑️ **Smart Deletion** - Confirmation dialogs for safety
- 💾 **Auto-save** - All changes persist automatically in localStorage
- 📤 **Import/Export** - Backup and restore your todos as JSON
- 🔒 **Task Masking** - Hide sensitive tasks with blur effect
- 🎨 **Context Menu** - Right-click for quick actions

</td>
<td width="50%">

### 🎨 Customization & Design
- 🌈 **9 Theme System** - Beautiful color schemes (Blue, Red, Yellow, Green, Purple, Orange, Teal, Pink, Gray)
- 🖼️ **10+ Backgrounds** - Pre-loaded patterns or upload custom images
- 🖱️ **Cursor Styles** - Smooth animated or default cursor
- 👁️ **Hide/Show UI** - Toggle text visibility for minimal interface
- 🔆 **Opacity Control** - Adjust text transparency (0-100%)
- 📐 **Corner Radius** - Customize border radius (0-3rem)
- 🎨 **Font Customization** - Choose from 8 fonts with adjustable weights
- 📱 **Fully Responsive** - Seamless experience on all devices
- 🎭 **Glassmorphism UI** - Modern frosted-glass aesthetic
- 🎯 **Button Customization** - Show/hide edit and delete buttons

</td>
</tr>
</table>

### 🧩 Widget System

- 📅 **Live Calendar** - Interactive calendar widget with month/year selection using react-day-picker
- ⏰ **Detailed Clock** - Real-time clock with hours:minutes:seconds and AM/PM display
- 🔄 **Customizable Layout** - Drag and reorder widgets with two modes:
  - **Items Mode** - Reorder calendar and clock widgets within their section
  - **Sections Mode** - Swap entire widget sections (left/right)
- 💫 **Smooth Animations** - All interactions feel polished and responsive using Framer Motion

### ⌨️ Enhanced UX

- 🎊 **Celebration Effects** - Confetti animations on milestones using canvas-confetti
- 🔔 **Toast Notifications** - Color-coded feedback for all actions via Sonner
- 🌊 **Framer Motion** - Smooth, physics-based animations throughout
- ⚡ **Keyboard Shortcuts** - Fast navigation (Ctrl+B for Preferences, Ctrl+Y for Layout)
- 🎯 **Floating Dock** - Quick access to layout customization controls
- 🎬 **Welcome Stepper** - Interactive onboarding for new users
- 🎨 **Landing Page** - Beautiful animated introduction with timeline effects

## 🎬 Demo

<div align="center">

![App Demo](./public/planpulse.vercel.app_1.png)
![Features](./public/planpulse.vercel.app_%202.png)

</div>

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm/yarn/pnpm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/aarab-abderrahmane/PlanPulse.git
cd PlanPulse

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
PlanPulse/
├── src/
│   ├── components/
│   │   ├── ui/                          # shadcn/ui + custom components
│   │   │   ├── accordion.jsx
│   │   │   ├── button.jsx
│   │   │   ├── calendar.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── floating-dock.jsx        # Dock navigation
│   │   │   ├── smooth-cursor.jsx        # Custom cursor
│   │   │   ├── confetti.jsx             # Celebration effects
│   │   │   ├── sparkles-text.jsx        # Animated text
│   │   │   └── ... (40+ components)
│   │   ├── TodoList.jsx                 # Main todo container with DnD
│   │   ├── List.jsx                     # Individual todo item (sortable)
│   │   ├── Checkbox.jsx                 # Animated checkbox
│   │   ├── LiveCalendar.jsx             # Calendar widget
│   │   ├── LiveClockDetailed.jsx        # Clock widget
│   │   ├── Preferences.jsx              # Comprehensive settings panel
│   │   ├── DropDownMenuLabo.jsx         # Main dropdown menu
│   │   ├── AlertConfirm.jsx             # Confirmation dialogs
│   │   └── PreferencesItems/
│   │       ├── backgroundAccordion.jsx  # Background carousel
│   │       └── fontAccordion.jsx        # Font selection
│   ├── landingPage/                     # Landing page components
│   │   ├── indexlanding.jsx             # Main landing page
│   │   ├── button.jsx                   # Animated CTA button
│   │   └── timeline-animation.jsx       # Timeline animations
│   ├── lib/
│   │   └── utils.js                     # Helper functions (cn)
│   ├── App.jsx                          # Root with Preferences context
│   ├── Content.jsx                      # Router wrapper
│   ├── Stipper.jsx                      # Welcome stepper/onboarding
│   ├── ImportDataSection.jsx            # Import functionality
│   ├── ToastContext.jsx                 # Toast notifications context
│   ├── main.jsx                         # Entry point
│   └── index.css                        # Global styles + CSS variables
├── public/
│   ├── backgrounds/                     # Background pattern images
│   └── *.png                            # Demo screenshots
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🧩 Architecture

### State Management

The app uses **React Context API** for comprehensive state management:

```javascript
// Preferences Context - Theme, layout, and UI settings
PreferencesContext = {
  appVersion: "3.0.0",
  font: { id, weight },
  corners: 1.5,
  background: { active, id, path },
  customizeLayout: [
    [{ id: 0, type: "calendar" }, { id: 1, type: "clock" }],
    [{ id: 2, type: "todoList" }]
  ],
  general: { hideTexts, opacityTexts },
  cursorType: "default" | "smooth",
  theme_name: string,
  themes: Object,
  buttons: Object,
  dragMode: { active, mode }
}

// Toast Context - Global notifications
ToastContext = {
  showToast: Function
}

// Todos Context - Todo list operations
todosContext = {
  todos: Array,
  setTodos: Function,
  MaskTodo: Function,
  handleAdd: Function,
  handleCheck: Function,
  handleEdit: Function,
  handleSave: Function,
  hanldeDelete: Function
}
```

### Drag & Drop System

Powered by **@dnd-kit** for smooth, accessible drag-and-drop:

```javascript
// Two DnD modes:
// 1. Items Mode - Reorder calendar/clock widgets
// 2. Sections Mode - Swap entire widget sections

DndContext configuration:
- Collision detection: closestCorners
- Strategies: vertical and horizontal list sorting
- Custom drag handlers for both modes
```

### Data Models

```typescript
// Todo Item Structure
interface Todo {
  id: number;              // Unique identifier
  content: string;         // Task description
  modeEdit: boolean;       // Edit mode state
  check: boolean;          // Completion status
  mask: boolean;           // Visibility (blur) state
}

// Widget Structure
interface Widget {
  id: number;
  type: "calendar" | "clock" | "todoList";
}

// Layout Structure
type Layout = Widget[][];  // 2D array for sections

// Theme Structure
interface Theme {
  "--color-background": string;
  "--color-text": string;
  "--color-button": string;
}
```

## 💾 Data Persistence

### localStorage Keys

```javascript
// 1. Todos Data
localStorage.key: 'todos'
Format: Array<Todo>

// 2. Preferences Data
localStorage.key: 'Preferences'
Format: PreferencesObject

// 3. Onboarding State
localStorage.key: 'hasVisited'
localStorage.key: 'hasStarted'
Format: boolean
```

**Features:**
- ✅ Auto-save on every change
- ✅ Loads previous session on startup
- ✅ Graceful error handling with fallbacks
- ✅ Deep object merging for preferences
- ✅ JSON validation on import

## 🎨 Theming System

### Built-in Themes

The app includes **9** carefully crafted color schemes with customizable CSS variables.

### Background Patterns

10+ pre-loaded background patterns:
- Asfalt Light
- Batthern
- Church
- Light Wool
- Starring
- White Brick Wall
- White Diamond Dark
- Worn Dots
- Zig Zag

### CSS Variables

Customize the theme by modifying CSS variables in `src/index.css`:

```css
:root {
  --color-background: #90b5dc;
  --color-text: #0c2646;
  --color-button: #4f83f8;
  --border-radius: 1.5rem;
  --font-family: 'Poppins', sans-serif;
  --font-weight: 500;
}
```

## 🔧 Tech Stack

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.2.0 | UI framework |
| react-dom | 19.2.0 | React DOM rendering |
| react-router | 7.9.5 | Routing (landing page) |
| vite | 7.1.7 | Build tool & dev server |
| tailwindcss | 4.1.16 | Utility-first CSS framework |
| framer-motion | 12.23.24 | Animation library |
| styled-components | 6.1.19 | CSS-in-JS styling |

### Drag & Drop

| Package | Version | Purpose |
|---------|---------|---------|
| @dnd-kit/core | 6.3.1 | Core drag-and-drop logic |
| @dnd-kit/sortable | 10.0.0 | Sortable lists |
| @dnd-kit/utilities | 3.2.2 | Helper utilities |

### UI Component Libraries

| Package | Version | Purpose |
|---------|---------|---------|
| @radix-ui/* | Various | 15+ headless UI primitives |
| lucide-react | 0.546.0 | Icon library (1000+ icons) |
| @tabler/icons-react | 3.35.0 | Additional icon set |
| sonner | 2.0.7 | Toast notifications |
| react-day-picker | 9.11.1 | Calendar component |
| canvas-confetti | 1.9.4 | Celebration effects |

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + B` | Open/Close Preferences |
| `Ctrl + Y` | Toggle Layout Customization Mode |
| `Enter` | Add new todo (when input focused) |
| `Escape` | Cancel edit mode |
| `Right Click` | Context menu on todo items |

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |

## 🛣️ Roadmap

### 🚧 In Development (v3.1.0)

- 🔄 **Undo/Redo** - Action history with Ctrl+Z
- 🔄 **More Shortcuts** - Power user features
- 🔄 **Dark Mode** - Automatic theme switching

### 📋 Planned Features (v4.0.0)

- [ ] 🏷️ **Tags & Categories** - Color-coded organization
- [ ] 📅 **Due Dates** - Date picker with reminders
- [ ] 🎯 **Priority Levels** - High/medium/low badges
- [ ] 🔍 **Search & Filter** - Fuzzy search + advanced filters
- [ ] 📊 **Statistics Dashboard** - Productivity insights
- [ ] 🔔 **Browser Notifications** - Native reminders
- [ ] 👥 **Collaboration** - Share lists with others
- [ ] ☁️ **Cloud Sync** - Multi-device support
- [ ] 📱 **PWA** - Installable mobile app

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.

See [LICENSE](./LICENSE) for full details.

## 👨‍💻 Author

**Aarab Abderrahmane**

- 🌐 Portfolio: [aarab-abderrahmane.vercel.app](https://aarab-abderrahmane.vercel.app)
- 💻 GitHub: [@aarab-abderrahmane](https://github.com/aarab-abderrahmane)
- 💼 LinkedIn: [Aarab Abderrahmane](https://www.linkedin.com/in/aarab-abderrahmane-2b9509336/)
- 📧 Email: aarabderrahman@gmail.com

## 🙏 Acknowledgments

### Technologies

- [React](https://reactjs.org/) - The foundation
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [@dnd-kit](https://dndkit.com/) - Modern drag-and-drop
- [Framer Motion](https://www.framer.com/motion/) - Powerful animations
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [React Day Picker](https://react-day-picker.js.org/) - Calendar component

---

<div align="center">

**Built with ❤️ by Aarab Abderrahmane**

**Happy Task Managing! ✅**

[⬆ Back to Top](#-planpulse---modern-todo-application)

</div>
