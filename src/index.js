{
const init = () => {
$button = document.querySelector(".button");
$button.addEventListener('click',handleClick);


}

const handleClick = () => {
  console.log("e");
}
init();
}
