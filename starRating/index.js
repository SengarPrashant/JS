
class Stars {
  constructor(containerClassName, noOfStars, styleOptions) {
    this.noOfStars = noOfStars;
    this.stars = [];
    this.styleOptions = styleOptions;
    this.container = document.querySelector(containerClassName);

    try {
      if (this.container && this.noOfStars > 0) {
        this.init();
      } else {
        throw new Error(`Invalid parameters`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  init() {
    const ul = document.createElement("ul");
    //
    for (let index = 0; index < this.noOfStars; index++) {
      this.stars.push({ id: index + 1 });
    }
    ul.style.listStyleType = "none";
    ul.style.display = "flex";
    ul.style.paddingLeft = "0";

    const stars = this.stars.map((star) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.style.listStyleType = "none";
      li.style.margin = this.styleOptions?.margin;
      a.style.cursor = "pointer";
      a.innerHTML = "&#9733";
      a.id = star.id;
      a.addEventListener("click", (e) => {
        this.setRating(ul, e);
      });
      li.appendChild(a);
      return li;
    });
    const fragement = document.createDocumentFragment();
    for (const star of stars) {
      fragement.appendChild(star);
    }
    ul.appendChild(fragement);
    this.container.appendChild(ul);
  }

  setRating(ul, e) {
    const listItems = ul.querySelectorAll("li");
    const currentId = e.target.id;

    for (const item of listItems) {
      const a = item.querySelectorAll("a")[0];
      a.style.color = a.id <= currentId ? "#e6d220" : "";
    }
  }
}

new Stars(".stars", 6, { margin: "4px" });

// stars1.init();
