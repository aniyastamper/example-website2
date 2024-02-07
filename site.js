//FOR THIS EXAMPLE WE are formulating new way to right the code

    const products=[
        {
        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "color": "#deaf01"
    },
   {
        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
        "color": "#554a33"
    },
    {
        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"   
    },
    {
        "title":"Flowers",
        "Text":"Text About Flowers",
        "image":"https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=600",
        "color":"#FFFFFF"
    },
    {
        "title":"Cats",
        "Text":"Text About Cats",
        "image":"https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&w=600",
        "color":"#01322f"
    },
    {
        "title":"Camera's",
        "Text":"Text about Cameras",
        "image":"https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=600",
        "color":"#deaf01"
    }
]
//Create additional Html card
const container =document.querySelector('#container')

const previousButton = document.querySelector('button.previous')
const nextButton=document.querySelector('button.next')


const newCard= document.createElement('div')
container.append(newCard)

newCard.id='card-4'
newCard.classList.add('card')

container.append(newCard)

const infoDiv=document.createElement('div')
newCard.append(infoDiv)

const header= document.createElement('h1')
infoDiv.append(header)

const p=document.createElement('p')
infoDiv.append(p)

container.append(nextButton.parentNode)


//Here we are Establishing the HTML information to the Java script file to the cards


const displayProduct =(card,{image,title,text,color})=>{
   
    card.style.backgroundImage=`url(${image}?auto=compress&cs=tinysrgb&w=600&lazy=load)`
    card.style.color=color

    const h1=card.querySelector('h1')
    h1.textContent=title

    const p=card.querySelector('p')
    p.textContent=text
}

//const a =createCard

const cards=document.querySelectorAll('.card')

let offset=0

const updateCards= shift => {
    offset += shift || 0
    cards.forEach((card, index)=> displayProduct(card, products[index + offset]))
}
//NOTE OFFEST EQUALS 0

//here we are calling out functions
updateCards(0)


previousButton.addEventListener('click',() => updateCards(-1))
nextButton.addEventListener('click',()=> updateCards(1))


//Array Practice
const names=['Aniya', 'Gaia', 'Truee','aidan']
const names2=["Aniyas", ...names.slice(1,4)]











//console.log(names[names.length-1])

//const[Fav, leastFav, fav2]=names
//console.log({leastFav, fav2})

//const sentence='This is the Array sample sentence.'
//const [first]=sentence.split(' ')

/*
//this is an Example of Arrow functions
const greetings= name => `hello ${name}`


const uppercase=text=> 
    `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase}`

names2.forEach(name => console.log(uppercase(name)))

const input='Valentines Day'
if (['Christmas','Turkey Day','St.Patricks Day','Valentines Day'].includes(input)){
    console.log('FOUND')
}

//console.log(greetings('Aniya'))

//console.log({ cardInfo4 })

//function fun(text){
//    console.log(text)
  //  return 5
//}
//console.log(fun("hi"))*/