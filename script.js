function changeBackground(){
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
    const colors = ["#FFD700","#90EE90","#FFB6C1","#D3D3D3","#FFAO7A"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}