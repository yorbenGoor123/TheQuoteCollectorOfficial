
{

  const init = () => {



  }
  const addItem = () => {
    const $prices =document.querySelectorAll(`.price`);
    $prices.forEach($price => {
      $price.outerHTML =+ ` <a class="price__button">
      <span class="price__button__wrapper">
        <span class="price__button__name">${item.name}</span><br>
        <span class="price__button__amount">&euro; ${item.prices.medium}</span>
      </span>
      <span class="price__button__plus">+</span>
    </a>`
    });
  }

  addItem();
  init();
}

