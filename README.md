# SFB Damage Allocation

A React + TypeScript + Vite application for allocating damage in Starfleet Battles, with dropdown selection, numerical input, and 2d6 dice rolling functionality.

## Features

- **Item Selection**: Dropdown menu to select the target item
- **Damage Input**: Numerical input field for damage amount (1-20)
- **Dice Rolling**: Rolls 2d6 N times based on the damage input
- **Console Logging**: All rolls are logged to the browser console for debugging

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server on `http://localhost:5173`

### Build

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview

```bash
npm run preview
```

This will preview the production build locally.

## Usage

1. Select an item from the dropdown menu
2. Enter the damage amount in the input field (1-20)
3. Click "Confirm & Roll Dice" button
4. Check the browser console for the dice roll results

The console will display:
- Selected item
- Damage amount
- Individual 2d6 rolls
- Total damage sum
