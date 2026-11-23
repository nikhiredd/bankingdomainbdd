Feature: Login Functionality

  @smoke
  Scenario: Valid user login

    Given customer opens banking application
    When customer enters valid credentials
    When clicks login button
    Then customer should be logged in successfully