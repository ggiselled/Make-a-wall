const BtnAdd = document.querySelector('.btn-add')
const DivContainer = document.getElementById('div-container')

BtnAdd.addEventListener('click', AddNew)

function AddNew(){
    const newDiv = document.createElement('DIV')
   
    newDiv.classList.add('div-shadow')

    DivContainer.appendChild(newDiv)

    const colorCard = newDiv

    if(AddNew){
        generateRandomColor = () => {
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
        
            const rgbColor = `rgb(${r}, ${g}, ${b})`
            return rgbColor
        }
        setBackground = () => {
            const newColor = generateRandomColor();
            console.log(newColor);
            colorCard.style.backgroundColor = newColor;
          };

        generateRandomColor()
        setBackground()
    }

    
}



