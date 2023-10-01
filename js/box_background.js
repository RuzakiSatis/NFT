


function background () {

    let backgroundCircleOne = {
        top: "50px",
        right: "100px",
        boxShadow: "0 0 330px 121px rgba(9, 214, 255, 0.5)" /*голубий*/
    }
    
    let backgroundCircleTwo = Object.create(backgroundCircleOne)
    backgroundCircleTwo.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleTwo.top = "300px"
    backgroundCircleTwo.right = "150px"
    
    let backgroundCircleThree = Object.create(backgroundCircleOne)
    backgroundCircleThree.boxShadow = "0 0 330px 121px rgb(144, 0, 144)" /*фіолетовий*/
    backgroundCircleThree.top = "600px"
    backgroundCircleThree.right = "450px"
    
    let backgroundCircleFour = Object.create(backgroundCircleOne)
    backgroundCircleFour.boxShadow = "0 0 330px 121px rgb(183, 50, 81)" /*Червоний*/
    backgroundCircleFour.top = "400px"
    backgroundCircleFour.right = "150px"
    
    let backgroundCircleFive = Object.create(backgroundCircleOne)
    backgroundCircleFive.boxShadow = "0 0 330px 121px rgb(231, 178, 38, 0.6)" /*жовтий*/
    backgroundCircleFive.top = "600px"
    backgroundCircleFive.right = "250px"
    
    let backgroundCircleSix = Object.create(backgroundCircleOne)
    backgroundCircleSix.boxShadow = "0 0 330px 121px rgb(231, 178, 38, 0.6)" /*жовтий*/
    backgroundCircleSix.left = "100px"
    backgroundCircleSix.top = "400px"

    let backgroundCircleSeven = Object.create(backgroundCircleOne)
    backgroundCircleSeven.boxShadow = "0 0 330px 121px rgb(183, 50, 81)" /*червоний*/
    backgroundCircleSeven.top = "1900px"
    backgroundCircleSeven.right = "50px"

    let backgroundCircleEight = Object.create(backgroundCircleOne)
    backgroundCircleEight.boxShadow = "0 0 330px 121px rgb(144, 0, 144)" /*фіолетовий*/
    backgroundCircleEight.top = "1000px"
    backgroundCircleEight.left = "150px"

    let backgroundCircleNine = Object.create(backgroundCircleOne)
    backgroundCircleNine.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleNine.top = "1900px"
    backgroundCircleNine.left = "0px"

    let backgroundCircleTen = Object.create(backgroundCircleOne)
    backgroundCircleTen.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleTen.top = "2300px"
    backgroundCircleTen.left = "150px"

    let backgroundCircleEleven = Object.create(backgroundCircleOne)
    backgroundCircleEleven.boxShadow = "0 0 330px 121px rgb(144, 0, 144)" /*фіолетовий*/
    backgroundCircleEleven.left = "300px"
    backgroundCircleEleven.top = "3000px"

    let backgroundCircleTwelve = Object.create(backgroundCircleOne)
    backgroundCircleTwelve.boxShadow = "0 0 330px 121px rgb(231, 178, 38, 0.6)" /*жовтий*/
    backgroundCircleTwelve.right = "100px"
    backgroundCircleTwelve.top = "3900px"

    let backgroundCircleThirteen = Object.create(backgroundCircleOne)
    backgroundCircleThirteen.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleThirteen.top = "3400px"
    backgroundCircleThirteen.right = "150px"

    let backgroundCircleFourteen = Object.create(backgroundCircleOne)
    backgroundCircleFourteen.boxShadow = "0 0 330px 121px rgb(183, 50, 81)" /*червоний*/
    backgroundCircleFourteen.top = "4400px"
    backgroundCircleFourteen.left = "150px"

    let backgroundCircleFifteen = Object.create(backgroundCircleOne)
    backgroundCircleFifteen.boxShadow = "0 0 330px 121px rgb(144, 0, 144)" /*фіолетовий*/
    backgroundCircleFifteen.top = "5600px"
    backgroundCircleFifteen.right = "250px"

    let backgroundCircleSixteen = Object.create(backgroundCircleOne)
    backgroundCircleSixteen.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleSixteen.top = "6100px"
    backgroundCircleSixteen.right = "150px"

    let backgroundCircleSeventeen = Object.create(backgroundCircleOne)
    backgroundCircleSeventeen.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleSeventeen.top = "6500px"
    backgroundCircleSeventeen.right = "450px"

    let backgroundCircleEighteen = Object.create(backgroundCircleOne)
    backgroundCircleEighteen.boxShadow = "0 0 330px 121px rgb(231, 178, 38, 0.6)" /*жовтий*/
    backgroundCircleEighteen.left = "300px"
    backgroundCircleEighteen.top = "6200px"

    let backgroundCircleNineteen = Object.create(backgroundCircleOne)
    backgroundCircleNineteen.boxShadow = "0 0 330px 121px rgb(231, 178, 38, 0.6)" /*жовтий*/
    backgroundCircleNineteen.left = "300px"
    backgroundCircleNineteen.top = "9000px"

    let backgroundCircleTwenty = Object.create(backgroundCircleOne)
    backgroundCircleTwenty.boxShadow = "0 0 330px 121px rgba(18, 217, 255, 0.4)" /*голубий*/
    backgroundCircleTwenty.top = "8500px"
    backgroundCircleTwenty.right = "450px"

    
    let box_background = document.getElementById("box_background")

    let background = `
        <div class="circle" style = "box-shadow: ${backgroundCircleOne.boxShadow}; top: ${backgroundCircleOne.top}; right: ${backgroundCircleOne.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleTwo.boxShadow}; top: ${backgroundCircleTwo.top}; right: ${backgroundCircleTwo.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleThree.boxShadow}; top: ${backgroundCircleThree.top}; right: ${backgroundCircleThree.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleFour.boxShadow}; top: ${backgroundCircleFour.top}; right: ${backgroundCircleFour.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleFive.boxShadow}; top: ${backgroundCircleFive.top}; right: ${backgroundCircleFive.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleSix.boxShadow}; top: ${backgroundCircleSix.top}; left: ${backgroundCircleSix.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleSeven.boxShadow}; top: ${backgroundCircleSeven.top}; right: ${backgroundCircleSeven.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleEight.boxShadow}; top: ${backgroundCircleEight.top}; left: ${backgroundCircleEight.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleNine.boxShadow}; top: ${backgroundCircleNine.top}; left: ${backgroundCircleNine.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleTen.boxShadow}; top: ${backgroundCircleTen.top}; left: ${backgroundCircleTen.left};"></div> 
        <div class="circle" style = "box-shadow: ${backgroundCircleEleven.boxShadow}; top: ${backgroundCircleEleven.top}; left: ${backgroundCircleEleven.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleTwelve.boxShadow}; top: ${backgroundCircleTwelve.top}; right: ${backgroundCircleTwelve.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleThirteen.boxShadow}; top: ${backgroundCircleThirteen.top}; right: ${backgroundCircleThirteen.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleFourteen.boxShadow}; top: ${backgroundCircleFourteen.top}; left: ${backgroundCircleFourteen.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleFifteen.boxShadow}; top: ${backgroundCircleFifteen.top}; right: ${backgroundCircleFifteen.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleSixteen.boxShadow}; top: ${backgroundCircleSixteen.top}; right: ${backgroundCircleSixteen.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleSeventeen.boxShadow}; top: ${backgroundCircleSeventeen.top}; right: ${backgroundCircleSeventeen.right};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleEighteen.boxShadow}; top: ${backgroundCircleEighteen.top}; left: ${backgroundCircleEighteen.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleNineteen.boxShadow}; top: ${backgroundCircleNineteen.top}; left: ${backgroundCircleNineteen.left};"></div>
        <div class="circle" style = "box-shadow: ${backgroundCircleTwenty.boxShadow}; top: ${backgroundCircleTwenty.top}; right: ${backgroundCircleTwenty.right};"></div>                                                                                                                                                                                                                                                                        
    `
    box_background.innerHTML=background
}

background()
