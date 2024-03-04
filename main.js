const options = document.querySelectorAll(".option-header");
function showHideContent () {
    const cross = document.querySelector(`.plus[data-optid="${this.dataset.optid}"]`);
    const text = document.querySelector(`.option-text[data-optid="${this.dataset.optid}"]`)
    const TextHeight = getComputedStyle(text).height;
    cross.classList.toggle('cross');
    if (TextHeight == '0px') {
        text.children[0].innerHTML = '<br><br><br>';
        text.style.height = `${text.scrollHeight}px`;
    } else {
        text.style.height = '0px';
    }
}
options.forEach(option => option.addEventListener('click', showHideContent));