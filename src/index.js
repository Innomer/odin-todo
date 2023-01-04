class tasks{
    constructor(title,description,dueDate,priority,isComplete)
    {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.isComplete=isComplete;
    }

    getInfo()
    {
        return {title:this.title,desc:this.description,dd:this.dueDate,pr:this.priority,done:this.isComplete};
    }

    setComplete()
    {
        this.isComplete=!this.isComplete;
    }

    setPriority(but)
    {
        this.priority=but.innerText;
    }
}

class projects{
    constructor(name,todos)
    {
        this.name=name
        this.todos=todos
    }
}

var projectsList=[];
var tasksList=[];

export function textBoxStyling(textBox)
{
    var font="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    textBox.style.width="100%";
    textBox.style.borderRadius="5%";
    textBox.style.margin="50px";
    textBox.style.fontFamily=font;
    textBox.style.fontSize="25px";
    return textBox;
}

export function AddButton()
{
    var font="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    let tasksDiv=document.querySelector('.tasks');
    let addTaskButton=document.getElementById('AddTask');
    tasksDiv.removeChild(addTaskButton);

    let addDiv=document.createElement('div');
    addDiv.id='addDiv';
    addDiv.style.width="fit-content";
    addDiv.style.display="flex";
    addDiv.style.flexDirection="row";
    addDiv.style.alignItems="center";
    addDiv.style.textAlign="center";
    addDiv.style.justifyContent="center";
    addDiv.style.margin="auto";
    addDiv.style.padding="2%";

    let textBox=document.createElement('input');
    textBox.id="taskName";
    textBox.type="text";
    textBox.style.width="100%";
    textBox.style.borderRadius="5%";
    textBox.style.margin="auto";
    textBox.style.fontFamily=font;
    textBox.style.fontSize="25px";

    let addBut=document.createElement('button');
    addBut.innerText="Add";
    addBut.style.color="whitesmoke";
    addBut.style.width="50%";
    addBut.style.backgroundColor="red";
    addBut.style.fontFamily=font;
    addBut.style.borderRadius="5%";
    addBut.style.fontSize="25px";
    addBut.style.marginLeft="10px";
    addBut.style.marginRight="10px";
    addBut.addEventListener('mousedown',()=>createTask(addTaskButton));

    let canBut=document.createElement('button');
    canBut.innerText="Cancel";
    canBut.style.color="whitesmoke";
    canBut.style.width="50%";
    canBut.style.backgroundColor="green";
    canBut.style.fontFamily=font;
    canBut.style.borderRadius="5%";
    canBut.style.fontSize="25px";
    canBut.style.marginLeft="10px";
    canBut.style.marginRight="10px";
    canBut.addEventListener('mousedown',()=>canTask(addTaskButton));

    addDiv.appendChild(textBox);
    addDiv.appendChild(addBut);
    addDiv.appendChild(canBut);

    tasksDiv.append(addDiv);
}

export function canTask(addTaskButton)
{
    let tasksDiv=document.querySelector('.tasks');
    let addDiv=document.getElementById('addDiv');
    tasksDiv.removeChild(addDiv);
    tasksDiv.appendChild(addTaskButton);
}

export function editTag(tagNo){
    let tasksDiv=document.querySelector('.tasks');
    let taskTag=document.getElementById(`${tagNo}`);
    let check=taskTag.children[0];
    let t=taskTag.children[1];
    let des=taskTag.children[2];
    let dd=taskTag.children[3];
    let edit=taskTag.children[4];
    let del=taskTag.children[5];

    taskTag.removeChild(check);
    taskTag.removeChild(t);
    taskTag.removeChild(des);
    taskTag.removeChild(dd);
    taskTag.removeChild(edit);
    taskTag.removeChild(del);

    let tIn=document.createElement('input');
    tIn=textBoxStyling(tIn);
    let desIn=document.createElement('input');
    desIn=textBoxStyling(desIn);
    let ddIn=document.createElement('input');
    ddIn=textBoxStyling(ddIn);

    taskTag.appendChild(check);
    taskTag.appendChild(tIn);
    taskTag.appendChild(desIn);
    taskTag.appendChild(ddIn);
}

export function delTag(tagNo)
{
    let tasksDiv=document.querySelector('.tasks');
    let taskTag=document.getElementById(`${tagNo}`);
    tasksDiv.removeChild(taskTag);
    tasksList.splice(tagNo,1);
}

export function createTask(addTaskButton)
{
    var font="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    let tasksDiv=document.querySelector('.tasks');
    let textBox=document.getElementById('taskName');
    let title=textBox.value
    let newTask=new tasks(title,'','',"",'No');
    tasksList.push(newTask);
    let addDiv=document.getElementById('addDiv');
    tasksDiv.removeChild(addDiv);

    let taskTag=document.createElement('div');
    taskTag.style.display="flex";
    taskTag.style.padding="1%";
    taskTag.style.fontFamily=font;
    taskTag.style.justifyContent="center";
    taskTag.id=`${tasksList.length-1}`;

    let t=document.createElement('p');
    t.style.fontSize="25px";
    t.style.margin="auto";
    let des=document.createElement('p');
    des.style.fontSize="15px";
    des.style.margin="auto";
    let check=document.createElement('input');
    check.type="checkbox";
    check.style.width="25px";
    let dd=document.createElement('p');
    dd.style.fontSize="15px";
    dd.style.margin="auto";
    let edit=document.createElement('button');
    edit.innerText="Edit";
    edit.style.fontSize="25px";
    edit.style.margin="auto";
    edit.style.padding="5px";
    edit.addEventListener('click',()=>editTag(taskTag.id));

    let del=document.createElement('button');
    del.innerText="Delete";
    del.style.fontSize="25px";
    del.style.margin="auto";
    del.style.padding="5px";
    del.addEventListener('click',()=>delTag(taskTag.id));

    t.innerText=newTask.getInfo().title;
    des.innerText=newTask.getInfo().desc;
    check.value=newTask.getInfo().done;
    dd.innerText=newTask.getInfo().dd;

    taskTag.appendChild(check);
    taskTag.appendChild(t);
    taskTag.appendChild(des);
    taskTag.appendChild(dd);
    taskTag.appendChild(edit);
    taskTag.appendChild(del);

    tasksDiv.appendChild(taskTag);
    tasksDiv.appendChild(addTaskButton);
}