package com.fintech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fintech.model.Company;
import com.fintech.service.CompanyService;

@RestController
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    // Add company details
    @PostMapping("/addcomdetails")
    public ResponseEntity<Company> addCompanyDetails(@RequestBody Company company) {
        Company saveCompanyDetails = companyService.saveCompanyDetails(company);
        return new ResponseEntity<>(saveCompanyDetails,HttpStatus.CREATED);
    }
}
