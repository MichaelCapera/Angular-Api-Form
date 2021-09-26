package com.api.model;

import javax.persistence.Entity;
//import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.GenerationType;

@Entity
@Table (name = "boss")

public class Boss {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	
	/**Empty constructor by default*/
	
	public Boss() {
	
	}
	
	
	/**Constructor*/
	
	public Boss(String name) {
		super();
		this.name = name;
	}
	
	/**Getters and Setters*/
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
   
}
