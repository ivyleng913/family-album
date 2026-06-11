const photos = [
  {
    image: "images/photo1.png",
    date: "小时候",
    location: "上海",
    text: "小时候总觉得你的手很大，只要被你牵着，就什么都不用害怕。"
  },
  {
    image: "images/photo2.png",
    date: "某一年夏天",
    location: "杭州西湖",
    text: "很多当时觉得普通的瞬间，后来回头看，才发现都是最珍贵的回忆。"
  },
  {
    image: "images/photo3.png",
    date: "现在",
    location: "青岛海边",
    text: "以前是你陪我长大，以后也希望我能多陪你，把日子过得慢一点。"
  }
];

(function renderGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  gallery.innerHTML = photos
    .map(
      (photo, i) => `
    <div class="photo-card${i % 2 === 1 ? " reverse" : ""}">
      <img src="${photo.image}" alt="${photo.location}" />
      <div class="photo-text">
        <p class="date">${photo.date} · ${photo.location}</p>
        <h3>${photo.location}</h3>
        <p>${photo.text}</p>
      </div>
    </div>`
    )
    .join("");
})();
