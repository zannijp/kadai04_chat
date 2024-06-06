// 編集
function edit() {
    $("#wrapAEdit").removeClass("d_none");
    $("#wrapAEdit").addClass("wrap");
    $("#edit").addClass("d_none");
    $("#save").removeClass("d_none");
}

// 保存
function save() {
    const valA1 = $("#valA1").val();
    localStorage.setItem("padA1", valA1);
    let padA1val = localStorage.getItem("padA1");
    console.log(padA1val);
    const padA1html = `
    <p class="padText">PAD<span>1</span></p>
    <button onclick="copyA1()">${padA1val}</button>
        `;
    $("#padA1").html(padA1html);
    $("#valA1").val(padA1val);

    const valA2 = $("#valA2").val();
    localStorage.setItem("padA2", valA2);
    let padA2val = localStorage.getItem("padA2");
    console.log(padA2val);
    const padA2html = `
    <p class="padText">PAD<span>2</span></p>
    <button onclick="copyA2()">${padA2val}</button>
        `;
    $("#padA2").html(padA2html);
    $("#valA2").val(padA2val);

    const valA3 = $("#valA3").val();
    localStorage.setItem("padA3", valA3);
    let padA3val = localStorage.getItem("padA3");
    console.log(padA3val);
    const padA3html = `
    <p class="padText">PAD<span>3</span></p>
    <button onclick="copyA3()">${padA3val}</button>
        `;
    $("#padA3").html(padA3html);
    $("#valA3").val(padA3val);

    const valA4 = $("#valA4").val();
    localStorage.setItem("padA4", valA4);
    let padA4val = localStorage.getItem("padA4");
    console.log(padA4val);
    const padA4html = `
    <p class="padText">PAD<span>4</span></p>
    <button onclick="copyA4()">${padA4val}</button>
        `;
    $("#padA4").html(padA4html);
    $("#valA4").val(padA4val);

    const valA5 = $("#valA5").val();
    localStorage.setItem("padA5", valA5);
    let padA5val = localStorage.getItem("padA5");
    console.log(padA5val);
    const padA5html = `
    <p class="padText">PAD<span>Q</span></p>
    <button onclick="copyA5()">${padA5val}</button>
        `;
    $("#padA5").html(padA5html);
    $("#valA5").val(padA5val);

    const valA6 = $("#valA6").val();
    localStorage.setItem("padA6", valA6);
    let padA6val = localStorage.getItem("padA6");
    console.log(padA6val);
    const padA6html = `
    <p class="padText">PAD<span>W</span></p>
    <button onclick="copyA6()">${padA6val}</button>
        `;
    $("#padA6").html(padA6html);
    $("#valA6").val(padA6val);

    const valA7 = $("#valA7").val();
    localStorage.setItem("padA7", valA7);
    let padA7val = localStorage.getItem("padA7");
    console.log(padA7val);
    const padA7html = `
    <p class="padText">PAD<span>E</span></p>
    <button onclick="copyA7()">${padA7val}</button>
        `;
    $("#padA7").html(padA7html);
    $("#valA7").val(padA7val);

    const valA8 = $("#valA8").val();
    localStorage.setItem("padA8", valA8);
    let padA8val = localStorage.getItem("padA8");
    console.log(padA8val);
    const padA8html = `
    <p class="padText">PAD<span>R</span></p>
    <button onclick="copyA8()">${padA8val}</button>
        `;
    $("#padA8").html(padA8html);
    $("#valA8").val(padA8val);

    const valA9 = $("#valA9").val();
    localStorage.setItem("padA9", valA9);
    let padA9val = localStorage.getItem("padA9");
    console.log(padA9val);
    const padA9html = `
    <p class="padText">PAD<span>A</span></p>
    <button onclick="copyA9()">${padA9val}</button>
        `;
    $("#padA9").html(padA9html);
    $("#valA9").val(padA9val);

    const valA10 = $("#valA10").val();
    localStorage.setItem("padA10", valA10);
    let padA10val = localStorage.getItem("padA10");
    console.log(padA10val);
    const padA10html = `
    <p class="padText">PAD<span>S</span></p>
    <button onclick="copyA10()">${padA10val}</button>
        `;
    $("#padA10").html(padA10html);
    $("#valA10").val(padA10val);

    const valA11 = $("#valA11").val();
    localStorage.setItem("padA11", valA11);
    let padA11val = localStorage.getItem("padA11");
    console.log(padA11val);
    const padA11html = `
    <p class="padText">PAD<span>D</span></p>
    <button onclick="copyA11()">${padA11val}</button>
        `;
    $("#padA11").html(padA11html);
    $("#valA11").val(padA11val);

    const valA12 = $("#valA12").val();
    localStorage.setItem("padA12", valA12);
    let padA12val = localStorage.getItem("padA12");
    console.log(padA12val);
    const padA12html = `
    <p class="padText">PAD<span>F</span></p>
    <button onclick="copyA12()">${padA12val}</button>
        `;
    $("#padA12").html(padA12html);
    $("#valA12").val(padA12val);

    const valA13 = $("#valA13").val();
    localStorage.setItem("padA13", valA13);
    let padA13val = localStorage.getItem("padA13");
    console.log(padA13val);
    const padA13html = `
    <p class="padText">PAD<span>Z</span></p>
    <button onclick="copyA13()">${padA13val}</button>
        `;
    $("#padA13").html(padA13html);
    $("#valA13").val(padA13val);

    const valA14 = $("#valA14").val();
    localStorage.setItem("padA14", valA14);
    let padA14val = localStorage.getItem("padA14");
    console.log(padA14val);
    const padA14html = `
    <p class="padText">PAD<span>X</span></p>
    <button onclick="copyA14()">${padA14val}</button>
        `;
    $("#padA14").html(padA14html);
    $("#valA14").val(padA14val);

    const valA15 = $("#valA15").val();
    localStorage.setItem("padA15", valA15);
    let padA15val = localStorage.getItem("padA15");
    console.log(padA15val);
    const padA15html = `
    <p class="padText">PAD<span>C</span></p>
    <button onclick="copyA15()">${padA15val}</button>
        `;
    $("#padA15").html(padA15html);
    $("#valA15").val(padA15val);

    const valA16 = $("#valA16").val();
    localStorage.setItem("padA16", valA16);
    let padA16val = localStorage.getItem("padA16");
    console.log(padA16val);
    const padA16html = `
    <p class="padText">PAD<span>V</span></p>
    <button onclick="copyA16()">${padA16val}</button>
        `;
    $("#padA16").html(padA16html);
    $("#valA16").val(padA16val);

    $("#wrapAEdit").addClass("d_none");
    $("#wrapAEdit").removeClass("wrap");
    $("#edit").removeClass("d_none");
    $("#save").addClass("d_none");
    swal({
        title: "保存しました！",
        text: "",
        icon: "success",
        timer: 2500,
    });
}

// 読込
let padA1val = localStorage.getItem("padA1");
const padA1html = `
<p class="padText">PAD<span>1</span></p>
<button onclick="copyA1()">${padA1val}</button>
`;
if (padA1val === null) {
    $("#padA1").html("<p class='padText'>PAD<span>1</span></p><button></button>");
} else {
    $("#padA1").html(padA1html);
}
$("#valA1").val(padA1val);

let padA2val = localStorage.getItem("padA2");
const padA2html = `
<p class="padText">PAD<span>2</span></p>
<button onclick="copyA2()">${padA2val}</button>
`;
if (padA2val === null) {
    $("#padA2").html("<p class='padText'>PAD<span>2</span></p><button></button>");
} else {
    $("#padA2").html(padA2html);
}
$("#valA2").val(padA2val);

let padA3val = localStorage.getItem("padA3");
const padA3html = `
<p class="padText">PAD<span>3</span></p>
<button onclick="copyA3()">${padA3val}</button>
`;
if (padA3val === null) {
    $("#padA3").html("<p class='padText'>PAD<span>3</span></p><button></button>");
} else {
    $("#padA3").html(padA3html);
}
$("#valA 3").val(padA3val);

let padA4val = localStorage.getItem("padA4");
const padA4html = `
<p class="padText">PAD<span>4</span></p>
<button onclick="copyA4()">${padA4val}</button>
`;
if (padA4val === null) {
    $("#padA4").html("<p class='padText'>PAD<span>4</span></p><button></button>");
} else {
    $("#padA4").html(padA4html);
}
$("#valA4").val(padA4val);

let padA5val = localStorage.getItem("padA5");
const padA5html = `
<p class="padText">PAD<span>Q</span></p>
<button onclick="copyA5()">${padA5val}</button>
`;
if (padA5val === null) {
    $("#padA5").html("<p class='padText'>PAD<span>Q</span></p><button></button>");
} else {
    $("#padA5").html(padA5html);
}
$("#valA5").val(padA5val);

let padA6val = localStorage.getItem("padA6");
const padA6html = `
<p class="padText">PAD<span>W</span></p>
<button onclick="copyA6()">${padA6val}</button>
`;
if (padA6val === null) {
    $("#padA6").html("<p class='padText'>PAD<span>W</span></p><button></button>");
} else {
    $("#padA6").html(padA6html);
}
$("#valA6").val(padA6val);

let padA7val = localStorage.getItem("padA7");
const padA7html = `
<p class="padText">PAD<span>E</span></p>
<button onclick="copyA7()">${padA7val}</button>
`;
if (padA7val === null) {
    $("#padA7").html("<p class='padText'>PAD<span>E</span></p><button></button>");
} else {
    $("#padA7").html(padA7html);
}
$("#valA7").val(padA7val);

let padA8val = localStorage.getItem("padA8");
const padA8html = `
<p class="padText">PAD<span>R</span></p>
<button onclick="copyA8()">${padA8val}</button>
`;
if (padA8val === null) {
    $("#padA8").html("<p class='padText'>PAD<span>R</span></p><button></button>");
} else {
    $("#padA8").html(padA8html);
}
$("#valA8").val(padA8val);

let padA9val = localStorage.getItem("padA9");
const padA9html = `
<p class="padText">PAD<span>A</span></p>
<button onclick="copyA9()">${padA9val}</button>
`;
if (padA9val === null) {
    $("#padA9").html("<p class='padText'>PAD<span>A</span></p><button></button>");
} else {
    $("#padA9").html(padA9html);
}
$("#valA9").val(padA9val);

let padA10val = localStorage.getItem("padA10");
const padA10html = `
<p class="padText">PAD<span>S</span></p>
<button onclick="copyA10()">${padA10val}</button>
`;
if (padA10val === null) {
    $("#padA10").html("<p class='padText'>PAD<span>S</span></p><button></button>");
} else {
    $("#padA10").html(padA10html);
}
$("#valA10").val(padA10val);

let padA11val = localStorage.getItem("padA11");
const padA11html = `
<p class="padText">PAD<span>D</span></p>
<button onclick="copyA11()">${padA11val}</button>
`;
if (padA11val === null) {
    $("#padA11").html("<p class='padText'>PAD<span>D</span></p><button></button>");
} else {
    $("#padA11").html(padA11html);
}
$("#valA11").val(padA11val);

let padA12val = localStorage.getItem("padA12");
const padA12html = `
<p class="padText">PAD<span>F</span></p>
<button onclick="copyA12()">${padA12val}</button>
`;
if (padA12val === null) {
    $("#padA12").html("<p class='padText'>PAD<span>F</span></p><button></button>");
} else {
    $("#padA12").html(padA12html);
}
$("#valA12").val(padA12val);

let padA13val = localStorage.getItem("padA13");
const padA13html = `
<p class="padText">PAD<span>Z</span></p>
<button onclick="copyA13()">${padA13val}</button>
`;
if (padA13val === null) {
    $("#padA13").html("<p class='padText'>PAD<span>Z</span></p><button></button>");
} else {
    $("#padA13").html(padA13html);
}
$("#valA13").val(padA13val);

let padA14val = localStorage.getItem("padA14");
const padA14html = `
<p class="padText">PAD<span>X</span></p>
<button onclick="copyA14()">${padA14val}</button>
`;
if (padA14val === null) {
    $("#padA14").html("<p class='padText'>PAD<span>X</span></p><button></button>");
} else {
    $("#padA14").html(padA14html);
}
$("#valA14").val(padA14val);

let padA15val = localStorage.getItem("padA15");
const padA15html = `
<p class="padText">PAD<span>C</span></p>
<button onclick="copyA15()">${padA15val}</button>
`;
if (padA15val === null) {
    $("#padA15").html("<p class='padText'>PAD<span>C</span></p><button></button>");
} else {
    $("#padA15").html(padA15html);
}
$("#valA15").val(padA15val);

let padA16val = localStorage.getItem("padA16");
const padA16html = `
<p class="padText">PAD<span>V</span></p>
<button onclick="copyA16()">${padA16val}</button>
`;
if (padA16val === null) {
    $("#padA16").html("<p class='padText'>PAD<span>V</span></p><button></button>");
} else {
    $("#padA16").html(padA16html);
}
$("#valA16").val(padA16val);

function copyA1() {
    /* テキスト内容を取得 */
    let copyTextA1 = document.getElementById("valA1");
    /* コピーする内容を選択 /
    copyText.select();
  copyText.setSelectionRange(0, 99999); / *テキスト要素の全ての内容を選択範囲に含めること */

    /* テキスト領域にコピーした内容を貼り付け */
    navigator.clipboard.writeText(copyTextA1.value);

    /* コピーされた内容をポップアップで表示 */
    swal({
        title: "コピーしました！",
        text: copyTextA1.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA2() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    swal({
        title: "コピーしました！",
        text: copyTextA2.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA3() {
    let copyTextA3 = document.getElementById("valA3");
    navigator.clipboard.writeText(copyTextA3.value);
    swal({
        title: "コピーしました！",
        text: copyTextA3.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA4() {
    let copyTextA4 = document.getElementById("valA4");
    navigator.clipboard.writeText(copyTextA4.value);
    swal({
        title: "コピーしました！",
        text: copyTextA4.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA5() {
    let copyTextA5 = document.getElementById("valA5");
    navigator.clipboard.writeText(copyTextA5.value);
    swal({
        title: "コピーしました！",
        text: copyTextA5.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA6() {
    let copyTextA6 = document.getElementById("valA6");
    navigator.clipboard.writeText(copyTextA6.value);
    swal({
        title: "コピーしました！",
        text: copyTextA6.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA7() {
    let copyTextA7 = document.getElementById("valA7");
    navigator.clipboard.writeText(copyTextA7.value);
    swal({
        title: "コピーしました！",
        text: copyTextA7.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA8() {
    let copyTextA8 = document.getElementById("valA8");
    navigator.clipboard.writeText(copyTextA8.value);
    swal({
        title: "コピーしました！",
        text: copyTextA8.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA9() {
    let copyTextA9 = document.getElementById("valA9");
    navigator.clipboard.writeText(copyTextA9.value);
    swal({
        title: "コピーしました！",
        text: copyTextA9.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA10() {
    let copyTextA10 = document.getElementById("valA10");
    navigator.clipboard.writeText(copyTextA10.value);
    swal({
        title: "コピーしました！",
        text: copyTextA10.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA11() {
    let copyTextA11 = document.getElementById("valA11");
    navigator.clipboard.writeText(copyTextA11.value);
    swal({
        title: "コピーしました！",
        text: copyTextA11.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA12() {
    let copyTextA12 = document.getElementById("valA12");
    navigator.clipboard.writeText(copyTextA12.value);
    swal({
        title: "コピーしました！",
        text: copyTextA12.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA13() {
    let copyTextA13 = document.getElementById("valA13");
    navigator.clipboard.writeText(copyTextA13.value);
    swal({
        title: "コピーしました！",
        text: copyTextA13.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA14() {
    let copyTextA14 = document.getElementById("valA14");
    navigator.clipboard.writeText(copyTextA14.value);
    swal({
        title: "コピーしました！",
        text: copyTextA14.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA15() {
    let copyTextA15 = document.getElementById("valA15");
    navigator.clipboard.writeText(copyTextA15.value);
    swal({
        title: "コピーしました！",
        text: copyTextA15.value,
        icon: "success",
        timer: 2500,
    });
}

function copyA16() {
    let copyTextA16 = document.getElementById("valA16");
    navigator.clipboard.writeText(copyTextA16.value);
    swal({
        title: "コピーしました！",
        text: copyTextA16.value,
        icon: "success",
        timer: 2500,
    });
}


$("body").on("keydown", function(e) { 
    let chenge = $("#edit").attr("class");
    if (chenge !== "d_none") {
        if(e.key === "1") {
            let copyTextA1 = document.getElementById("valA1");
            navigator.clipboard.writeText(copyTextA1.value);
            swal({
                title: "コピーしました！",
                text: copyTextA1.value,
                icon: "success",
                timer: 2500,
            });
        } else if(e.key === "2") {
            let copyTextA2 = document.getElementById("valA2");
            navigator.clipboard.writeText(copyTextA2.value);
            swal({
                title: "コピーしました！",
                text: copyTextA2.value,
                icon: "success",
                timer: 2500,
            });
        } else if(e.key === "3") {
            let copyTextA3 = document.getElementById("valA3");
            navigator.clipboard.writeText(copyTextA3.value);
            swal({
                title: "コピーしました！",
                text: copyTextA3.value,
                icon: "success",
                timer: 2500,
            });
        } else if(e.key === "4") {
            let copyTextA4 = document.getElementById("valA4");
            navigator.clipboard.writeText(copyTextA4.value);
            swal({
                title: "コピーしました！",
                text: copyTextA4.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "q" || e.key === "Q") {
            let copyTextA5 = document.getElementById("valA5");
            navigator.clipboard.writeText(copyTextA5.value);
            swal({
                title: "コピーしました！",
                text: copyTextA5.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "w" || e.key === "W") {
            let copyTextA6 = document.getElementById("valA6");
            navigator.clipboard.writeText(copyTextA6.value);
            swal({
                title: "コピーしました！",
                text: copyTextA6.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "e" || e.key === "E") {
            let copyTextA7 = document.getElementById("valA7");
            navigator.clipboard.writeText(copyTextA7.value);
            swal({
                title: "コピーしました！",
                text: copyTextA7.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "r" || e.key === "R") {
            let copyTextA8 = document.getElementById("valA8");
            navigator.clipboard.writeText(copyTextA8.value);
            swal({
                title: "コピーしました！",
                text: copyTextA8.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "a" || e.key === "A") {
            let copyTextA9 = document.getElementById("valA9");
            navigator.clipboard.writeText(copyTextA9.value);
            swal({
                title: "コピーしました！",
                text: copyTextA9.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "s" || e.key === "S") {
            let copyTextA10 = document.getElementById("valA10");
            navigator.clipboard.writeText(copyTextA10.value);
            swal({
                title: "コピーしました！",
                text: copyTextA10.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "d" || e.key === "D") {
            let copyTextA11 = document.getElementById("valA11");
            navigator.clipboard.writeText(copyTextA11.value);
            swal({
                title: "コピーしました！",
                text: copyTextA11.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "f" || e.key === "F") {
            let copyTextA12 = document.getElementById("valA12");
            navigator.clipboard.writeText(copyTextA12.value);
            swal({
                title: "コピーしました！",
                text: copyTextA12.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "z" || e.key === "Z") {
            let copyTextA13 = document.getElementById("valA13");
            navigator.clipboard.writeText(copyTextA13.value);
            swal({
                title: "コピーしました！",
                text: copyTextA13.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "x" || e.key === "X") {
            let copyTextA14 = document.getElementById("valA14");
            navigator.clipboard.writeText(copyTextA14.value);
            swal({
                title: "コピーしました！",
                text: copyTextA14.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "c" || e.key === "C") {
            let copyTextA15 = document.getElementById("valA15");
            navigator.clipboard.writeText(copyTextA15.value);
            swal({
                title: "コピーしました！",
                text: copyTextA15.value,
                icon: "success",
                timer: 2500,
            });
        }
        else if(e.key === "v" || e.key === "V") {
            let copyTextA16 = document.getElementById("valA16");
            navigator.clipboard.writeText(copyTextA16.value);
            swal({
                title: "コピーしました！",
                text: copyTextA16.value,
                icon: "success",
                timer: 2500,
            });
        }
    }
})