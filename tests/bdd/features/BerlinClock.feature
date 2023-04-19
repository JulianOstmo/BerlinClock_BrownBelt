Feature: Berlin Clock

Scenario: time is "00:00:00"
    Given the BerlinClock API app
    When I send "00:00:00" to the /time route
    Then the response should include seconds set to "O"
    Then the response should include topRow (five hours) set to "OOOO"
    Then the response should include secondRow (single hours) set to "OOOO"
    Then the response should include thirdRow (five minutes) set to "OOOOOOOOOOO"
    Then the response should include fourthRow (one minute) set to "OOOO"