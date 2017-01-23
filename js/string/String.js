module.exports=function (x) {
	if(typeof x === 'string'){
		if (x.length>3) {
		if(x.substring(x.length-2,x.length)==x.substring(0,2))
			return true;
		return false;
						}
		return "too small";
	}
		
	else
		return null;
		
}
