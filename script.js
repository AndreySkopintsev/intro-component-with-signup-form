const submitBtn = document.getElementById('submitBtn')
const inputs = document.querySelectorAll('input')
const inputBoxes = document.querySelectorAll('.input-box')

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    inputBoxes.forEach(box=>{
        console.log(box.querySelector('input').value)
        if(!box.querySelector('input').value){
            box.classList.add('error')
            submitBtn.classList.add('error')
            submitBtn.disabled = true
            if(box.querySelector('input').type == 'email'){
                box.querySelector('input').placeholder = 'email@example.com'
            }else{
                box.querySelector('input').placeholder = ''
            }
        }
    })
})

inputs.forEach(input => {
    input.addEventListener('focus',()=>{
        input.parentElement.classList.remove('error')
        submitBtn.classList.remove('error')
        submitBtn.disabled = false
    })
})