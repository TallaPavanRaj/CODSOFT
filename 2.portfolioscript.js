let currentIndex = 0;

function moveLeft() {
    const carouselContent = document.querySelector('.carousel-content');
    const skills = document.querySelectorAll('.skill');
    const totalSkills = skills.length;

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSkills - 1;
    }

    const offset = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
}

function moveRight() {
    const carouselContent = document.querySelector('.carousel-content');
    const skills = document.querySelectorAll('.skill');
    const totalSkills = skills.length;

    if (currentIndex < totalSkills - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
}
