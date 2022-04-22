let diodeColor = 'orange';
let clearColor = 'white';
let errorColor = 'red';

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
                    document.getElementById('d6_2').style.backgroundColor = diodeColor;
                    document.getElementById('d5_2').style.backgroundColor = diodeColor;
                    document.getElementById('d4_2').style.backgroundColor = diodeColor;
                    document.getElementById('d3_2').style.backgroundColor = diodeColor;
                    document.getElementById('d2_3').style.backgroundColor = diodeColor;
                    document.getElementById('d3_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_4').style.backgroundColor = diodeColor;
                    document.getElementById('d5_4').style.backgroundColor = diodeColor;
                    document.getElementById('d6_4').style.backgroundColor = diodeColor;
                    document.getElementById('d4_3').style.backgroundColor = diodeColor;
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