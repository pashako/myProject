import * as basicLightbox from "basiclightbox"


const content=`
<div class= "footer_div1">
    <button class = "button_close" data-action = "btn_close"><img class = "footer_img_btn" src="../../../img/cloze.png" alt=""> </button>
    <div class ="footer_div2">
        <div class ="footer_div3">
            <div class = "footer_h3"><p class = "footer_p1">Оставить заявку</p></div>

            <div class = "footer_h31"><p class = "footer_p2">Ваше имя</p></div>
            
            <div class = "footer_priam"></div>
            
            <div class = "footer_h31"><p class = "footer_p2">Телефон</p></div>
            
            <div class = "footer_priam"></div>
        </div>
        <button class= "footer_button">Отправить</button>
    </div>
</div>
`
const content2=`
<div class= "footer_div1">
    <button class = "button_close"><img class = "footer_img_btn" src="../../../img/cloze.png" alt=""> </button>
    <div class ="footer_div2">
        <div class ="footer_div3">
            <div class = "footer_h32"><p class = "footer_p3">Акции</p></div>
            
            <div class = "footer_h3"><p class = "footer_p1">Мальчишник</p></div>
            
            <div class = "footer_priam1"></div>
            
            <div class = "footer_h311"><p class = "footer_p2">Караоке - скидка 50%</p></div>
            
            <div class = "footer_h321"><p class = "footer_p2">Скидка на заказ 10%</p></div>
            
            <div class = "footer_h3"><p class = "footer_p1">Девичник</p></div>
            
            <div class = "footer_priam1"></div>
            
            <div class = "footer_h311"><p class = "footer_p2">Караоке - скидка 50%</p></div>
            
            <div class = "footer_h321"><p class = "footer_p2">Бутылка шампанского в подарок!</p></div>
            
            <div class = "footer_h311"><p class = "footer_p1">День рождения</p></div>
            
            <div class = "footer_priam1"></div>
            
            <div class = "footer_h311"><p class = "footer_p2">Отпразднуй день рождения День в День и получи караоке Безплатно+</p></div>
            
            <div class = "footer_h32"><p class = "footer_p2">Скидка 10% на заказ</p></div>
        </div>

    </div>
</div>
`

function openModal(content){
    const instance = basicLightbox.create(content) 
    instance.show()
}

document.querySelector('button[data-action="contactus"]').addEventListener("click", (e)=>{
openModal(content)
} )

document.querySelector('button[data-action="discount__imgBar-button"]').addEventListener("click", (e)=>{
openModal(content2)
} )


document.querySelector('button[data-action="slider_button"]').addEventListener("click", (e)=>{
    openModal(content)
} )



document.querySelector('button[data-action="reservation__imgBar-button"]').addEventListener("click", (e)=>{
    openModal(content)
} )

