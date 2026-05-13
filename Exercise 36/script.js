const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');
const historyList = document.getElementById('historyList');
const clearHistory = document.getElementById('clearHistory');


colorPicker.addEventListener('input', (e) => {
    const selectedColor = e.target.value;
    colorPreview.style.backgroundColor = selectedColor;
  
    const r = parseInt(selectedColor.substr(1,2), 16);
    const g = parseInt(selectedColor.substr(3,2), 16);
    const b = parseInt(selectedColor.substr(5,2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    colorPreview.style.color = brightness < 128 ? 'white' : 'black';
});


colorPicker.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    

    const li = document.createElement('li');
    li.textContent = selectedColor;
    li.style.color = selectedColor;
    

    historyList.prepend(li);
});


clearHistory.addEventListener('click', () => {

    historyList.innerHTML = '';
    

    colorPreview.style.backgroundColor = '#ffffff';
    colorPreview.style.color = 'black';
    colorPicker.value = '#ffffff';
    
    console.log("History Cleared!");
});