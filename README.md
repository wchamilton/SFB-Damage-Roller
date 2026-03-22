# SFB Damage Roller

A web app for rolling damage and looking up affected systems in Starfleet Battles using the official damage allocation table.

## Features

- **2d6 Dice Rolling**: Roll the dice multiple times to determine which systems are affected
- **Damage Table Lookup**: Automatically displays all affected systems based on your roll results
- **Column Navigation**: Cycle through damage columns (A-M) for each roll to see all possible system hits
- **"Once Per Turn" Indicator**: Bold systems marked as "(Once per turn)" to help track which can only be damaged once per turn sequence
- **Mobile-Friendly**: Works great on desktop and mobile devices
- **Offline Support**: Once loaded, the app works completely offline as a Progressive Web App (PWA)

## How to Use

### Access the App

Visit the live app here: **[SFB Damage Roller](https://wchamilton.github.io/SFB-Damage-Roller/)**

### Using the App

1. **Enter Damage Amount**: Type how many times you want to roll 2d6 (1-999)
2. **Click "Roll Dice"**: The app rolls that many times and displays each result
3. **View Results**: For each roll, you'll see:
   - The die roll result (2-12)
   - The systems affected in the current column
   - Previous/Next buttons to cycle through columns A-M
4. **Cycle Through Columns**: Use the arrow buttons to see what systems are affected in each column
5. **Roll Again**: Click "Roll Again" to start over

### Install as App (PWA)

On supported browsers (Chrome, Edge, Safari), you can install this app:

1. Visit the app link above
2. Click the install icon (browser-dependent location)
3. The app appears on your home screen
4. No internet connection needed after installation!

## About the Damage Table

The damage allocation chart is based on the official Starfleet Battles rules. Each die roll (2-12) maps to a specific row, and each column (A-M) shows which ship systems are damaged.

**Bold items with "(Once per turn)"** can only be damaged once per damage sequence – when rolling subsequent columns for the same row, these systems should be skipped.
