package com.api.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.service.PersonService;
import com.api.model.Person;


@RestController
@RequestMapping ("/person/")

public class PersonRest {
	
	@Autowired
	private PersonService PersonService;
	
	@GetMapping
	private ResponseEntity<List<Person>> getAllTypes (){
		
		return ResponseEntity.ok(PersonService.findAll());
		
	}

}
