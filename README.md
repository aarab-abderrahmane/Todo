# 📝 PlanPulse - Modern Todo Application

<div align="center">

![Todo App Demo](./public/planpulse.vercel.app_3.png)

A beautiful, feature-rich todo list application with advanced customization, drag-and-drop functionality, and a stunning glassmorphism design. Built with React 19, Vite, and modern web technologies.

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
- ✏️ **Quick Task Creation** - Add tasks instantly
- 🎯 **Drag & Drop** - Reorder tasks with smooth animations
- ✅ **Task Completion** - Animated checkboxes with satisfying interactions
- 📝 **Inline Editing** - Edit tasks directly in place
- 🗑️ **Smart Deletion** - Confirmation dialogs for safety
- 💾 **Auto-save** - All changes persist automatically
- 📤 **Import/Export** - Backup and restore your todos

</td>
<td width="50%">

### 🎨 Customization & Design
- 🌈 **Theme System** - 6 beautiful color schemes (Blue, Red, Yellow, Green, Purple, Default)
- 🖼️ **Custom Backgrounds** - Upload and set your own background images
- 🖱️ **Cursor Styles** - Choose between smooth or default cursor
- 👁️ **Hide/Show UI** - Toggle text visibility for minimal interface
- 🔆 **Opacity Control** - Adjust text transparency (0-100%)
- 📱 **Fully Responsive** - Seamless experience on all devices
- 🎭 **Glassmorphism UI** - Modern frosted-glass aesthetic

</td>
</tr>
</table>

### 🧩 Widget System

- 📅 **Live Calendar** - Interactive calendar widget with date selection
- ⏰ **Detailed Clock** - Real-time clock with date display
- 🔄 **Customizable Layout** - Drag and reorder widgets to your preference
- 💫 **Smooth Animations** - All interactions feel polished and responsive

### ⌨️ Enhanced UX

- 🎊 **Celebration Effects** - Confetti animations on task completion
- 🔔 **Toast Notifications** - Non-intrusive feedback for all actions
- 🌊 **Framer Motion** - Smooth, physics-based animations throughout
- ⚡ **Keyboard Shortcuts** - Fast navigation and editing
- 🎯 **Floating Dock** - Quick access to important actions

## 🎬 Demo

![App Demo](./public/planpulse.vercel.app_1.png)
![Features](./public/planpulse.vercel.app_%202.png)

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
│   │   ├── ui/                      # shadcn/ui components
│   │   │   ├── accordion.jsx
│   │   │   ├── button.jsx
│   │   │   ├── calendar.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── floating-dock.jsx    # Dock navigation
│   │   │   ├── smooth-cursor.jsx    # Custom cursor
│   │   │   └── ... (30+ components)
│   │   ├── TodoList.jsx             # Main todo container
│   │   ├── List.jsx                 # Individual todo item (DnD enabled)
│   │   ├── Checkbox.jsx             # Animated checkbox
│   │   ├── LiveCalendar.jsx         # Calendar widget
│   │   ├── LiveClockDetailed.jsx    # Clock widget
│   │   ├── Preferences.jsx          # Settings panel
│   │   └── AlertConfirm.jsx         # Confirmation dialogs
│   ├── landingPage/                 # Landing page components
│   ├── lib/                         # Utility functions
│   │   └── utils.js                 # Helper functions
│   ├── App.jsx                      # Root component with context
│   ├── Content.jsx                  # Main layout
│   ├── LandingPage.jsx              # Welcome screen
│   ├── ImportDataSection.jsx        # Import/Export functionality
│   ├── ToastContext.jsx             # Toast notifications context
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles & CSS variables
├── public/                          # Static assets & images
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
├── components.json                  # shadcn/ui configuration
└── README.md                        # Documentation
```

## 🧩 Architecture

### State Management

The app uses **React Context API** for comprehensive state management:

```javascript
// Preferences Context - Theme, layout, and UI settings
PreferencesContext = {
  background: { active, id, path },
  customizeLayout: { active, info: Array<Widget> },
  hasVisited: boolean,
  general: { hideTexts, opacityTexts },
  cursorType: string,
  theme_name: string,
  themes: Object,
  buttons: Object
}

// Toast Context - Global notifications
ToastContext = {
  showToast: Function
}
```

### Drag & Drop System

Powered by **@dnd-kit** for smooth, accessible drag-and-drop:

```javascript
// DnD Kit Implementation
- DndContext: Main wrapper for drag functionality
- SortableContext: Vertical list sorting strategy
- useSortable: Hook for individual draggable items
- arrayMove: Utility for reordering arrays
- closestCorners: Collision detection algorithm
```

### Data Models

```typescript
// Todo Item Structure
interface Todo {
  id: number;              // Unique identifier
  content: string;         // Task description
  modeEdit: boolean;       // Edit mode state
  check: boolean;          // Completion status
}

// Widget Structure
interface Widget {
  id: number;
  type: "calendar" | "clock";
}

// Theme Structure
interface Theme {
  "--color-background": string;
  "--color-text": string;
  "--color-button": string;
}
```

### Component Hierarchy

```
App (Providers: PreferencesContext)
├── ToastContext Provider
│   └── Toaster
├── LandingPage (First-time visitors)
└── Content
    ├── SmoothCursor (Optional)
    ├── DndContext
    │   ├── SortableContext
    │   │   └── TodoList
    │   │       ├── ImportDataSection
    │   │       ├── Input (Add new todo)
    │   │       └── List[] (Draggable todo items)
    │   │           ├── Checkbox (Animated)
    │   │           ├── Edit controls
    │   │           └── Delete button
    │   └── Widgets (Draggable)
    │       ├── LiveCalendar
    │       └── LiveClockDetailed
    ├── Preferences (Settings panel)
    ├── FloatingDock (Quick actions)
    └── AlertConfirm (Modals)
```

## 💾 Data Persistence

### localStorage Keys

The app stores multiple data types in browser localStorage:

```javascript
// 1. Todos Data
localStorage.key: 'todos'
Format: Array<Todo>
[
  {
    "id": 1,
    "content": "Learn React",
    "modeEdit": false,
    "check": false
  }
]

// 2. Preferences Data
localStorage.key: 'Preferences'
Format: PreferencesObject
{
  "background": { "active": false, "id": 0, "path": "" },
  "customizeLayout": {
    "active": false,
    "info": [
      { "id": 0, "type": "calendar" },
      { "id": 1, "type": "clock" }
    ]
  },
  "hasVisited": true,
  "general": { "hideTexts": false, "opacityTexts": 100 },
  "cursorType": "smooth",
  "theme_name": "blue",
  "buttons": {
    "buttonDelete": { "active": false, "color": "..." },
    "buttonEdit": { "active": true, "color": "..." }
  }
}
```

**Features:**
- ✅ Auto-save on every change
- ✅ Loads previous session on startup
- ✅ Graceful error handling with fallbacks
- ✅ Deep object merging for preferences
- ✅ JSON parsing with validation

## 🎨 Theming System

### Built-in Themes

The app includes 6 carefully crafted color schemes:

| Theme | Background | Text | Button |
|-------|-----------|------|--------|
| 🔵 **Blue** | #90b5dc | #0c2646 | #4f83f8 |
| 🔴 **Red** | #dc9090 | #460c0c | #f84f4f |
| 🟡 **Yellow** | #e6dc90 | #46400c | #f8e14f |
| 🟢 **Green** | #90dca4 | #0c4620 | #4ff86a |
| 🟣 **Purple** | #b890dc | #2a0c46 | #9b4ff8 |
| ⚪ **Default** | #C6C7DC | #645D7E | #C6C7DC |

### Custom Backgrounds

```javascript
// Upload and apply custom background images
- Supports: JPG, PNG, GIF, WebP
- Stored as base64 in localStorage
- Can be toggled on/off
- Preserves image across sessions
```

### CSS Variables

Customize the theme by modifying CSS variables in `src/index.css`:

```css
:root {
  --color-background: #90b5dc;
  --color-text: #0c2646;
  --color-button: #4f83f8;
  --color-primary-light: rgba(79, 131, 248, 0.2);
}
```

### Glassmorphism Effect

```css
/* Signature frosted-glass design */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
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
<br>Tailwind 4
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
| react-dom | 19.2.0 | React DOM rendering |
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
| @radix-ui/* | Various | 15+ headless UI components |
| lucide-react | 0.546.0 | Icon library (1000+ icons) |
| @tabler/icons-react | 3.35.0 | Additional icon set |
| sonner | 2.0.7 | Toast notifications |
| react-day-picker | 9.11.1 | Calendar component |
| canvas-confetti | 1.9.4 | Celebration effects |

### Utilities

- **date-fns** - Date manipulation and formatting
- **clsx** & **tailwind-merge** - Class name utilities
- **class-variance-authority** - Component variants
- **next-themes** - Theme management

## 📜 Available Scripts

```bash
# Development
npm run dev      # Start dev server at http://localhost:5173
                # Hot Module Replacement (HMR) enabled

# Production
npm run build    # Build optimized production bundle
                # Output: dist/ folder

npm run preview  # Preview production build locally
                # Serves the dist/ folder

# Code Quality
npm run lint     # Run ESLint checks
                # Fixes auto-fixable issues
```

## ⚡ Performance Optimizations

- **⚡ Fast Refresh** - Instant feedback during development with React Fast Refresh
- **📦 Code Splitting** - Automatic route-based code splitting
- **🌳 Tree Shaking** - Removes unused code from production bundle
- **🗜️ Minification** - Compressed JavaScript, CSS, and HTML
- **🚀 Lazy Loading** - Components load on-demand
- **💾 Memoization** - React.useMemo for expensive computations
- **🎯 Optimized Renders** - Strategic use of React.memo and useCallback
- **📊 Bundle Analysis** - Small bundle size (~150KB gzipped)

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |

**Requirements:**
- Modern browser with ES6+ support
- localStorage enabled
- JavaScript enabled

## 🎯 Key Features Explained

### 1. Drag & Drop Todos

```javascript
// Powered by @dnd-kit
- Smooth animations during drag
- Collision detection with closestCorners
- Visual feedback (opacity, scale changes)
- Auto-scroll when dragging near edges
- Keyboard accessible (Space to grab, Arrow keys to move)
```

### 2. Smart Preferences

```javascript
// Persistent settings across sessions
- Theme selection (6 themes)
- Custom background uploads
- Widget visibility and order
- Cursor style preferences
- UI density controls
- Button customization
```

### 3. Import/Export System

```javascript
// Backup and restore your data
Export: Downloads JSON file with all todos
Import: 
  - Supports JSON format
  - Validates data structure
  - Merges or replaces existing todos
  - Error handling with user feedback
```

### 4. Widget Customization

```javascript
// Flexible layout system
- Drag widgets to reorder
- Show/hide individual widgets
- Choose between Calendar and Clock
- Responsive positioning
- Smooth transitions
```

## 🎨 Customization Guide

### Changing Themes

1. Click the **Preferences** icon (gear/settings)
2. Navigate to **Themes** section
3. Select from 6 pre-built themes
4. Changes apply instantly

### Adding Custom Backgrounds

1. Open **Preferences**
2. Go to **Background** section
3. Click **Upload Image**
4. Select image (JPG, PNG, GIF, WebP)
5. Toggle **Active** to apply

### Adjusting UI Density

1. Open **Preferences**
2. Navigate to **General** section
3. Toggle **Hide Texts** for minimal UI
4. Adjust **Opacity** slider (0-100%)

### Customizing Widgets

1. Enable **Customize Layout** in Preferences
2. Drag widgets to reorder them
3. Add or remove widgets
4. Save changes

## 🛣️ Roadmap

### ✅ Completed Features

- ✅ Drag & Drop reordering
- ✅ Theme system with 6 themes
- ✅ Custom backgrounds
- ✅ Import/Export functionality
- ✅ Widget system (Calendar, Clock)
- ✅ Customizable cursor
- ✅ Toast notifications
- ✅ Glassmorphism design
- ✅ Responsive layout
- ✅ First-time user experience

### 🚧 In Development

- 🔄 **Undo/Redo** - Action history
- 🔄 **Keyboard Shortcuts** - Power user features
- 🔄 **Dark Mode** - Automatic theme switching

### 📋 Planned Features

- [ ] 🏷️ **Tags & Categories** - Organize by type
- [ ] 📅 **Due Dates** - Set deadlines
- [ ] 🎯 **Priority Levels** - High/medium/low
- [ ] 🔍 **Search & Filter** - Find tasks quickly
- [ ] 📊 **Statistics** - Track productivity
- [ ] 🔔 **Reminders** - Browser notifications
- [ ] 👥 **Collaboration** - Share lists
- [ ] 🌐 **Cloud Sync** - Multi-device support
- [ ] 📱 **PWA** - Install as mobile app
- [ ] ⌨️ **Vim Keybindings** - Alternative shortcuts
- [ ] 🎨 **Theme Builder** - Create custom themes
- [ ] 🔐 **Encryption** - Secure your data

## 🐛 Known Issues

No major issues reported. If you encounter any bugs:

1. Check [existing issues](https://github.com/aarab-abderrahmane/PlanPulse/issues)
2. [Create a new issue](https://github.com/aarab-abderrahmane/PlanPulse/issues/new) with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS info
   - Screenshots if applicable

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ Must disclose source
- ⚠️ License and copyright notice required
- ⚠️ Same license for derivatives

See [LICENSE](./LICENSE) for full details.

## 👨‍💻 Author

**Aarab Abderrahmane**

- 🌐 Portfolio: [aarab-abderrahmane.vercel.app](https://aarab-abderrahmane.vercel.app)
- 💻 GitHub: [@aarab-abderrahmane](https://github.com/aarab-abderrahmane)
- 📧 Email: [Your Email]

## 💖 Support the Project

If you find PlanPulse helpful, please consider:

- ⭐ **Star this repository** - Show your appreciation
- 🐛 **Report bugs** - Help improve the app
- 💡 **Suggest features** - Share your ideas
- 🔀 **Submit PRs** - Contribute code
- 📢 **Share** - Tell others about PlanPulse

## 🙏 Acknowledgments

### Technologies

- [React](https://reactjs.org/) - The foundation
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [@dnd-kit](https://dndkit.com/) - Modern drag-and-drop
- [Framer Motion](https://www.framer.com/motion/) - Powerful animations

### Inspiration

Special thanks to the open-source community for inspiration and tools that made this project possible.

## 📊 Project Stats

- **Languages:** JavaScript, CSS, HTML
- **Framework:** React 19
- **Build Tool:** Vite 7
- **Dependencies:** 40+ packages
- **Components:** 50+ reusable components
- **Lines of Code:** 5,000+
- **Bundle Size:** ~150KB (gzipped)

## 🔗 Quick Links

- 📚 [Documentation](https://github.com/aarab-abderrahmane/PlanPulse/wiki)
- 🐛 [Issue Tracker](https://github.com/aarab-abderrahmane/PlanPulse/issues)
- 💬 [Discussions](https://github.com/aarab-abderrahmane/PlanPulse/discussions)
- 📝 [Changelog](https://github.com/aarab-abderrahmane/PlanPulse/releases)
- 🌐 [Live Demo](https://planpulse.vercel.app)

---

<div align="center">

**Built with ❤️ by Aarab Abderrahmane**

**Happy Task Managing! ✅**

[⬆ Back to Top](#-planpulse---modern-todo-application)

</div>
