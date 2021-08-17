let inp = "amazon.com/login?email=a@mail.com&password=123&remember=1"
if (!(inp.endsWith("?")) && inp.includes("?")) {
    inp.trim().split("?")[1].split("&").forEach(att => {
        console.log(`${att.split("=")[0]} is ${att.split("=")[1]}`);
    })
    
}
else{
    console.log("No Query!")
}
