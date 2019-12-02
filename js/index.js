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


//Navbar Selector

const navBar = document.querySelector('nav');

const navATag = document.querySelectorAll('a');
navATag.forEach(function(item, index){
  item.innerText = siteContent['nav'][`nav-item-${index + 1}`];
  item.style.color = 'silver';
})
//Add new content


//testing for navBar
console.log(navBar);

//Updates for cta-img
let ctaText1 = document.querySelector('.cta h1');
ctaText1.innerHTML = "DOM <br> Is<br> Awesome<br>";

// cta-text button
const Button = document.querySelector('.cta-text button');
Button.textContent = siteContent['cta']['button'];

// Updated images for cta
let cta = document.getElementById("cta-img");;
cta.setAttribute('src', siteContent["cta"]["img-src"] );



// Features and About h4 
const contentTopH4 = document.querySelectorAll('.top-content .text-content h4');
contentTopH4[0].textContent = siteContent['main-content']['features-h4'];
contentTopH4[1].textContent = siteContent['main-content']['about-h4'];

// Features and About on Top Content Area
const contentTopP = document.querySelectorAll('.top-content .text-content p');
contentTopP[0].textContent = siteContent['main-content']['features-content'];
contentTopP[1].textContent = siteContent['main-content']['about-content'];

// Update images for middle-img-src
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//features  & about h4 for bottom contents
const contentBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
contentBottomH4[0].textContent = siteContent['main-content']['services-h4'];
contentBottomH4[1].textContent = siteContent['main-content']['product-h4'];
contentBottomH4[2].textContent = siteContent['main-content']['vision-h4'];


//features  & about P for bottom contents
const contentBottomP = document.querySelectorAll('.bottom-content .text-content p');
contentBottomP[0].textContent = siteContent['main-content']['services-content'];
contentBottomP[1].textContent = siteContent['main-content']['product-content'];
contentBottomP[2].textContent = siteContent['main-content']['vision-content'];

//Features for contact h4
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent  = siteContent['contact']['contact-h4'];


//Update address to cta-text
let address = document.querySelector('.contact p');
address.innerHTML= "123 Way 456 Street<br> Somewhere, USA<br><br> 1 (888) 888-8888<br><br> sales@greatidea.io";

//CopyRight contents
const copyRight = document.querySelector('footer');
copyRight.textContent = siteContent['footer']['copyright'];