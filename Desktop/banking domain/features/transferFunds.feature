Feature: Funds Transfer

@regression
Scenario: Customer transfers funds

Given customer logged into banking application
When customer navigates to transfer fund page
And customer transfers "100" dollars
Then transfer should be completed successfully