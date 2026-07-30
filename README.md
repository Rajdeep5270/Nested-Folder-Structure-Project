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
2. Click `Add Folder` to open the modal and create a new folder.
3. Click the add icon next to a folder to add a nested subfolder.
4. Click a folder name, type a new name, and press `Enter` to save it.

## How it works

- When the page loads, `script.js` reads folder data from `localStorage` using the key `allFolders`.
- The `viewAllFolder()` function renders the folder tree inside the sidebar by recursively building nested `<ul>` lists with `renderFolder()`.
- Adding a folder uses the modal input value and pushes a new folder object with a unique `id` into the `allFolders` array.
- Editing a folder name replaces the text with an input field and updates the corresponding folder object after the user presses `Enter`.
- Adding a subfolder inserts a temporary input field inside the selected folder item and saves the new child folder under the parent folder's `children` array.
- Every change is saved back to `localStorage` via `setLocalStorage()`, so the folder tree persists across reloads.

## Notes

- The app uses Bootstrap for basic styling and layout.
- Data is stored in the browser's `localStorage` under the key `allFolders`.
- Refreshing the page restores the saved folder tree.
