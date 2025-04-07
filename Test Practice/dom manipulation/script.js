const header = document.createElement('h1')
header.textContent = 'Welcome to My Simple Webpage'

const container = document.createElement('div');
container.className = 'container';

const aboutSection = document.createElement('div');
aboutSection.className = 'text-section'
const aboutHeading = document.createElement('h2');
aboutHeading.textContent = 'About me';
const aboutParagraph = document.createElement('p');
aboutParagraph.textContent = 'Hello! My name is John Doe. I am a CNA student with a passion for creating beautiful and functional websites.';
aboutSection.appendChild(aboutHeading);
aboutSection.appendChild(aboutParagraph);

const imageSection = document.createElement('div')
imageSection.className = 'image'
const image = document.createElement('img')
image.src = 'https://via.placeholder.com/150'
image.alt = 'Placeholder Image'
imageSection.appendChild(image);

const interestsSection = document.createElement('div')
interestsSection.className = 'text-section';
const interestsHeading = document.createElement('h2')
interestsHeading.textContent = 'My interests';
const interestsList = document.createElement('ul')
const interests = ['Coding','Reading','Travelling'];
interests.forEach(interest => {
    const listItem = document.createElement('li');
    listItem.textContent = interest;
    interestsList.appendChild(listItem)
})

interestsSection.appendChild(interestsHeading);
interestsSection.appendChild(interestsList);

container.appendChild(aboutSection);
container.appendChild(imageSection);
container.appendChild(interestsSection);

document.body.appendChild(header)
document.body.appendChild(container);


