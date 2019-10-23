{
const init = () => {
$button = document.querySelector(".button");
$button.addEventListener('click',handleClick);


}

const handleClick = (e) => {
  console.log(e.Prevendefault);
}
init();
}
