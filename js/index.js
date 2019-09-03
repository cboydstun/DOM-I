const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
const navigation = document.querySelectorAll('a');
navigation[0].textContent = 'Services';
navigation[1].textContent = 'Product';
navigation[2].textContent = 'Vision';
navigation[3].textContent = 'Features';
navigation[4].textContent = 'About';
navigation[5].textContent = 'Contract';

//top section
const topText = document.querySelector('h1');
topText.textContent = 'DOM IS AWESOME';

const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', '/img/header-img.png');

const topButton = document.querySelector('button');
topButton.textContent = 'Get Started!';

//mid section
const midTitles = document.querySelectorAll('h4');
midTitles[0].textContent = 'Features';
midTitles[1].textContent = 'About';
midTitles[2].textContent = 'Services';
midTitles[3].textContent = 'Product';
midTitles[4].textContent = 'Vision';

const midText = document.querySelectorAll('p');
midText[0].textContent = 'Features lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
midText[1].textContent = 'About lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
midText[2].textContent = 'Services lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
midText[3].textContent = 'Product lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
midText[4].textContent = 'Vision lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

//contact section
document.querySelector('.contact').getElementsByTagName('h4')[0].innerText = siteContent["contact"]["contact-h4"];
document.querySelector('.contact').getElementsByTagName('p')[0].innerText = siteContent["contact"]["address"];
document.querySelector('.contact').getElementsByTagName('p')[1].innerText = siteContent["contact"]["phone"];
document.querySelector('.contact').getElementsByTagName('p')[2].innerText = siteContent["contact"]["email"];

//footer
document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0].innerText = siteContent["footer"]["copyright"];

//new content

document.querySelector('a').style.color = "green";

const navElement = document.querySelector('nav');
const newElement1 = document.createElement('a');
const newElement2 = document.createElement('a');

navElement.prepend(newElement1);
navElement.appendChild(newElement2);

newElement1.innerText = "Home";
newElement2.innerText = "Affiliates";