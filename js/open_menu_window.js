function testFunction () {
    let header_block_burger_menu = document.getElementById("header_block_burger_menu");
    let header_window_menu = document.getElementById("header_window_menu");
    let block_button_window_close = document.getElementById("block_button_window_close");
    let button_community = document.getElementById("button_community");
    let button_creators = document.getElementById("button_creators");
    let button_explore = document.getElementById("button_explore");
    let windowVisible = false;

    button_explore.addEventListener("click", () =>{
        if(windowVisible){
            closeWindow()
            console.log("close window")
        }
    });
    function closeWindow(){
        header_window_menu.classList.remove("active");
        document.body.style.overflow = "visible";
        windowVisible = false;
    }

    
    button_creators.addEventListener("click", () =>{
        if(windowVisible){
            closeWindow()
            console.log("close window");
        }
    });
    function closeWindow(){
        header_window_menu.classList.remove("active");
        document.body.style.overflow = "visible";
        windowVisible = false;
    }


    button_community.addEventListener("click", () =>{
        if(windowVisible){
            closeWindow()
            console.log("close window");
        }
        
    });
    function closeWindow(){
        header_window_menu.classList.remove("active");
        document.body.style.overflow = "visible";
        windowVisible = false;
    }


    header_block_burger_menu.addEventListener("click", () =>{
        if(!windowVisible){
            openWindow()
            console.log("open good");
        }
    });
    function openWindow(){
        header_window_menu.classList.add("active");
        document.body.style.overflow = "hidden";
        windowVisible = true;
    }


    block_button_window_close.addEventListener("click", () =>{
        if(windowVisible){
            closeWindow()
            console.log("close window");
        }
    });
    function closeWindow(){
        header_window_menu.classList.remove("active");
        document.body.style.overflow = "visible";
        windowVisible = false;
    }

    window.addEventListener("resize", closeWindow);
    window.addEventListener("load", closeWindow);

}

testFunction()
