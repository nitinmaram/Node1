module.exports=function (x) {
	if(isNaN(x))
		return NaN;
	else
		return Math.round((x*9/5)+32);
		
}
