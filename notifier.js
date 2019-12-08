function sendMessage(number,message){
	var url="https://platform.clickatell.com/messages/http/send?apiKey=EucMIiySR7Kx5zVGDRq1HQ==";
	var CompleteCallUrl= url+ "&to='" + number + "'&content='" + message + "'";
	var xhr = new XMLHttpRequest();
	xhr.open("GET",CompleteCallUrl, true);
	xhr.onreadystatechange = function(){
	    if (xhr.readyState == 4 &&
	     xhr.status == 200){
	        return "sent";
	    }else{
	    	return "error:"+xhr.status;
	    }
	};
	xhr.send();
} 
function notifyMe(number,message) {
	var tableToSave=sendMessage(number,message);
	if(tableToSave=="sent"){
		saveToDB("sentMessages",message,number)
	}else{
		saveToDB(tableToSave,message,number)
	}
}
function saveToDB(table,message,number) {
	
}