let header_button_menu_block = document.getElementById("header_button_menu_block");

header_button_menu_block.addEventListener("click", () =>{
    let header_window_ConnectWallet = document.getElementById("header_window_ConnectWallet");
    header_window_ConnectWallet.classList.toggle("active");
    document.body.style.overflow = "hidden";
});

document.addEventListener("mousedown", function(event){
    let window_ConnectWallet_block = document.getElementById("window_ConnectWallet_block");
    if(!window_ConnectWallet_block.contains(event.target)){
        header_window_ConnectWallet.classList.remove("active");
        document.body.style.overflow = "visible";
    }
});

let _block_close_window = document.getElementById("_block_close_window");
    _block_close_window.addEventListener("click", () =>{
        header_window_ConnectWallet.classList.remove("active");
        document.body.style.overflow = "visible";
});
/*------------------------------------------------two window-----------------------------------------------------*/

let header_button_two = document.getElementById("header_button_two");


header_button_two.addEventListener("click", () =>{
    let header_window_Two_ConnectWallet = document.getElementById("header_window_Two_ConnectWallet");
    header_window_Two_ConnectWallet.classList.toggle("active");
    document.body.style.overflow = "hidden";
});

document.addEventListener("mousedown", function(event){
    let window_Two_ConnectWallet_block = document.getElementById("window_Two_ConnectWallet_block");
    if(!window_Two_ConnectWallet_block.contains(event.target)){
        header_window_Two_ConnectWallet.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

let _block_Two_close_window = document.getElementById("_block_Two_close_window");
_block_Two_close_window.addEventListener("click", () =>{
        header_window_Two_ConnectWallet.classList.remove("active");
        document.body.style.overflow = "auto";
});