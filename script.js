document.addEventListener("DOMContentLoaded" , function () {
    let editor=document.getElementById("editor");
    let fontSizeSelect=document.getElementById("fontSizeSelect");
    let fontColorSelect=document.getElementById("fontColorSelect");
    let boldBtn=document.getElementById("boldBtn");
    let italicBtn=document.getElementById("italicBtn");
    let resetBtn=document.getElementById("resetBtn");
    let fontSize="12px";
    let color="black";
    let fontWeight="normal";
    let fontStyle="normal";
    editor.style.fontSize=fontSize;
    editor.style.color=color;
    editor.style.fontWeight=fontWeight;
    editor.style.fontStyle=fontStyle;
    fontSizeSelect.addEventListener("change",function() {
        fontSize=fontSizeSelect.value;
        editor.style.fontSize=fontSize;
    });
    fontColorSelect.addEventListener("change",function() {
        color=fontColorSelect.value;
        editor.style.color=color;
    });
    boldBtn.addEventListener("click",function() {
        boldBtn.classList.toggle("active");
        if(boldBtn.classList.contains("active")){
            fontWeight="bold";
        }else{
            fontWeight="normal";
        }
        editor.style.fontWeight=fontWeight;
    });
    italicBtn.addEventListener("click",function() {
        italicBtn.classList.toggle("active");
        if(italicBtn.classList.contains("active")){
            fontStyle="italic";
        }else{
            fontStyle="normal";
        }
        editor.style.fontStyle=fontStyle;
    });
    resetBtn.addEventListener("click", function () {
        fontSize="12px";
        color="black";
        fontWeight="normal";
        fontStyle="normal";
        editor.style.fontSize=fontSize;
        editor.style.color=color;
        editor.style.fontWeight=fontWeight;
        editor.style.fontStyle=fontStyle;
        fontSizeSelect.value="12px";
        fontColorSelect.value="black";
        boldBtn.classList.remove("active");
        italicBtn.classList.remove("active");
    });
});
