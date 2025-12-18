// Active menu link + footer year
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
})();

// Small form success message (visual only)
function showNotice(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.display = "block";
  el.scrollIntoView({behavior:"smooth", block:"center"});
  setTimeout(()=>{ el.style.display = "none"; }, 4500);
}
