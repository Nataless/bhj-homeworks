const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].addEventListener('click', (e) => {
    e.preventDefault();

    let tooltip = document.querySelector('.tooltip_active');

    if (tooltip == undefined) {
      hasTooltip[i].insertAdjacentHTML('afterEnd', '<div class="tooltip tooltip_active"></div>');
      let cur = document.querySelector('.tooltip_active');
      cur.innerText = hasTooltip[i].title;
      cur.style.top = hasTooltip[i].getBoundingClientRect().top + 20 + 'px';
      cur.style.left = hasTooltip[i].getBoundingClientRect().left + 'px';
    } else if ((tooltip !== undefined) && (tooltip.textContent === hasTooltip[i].title)) {
        tooltip.remove();
    } else if ((tooltip !== undefined) && (tooltip.textContent !== hasTooltip[i].title)) {
        tooltip.remove();
        hasTooltip[i].insertAdjacentHTML('afterEnd', '<div class="tooltip tooltip_active"></div>');
        let cur = document.querySelector('.tooltip_active');
        cur.innerText = hasTooltip[i].title;
        cur.style.top = hasTooltip[i].getBoundingClientRect().top + 20 + 'px';
        cur.style.left = hasTooltip[i].getBoundingClientRect().left + 'px';
    }
  })
}