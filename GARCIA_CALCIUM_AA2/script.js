var even=0;
var odd=1;


while(odd<=51){
	document.write(odd+" ");
	odd+=2;
}

document.write("<br>");

do{
	document.write(even+" ");
	even+=2;
}while(even<=50)

document.write("<br>");

for(var exp=1;exp<=4096;exp*=2){
	document.write(exp+" ");
}