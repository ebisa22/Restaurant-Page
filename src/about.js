import one from "./image/one.png";
import two from "./image/two.png";
import three from "./image/three.png";
export function aboutPage(){
      const subContent = document.createElement("div");
      subContent.id = "about";
      subContent.classList.add("about-page");
      const paragraph=document.createElement('p');
      paragraph.textContent = "Want to get update?";
      const emailContainer=document.createElement('div');
      emailContainer.classList.add('email-container');
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.placeholder = "Enter your email";
      const span=document.createElement('span');
      span.textContent = " ->";

      emailContainer.append(inputField,span);
      const menuNews=document.createElement('div');
      menuNews.classList.add('menu-news');

      const divOne=document.createElement('div');
      const imgOne=document.createElement('img');
      imgOne.src=one;
      const paraOne=document.createElement('p');
      paraOne.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex dicta provident eum accusantium ullam, asperiores, ad sunt aperiam consequatur, sequi quisquam id facilis ratione unde adipisci dignissimos!';
      divOne.append(imgOne,paraOne);

      const divTwo=document.createElement('div');
      const imgTwo=document.createElement('img');
      imgTwo.src=two;
      const paraTwo=document.createElement('p');
      paraTwo.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex dicta provident eum accusantium ullam, asperiores, ad sunt aperiam consequatur, sequi quisquam id facilis ratione unde adipisci dignissimos!';
      divTwo.append(imgTwo,paraTwo);

      const divThree=document.createElement('div');
      const imgThree=document.createElement('img');
      imgThree.src=three;
      const paraThree=document.createElement('p');
      paraThree.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex dicta provident eum accusantium ullam, asperiores, ad sunt aperiam consequatur, sequi quisquam id facilis ratiThree unde adipisci dignissimos!';
      divThree.append(imgThree,paraThree)

    menuNews.append(divOne,divTwo,divThree);
    subContent.append(paragraph,emailContainer,menuNews);
    
    return subContent;
}