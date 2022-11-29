
navigator.permissions.query({name: "clipboard-write"}).then((result)=>{
    if (result.state === "granted" || result.state === "prompt") {
        console.log("Can write and read from the clipboard");
    }
})


function copyEmail(){
    const email = document.querySelector("#email");
    navigator.clipboard.writeText(email.textContent).then(()=>{
        document.querySelector("#hidden").classList.remove("hidden");
        setTimeout(() => {
            document.querySelector("#hidden").classList.add("hidden");
        }, 500);

    }, ()=>{
        
    })   
}