const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

anime.timeline({
    loop: true
})

.add({
    targets: '.text span',
    translateY: [-600, 0], // [Start value, end value]
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500, // 1.5s 
    delay: anime.stagger(100),
})

.add({
    targets: '.text span',
    translateX: [0, -1000], // [Start value, end value]
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 2000, // 2s
    delay: anime.stagger(100),
})

.add({
    targets: '.text span',
    translateX: [1000, 0], // [Start value, end value]
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000, // 2s
    delay: anime.stagger(100),
})

.add({
    targets: '.text span',
    translateX: [0, 0], // [Start value, end value]
    scale: [1, 50],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 2000, // 2s
    delay: anime.stagger(100),
})