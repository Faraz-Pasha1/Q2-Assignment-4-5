import Link from "next/link"

export default function Blogcards () {
    return (
        <div className = "blogCardsMain">
           
         {/* 1st Blog Container */}
            <div className = "blogCards">
                <div className = "imageCard1"></div>
                <h1 className="title">Food Recipes</h1>
                 <p className= "descrtipion"> Here you find lots of recipe of food.The taste of food just like a hotel and resturants </p>
                 <button className="readMore">Read More</button>
            </div>
         {/* 2nd Blog Container */}
         <div className = "blogCards">
                <div className = "imageCard2"></div>
                <h1 className="title">Nutrition</h1>
                 <p className= "descrtipion"> Here you find lots of recipe of food.The taste of food just like a hotel and resturants </p>
                 <button className="readMore">Read More</button>
            </div>
         {/* 3rd Blog Container */}
         <div className = "blogCards">
                <div className = "imageCard3"></div>
                <h1 className="title">Health</h1>
                 <p className= "descrtipion"> Here you find lots of recipe of food.The taste of food just like a hotel and resturants </p>
                 <button className="readMore">Read More</button>
            </div>
         {/* 4th Blog Container */}
         <div className = "blogCards">
                <div className = "imageCard1"></div>
                <h1 className="title">Food Recipes</h1>
                 <p className= "descrtipion"> Here you find lots of recipe of food.The taste of food just like a hotel and resturants </p>
                 <button className="readMore">Read More</button>
            </div>
         {/*5th Blog Container */}
         <div className = "blogCards">
                <div className = "imageCard2"></div>
                <h1 className="title">Nutrition</h1>
                 <p className= "descrtipion"> Here you find lots of nutrionist food to eat daily for healthy life </p>
                 <button className="readMore">Read More</button>
            </div>
         {/* 6th Blog Container */}
         <div className = "blogCards">
                <div className = "imageCard3"></div>
                <h1 className="title">Health</h1>
                 <p className= "descrtipion"> Mst review your health condition. Here are some tipe to check condition daily</p>
                 <button className="readMore">Read More</button>
            </div>

        </div>
    )
}