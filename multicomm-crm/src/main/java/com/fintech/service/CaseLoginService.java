package com.fintech.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fintech.model.CaseLogin;
import com.fintech.repo.CaseLoginRepo;

@Service
public class CaseLoginService {

    @Autowired
    private CaseLoginRepo caseLoginRepo;
    
    // get all caselogin
    public List<CaseLogin> getAllCaseLogin() {
        return caseLoginRepo.findAll();
    }

    // add caselogin
    public CaseLogin saveCaseLogin(CaseLogin caseLogin) {
        return caseLoginRepo.save(caseLogin);
    }
}
