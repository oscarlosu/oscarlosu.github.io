function SetBackgroundImage(filePath) {
    console.log(filePath);
    document.documentElement.style.background = "#100f10 url(" + filePath + ") center center no-repeat";
    document.documentElement.style.backgroundAttachment = "fixed"
    document.documentElement.style.backgroundSize = "auto 100%";
}

function SetBackgroundDefault(caller) {
    console.log(caller);
    document.documentElement.style.background = "rgba(58, 52, 50, 1)";
}