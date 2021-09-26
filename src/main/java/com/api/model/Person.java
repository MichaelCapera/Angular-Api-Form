package com.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.GenerationType;

@Entity
@Table (name = "person")
public class Person {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
    private String name;
    private String type;
    
	@ManyToOne
	@JoinColumn(name = "id_boss")
	private Boss boss;
	
	/**Empty constructor by default*/
	
	public Person() {
		
	}
	
	/**Constructor method*/

	public Person(String name, String type, Boss boss) {
		super();
		this.name = name;
		this.type = type;
		this.boss = boss;
	}
	
	/**Getters and setters*/

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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Boss getBoss() {
		return boss;
	}

	public void setBoss(Boss boss) {
		this.boss = boss;
	}
	
  
}
