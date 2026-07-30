let allFolders = JSON.parse(localStorage.getItem("allFolders") || "[]");

// adding new folder using modal 
const folderName = document.getElementById("folderName");

// display folder var
const mainParent = document.getElementById("mainParent");

// to add folder 
document.getElementById("addBtn").addEventListener('click', e => {
    allFolders.push({
        id: Math.floor(Math.random() * 1000),
        name: (folderName.value) ? folderName.value : "New Folder"
    });

    folderName.value = "";

    setLocalStorage();

    viewAllFolder();
});

// view all folder function 
function viewAllFolder() {

    let html = "<ul>";
    html += renderFolder(allFolders);
    html += "</ul>"
    mainParent.innerHTML = html;
}

viewAllFolder();

// render folder function 
function renderFolder(folders) {
    let html = "";

    folders.forEach((folder, idx) => {
        html += `
            <li class="main-folder" id="${folder.name}${idx}">
                <div class="d-flex">
                    <p>📁<span onclick="editFolderName(${folder.id})" id=mainFolderName${folder.id}>${folder.name}</span></p>
                    <i class="ri-add-fill ms-5" onclick="addSubFolder(${folder.id}, '${folder.name}${idx}')"></i>
                </div>
        `;

        if (folder.children && folder.children.length > 0) {
            html += "<ul>";
            html += renderFolder(folder.children);
            html += "</ul>"
        }

        html += "</li>"
    });

    return html;
}

// edit folder name functino 
function editFolderName(editId) {
    const mainFolderName = document.getElementById(`mainFolderName${editId}`);

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "updatedName";

    inputField.value = mainFolderName.textContent;

    mainFolderName.replaceWith(inputField);

    inputField.addEventListener('keydown', e => {
        if (e.key == "Enter") {

            const folder = findId(allFolders, editId);

            if (inputField.value)
                folder.name = inputField.value;
            else
                folder.name = "Name Updated";

            setLocalStorage();

            viewAllFolder();

            inputField.replaceWith(mainFolderName);
        }
    })
}

// add sub folder function 
function addSubFolder(addId, id) {
    const folderFound = findId(allFolders, addId);

    const parent = document.getElementById(id);

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = `newFolderName${addId}`;

    parent.appendChild(inputField);

    document.getElementById(`newFolderName${addId}`).addEventListener('keydown', e => {
        if (e.key == 'Enter') {
            if (!folderFound.children) {
                folderFound.children = [];
            }

            folderFound.children.push({
                id: Math.floor(Math.random() * 1000),
                name: (e.target.value) ? e.target.value : "New Sub Folder",
            });

            setLocalStorage();

            inputField.innerHTML = "";

            viewAllFolder();
        }
    });
}

// set to local storage functin 
function setLocalStorage() {
    localStorage.setItem("allFolders", JSON.stringify(allFolders));
}

// find folder using id functin 
function findId(folders, id) {
    for (const folder of folders) {
        if (folder.id === id) {
            return folder;
        }

        if (folder.children && folder.children.length > 0) {
            const found = findId(folder.children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
}