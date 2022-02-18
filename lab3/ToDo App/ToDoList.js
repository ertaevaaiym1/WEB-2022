let list = document.querySelector('#checkboxes');
function putTaskInList()
{
    
    let taskDiv = document.createElement('div');
    let taskText = document.getElementById("new-task").value;
    if(taskText.length > 0)
    {
        taskDiv.innerHTML = document.getElementsByClassName('task')[0].innerHTML;
        taskDiv.className = 'task';
        list.appendChild(taskDiv);
        taskDiv.querySelector('#task-text').innerHTML = taskText;
        clearInput();
    }
}
function clearInput()
{
    document.getElementById('new-task').value = '';
}
function deleteTask()
{
    let divList = document.getElementsByClassName("task");
    for(let i = 0; i < divList.length; i++)
    {
        divList[i].onclick = function()
        {
            let taskDiv = this;
            // alert(1);
            taskDiv.style.display = 'none';
        }
    }
}
