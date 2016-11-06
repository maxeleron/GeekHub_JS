//Сделать первый символ заглавным
function ucFirst(str) {
  if (str === ""){
  	return str;
  } 

  return str[0].toUpperCase() + str.slice(1);
}

//Проверьте спам
function checkSpam(str) {
  var str = str.toLowerCase();

	if(str.indexOf('viagra')>-1 || str.indexOf('xxx')>-1)
	{
		return true;
	};

	return false;
}

//Усечение строки
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength);
  }

  return str;
}

//Выделите число
function parseNumber(str)
{
	return parseFloat(str.slice(1));
}