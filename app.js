document.getElementById('inp').addEventListener('keydown', function(x){
    if(x.key === 'Enter'){
        addBtn();
    }
})

function addBtn(){
    var val = document.getElementById('inp').value;

    if(val === ''){
        alert('You must write something')
        return
    }

    var list = document.getElementById('list');

    var taskDiv = document.createElement('div');
    taskDiv.className = 'taskDiv'
    
    var li = document.createElement('li');
    li.className = 'li'
    li.textContent += val 

    var btnDiv = document.createElement('div');
    btnDiv.className = 'btnDiv'

    var doneBtn = document.createElement('button');
    doneBtn.className = 'doneBtn'
    doneBtn.textContent = '✅'
    doneBtn.onclick = function(){
        if(li.style.textDecoration === 'line-through'){
            li.style.textDecoration = ''
            li.style.color = 'black'
        }else{
            li.style.textDecoration = 'line-through'
            li.style.color = 'grey'
        }
    }

    var removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn'
    removeBtn.textContent = '❌'
    removeBtn.onclick = function(){
        taskDiv.remove()
    }

    list.appendChild(taskDiv)
    taskDiv.appendChild(li)
    taskDiv.appendChild(btnDiv)
    btnDiv.appendChild(doneBtn)
    btnDiv.appendChild(removeBtn)

    document.getElementById('inp').value = '';
}
