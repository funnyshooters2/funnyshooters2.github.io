/*

Custom script

This file will not be overwritten by the updater

*/

// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}


// share button script

function updateModal() {
  var currentUrl = window.location.href;
  document.getElementById("urlInput").value = currentUrl;
}

function copyToClipboard() {
  var copyText = document.getElementById("urlInput");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("copyButton").innerHTML = "Copied";
}

document.getElementById("shareButton").addEventListener("click", function () {
  updateModal();
  $('#shareModal').modal('show');
});

document.getElementById("copyButton").addEventListener("click", function () {
  copyToClipboard();
});
