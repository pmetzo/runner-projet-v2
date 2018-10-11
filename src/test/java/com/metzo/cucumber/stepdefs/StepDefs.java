package com.metzo.cucumber.stepdefs;

import com.metzo.RunnerProjetV1App;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = RunnerProjetV1App.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
