package com.cg.flightmgmt.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Booking_table")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Booking {
	@Id
	@Column(name="bookingId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int bookingId;
	@ManyToOne
	@JoinColumn(name ="userId")
	@JsonIgnore
	private User userId;
	@NotNull(message="Booking Date must not be null")
	@Column(name="bookingDate")
	private LocalDate bookingDate;
	@OneToMany(mappedBy="booking", cascade=CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval=true)
	private List<Passenger> passengerList = new ArrayList<>();
	@NotNull(message="Ticket cost must not be null")
	@Column(name="ticketCost")
	private double ticketCost;
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "scheduleFlightId")
	private ScheduledFlight flight;
	private int noOfPassangers;
	
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public User getUserId() {
		return userId;
	}
	public void setUserId(User userId) {
		this.userId = userId;
	}
	public LocalDate getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}
	public List<Passenger> getPassengerList() {
		return passengerList;
	}
	public void setPassengerList(List<Passenger> passengerList) {
		this.passengerList = passengerList;
	}
	public double getTicketCost() {
		return ticketCost;
	}
	public void setTicketCost(double ticketCost) {
		this.ticketCost = ticketCost;
	}
	public ScheduledFlight getFlight() {
		return flight;
	}
	public void setFlight(ScheduledFlight flight) {
		this.flight = flight;
	}
	public int getNoOfPassangers() {
		return noOfPassangers;
	}
	public void setNoOfPassangers(int noOfPassangers) {
		this.noOfPassangers = noOfPassangers;
	}
	public void addPassenger(Passenger passenger) {
		passenger.setBooking(this);
		this.getPassengerList().add(passenger);
	}
	public void deletePassenger(Passenger passenger) {
		passenger.setBooking(this);
		int pnrNumber = passenger.getPnrNumber();
		for(int i=0;i<this.getPassengerList().size();i++) {
			if(this.getPassengerList().get(i).getPnrNumber()==pnrNumber) {
				this.getPassengerList().remove(i);
			}
		}	
	}
}
