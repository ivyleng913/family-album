const photos = [
  {
    image: "images/photo9.png",
    layout: "portrait-single",
    date: "1998?",
    location: "我不知道在哪里",
    text: "非常般配，又帅又美！"
  },
  {
    image: [
      "images/photo29.png",
      "images/photo30.png",
      "images/photo31.png",
      "images/photo41.png"
    ],
    layout: "quad",
    date: "2023/8/16",
    location: "英国剑桥",
    text: "第一次出国有很多回忆，英国非常爱下雨，但我去的时候都是天晴"
  },
  {
    image: "images/photo32.png",
    layout: "wide-single",
    date: "2023/11/22",
    location: "新疆库尔勒",
    text: "辽阔的大漠衬得人很帅"
  },
  {
    image: "images/photo33.png",
    layout: "portrait-single",
    date: "2023/12/5",
    location: "疑似在绵阳",
    text: "妈妈的同学聚会～"
  },
  {
    image: "images/photo28.png",
    layout: "portrait-single",
    date: "2023/12/17",
    location: "不知道在哪",
    text: "像丰收的喜悦哈哈哈"
  },
  {
    image: "images/photo2.png",
    date: "2025/3/7",
    location: "上海",
    text: "还在物理学院的时候，在主持学术活动"
  },
  {
    image: "images/photo13.png",
    layout: "portrait-single",
    date: "2025/5/14",
    location: "感觉在小区里",
    text: "老爸陪奶奶散步"
  },
  {
    image: "images/photo11.png",
    layout: "portrait-single",
    date: "2025/5/20",
    location: "家里！",
    text: "收到花花的老妈很开心"
  },
  {
    image: "images/photo7.png",
    layout: "portrait-single",
    date: "2025/6/15",
    location: "在家！",
    text: "去年父亲节给老爸买了花～时间过得好快，整整一年了"
  },
  {
    image: "images/photo12.png",
    layout: "wide-single",
    date: "2025/6/21",
    location: "四川北川",
    text: "风景大不如前"
  },
  {
    image: [
      "images/photo10.png",
      "images/photo20.png"
    ],
    layout: "panorama-pair",
    date: "2025/7/13",
    location: "四川九鼎山",
    text: "这个地方我印象太深，美得像户外广告"
  },
  {
    image: [
      "images/photo4.png",
      "images/photo19.png",
      "images/photo21.png",
      "images/photo22.png"
    ],
    layout: "quad",
    date: "2025/8/7",
    location: "四川雅安蒙顶山",
    text: "景色太好了，看起来玩得很开心"
  },
  {
    image: "images/photo1.png",
    date: "2025/8/17",
    location: "四川剑阁",
    text: "热得不行找了个小馆子，好像味道还可以"
  },
  {
    image: "images/photo14.png",
    date: "2025/9/26",
    location: "上海交通大学电院5号楼103",
    text: "这是我实验室哈哈哈，在重新装修"
  },
  {
    image: [
      "images/photo3.png",
      "images/photo5.png",
      "images/photo16.png"
    ],
    layout: "two-top-one-bottom",
    date: "2026/2/16",
    location: "四川绵阳",
    text: "回家过年！我本命年哈哈哈"
  },
  {
    image: [
      "images/photo8.png",
      "images/photo18.png"
    ],
    layout: "pair",
    date: "2026/2/23",
    location: "四川自贡",
    text: "看完发现欣赏不来灯会，但挺开心！"
  },
  {
    image: [
      "images/photo15.png",
      "images/photo40.png"
    ],
    layout: "pair",
    date: "2026/2/24",
    location: "四川乐山",
    text: "乐山确实好吃，下次还吃"
  },
  {
    image: "images/photo23.png",
    date: "2026/4/18",
    location: "上海交通大学主图书馆附近",
    text: "这天天气特别好"
  },
  {
    image: [
      "images/photo24.png",
      "images/photo25.png"
    ],
    layout: "panorama-pair",
    date: "2026/5/2",
    location: "虎牙",
    text: "五月还有这么大的雪"
  },
  {
    image: "images/photo26.png",
    date: "2026/5/3",
    location: "江苏南京玄武湖",
    text: "太适合跑步了，上海就没有这么舒服的地方"
  },
  {
    image: "images/photo27.png",
    date: "2026/6/14",
    location: "湖南长沙橘子洲头",
    text: "想起了自己小时候"
  },
  {
    image: "images/photo38.png",
    layout: "portrait-single",
    date: "这个真的不知道",
    location: "",
    text: "我小时候～"
  }
];

(function renderGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const columnLayouts = {
    quad: [[0, 1], [2, 3]],
    "mountain-mix": [[0, 1], [2, 3]]
  };

  function renderImage(image, alt) {
    return `
      <figure class="photo-frame">
        <img src="${image}" alt="${alt}" loading="lazy" />
      </figure>`;
  }

  function renderImages(images, layout, alt) {
    const columns = columnLayouts[layout];

    if (columns) {
      return columns
        .map(
          (column) => `
        <div class="photo-column">
          ${column.map((index) => renderImage(images[index], alt)).join("")}
        </div>`
        )
        .join("");
    }

    return images.map((image) => renderImage(image, alt)).join("");
  }

  gallery.innerHTML = photos
    .map((photo, i) => {
      const images = Array.isArray(photo.image) ? photo.image : [photo.image];
      const isMulti = images.length > 1;
      const layout = photo.layout || (isMulti ? "group" : "single");

      const cardClasses = [
        "photo-card",
        isMulti ? "multi" : "single",
        `layout-${layout}`,
        `count-${images.length}`,
        i % 2 === 1 ? "reverse" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `
    <div class="${cardClasses}">
      <div class="photo-images">
        ${renderImages(images, layout, photo.location || "照片")}
      </div>

      <div class="photo-text">
        ${photo.date ? `<p class="date">${photo.date}</p>` : ""}
        ${photo.location ? `<h3>${photo.location}</h3>` : ""}
        ${photo.text ? `<p>${photo.text}</p>` : ""}
      </div>
    </div>`;
    })
    .join("");
})();
