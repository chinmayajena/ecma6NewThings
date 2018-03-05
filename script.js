window.onload = function () {

    // VAR vs LET
    var items = document.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        items[i].onclick = (function (i) {
            return function () {
                console.log(i);
            };
        })(i);
    }

    /*   for (let x = 0; x < items.length; x++) {
          items[x].onclick =
              function () {
                  console.log(i);
              };

      }*/

    // Spread Operator
    var a = ["cat", "dog", "cow"];
    var b = [...a, "buffalo", "Monkey", "Horse"];

    console.log(b);
    console.log(...b);

    // Template String
    function logNinja(name, age) {
        console.log(`My Name is ${name} 
and age is ${age}`);
    }

    logNinja("I", 23);


    //Object Literal Enhancement

    var objName = "Crystal";
    var objBelt = "Couper";

    var objLiteral = {
        objName,
        objBelt,
        chop(x) {
            console.log(`You chopped for ${x} times`);
        }
    };

    console.log(objLiteral.chop(9));

    // String Methods
    var str = "gravvy\t";
    console.log(str.repeat(3));
    console.log(str.startsWith("gr"));
    console.log(str.endsWith("vy\t"));

    // Arrow Function
    var chinu = (name) => console.log(`I AM ${name}`);
    chinu("chinu");

    var ninja = {
        name: "Chinuy",
        chop(x) {
            console.log(this.name);
            var _this = this;
            window.setInterval(function () {
                if (x > 0) {
                    //this refers to current function object
                    console.log(_this.name + " Chopped the enemy!");
                    x--;
                }
            }, 1000);
        },

        chopArrow(x) {
            window.setInterval(() => {
                if (x > 0) {
                    //this refers to ninja
                    console.log(this.name + " Chopped the enemy!");
                    x--;
                }
            }, 1000);
        }
    };
    // ninja.chop(6);
    ninja.chopArrow(6);


    // Generators

}
