//初期化
const slide = document.querySelector(".slide")
const images = document.querySelectorAll(".slide img");//グローバル半数

console.log(images[images.length - 1]);//4番目がほしい
console.log(images);
//div="slide"の中の最後の画像[images.length -1]を最初の画像[0]の前
//insertBeforeはappendChildの逆、前に入れる
slide.insertBefore(images[images.length - 1], images[0])


//button 左

const leftBtn = document.querySelector(".leftBtn");

// 関数化
const leftSlider = function () {//ローカル変数　このブロック内しか有効出来ない
    const slideImages = document.querySelectorAll(".slide img");
    console.log(slideImages);//クリックを押した時点でのhtml
    //左側の余分な画像を最後に移動
    slide.appendChild(slideImages[0]);
    //入っているStyle属性を削除
    slideImages[1].removeAttribute("style");
}

leftBtn.addEventListener("click", function () {

})

leftBtn.addEventListener("click", leftSlider);

//botton 右
const rightBtn = document.querySelector(".rightBtn");
//関数化
const rightSlider = function () {
    //ローカル変数　このブロック内しか有効出来ない
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0";
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
};


rightBtn.addEventListener("click", rightSlider);


window.setInterval(leftSlider, 2000);//2000ミリ秒＝2秒