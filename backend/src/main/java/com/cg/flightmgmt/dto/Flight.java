package com.cg.flightmgmt.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("flight")
@Scope(scopeName="prototype")
@Entity
@Table(name="Flight_table")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Flight {
	@Id
	@Column(name="flightnumber")
	@NotNull(message="Flight Number should not be null")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int flightNumber;
	@NotEmpty(message="Carrier Name should not be empty")
	@Column(name="carrierName")
	private String carrierName;
	@NotEmpty(message="Flight Model should not be empty")
	@Column(name="flightModel")
	private String flightModel;
	@NotNull(message="Seat Capacity should not be null")
	@Column(name="seatCapacity")
	private int seatCapacity;
	public Flight() {
		super();
	}
	public Flight(int flightNumber, String carrierName, String flightModel, int seatCapacity) {
		super();
		this.flightNumber = flightNumber;
		this.carrierName = carrierName;
		this.flightModel = flightModel;
		this.seatCapacity = seatCapacity;
	}
	public int getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getCarrierName() {
		return carrierName;
	}
	public void setCarrierName(String carrierName) {
		this.carrierName = carrierName;
	}
	public String getFlightModel() {
		return flightModel;
	}
	public void setFlightModel(String flightModel) {
		this.flightModel = flightModel;
	}
	public int getSeatCapacity() {
		return seatCapacity;
	}
	public void setSeatCapacity(int seatCapacity) {
		this.seatCapacity = seatCapacity;
	}
}
