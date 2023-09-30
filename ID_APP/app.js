var infArray = [];
var content, content2, content3;
var contentOut, content2Out, content3Out;
var textInfo;
var alreadyIncluded = false;



const downloadFile = () => {
    content = document.querySelector(".name_input").value;
    content2 = document.querySelector(".email_input").value;
    content3 = document.querySelector(".message_input").value;
    textInfo = ["Name: " + content, "Email: " + content2, "Message: " + content3];
    infArray.push(textInfo);
    console.log(infArray);

    console.log(infArray[1]);

    for(var i = 0; i <= infArray.length; i++) {
        if(infArray[i].includes(content) && infArray.length > 1) {
            alert("You are already logged in as " + content + "!");
            alreadyIncluded = true;
        } else {
            alreadyIncluded = false;
            alert("Welcome " + content + "!");
        }
    }
// Start reading the blob as text.
//reader.readAsText(file);
 };

 const loggout = () => {
    contentOut = document.querySelector(".name_input2").value;
    content2Out = document.querySelector(".email_input2").value;
    content3Out = document.querySelector(".message_input2").value;
    
    for(var i = 0; i <= infArray.length; i++) {
        if(infArray[i].includes(contentOut) && infArray[i].includes(content2Out)) {
            alert("You are logged out!");
            
        } else {
            
            alert("You aren't logged in yet!");
        }
    }
 };

 const downloadFinishedFile = () => {
    const link = document.createElement("a");
    const file = new Blob(infArray, { type: 'text/plain' });
    const reader = new FileReader();

    // reader.addEventListener('loadend', (e) => {
    // const text = e.srcElement.result;
    // });

    link.href = URL.createObjectURL(file);
         link.download = "sample.txt";
         link.click();
         URL.revokeObjectURL(link.href);
 };
 