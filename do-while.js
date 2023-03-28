/* 
do {
    code to execute
}while (conditon);


lowkey uncontrolled
*/

document.write ("<br> Loop 2 (do-while): ");

var x = 2;


do {
    if (x%2 == 0){
        document.write (x + ", ");
    }
    x++; 
} while (x<=50);
