
const creator = [
    {
        id:1,
        categoryId: 1,
        img_creator:"./img/Profile image1.svg",
        art_creatorOne:"./img/art_five.png",
        art_creatorTwo:"./img/art_five.png",
        art_creatorThree:"./img/art_six.png",
        art_creatorFour:"./img/art_two.png",
        art_creatorFive:"./img/art_four.svg",
        art_creatorSix:"./img/art_four.svg",
    },
    {
        id:2,
        categoryId: 1,
        img_creator:"./img/profile_image_three.svg", 
        art_creatorOne:"./img/art_six.png",
        art_creatorTwo:"./img/art_six.png",
        art_creatorThree:"./img/art_one.png",
        art_creatorFour:"./img/art_three.png",
        art_creatorFive:"./img/art_five.png",
        art_creatorSix:"./img/art_five.png",
    },
    {
        id:3,
        categoryId: 2,
        img_creator:"./img/profile_image_two.svg",
        art_creatorOne:"./img/art_one.png",
        art_creatorTwo:"./img/art_one.png",
        art_creatorThree:"./img/art_three.png",
        art_creatorFour:"./img/art_two.png",
        art_creatorFive:"./img/art_one.png",
        art_creatorSix:"./img/art_three.png",
    },
    {
        id:4,
        categoryId: 2,
        img_creator:"./img/Profile image4.svg",
        art_creatorOne:"./img/art_six.png",
        art_creatorTwo:"./img/art_five.png",
        art_creatorThree:"./img/art_six.png",
        art_creatorFour:"./img/art_five.png",
        art_creatorFive:"./img/art_four.svg",
        art_creatorSix:"./img/art_five.png",
    },
    {
        id:5,
        categoryId: 2,
        img_creator:"./img/Profile image4.svg",
        art_creatorOne:"./img/art_six.png",
        art_creatorTwo:"./img/art_five.png",
        art_creatorThree:"./img/art_six.png",
        art_creatorFour:"./img/art_five.png",
        art_creatorFive:"./img/art_four.svg",
        art_creatorSix:"./img/art_five.png",
    },
    {
        id:6,
        categoryId: 3,
        img_creator:"./img/Profile image1.svg",
        art_creatorOne:"./img/art_five.png",
        art_creatorTwo:"./img/art_five.png",
        art_creatorThree:"./img/art_six.png",
        art_creatorFour:"./img/art_two.png",
        art_creatorFive:"./img/art_four.svg",
        art_creatorSix:"./img/art_four.svg",
    },
    {
        id:7,
        categoryId: 3,
        img_creator:"./img/profile_image_three.svg", 
        art_creatorOne:"./img/art_six.png",
        art_creatorTwo:"./img/art_six.png",
        art_creatorThree:"./img/art_one.png",
        art_creatorFour:"./img/art_three.png",
        art_creatorFive:"./img/art_five.png",
        art_creatorSix:"./img/art_five.png",
    },
    {
        id:8,
        categoryId: 3,
        img_creator:"./img/profile_image_two.svg",
        art_creatorOne:"./img/art_one.png",
        art_creatorTwo:"./img/art_one.png",
        art_creatorThree:"./img/art_three.png",
        art_creatorFour:"./img/art_two.png",
        art_creatorFive:"./img/art_one.png",
        art_creatorSix:"./img/art_three.png",
    },
    {
        id:9,
        categoryId: 4,
        img_creator:"./img/Profile image4.svg",
        art_creatorOne:"./img/art_six.png",
        art_creatorTwo:"./img/art_five.png",
        art_creatorThree:"./img/art_six.png",
        art_creatorFour:"./img/art_five.png",
        art_creatorFive:"./img/art_four.svg",
        art_creatorSix:"./img/art_five.png",
    },
    {
        id:10,
        categoryId: 4,
        img_creator:"./img/Profile image4.svg",
        art_creatorOne:"./img/art_six.png",
        art_creatorTwo:"./img/art_five.png",
        art_creatorThree:"./img/art_six.png",
        art_creatorFour:"./img/art_five.png",
        art_creatorFive:"./img/art_four.svg",
        art_creatorSix:"./img/art_five.png",
    },
]


document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    console.log(id)

    let list_creators = document.getElementById("list_creators");

    if (!list_creators) {
        return;
    }

    creator.filter((el) => el.categoryId == id || id == null).forEach((el, index) => {
        let HtmlListContent = ` <a href="./creator_page.html?id=${el.id}">
                                    <div id="main_list_creators_link">
                                        <nav class="main_list_creators_link-number">
                                            <p>${index + 1}</p>
                                        </nav>
                                        <img class="creators_profil" src="./${el.img_creator}" alt="Profile">
                                        <nav class="main_list_creators_link-name">
                                            <p>Wzard Dee</p>
                                        </nav>
                                        <nav class="main_list_creators_link-change">
                                            <p>+1.41%</p>
                                        </nav>
                                        <nav class="main_list_creators_link-sold">
                                            <p>602</p>
                                        </nav>
                                        <nav class="main_list_creators_link-volume">
                                            <p>12.4 ETH</p>
                                        </nav>
                                    </div>
                                </a>   
                                    
                        ` 
        list_creators.innerHTML += HtmlListContent
    });
});



document.addEventListener("DOMContentLoaded", function() {
    PersonInfo();
});

function PersonInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = parseInt(urlParams.get('id'));
    let profil_creator_ = document.getElementById('profil_creator_');

    if (!profil_creator_) {
        return;
    }

    let HtmlListContent =  `
        <section class="profil_creator">
                <div class="profil_creator-flex">
                    <div class="_creator-flex_block">
                    <img src="${creator[id-1].img_creator}" alt="profil_creator">
                        <div class="_creator-flex_block-name">
                            <h2>Wzard Dee</h2>
                        </div>
                        <div class="_creator-flex_block-username">
                            <p>@wzard</p>
                        </div>
                        <div class="_creator-flex_block-ETH">
                            <div class="_block-ETH_information">
                                <h2>86 ETH</h2>
                                <p>Total Sales</p>
                            </div>
                            <div class="_block-ETH_information">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="_block-ETH_information">
                                <h2>587</h2>
                                <p>Followings</p>
                            </div>
                        </div>
                        <div class="_creator-flex_block-Bio">
                            <h2>Bio</h2>
                            <p>The Artist who transforms the intangible into <br> priceless 
                                assets with their incredible NFT Creations. <br> From stunning 
                                visuals to mind-bending concepts.
                            </p>
                        </div>
                    </div>
                    <div class="block_collection-activity">
                        <div class="collection-activity_flex-block">
                                <nav class="block-button_collection-activity" id="button_collection">
                                    <li class="button_collection-activity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                            <path class="svg_button_collection-activity" fill-rule="evenodd" clip-rule="evenodd" d="M19.3127 9.45684C19.3127 10.2645 20.0061 10.9217 20.8583 10.9217C21.2881 10.9217 21.6368 11.2523 21.6368 11.6596V14.3168C21.6368 16.5638 19.7082 18.3917 17.3374 18.3917H5.17724C2.80645 18.3917 0.876801 16.5638 0.876801 14.3168V11.6596C0.876801 11.2523 1.22557 10.9217 1.6553 10.9217C2.50854 10.9217 3.20192 10.2645 3.20192 9.45684C3.20192 8.66981 2.53657 8.07756 1.6553 8.07756C1.44874 8.07756 1.25152 7.99984 1.10516 7.86112C0.958803 7.72241 0.876801 7.5345 0.876801 7.33971L0.878877 4.5959C0.878877 2.3489 2.80748 0.52002 5.17828 0.52002H17.3354C19.7062 0.52002 21.6358 2.3489 21.6358 4.5959L21.6368 7.25412C21.6368 7.44891 21.5548 7.6378 21.4095 7.77553C21.2632 7.91425 21.0659 7.99197 20.8583 7.99197C20.0061 7.99197 19.3127 8.64915 19.3127 9.45684ZM13.5944 10.0995L14.8182 8.97007C15.031 8.77528 15.1047 8.48801 15.0123 8.22239C14.921 7.95676 14.6822 7.76787 14.3937 7.7295L12.7028 7.49536L11.9461 6.04327C11.8163 5.79339 11.5527 5.63795 11.2589 5.63696H11.2568C10.9641 5.63696 10.7005 5.79241 10.5686 6.04229L9.81193 7.49536L8.12414 7.72852C7.83246 7.76787 7.59372 7.95676 7.50134 8.22239C7.40999 8.48801 7.48369 8.77528 7.69544 8.97007L8.91925 10.0995L8.63068 11.6962C8.58086 11.9716 8.69815 12.2451 8.93689 12.4094C9.07183 12.5009 9.22857 12.5481 9.38739 12.5481C9.50883 12.5481 9.63132 12.5196 9.74342 12.4635L11.2568 11.71L12.7671 12.4616C13.0287 12.5944 13.3391 12.5737 13.5768 12.4084C13.8165 12.2451 13.9338 11.9716 13.884 11.6962L13.5944 10.0995Z" fill="#130F26"/>
                                        </svg>
                                        <a href="">Collection</a>
                                    </li>
                                </nav>
                                <nav class="block-button_collection-activity" id="button_activity">
                                    <li class="button_collection-activity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path class="svg_button_collection-activity" fill-rule="evenodd" clip-rule="evenodd" d="M0.715088 9.45628C0.715088 4.47387 4.74975 0.430176 9.74119 0.430176C14.7236 0.430176 18.7673 4.47387 18.7673 9.45628C18.7673 14.4477 14.7236 18.4824 9.74119 18.4824C4.74975 18.4824 0.715088 14.4477 0.715088 9.45628ZM11.754 11.1078L13.2162 6.48648C13.3155 6.17056 13.0266 5.8727 12.7107 5.97199L8.08937 7.41617C7.89982 7.47935 7.74638 7.62377 7.69222 7.81331L6.24804 12.4437C6.14876 12.7506 6.44662 13.0485 6.75351 12.9492L11.3568 11.505C11.5464 11.4508 11.6998 11.2974 11.754 11.1078Z" fill="black"/>
                                        </svg>
                                        <a href="">Activity</a>
                                    </li>
                                </nav>
                        </div>
                        <div id="colection_window">
                            <div class="_NFT-place_bid-card">
                            <img class="place_bid-card_img" src="${creator[id - 1].art_creatorOne}" alt="art_five">
                                <h3>Virtual Art</h3>
                                <div class="current-bid">
                                    <p>Current Bid</p>
                                    <h4>4.89 ETH</h4>
                                </div>
                                <nav class="block_button-place_bid">
                                    <button class="_button_place_bid">Place Bid</button>
                                </nav>
                            </div>
                            <div class="_NFT-place_bid-card">
                                <img class="place_bid-card_img" src="${creator[id - 1].art_creatorTwo}"alt="art_six">
                                <h3>Virtual Art</h3>
                                <div class="current-bid">
                                    <p>Current Bid</p>
                                    <h4>4.89 ETH</h4>
                                </div>
                                <nav class="block_button-place_bid">
                                    <button class="_button_place_bid">Place Bid</button>
                                </nav>
                            </div>
                            <div class="_NFT-place_bid-card">
                                <img class="place_bid-card_img" src="${creator[id - 1].art_creatorThree}"alt="art_one">
                                <h3>Virtual Art</h3>
                                <div class="current-bid">
                                    <p>Current Bid</p>
                                    <h4>4.89 ETH</h4>
                                </div>
                                <nav class="block_button-place_bid">
                                    <button class="_button_place_bid">Place Bid</button>
                                </nav>
                            </div>
                            <div class="_NFT-place_bid-card">
                                <img class="place_bid-card_img" src="${creator[id - 1].art_creatorFour}"alt="art_three">
                                <h3>Virtual Art</h3>
                                <div class="current-bid">
                                    <p>Current Bid</p>
                                    <h4>4.89 ETH</h4>
                                </div>
                                <nav class="block_button-place_bid">
                                    <button class="_button_place_bid">Place Bid</button>
                                </nav>
                            </div>
                            <div class="_NFT-place_bid-card">
                                <img class="place_bid-card_img" src="${creator[id - 1].art_creatorFive}"alt="art_two">
                                <h3>Virtual Art</h3>
                                <div class="current-bid">
                                    <p>Current Bid</p>
                                    <h4>4.89 ETH</h4>
                                </div>
                                <nav class="block_button-place_bid">
                                    <button class="_button_place_bid">Place Bid</button>
                                </nav>
                            </div>
                            <div class="_NFT-place_bid-card">
                                <img class="place_bid-card_img" src="${creator[id - 1].art_creatorSix}"alt="art_six">
                                <h3>Virtual Art</h3>
                                <div class="current-bid">
                                    <p>Current Bid</p>
                                    <h4>4.89 ETH</h4>
                                </div>
                                <nav class="block_button-place_bid">
                                    <button class="_button_place_bid">Place Bid</button>
                                </nav>
                            </div>
                        </div>
                        <div class="window_Your_bid">
                            <div class="Your_bid_block">
                                <nav class="Your_bid_block_close">
                                    <svg width="48" height="48" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(182,182,182)" stroke="rgb(182,182,182)" stroke-width="1" opacity="1" d="M 18.5 15 L 24.5 20 L 30 15.5 L 23.5 21 L 18.5 15 Z "></path>
                                        <path fill="rgb(182,182,182)" stroke="rgb(182,182,182)" stroke-width="1" opacity="1" d="M 15.5 18 L 21 24.5 L 15 29.5 L 20 23.5 L 15.5 18 Z "></path>
                                        <path fill="rgb(182,182,182)" stroke="rgb(182,182,182)" stroke-width="1" opacity="1" d="M 32.5 18 L 28 23.5 L 33 29.5 L 27 24.5 L 32.5 18 Z "></path>
                                        <path fill="rgb(182,182,182)" stroke="rgb(182,182,182)" stroke-width="1" opacity="1" d="M 23.5 27 L 29 31.5 L 24.5 28 L 19.5 32 L 23.5 27 Z "></path>
                                        <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 0 0 L 48 0 L 48 48 L 0 48 L 0 0 Z M 6 6 L 6 43 L 8 44 L 41 44 L 42 43 L 42 6 L 6 6 Z "></path>
                                        <path class="close_window_svg" fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-width="1" opacity="1" d="M 8 8 L 40 8 L 40 38.5 L 38.5 40 L 9.5 40 L 8 38.5 L 8 8 Z M 18 15 L 15 18 L 20 24 L 15 30 L 17 32 L 20 32 L 24 28 L 29 32 Q 32 33 33 31 L 28 25 L 33 19 L 31 15 L 25 20 L 18 15 Z "></path>
                                        <path fill="rgb(20,20,20)" stroke="rgb(20,20,20)" stroke-width="1" opacity="1" d="M 17.5 15 L 15.5 18 L 17.5 15 Z "></path>
                                        <path fill="rgb(20,20,20)" stroke="rgb(20,20,20)" stroke-width="1" opacity="1" d="M 30.5 15 L 32.5 18 L 30.5 15 Z "></path>
                                        <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0.9921568627450981" d="M 6.5 41 L 7 43 L 9 43.5 L 7.5 44 L 6.5 41 Z "></path>
                                        <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0.9921568627450981" d="M 41.5 41 L 42 42.5 L 39.5 44 L 39.5 43 Q 42 43.7 41.5 41 Z "></path>
                                        <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="1" d="M 7.5 6 L 40.5 6 L 42 7.5 L 42 40.5 L 41 43 L 38.5 44 L 9.5 44 L 7 43 L 6 40.5 L 6 7.5 L 7.5 6 Z M 8 8 L 8 40 L 40 40 L 40 8 L 8 8 Z "></path>
                                        <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="1" d="M 17.5 16 L 24.5 21 L 30.5 16 L 32 18.5 L 27 24.5 L 32 31 L 28.5 31 L 23.5 27 Q 22 32 16 31 L 21 23.5 L 16 17.5 L 17.5 16 Z "></path>
                                    </svg>
                                </nav>
                                <div class="bid_block_title">
                                    <h3 class="bid_block_title_style">Your Bid</h3>
                                </div>
                                <div class="_block_current_bid">
                                    <p class="_bid_text">Current bid</p>
                                    <p class="_bid_ETH">0.99ETH</p>
                                </div>
                                <div class="_block_current_bid">
                                    <p class="_bid_text">Minimum markup</p>
                                    <p class="_bid_ETH">0.01ETH</p>
                                </div>
                                <div class="bid_block_input">
                                    <input class="input_bid" type="number" name="" id="input_no_scroll">
                                    <span class="input_bid_line"></span>
                                    <p class="input_ETH">ETH</p>
                                </div>
                                <nav class="block_button_your_bid">
                                    <button class="your_bid_button">Place Bid</button>
                                </nav>
                            </div>
                        </div>
                        <div id="window_activity">
                            <div class="activiti_block_one">
                                <div class="_block_one-VirtualArt">
                                    <img src="./img/art_five.png" alt="art_five">
                                    <div class="VirtualArt_nick">
                                        <h3>Virtual Art</h3>
                                        <p>@wzard</p>
                                    </div>
                                    <div class="VirtualArt-Sale">
                                        <h2>Sale</h2>
                                        <h3>12.4 ETH</h3>
                                        <p>6 Minutes ago</p>
                                    </div>
                                </div>
                                <div class="_block_one-Price">
                                    <div class="price">
                                        <p>USD Price</p>
                                        <h2>$19K</h2>
                                    </div>
                                    <div class="price">
                                        <p>Quantity</p>
                                        <h2>10.9K</h2>
                                    </div>
                                    <div class="price">
                                        <p>floor price</p>
                                        <h2>12.4</h2>
                                    </div>
                                    <div class="price">
                                        <p>traded</p>
                                        <h2>24.4</h2>
                                    </div>

                                </div>
                            </div>
                            <div class="activiti_block_two">
                                <div class="_block_one-VirtualArt">
                                    <img src="./img/art_six.png" alt="art_five">
                                    <div class="VirtualArt_nick">
                                        <h3>Virtual Art</h3>
                                        <p>@wzard</p>
                                    </div>
                                    <div class="VirtualArt-Sale">
                                        <h2>Sale</h2>
                                        <h3>12.4 ETH</h3>
                                        <p>6 Minutes ago</p>
                                    </div>
                                </div>
                                <div class="_block_one-Price">
                                    <div class="price">
                                        <p>USD Price</p>
                                        <h2>$19K</h2>
                                    </div>
                                    <div class="price">
                                        <p>Quantity</p>
                                        <h2>10.9K</h2>
                                    </div>
                                    <div class="price">
                                        <p>floor price</p>
                                        <h2>12.4</h2>
                                    </div>
                                    <div class="price">
                                        <p>traded</p>
                                        <h2>24.4</h2>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        `
        profil_creator_.innerHTML += HtmlListContent;
    
    let _button_place_bid = document.querySelectorAll("._button_place_bid");
    let window_Your_bid = document.querySelector(".window_Your_bid");
    let Your_bid_block = document.querySelector(".Your_bid_block");


    _button_place_bid.forEach(button => {
        button.addEventListener("click", () =>{
            window_Your_bid.classList.add("active");
            window_Your_bid.style.overflow = "visible";
            Your_bid_block.style.overflow = "visible";
        });
    });

    document.addEventListener("mousedown", function(event){
        if(!Your_bid_block.contains(event.target)){
            window_Your_bid.classList.remove("active");
    }
    });

    Your_bid_block.addEventListener("click", () =>{
        Your_bid_block.classList.remove("active");
    });

    let Your_bid_block_close = document.querySelector(".Your_bid_block_close");
    Your_bid_block_close.addEventListener("click", () =>{
        window_Your_bid.classList.remove("active");
    });




    let button_collection = document.getElementById("button_collection");

    button_collection.addEventListener("click", (e) =>{
        let colection_window = document.getElementById("colection_window");
        let window_activity = document.getElementById("window_activity");
        e.preventDefault();
        colection_window.style.visibility = "visible";
        window_activity.style.visibility = "hidden";
        colection_window.style.height = "100%";
        window_activity.style.height = "0";
    });

    let button_activity = document.getElementById("button_activity");
    button_activity.addEventListener("click", (e) =>{
        e.preventDefault();
        window_activity.style.visibility = "visible";
        colection_window.style.visibility = "hidden";
        colection_window.style.height = "0";
        window_activity.style.height = "100%";
    });
}







