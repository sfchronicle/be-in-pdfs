require("./lib/social"); //Do not delete

// -----------------------------------------------------------------------------
// expandable archival photo ---------------------------------------------------
// -----------------------------------------------------------------------------

var sidebar = document.getElementById("sidebar");
var sidebarlink = document.querySelector('#sidebar-link');

sidebarlink.addEventListener("click",function() {
  sidebar.style.display = "block";
  document.body.style.overflow = "hidden";
});

sidebar.addEventListener("click",function() {
  document.getElementById("sidebar").style.display = "none";
  document.body.style.overflow = "scroll";
});
