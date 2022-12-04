package com.cg.flightmgmt.exception;

import java.time.LocalDateTime;

public class ErrorInfo {
	LocalDateTime timeStamp;
	String message;
	String url;
	String validationMessage;
	
	public ErrorInfo() {
		super();
	}
	
	public ErrorInfo(LocalDateTime timeStamp, String message, String url) {
		super();
		this.timeStamp = timeStamp;
		this.message = message;
		this.url = url;
	}

	public ErrorInfo(LocalDateTime timeStamp, String message, String url, String validationMessage) {
		super();
		this.timeStamp = timeStamp;
		this.message = message;
		this.url = url;
		this.validationMessage = validationMessage;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getValidationMessage() {
		return validationMessage;
	}
	public void setValidationMessage(String validationMessage) {
		this.validationMessage = validationMessage;
	}
}
