Feature: Bill Payment

  @regression @billpay

  Scenario: Customer pays utility bill successfully

    Given customer is logged into banking application
    When customer navigates to bill pay page
    And customer enters payee information
    And customer enters payment amount "200"
    And customer submits bill payment
    Then bill payment should be successful