
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if(mySrc === "images/photo1.jpg") {
        myImage.setAttribute("src", "images/photo2.jpg")
    } else {
      myImage.setAttribute("src", "images/photo1.jpg")

    }
}