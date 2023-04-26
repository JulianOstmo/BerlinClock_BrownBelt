Feature: Berlin Clock

Scenario Outline: time is <time>
    Given the BerlinClock API app
    When I send <time> to the time route
    Then the response should include seconds set to <seconds>
    Then the response should include topRow (five hours) set to <topRow>
    Then the response should include secondRow (single hours) set to <secondRow>
    Then the response should include thirdRow (five minutes) set to <thirdRow>
    Then the response should include fourthRow (one minute) set to <fourthRow>
    
    Examples:
    | time     | seconds | topRow | secondRow | thirdRow    | fourthRow |
    | 00:00:00 | O       | OOOO   | OOOO      | OOOOOOOOOOO | OOOO      |
    | 00:00:01 | Y       | OOOO   | OOOO      | OOOOOOOOOOO | OOOO      |