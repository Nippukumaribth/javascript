const taskList=[]
const listElement=document.getElementById("taskList");
const status=document.getElementById("status");

//speech recognition

const SpeechRecognition=window.SpeechRecognition ||window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
recognition.continuous=true;
recognition.lang='en-us';
recognition.onresult=(event)=>{

    const transcript=event.results[0][0].transcript.toLowercase();
    statusText.innerText=`Heard:"${transcript}"`;
    if(transcript.starstWith("new task")){
        const taskText=transcript.replace("new task","").trim();
        if(taskText)
            addTask(taskText);  //

    }
    else if(transcript.startWith("delete task")){
        const num=parseInt(transcript.split("")[2])-1;
        if(!isNaN(num))
            deleteTask(num);
    }
     else if(transcript.startWith("mark task")){
        const num=parseInt(transcript.split("")[2])-1;
        if(!isNaN(num))
            markTaskDone(num);
}
}
function addTask(task){
taskList.push({text:task,done:true});
renderTask();
}
function deleteTask(num){
if(taskList[num]){
    taskList.splice(num,1);
    renderTask();
}
}
function markTaskDone(num){
if(taskList[num]){
    taskList[num].done=true;
    renderTask();
}
}
function renderTask(){
    listElement.innerHTML="";
    taskList.forEach((task,idx)=>{
        const li=document.createElement("li");
        li.innerText=`${idx+1}. ${task.text} ${task.done ? "👍":""}`;
        listElement.appendChild(li);
    });
}
function startVoice(){
     status .innerText="Listening...";
    recognition.start();

}
document.getElementById("startbtn").addEventListener("click",startVoice);

