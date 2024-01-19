package com.fintech.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fintech.model.Customer;
import com.fintech.repo.CustomerRepo;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    // method for find customer by company id
    public List<Customer> getCustomersByCompanyId(Long companyId) {
        return customerRepo.findByCompany_Id(companyId);
    }
}
