import FoodPhoto2 from "./image/FoodPhoto2.png";
 
export function contactPage() {
   const subContent=document.createElement('div');
   subContent.id="contact";
   subContent.classList.add('subcontent');
   const left=document.createElement('div');
   left.classList.add('left');
   const paragraph=document.createElement('p');
   paragraph.textContent=' A place where flavors come together and every dish tells a story. Inspired by global tastes and crafted with fresh ingredients. From casual bites to signature plates, there’s something for everyone.Good food, great atmosphere, and moments worth sharing.';
   const contact=document.createElement('div');
   contact.classList.add('contact');
   const inputField=document.createElement('input');
   inputField.type='text';
   inputField.placeholder='Enter your address';
   const button=document.createElement('button');
   button.textContent='Get Started';
   contact.append(inputField,button)
   left.append(paragraph,contact)

   const right=document.createElement('div');
   right.classList.add('right');
   const image=document.createElement('img');
   image.src=FoodPhoto2;
   right.appendChild(image);

   subContent.append(left,right);
   
   return subContent;
}
