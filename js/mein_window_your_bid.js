let btn_start_bid = document.getElementById("btn_start_bid");
let input_no_scroll = document.getElementById("input_no_scroll");

input_no_scroll.addEventListener("click", () =>{
    document.body.style.overflow = "hidden";
});
btn_start_bid.addEventListener("click", () =>{
    let window_Your_bid = document.getElementById("window_Your_bid");
    window_Your_bid.classList.toggle("active");
    document.body.style.overflow = "hidden";
    input_no_scroll.addEventListener('blur', function () {
        document.body.style.overflow = 'auto';
    }, { once: true });
});

document.addEventListener("mousedown", function(event){
    let Your_bid_block = document.getElementById("Your_bid_block");
    if(!Your_bid_block.contains(event.target)){
        window_Your_bid.classList.remove("active");
        document.body.style.overflow = "visible";
    }
});

let Your_bid_block_close = document.getElementById("Your_bid_block_close");
Your_bid_block_close.addEventListener("click", () =>{
        window_Your_bid.classList.remove("active");
        document.body.style.overflow = "visible";
});
