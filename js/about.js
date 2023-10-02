const boldParagraphInAbout = document.createElement('p');
boldParagraphInAbout.classList.add('about__text-bold');
boldParagraphInAbout.textContent = "Capoeira is a unique type of martial arts. It combines elements of battle with dancing. This sport will help you develop strength, endurance, plasticity, speed, etc.";

const normalParagraphInAbout = document.createElement('p');
normalParagraphInAbout.classList.add('about__text');
normalParagraphInAbout.textContent = "Our school conducts capoeira training in New York for all age categories. Capoeira is for everyone, regardless of the physical condition. When training with our teachers, you:";

const listElementInAbout = document.querySelector('.about__list');
const textContainerInAbout = listElementInAbout.parentElement;

textContainerInAbout.insertBefore(boldParagraphInAbout, listElementInAbout);
textContainerInAbout.insertBefore(normalParagraphInAbout, listElementInAbout);