var flag = 0;
function changePage() {
  if (flag == 1) {
    window.location.href = 'first_catalog_page.html';
  }
  else {
    window.location.href = 'second_catalog_page.html';
  }
}