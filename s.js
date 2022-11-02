const i = document.getElementById("input");
const b = document.getElementById("btn-1");
const ul = document.getElementById("ulid");
var link = [];
b.onclick = function () {
    link.push(i.value);
    i.value = "";
    console.log(link);
    localStorage.setItem("links", JSON.stringify(link));
    p()
}
link = JSON.stringify(link);
i.addEventListener("keydown", function (event) {
    //console.log(event.which);
    if (event.which === 13) {
        b.click();
    }
});
function p() {
    let ele = "";
    link = JSON.parse(link);
    for (let i1 = 0; i1 < link.length; i1++) {
        ele += `<li><a href='${link[i1]}' target='_blank'>${link[i1]}</a></li>`;
    }
    ul.innerHTML = ele;
    console.log(ele);
}


