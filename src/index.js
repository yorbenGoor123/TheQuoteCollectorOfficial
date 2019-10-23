{
const init = () => {
$button = document.querySelector(".button");
$button.addEventListener('click',handleClick);


}

const handleClick = (e) => {
  const $text = document.querySelector(".input").value;
  const $table = document.querySelector(".overview__table");
  const today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //As January is 0.
  var yyyy = today.getFullYear();
  $table.innerHTML += `<tr class="quote__example">
  <td class="quote">${$text}</td>
  <td class="date">${dd}/${mm}/${yyyy}</td>
</tr>`;
  console.log($text);


}
init();
}
