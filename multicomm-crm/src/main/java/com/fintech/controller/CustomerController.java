package com.fintech.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fintech.model.Company;
import com.fintech.model.Customer;
import com.fintech.service.CompanyService;
import com.fintech.service.CustomerService;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @Autowired
    private CompanyService companyService;

    // get customers
    @GetMapping("/byComp/{companyId}")
    public List<Customer> getCustomersByCompany(@PathVariable Long companyId) {
        return customerService.getCustomersByCompanyId(companyId);
    }

    // customer fetch company details by company id
    @GetMapping("/compDetails/{companyId}")
    public ResponseEntity<Company> getCompanyDetailsById(@PathVariable Long companyId) {
        Optional<Company> company = companyService.getCompanyById(companyId);
        return company.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
