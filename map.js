//Array.prototype.map;
(function(A){
 var P=A.prototype;
 if(!P.map){
	P.map=function(a,b){
		var f=a,e=b,m=this,l=m.length,o=Array(l),i=0;
		while(i<l){o[i]=f.call(e,m[i],i,m);i++;};
		return o;
	};
 };
})(Array);
