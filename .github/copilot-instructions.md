<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

## Project Setup Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements - React/Vite app with damage allocation UI
- [x] Scaffold the Project
- [x] Customize the Project - UI components implemented with dropdown, input, and dice rolling
- [x] Install Required Extensions - No extensions required
- [x] Compile the Project - Dependencies installed successfully
- [x] Create and Run Task - Ready to run `npm run dev`
- [ ] Launch the Project
- [ ] Ensure Documentation is Complete

## How to Run

Once you fix the Node.js PATH issue, run:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Overview

**Type:** React + Vite SPA
**Purpose:** Damage allocation app with dropdown selection, numerical input, and 2d6 dice rolling
**Tech Stack:** React 18, TypeScript, Vite

### Features
- Dropdown menu for item selection
- Numerical input field for damage amount
- Confirmation button that rolls 2d6 N times (where N = input value)
- Console logging for debugging
