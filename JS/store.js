AFRAME.registerComponent("store", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Batman",
        title: "Batman",
        url: "./assets/batman.jpg",
      },
      {
        id: "Spiderman",
        title: "Amazing Spider Man",
        url: "./assets/spiderman.jpg",
      },

      {
        id: "Hulk",
        title: "Incredible Hulk",
        url: "./assets/hulk.jpg",
      },
      {
        id: "Ironman",
        title: "Iron Man",
        url: "./assets/ironman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      const borderEl = this.createBorder(position, item.id);
      const thumbnailEl = this.createThumbnail(item);
      borderEl.appendChild(thumbnailEl);
      const titleEl = this.createTitle(position, item);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      height: 28,
      width: 20,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#00BCD4",
      opacity: 0.4,
    });
    return entityEl;
  },
  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      height: 28,
      width: 20,
    });
    entityEl.setAttribute("material", {
      src: item.url,
    });
    return entityEl;
  },
  createTitle: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 60,
      color: "#E65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});
