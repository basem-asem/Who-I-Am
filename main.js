let load = document.querySelectorAll(".load");
let prog = document.querySelectorAll(".status .container .numbers .number")
for (let i = 0; i < load.length; i++) {
    load[i].style.width = prog[i].innerHTML;
    console.log(prog[i].innerHTML);
}