function mynationalcode(nationalcode){

    var result={flag:false,message:''}
  
  if(isNaN(nationalcode)){
    result.message="please enter a number!"
  }
  if(nationalcode==""){
    result.message="please write a code"
  
  }
  if(nationalcode.length != 10){
    result.message="code meli vared shode 10 ragham bashad!!!!"
  }
  else{
    var sum=0;
    for (let i = 0; i < nationalcode.length-1; i++) {
        sum += parseInt(nationalcode[i]) * (nationalcode.length - i);
    }
    var baghimande = sum%11;
    if(baghimande<2 && nationalcode[9]==baghimande){
      result.flag=true;
    }
    else if(baghimande>=2 && (11-baghimande == nationalcode[9])){
        result.flag=true;
    }
   else{
        result.message="code melli sahih nist"
       }
  
  }
  return result;
  }
  
  function ToRial(str) {
    str = str.toString().replace(/\,/g, '');
    var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
    while (objRegex.test(str)) {
        str = str.replace(objRegex, '$1,$2');
    }
    return str;
}
  function toEnglishDigits(str) {
  
    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function(t) {
        return t.charCodeAt(0) - e;
    });
  
    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function(t) {
        return t.charCodeAt(0) - e;
    });
    return str;
  }
  
  function shorttext(mystring,length){
    if(mystring.length <= length)
    return mystring;
    mystring=mystring.substring(0,length)+"...";
    return mystring;
  }

  
  export {shorttext,toEnglishDigits,ToRial}