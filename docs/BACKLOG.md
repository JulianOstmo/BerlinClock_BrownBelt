# Backlog

## Scenario 1: time is "00:00:00"

### UAT 1.1 - Seconds is "O" ✅

GIVEN the API endpoint /time
WHEN I request the time for 00:00:00
THEN the seconds is "O"

### UAT 1.2 - Top row is "OOOO" ✅

GIVEN the API endpoint /time
WHEN I request the time for 00:00:00
THEN the top row (five hours) is "OOOO"

### UAT 1.3 - Second row is "OOOO" ✅

GIVEN the API endpoint /time
WHEN I request the time for 00:00:00
THEN the second row (single hours) is "OOOO"

### UAT 1.4 - Third row is "OOOOOOOOOOO" ✅

GIVEN the API endpoint /time
WHEN I request the time for 00:00:00
THEN the third row (five minutes) is "OOOOOOOOOOO"

### UAT 1.5 - Forth row is "OOOO" ✅

GIVEN the API endpoint /time
WHEN I request the time for 00:00:00
THEN the fourth row (one minute) is "OOOO"

### UAT 1.6 - BerlinClock

GIVEN the BerlinClock API app
WHEN I send <time> to the /time route
THEN the response should include seconds set to <seconds>
THEN the response should include topRow (five hours) set to <topRow>
THEN the response should include secondRow (single hours) set to <secondRow>
THEN the response should include thirdRow (five minutes) set to <thirdRow>
THEN the response should include fourthRow (one minute) set to <fourthRow>

Examples:

```
| time     | seconds | topRow | secondRow     | thirdRow | fourthRow |
| 00:00:00 | "O"     | "OOOO" | "OOOOOOOOOOO" | "OOOO"   | "OOOO"    |
```
