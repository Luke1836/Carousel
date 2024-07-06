const cards = [
    {
      id: 1,
      title: "Aurora Borealis",
      img: "./Source/aurora.avif",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    },
    {
      id: 2,
      title: "Aurora Australis",
      img: "./Source/aurora_potrait.avif",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    },
    {
      id: 3,
      title: "Mount Vesuvius",
      img: "./Source/mount-vesuvius.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    },
    {
      id: 4,
      title: "Nyiragongo",
      img: "./Source/Nyiragongo-Volcano-Congo.avif",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    },
    {
      id: 5,
      title: "Shoal of Fish",
      img: "./Source/photo-1682686581776-b6ebee7c150e.avif",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    },
    {
      id: 6,
      title: "Mount St.Helens",
      img: "./Source/St.Helens.avif",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    },
    {
      id: 7,
      title: "Waterfall",
      img: "./Source/waterfall-1.avif",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta debitis vitae officiis provident consequuntur dolore ut et odio accusantium necessitatibus, iusto quaerat earum inventore voluptate ducimus deserunt, maxime fugit.`,
    }
  ];

  const container = document.querySelector('.slider');
  displayCard(cards);

  function displaySlideIcon(cards) {
    const iconHTML = cards.map(() => `<div class="slide-icon"></div>`).join('');
    return iconHTML;
  }

  function displayCard(cards) {
    let card = cards.map((item)=>{
        return `<div class="slide">
                    <img src=${item.img} alt=${item.title} class="card-img">
                    <div class="info">
                        <h2>${item.title}</h2>
                        <p>${item.desc}p>
                    </div>
                </div>
                
                 <div class="navigation-visibility">

                </div>`
    });
    card = card.join('');  //Joins all the strings together to form one large string
    container.innerHTML = card;
    const iconsContainer = document.querySelector('.navigation-visibility'); 
    iconsContainer.innerHTML = displaySlideIcon(cards);;
    container.innerHTML += `<div class="navigation">
                                <i class="fas fa-chevron-left prev-btn"></i>
                                <i class="fas fa-chevron-right next-btn"></i>
                            </div>
                            `;
  }


/* ---------- Slider Animations ---------- */
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');

nextBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

})