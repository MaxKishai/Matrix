let diodeColor = 'orange';
let clearColor = 'white';
let errorColor = 'red';

let click = 0;



red.onclick = function () {
    dio.style.color = 'red';
    palitra.style.display = 'none';
    let click = 0;

}
green.onclick = function () {
    txt.style.color = 'green';
    palitra.style.display = 'none';
    let click = 0;
}
blue.onclick = function () {
    txt.style.color = 'blue';
    palitra.style.display = 'none';
    let click = 0;
}
yellow.onclick = function () {
    txt.style.color = 'yellow';
    palitra.style.display = 'none';
    let click = 0;
}
orange.onclick = function () {
    txt.style.color = 'orange';
    palitra.style.display = 'none';
    let click = 0;
}
pink.onclick = function () {
    txt.style.color = 'pink';
    palitra.style.display = 'none';
    let click = 0;
}

function setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    if (click === 0) {
        palitra.style.display = 'flex';
        click = 1;
    } else if (click === 1) {
        palitra.style.display = 'none';
        click = 0;
    }
}

let c = 0;

setting.onclick = function () {
    if (c == 0) {
        settWindow.style.display = 'block';
        wrap.style.filter = 'blur(5px)';
        c=1;
    }else{
        settWindow.style.display = 'none';
        wrap.style.filter = 'blur()';
        c=0;
    }
}


function clear(){
    document.getElementById('d1_1').style.backgroundColor = clearColor;
    document.getElementById('d1_2').style.backgroundColor = clearColor;
    document.getElementById('d1_3').style.backgroundColor = clearColor;
    document.getElementById('d1_4').style.backgroundColor = clearColor;
    document.getElementById('d1_5').style.backgroundColor = clearColor;
    
    document.getElementById('d2_1').style.backgroundColor = clearColor;
    document.getElementById('d2_2').style.backgroundColor = clearColor;
    document.getElementById('d2_3').style.backgroundColor = clearColor;
    document.getElementById('d2_4').style.backgroundColor = clearColor;
    document.getElementById('d2_5').style.backgroundColor = clearColor;
    
    document.getElementById('d3_1').style.backgroundColor = clearColor;
    document.getElementById('d3_2').style.backgroundColor = clearColor;
    document.getElementById('d3_3').style.backgroundColor = clearColor;
    document.getElementById('d3_4').style.backgroundColor = clearColor;
    document.getElementById('d3_5').style.backgroundColor = clearColor;
    
    document.getElementById('d4_1').style.backgroundColor = clearColor;
    document.getElementById('d4_2').style.backgroundColor = clearColor;
    document.getElementById('d4_3').style.backgroundColor = clearColor;
    document.getElementById('d4_4').style.backgroundColor = clearColor;
    document.getElementById('d4_5').style.backgroundColor = clearColor;
    
    document.getElementById('d5_1').style.backgroundColor = clearColor;
    document.getElementById('d5_2').style.backgroundColor = clearColor;
    document.getElementById('d5_3').style.backgroundColor = clearColor;
    document.getElementById('d5_4').style.backgroundColor = clearColor;
    document.getElementById('d5_5').style.backgroundColor = clearColor;
    
    document.getElementById('d6_1').style.backgroundColor = clearColor;
    document.getElementById('d6_2').style.backgroundColor = clearColor;
    document.getElementById('d6_3').style.backgroundColor = clearColor;
    document.getElementById('d6_4').style.backgroundColor = clearColor;
    document.getElementById('d6_5').style.backgroundColor = clearColor;
    
    document.getElementById('d7_1').style.backgroundColor = clearColor;
    document.getElementById('d7_2').style.backgroundColor = clearColor;
    document.getElementById('d7_3').style.backgroundColor = clearColor;
    document.getElementById('d7_4').style.backgroundColor = clearColor;
    document.getElementById('d7_5').style.backgroundColor = clearColor;
}
clear();

add.onclick = function(){
    let str = inp.value.toLowerCase();
    inp.value = '';
    let i = 0;
    
    let timeId = setInterval(function(){
        if(i<str.length){
            switch(str[i]){
                case 'a':
                    clear();
                    document.getElementById('dio d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('dio d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('dio d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('dio d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('dio d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('dio d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('dio d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('dio d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('dio d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('dio d4_3').style.backgroundColor = diodeColor;
                    break;
                    
                case 'z':
                    clear();
                    document.getElementById('d2_1').style.backgroundColor = diodeColor;
                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    
                    
                    break;
                    
                case 'b':
                    clear();
                    
                    document.getElementById('d1_1').style.backgroundColor = diodeColor;
                    document.getElementById('d1_2').style.backgroundColor = diodeColor;
                    document.getElementById('d1_3').style.backgroundColor = diodeColor;
                    document.getElementById('d1_4').style.backgroundColor = diodeColor;
                    document.getElementById('d2_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_5').style.backgroundColor = diodeColor;
                    document.getElementById('d5_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_1').style.backgroundColor = diodeColor;
                    document.getElementById('d7_1').style.backgroundColor = diodeColor;
                    document.getElementById('d7_2').style.backgroundColor = diodeColor;
                    document.getElementById('d7_3').style.backgroundColor = diodeColor;
                    document.getElementById('d7_4').style.backgroundColor = diodeColor;
                    document.getElementById('d7_5').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    document.getElementById('d5_5').style.backgroundColor = diodeColor;
                    
                    break;
                    
                case '/':
                    clear();
                    
                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_3').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_5').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d5_3').style.backgroundColor = diodeColor;
                    break;
                    
                case 'i':
                    clear();
                    
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d3_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d5_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    document.getElementById('d7_3').style.backgroundColor = diodeColor;
                    break;

                case 'c':
                    clear();

                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_1').style.backgroundColor = diodeColor;
                    document.getElementById('d5_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    break;
               
                case 'd':
                    clear();
                    
                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_5').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_5').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_5').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;   
                    break;

                case 'e':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;   
                    break;

                case 'f':
                    clear();
                    
                    document.getElementById('d2_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    break;

                case 'g':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;   
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;   
                    document.getElementById('d4_1').style.backgroundColor = diodeColor;   
                    document.getElementById('d5_1').style.backgroundColor = diodeColor;   
                    document.getElementById('d5_3').style.backgroundColor = diodeColor;   
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;   
                    document.getElementById('d5_5').style.backgroundColor = diodeColor;
                    document.getElementById('d6_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    document.getElementById('d7_2').style.backgroundColor = diodeColor;
                    document.getElementById('d7_3').style.backgroundColor = diodeColor;
                    document.getElementById('d7_4').style.backgroundColor = diodeColor;
                    document.getElementById('d7_5').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    break;

                case 'h':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    break;

                case 'j':
                    clear();

                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('d7_3').style.backgroundColor = diodeColor;
                    break;
                    
                case 'k':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    break;

                case 'l':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    break;

                case 'm':
                    clear();

                    document.getElementById('d2_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_1').style.backgroundColor = diodeColor;
                    document.getElementById('d5_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_5').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_5').style.backgroundColor = diodeColor;
                    document.getElementById('d5_5').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    break;

                case 'n':
                        clear();
    
                        document.getElementById('d2_1').style.backgroundColor = diodeColor;
                        document.getElementById('d3_1').style.backgroundColor = diodeColor;
                        document.getElementById('d4_1').style.backgroundColor = diodeColor;
                        document.getElementById('d5_1').style.backgroundColor = diodeColor;
                        document.getElementById('d6_1').style.backgroundColor = diodeColor;
                        document.getElementById('d3_2').style.backgroundColor = diodeColor;
                        document.getElementById('d3_5').style.backgroundColor = diodeColor;
                        document.getElementById('d5_4').style.backgroundColor = diodeColor;
                        document.getElementById('d4_3').style.backgroundColor = diodeColor;
                        document.getElementById('d4_5').style.backgroundColor = diodeColor;
                        document.getElementById('d5_5').style.backgroundColor = diodeColor;
                        document.getElementById('d6_5').style.backgroundColor = diodeColor;
                        document.getElementById('d2_5').style.backgroundColor = diodeColor;
                        break;   

                case 'o':
                            clear();
        
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;
                            break;

                case 'p':
                                clear();
            
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            
                            break;

                            case 'q':
                                clear();
            
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;

                            break;

                case 'r':
                    clear();

                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;

                case 's':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    break;

                case 't':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d5_3').style.backgroundColor = diodeColor;
                    break;


                case 'y':
                    clear();

                    document.getElementById('d1_1').style.backgroundColor = diodeColor;
                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d1_5').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_3').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d5_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    break;

                case 'v':
                    clear();

                    document.getElementById('d2_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d5_3').style.backgroundColor = diodeColor;
                    break;

                case 'w':
                    clear();

                    document.getElementById('d2_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_3').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    document.getElementById('d3_5').style.backgroundColor = diodeColor;
                    document.getElementById('d4_5').style.backgroundColor = diodeColor;
                    document.getElementById('d5_5').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    break;

                case 'x':
                    clear();

                    document.getElementById('d2_1').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_5').style.backgroundColor = diodeColor;
                    break;
                case 'u':
                    clear();


                    document.getElementById('d2_1').style.backgroundColor = diodeColor;
                    document.getElementById('d2_5').style.backgroundColor = diodeColor;
                    document.getElementById('d3_1').style.backgroundColor = diodeColor;
                    document.getElementById('d4_1').style.backgroundColor = diodeColor;
                    document.getElementById('d5_1').style.backgroundColor = diodeColor;
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d6_3').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('d3_5').style.backgroundColor = diodeColor;
                    document.getElementById('d4_5').style.backgroundColor = diodeColor;
                    document.getElementById('d5_5').style.backgroundColor = diodeColor;
                    break;


            }


            i++;
        }else{
            clear();
            clear(timeId);
        }
    },1000)
}