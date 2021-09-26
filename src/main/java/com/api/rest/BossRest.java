package com.api.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.service.BossService;
import com.api.model.Boss;



@RestController
@RequestMapping ("/boss/")

public class BossRest {
	
	@Autowired
	private BossService bossService;
	
	@GetMapping
	private ResponseEntity<List<Boss>> getAllBoss (){
		
		return ResponseEntity.ok(bossService.findAll());
		
	}

}
