package com.cg.flightmgmt.dto;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Scheduled_Flight_table")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
public class ScheduledFlight {
	@Id
	@Column(name="scheduleFlightId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int scheduleFlightId;
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name = "flightNumber")
	private Flight flight;
	@Column(name = "availableSeats")
	private int availableSeats;
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name = "scheduleId")
	private Schedule schedule;
	
	public ScheduledFlight() {
		super();
	}
	public ScheduledFlight(int scheduleFlightId, Flight flight, int availableSeats, Schedule schedule) {
		super();
		this.scheduleFlightId = scheduleFlightId;
		this.flight = flight;
		this.availableSeats = availableSeats;
		this.schedule = schedule;
	}
	
	public int getScheduleFlightId() {
		return scheduleFlightId;
	}
	public void setScheduleFlightId(int scheduleFlightId) {
		this.scheduleFlightId = scheduleFlightId;
	}
	public Flight getFlight() {
		return flight;
	}
	public void setFlight(Flight flight) {
		this.flight = flight;
	}
	public int getAvailableSeats() {
		return availableSeats;
	}
	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}
	public Schedule getSchedule() {
		return schedule;
	}
	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}
	@Override
	public String toString() {
		return "ScheduledFlight [scheduleFlightId=" + scheduleFlightId + ", flight=" + flight + ", availableSeats="
				+ availableSeats + ", schedule=" + schedule + "]";
	}
}
