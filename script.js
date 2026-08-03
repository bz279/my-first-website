function runScriptJs() {
    const box = document.getElementById("box");
    
if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.position = "absolute"; 
    box.style.top = "0";             
    box.style.left = "0";            
    box.style.backgroundColor = "rgba(0, 204, 255, 0.76)"; 
    box.style.color = "rgb(0, 0, 0)";
    box.style.fontSize = "2rem";
    box.style.borderRadius = "30px";
    box.style.border = "rgb(0, 0, 0)"

    } else {
        box.style.display = "none";
    }
}
