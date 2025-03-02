const AllOutput = document.getElementById('All-history');
document.getElementById('clear-history').addEventListener('click', 
    function(event){
        event.preventDefault();
        AllOutput.innerHTML = '';
    }
)
// 1st active history js
const outputHeading = document.getElementById('active-text');
document.getElementById('card-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);
        alert("Board updated Successfully");
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('1stCardHeading').innerText;
        outputHeading.innerText = `You have Complete The Task ${cardHeading} at ${newTime}`;
        
        // task count section
        const taskCount = document.getElementById('task-count').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1 ;
        document.getElementById('task-count').innerText = sum;
        // navCount section
        const navCount = document.getElementById('navCount').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1 ;
        document.getElementById('navCount').innerText = navSum;
    }
)
// 2nd active history js
const outputHeading2 = document.getElementById('active-text2');
document.getElementById('card-btn2').addEventListener('click',
    function(event){
        event.preventDefault();
        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);
        alert("Board updated Successfully");
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('2ndCardHeading').innerText;
        outputHeading2.innerText = `You have Complete The Task ${cardHeading} at ${newTime}`;
        // task count section
        const taskCount = document.getElementById('task-count').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1 ;
        document.getElementById('task-count').innerText = sum;
        // navCount section
        const navCount = document.getElementById('navCount').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1 ;
        document.getElementById('navCount').innerText = navSum;
    }
)
// 3rd active history js
const outputHeading3 = document.getElementById('active-text3');
document.getElementById('card-btn3').addEventListener('click',
    function(event){
        event.preventDefault();
        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);
        alert("Board updated Successfully");
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('3ndCardHeading').innerText;
        outputHeading3.innerText = `You have Complete The Task ${cardHeading} at ${newTime}`;
        // task count section
        const taskCount = document.getElementById('task-count').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1 ;
        document.getElementById('task-count').innerText = sum;
        // navCount section
        const navCount = document.getElementById('navCount').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1 ;
        document.getElementById('navCount').innerText = navSum;
    }
)
// 4th active history js
const outputHeading4 = document.getElementById('active-text4');
document.getElementById('card-btn4').addEventListener('click',
    function(event){
        event.preventDefault();
        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);
        alert("Board updated Successfully");
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('4ndCardHeading').innerText;
        outputHeading4.innerText = `You have Complete The Task ${cardHeading} at ${newTime}`;
        // task count section
        const taskCount = document.getElementById('task-count').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1 ;
        document.getElementById('task-count').innerText = sum;
        // navCount section
        const navCount = document.getElementById('navCount').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1 ;
        document.getElementById('navCount').innerText = navSum;
    }
)
// 5th active history js
const outputHeading5 = document.getElementById('active-text5');
document.getElementById('card-btn5').addEventListener('click',
    function(event){
        event.preventDefault();
        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);
        alert("Board updated Successfully");
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('5ndCardHeading').innerText;
        outputHeading5.innerText = `You have Complete The Task  ${cardHeading} at ${newTime}`;
        // task count section
        const taskCount = document.getElementById('task-count').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1 ;
        document.getElementById('task-count').innerText = sum;
        // navCount section
        const navCount = document.getElementById('navCount').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1 ;
        document.getElementById('navCount').innerText = navSum;
    }
)
// 6th active history js
const outputHeading6 = document.getElementById('active-text6');
document.getElementById('card-btn6').addEventListener('click',
    function(event){
        event.preventDefault();
        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);
        alert("Board updated Successfully");
        alert("congrates!!! You have completed All the current task");
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('6ndCardHeading').innerText;
        outputHeading6.innerText = `You have Complete The Task  ${cardHeading} at ${newTime}`;
        // task count section
        const taskCount = document.getElementById('task-count').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1 ;
        document.getElementById('task-count').innerText = sum;
        // navCount section
        const navCount = document.getElementById('navCount').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1 ;
        document.getElementById('navCount').innerText = navSum;
    }
)
// current date section
document.addEventListener("DOMContentLoaded", function(){
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" });
    const currentDate = now.toLocaleDateString("en-US", {
        month: "short",day: "numeric",year: "numeric"
      });
      document.getElementById("current-Date").innerHTML = `${weekday}<br>${currentDate}`;
})
// background color change section
const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251','red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let index = 0;
document.getElementById('navBtn').addEventListener('click',
    function () {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
});