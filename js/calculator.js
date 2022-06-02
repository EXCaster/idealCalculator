let initValue = document.getElementById("initValue");
let keyItem = document.getElementsByClassName("key");
for(let i = 0; i < keyItem.length; i++){
    keyItem[i].onclick = function () {
        if (keyItem[i].innerHTML === "."){
            initValue.innerHTML += ".";
        }

        if (keyItem[i].innerHTML === "+"){
            initValue.innerHTML += "+";
        }

        if (keyItem[i].innerHTML === "-"){
            initValue.innerHTML += "-";
        }

        if (keyItem[i].innerHTML === "*"){
            initValue.innerHTML += "*";
        }

        if (keyItem[i].innerHTML === "/"){
            initValue.innerHTML += "/";
        }

        // 使用eval()计算JavaScript数字字符串
        if (this.innerHTML === "="){
            initValue.innerHTML = eval(initValue.innerHTML);
        }

        //当点击数字键时，默认值为0则覆盖，否则进行字符连接
        if (!isNaN(this.innerHTML)){
            if (initValue.innerHTML === "0"){
                initValue.innerHTML = this.innerHTML;
            }else {
                initValue.innerHTML += this.innerHTML;
            }
        }

        if (keyItem[i].innerHTML === "DEL") {
            if (initValue.innerHTML !== "0"){ // 当默认值不为0时则删除字符串最后一位字符
                initValue.innerHTML = initValue.innerHTML.substring(0, initValue.innerHTML.length-1);
            }
            if (initValue.innerHTML.length === 0){ // 当默认值字符串长度为0时则显示"0"而不是空
                initValue.innerHTML = "0";

            }
        }

        if (keyItem[i].innerHTML === "CE" || keyItem[i].innerHTML === "C"){
            initValue.innerHTML = "0";
        }

        // 根据输入字符长度进行缩放处理
        if (initValue.innerHTML.length > 11){
            initValue.style.fontSize = 30 + "px";
        }

        if (initValue.innerHTML.length > 18){
            initValue.style.fontSize = 20 + "px";
        }
    }
}
