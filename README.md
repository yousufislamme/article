# HTML code
``````
<div class="container">

      <div id="mian" class="wrapper">
         <h2>Article</h2>
         <hr>
         <p id="news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima officiis tenetur
            ratione
            reiciendis, tempora facere suscipit ex necessitatibus explicabo fuga, quisquam eaque earum minus delectus
            hic repellat consequatur ut velit autem quis deserunt accusantium in nihil. Magnam, hic mollitia.</p>

         <div class="buttons">
            <button onclick="resize('increase')" class="btn" id="plus">A+</button>
            <button onclick="resize('decrease')" class="btn" id="minas">a-</button>
         </div>
      </div>

   </div>
`````

#CSS code

````
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

::-moz-selection {
   background: #f3a683;

}

::selection {
   background: #f3a683;
}

.container {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
}

.wrapper {
   max-width: 31rem;
   height: 20rem;
   background: #3c40c6;
   padding: 20px 35px 15px;
   border-radius: 10px;
   border-bottom: 6px solid #2e32a8;
   transition: 0.5s ease;
   overflow: auto;
   position: relative;
}

.wrapper:hover {
   transform: scale(1.05);
}

hr {
   color: #fff;
   margin-bottom: 10px;
}

.wrapper .buttons {
   background: orange;
   display: inline;
   padding: 10px 15px;
   position: absolute;
   top: 0;
   border-radius: 0 0 10px 10px;
   border-bottom: 5px solid rgb(229, 149, 1);
   transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

}

.wrapper .buttons:hover {
   border-bottom: 5px solid rgb(181, 123, 14);

}

.wrapper .btn {
   width: 30px;
   height: 30px;
   display: inline-block;
   border-radius: 50%;
   border: none;
   cursor: pointer;
}

.wrapper h2 {
   font-size: 3rem;
   color: #fff;
   text-align: center;
   padding-bottom: 1.5rem;
}

.wrapper p {
   font-size: 20px;
   color: #ecf0f1;
   line-height: 1.5;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   -webkit-user-select: none;
   user-select: none;
}

````

#JS code

````

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
````
