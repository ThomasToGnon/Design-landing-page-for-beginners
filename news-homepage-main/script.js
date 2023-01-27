const faqs = document.querySelectorAll('.div1');

faqs.forEach(div1 => {
    div1.addEventListener('click', () => {
        div1.classList.toggle("active");

    });
});