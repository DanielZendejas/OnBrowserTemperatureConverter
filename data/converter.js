self.on('context', function (){ return main() });

var formats = 
	[ "°F" // Fahrenheit with symbol
	, "degrees F" // Fahrenheit with word
	, "°C" // Celsius with symbol
	, "degrees C"]; // Celsius with word

function main(){
	window.alert("Beginning.");
	var textBeforeConvertion = window.getSelection().toString();
	var stringToDisplay = "";
	for (var formatIndex = 0; formatIndex < formats.length; formatIndex++) {
		if(textContainsFormatFromArray(textBeforeConvertion,formatIndex)){
			var positionOfFormatInText = textBeforeConvertion.indexOf(formats[formatIndex]);
			var temperatureBeforeConvert = "";
			var j = 2;
			while(isDigit(textBeforeConvertion[positionOfFormatInText-j])){
				var digit = textBeforeConvertion[positionOfFormatInText-j];
				temperatureBeforeConvert = digit + temperatureBeforeConvert;
				j++;
			}
			var temperatureAfterConvert = convertTemperature(temperatureBeforeConvert,formatIndex);
			stringToDisplay = stringToDisplay+"["+temperatureBeforeConvert+" "+formats[formatIndex]+" : "+temperatureAfterConvert+"], ";
		}
	}
	window.alert(stringToDisplay);
	return stringToDisplay;
}

function convertTemperature(temperature,formatIndex){
	window.alert("convert: "+temperature+" : "+formats[formatIndex]);
	switch (formatIndex){
	case 0: // Fahrenheit Symbol -> Celsius Symbol
		return Math.trunc(Fahrenheit2Celsius(temperature))+" °C";
		break;
	case 1: // Fahrenheit Word -> Celsius Word
		return Math.trunc(Fahrenheit2Celsius(temperature))+" degrees C";
		break;
	case 2: // Celsius Symbol -> Fahrenheit Symbol
		return Math.trunc(Celsius2Fahrenheit(temperature))+" °F";
		break; 
	case 3: // Celsius Word -> Fahrenheit Word
		return Math.trunc(Celsius2Fahrenheit(temperature))+" degrees F";
		break;
	default:
		return "Convertion error."
		break;
	}
}

function Fahrenheit2Celsius(Fahrenheit){
	return (Fahrenheit-32)*(5/9);
}

function Celsius2Fahrenheit(Celsius){
	return Celsius*(9/5)+32;
}

function isDigit(character){
	if(character >= '0' && character <= '9'){
		return true;
	}
	return false;
}

function textContainsFormatFromArray(text,formatIndex){
	return (text.indexOf(formats[formatIndex]) !== -1);
}

// http://allrecipes.com/Recipe/Banana-Prune-Muffins/Detail.aspx?prop24=hn_slide1_Banana-Prune-Muffins&evt19=18