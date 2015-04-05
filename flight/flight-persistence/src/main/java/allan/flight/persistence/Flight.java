package allan.flight.persistence;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Flight
 *
 */
@Entity
public class Flight implements Serializable {

	private static final long serialVersionUID = 1L;

	public Flight() {
		super();
	}

	@Id
	@GeneratedValue
	private Long id;
	
	private String departure;
	
	private String destination;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDeparture() {
		return departure;
	}

	public void setDeparture(String departure) {
		this.departure = departure;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	

}
