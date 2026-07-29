const allFolders = JSON.parse(localStorage.getItem("allFolders") || "[]");

// when first time adding folder modal value 
const folderName = document.getElementById("folderName");

// display folder var
const mainParent = document.getElementById("mainParent");

// to add folder 
document.getElementById("addBtn").addEventListener('click', e => {
    // console.log(folderName.value);

    allFolders.push({
        id: Math.floor(Math.random() * 1000),
        name: folderName.value
    });

    folderName.value = "";

    setLocalStorage();

    viewAllFolder();
});

// view all folder's 
function viewAllFolder() {
    // let html = "";

    // allFolders.forEach((folder, idx) => {
    //     html += `
    //             <ul>
    //                 <li class="main-folder" id="${folder.name}${idx}">
    //                     <div class="d-flex">
    //                         <p>📁<span onclick="editFolderName(${folder.id})" id=mainFolderName${folder.id}>${folder.name}</span></p>
    //                         <i class="ri-add-fill ms-5" onclick="addSubFolder(${folder.id}, '${folder.name}${idx}')"></i>
    //                     </div>
    //                 </li>
    //             </ul>
    //     `
    // });

    let html = "<ul>";
    html += renderFolder(allFolders);
    html += "</ul>"
    mainParent.innerHTML = html;

    // mainParent.innerHTML = html;
}

viewAllFolder();

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

        // console.log(folder[allKey]);

        if (folder.children && folder.children.length > 0) {
            html += "<ul>";
            html += renderFolder(folder.children);
            html += "</ul>"
        }

        html += "</li>"
    });

    return html;
}

function editFolderName(editId) {
    const mainFolderName = document.getElementById(`mainFolderName${editId}`);

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "updatedName";

    inputField.value = mainFolderName.textContent;

    mainFolderName.replaceWith(inputField);

    inputField.addEventListener('keydown', e => {
        if (e.key == "Enter") {
            // console.log(inputField.value);

            updateFolderName(editId, inputField.value);

            inputField.replaceWith(mainFolderName);
        }
    })
}

function updateFolderName(updateId, value) {
    // console.log(updateId);
    // console.log(value);
    const folder = allFolders.find(folder => folder.id === updateId);

    // console.log(folder);

    if (value)
        folder.name = value;
    else
        folder.name = "New";

    setLocalStorage();

    viewAllFolder();
}


function addSubFolder(addId, id) {
    // console.log("Add Id : ", addId);
    // console.log("ID : ", id);

    const folderFound = findId(allFolders, addId);

    // console.log(folderFound);

    const parentName = document.getElementById(id);

    // console.log(parentName);

    if (!parentName) return;

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = `newFolderName${addId}`;

    parentName.appendChild(inputField);

    // console.log(parentName);

    document.getElementById(`newFolderName${addId}`).addEventListener('keydown', e => {
        if (e.key == 'Enter') {
            // console.log(e.target.value);

            if (!folderFound.children) {
                folderFound.children = [];
            }

            folderFound.children.push({
                id: Math.floor(Math.random() * 1000),
                name: e.target.value,
                children: []
            });

            setLocalStorage();

            inputField.innerHTML = "";

            viewAllFolder();
        }
    });
}

function setLocalStorage() {
    localStorage.setItem("allFolders", JSON.stringify(allFolders));
}

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

{/* <ul>
                            <li>
                                <div class="d-flex">
                                    <p>📁<span id=mainFolderName${folder.id}>${folder.name}</span></p>
                                    <i class="ri-add-fill ms-5"></i>
                                </div>
                            </li>
                        </ul> */}