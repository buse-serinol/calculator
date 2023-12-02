let _buttons = document.getElementsByTagName("button"),
 uzunluk = _buttons.length,
 i = 0,

 _result = document.getElementById("result");



 for(i = 0; i < uzunluk; i++){
_buttons[i].onclick = hesapla;
 }

 function hesapla(){
    let deger = this.innerHTML;
    
    if( deger == "="){
        try{
            _result.value = eval( _result.value)
        } catch (e){
            _result.value = "0";
        }
        return;
    }

    _result.value += deger;
 }