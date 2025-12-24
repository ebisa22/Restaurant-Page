import FoodPhoto from "./image/FoodPhoto.png";
 

export function homePage() {
   const subContent=document.createElement('div');
   subContent.id="home";
   subContent.classList.add('subcontent');
   const left=document.createElement('div');
   left.classList.add('left');
   const heading=document.createElement('h2');
   heading.innerHTML='All your favorites,<br> in one place'
   const paragraph=document.createElement('p');
   paragraph.textContent='All your favorite flavors, made fresh.One place for every craving.';
   const button=document.createElement('button');
   button.textContent='Read More';
   left.append(heading,paragraph,button);

   const right=document.createElement('div');
   right.classList.add('right');
   const image=document.createElement('img');
   image.src=FoodPhoto;
   right.appendChild(image);

   subContent.append(left,right);
   return subContent
}
