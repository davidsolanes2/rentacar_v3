package com.llauna.rentacar;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.llauna.rentacar");

        noClasses()
            .that()
                .resideInAnyPackage("com.llauna.rentacar.service..")
            .or()
                .resideInAnyPackage("com.llauna.rentacar.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..com.llauna.rentacar.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
