package materiomicrofrontend.common;

import io.cucumber.spring.CucumberContextConfiguration;
import materiomicrofrontend.BasicApplication;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { BasicApplication.class })
public class CucumberSpingConfiguration {}
