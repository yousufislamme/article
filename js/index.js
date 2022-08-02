
function resize(type) {
   let ids = ["#news"];

   ids.forEach(id => {
      let el = document.querySelector(id);

      let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");

      fontSize = parseFloat(fontSize);

      if (type === "increase") {
         el.style.fontSize = (fontSize + 5) + "px";
      } else {
         el.style.fontSize = (fontSize - 5) + "px";

      }
   });

}