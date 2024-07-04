const addButton=document.getElementById("add");
const container=document.getElementById("container");

addButton.addEventListener("click", Addfun);
    
function Addfun(){
    console.log("Added sucess");
    const addNote=document.createElement("div");
    addNote.classList.add("main");
    addNote.innerHTML = `
        <div class="content">
            <textarea placeholder="Title" id ="title"></textarea>
            <i class="fa-regular fa-floppy-disk" id="save"></i>
            <i class="fa-solid fa-trash" id="trash"></i></i>
        </div>
        <textarea id="note" placeholder="Type Something.."></textarea>
    `

    const saveBtn = addNote.querySelector("#save");
    // const inputArea = addNote.querySelector("#note");
    // const Title = addButton.querySelector("#title");
    const trashBtn = addNote.querySelector("#trash");

    saveBtn.addEventListener('click',saveNotes);
    // inputArea.addEventListener('input',saveNotes);
    trashBtn.addEventListener('click',function(){
        addNote.remove();
        saveNotes();
    });

    container.appendChild(addNote);
};

function saveNotes(){
    const dataArr = document.querySelectorAll('#note');
    const data = Array.from(dataArr).map(addNote => addNote.value);
    console.log(dataArr,data);

    if(data === 0){
        localStorage.removeItem("dataArr");
    }
    else{
        localStorage.setItem("dataArr",JSON.stringify(data));
    }
}

function load(){
    const dataDisplay = JSON.parse(localStorage.getItem('dataArr'));

    if(dataDisplay !== null){
        dataDisplay.forEach(iter => {

            if(iter === ""){
                localStorage.removeItem(iter);
            }
            else{
                Addfun();

                const val = document.querySelectorAll("#note");
                const lastVal = val[val.length - 1];
                lastVal.value = iter;
            }
        });
    }
    else{
        Addfun();
    }

}

load();