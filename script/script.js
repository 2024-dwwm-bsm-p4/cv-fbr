document.querySelectorAll(".AboutMeTitle").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

document.querySelectorAll(".ExperiencesTitle").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

document.querySelectorAll(".FormationsTitle").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

document.querySelectorAll(".InformationsTitle").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

document.querySelectorAll(".CompetencesTitle").forEach((title) => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
  
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
  