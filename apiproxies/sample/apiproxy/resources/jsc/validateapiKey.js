var faultName = context.getVariable("fault.name");
if (faultName == "InvalidApiKey"){
		errorMessage = "Unauthorized";
		errorDetail = "Privacy verification failed - Invalid Api Key";
		errorCode = "401";
	}else if (faultName == "FailedToResolveAPIKey"){
	    errorMessage = "Unauthorized";
		errorDetail = "Privacy verification failed - Missing Api Key";
		errorCode = "401";
	}
	else{
	     errorMessage = "Server Error";
		errorDetail = "Internal Server Error";
		errorCode = "500";
	}
	    

context.setVariable("errorMessage",errorMessage);
context.setVariable("errorDetail",errorDetail);
context.setVariable("errorCode",errorCode);
 