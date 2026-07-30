# Folder App

A simple browser-based folder structure app that lets users create and edit folders and nested subfolders.

## Features

- Add new folders using a modal input.
- Create nested subfolders inside existing folders.
- Rename folders inline by pressing Enter.
- Persist folder data using `localStorage` so structure remains after reload.

## Files

- `index.html` — app markup and Bootstrap integration.
- `style.css` — basic layout styling for the sidebar.
- `script.js` — folder creation, editing, nested rendering, and localStorage logic.

## Usage

1. Open `index.html` in a web browser.
2. Click `Add Folder` to create a new folder.
3. Click the add icon next to a folder to add a nested subfolder.
4. Click a folder name and press `Enter` after editing to save the new name.

## Notes

- The app uses Bootstrap for basic styling and layout.
- Data is stored in the browser's `localStorage` under the key `allFolders`.
- Refreshing the page restores the saved folder tree.
