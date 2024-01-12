import { data } from "./Data/emoji.js";

let container = document.querySelector('.container');
const input = document.querySelector(".header__input");



  data.forEach((el) => {
    let arr = el.keywords.split(" ");
    el.newWords = arr.filter((el, index) => {
        return arr.indexOf(el) === index;
      }) .join(" ");
  });





const createCard = (obj) => {
  const card = document.createElement('article');
  card.className = "emoji";
  card.innerHTML = `<h3 class="emoji__img">${obj.symbol}</h3>
      <h4 class="emoji__name">${obj.title}</h4>
      <p class="emoji__keywords">${obj.newWords}</p>`;
  return card
}

let creator = () => {
  container.innerHTML = "";
  data.forEach((el) => container.append(createCard(el)));
} 
creator()



let creator2 = () => {
  container.innerHTML = "";
  data.forEach((el) => {
    if (
      el.keywords.toLowerCase().includes(input.value.toLowerCase()) ||
      el.title.toLowerCase().includes(input.value.toLowerCase())
    ) {
      container.append(createCard(el));
    }
  });
};

// let arr = data.filter((el) => {
//   el.keywords.toLowerCase().includes(input.value.toLowerCase()) ||
//     el.title.toLowerCase().includes(input.value.toLowerCase());
// });
// console.log(arr);
// arr.forEach((el) => container.append(createCard(el)));

input.addEventListener('input', function () {
  creator2()
})


let randomIcon = () => {
  let randomIndex = Math.floor(Math.random() * data.length);
  let randomImg = data[randomIndex].symbol;
  let title = document.querySelector("title");
  title.innerHTML = `${randomImg}Find Emoji`;
};
randomIcon();


// let noDoubleWords = () = {
//   data.forEach(el => {
//     for (let i = 0; i < el.keywords.split.length; i++) {
//       el.keywords.split[i]
        
//       })
//     }

//   })
// }





  



