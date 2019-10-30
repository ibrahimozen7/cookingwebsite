let searchbox = document.getElementById("search");
searchbox.addEventListener("input", search);
let searchTitle = document.getElementById("searchTitle");
function search(query) {
  searchTitle.innerHTML = query.target.value;
}
