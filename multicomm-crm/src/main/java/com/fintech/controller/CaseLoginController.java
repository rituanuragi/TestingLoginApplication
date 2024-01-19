package com.fintech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fintech.model.CaseLogin;
import com.fintech.service.CaseLoginService;

@RestController
public class CaseLoginController {

    @Autowired
    private CaseLoginService caseLoginService;

    @PostMapping("/savecaselogin")
    public ResponseEntity<CaseLogin> createCaseLogin(@RequestBody CaseLogin caseLogin) {
        CaseLogin saveCaseLogin = caseLoginService.saveCaseLogin(caseLogin);
        return new ResponseEntity<>(saveCaseLogin,HttpStatus.CREATED);
    } 
    
}
