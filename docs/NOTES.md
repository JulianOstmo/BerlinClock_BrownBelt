# Notes

## Pomodoro 1

- Project setup ✅
- Write Scenario 1: time is "00:00:00" ✅
- Write UAT 1.1 - Seconds is "O" ✅
- Write BDD test for UAT 1.1 ✅
- Write Unit test for UAT 1.1 ✅

## Pomodoro 2

- Write UAT 1.2 - Top row is "OOOO" ✅
- Write BDD test for UAT 1.2 ✅
- Write Unit test for UAT 1.2 ✅
- Write UAT 1.3 - Second row is "OOOO" ✅
- Write BDD test for UAT 1.3 ✅
- Write Unit test for UAT 1.3 ✅

## Pomodoro 3

- Write UAT 1.4 - Third row is "OOOOOOOOOOO" ✅
- Write BDD test for UAT 1.4 ✅
- Write Unit test for UAT 1.4 ✅
- Write UAT 1.5 - Forth row is "OOOO" ✅
- Write BDD test for UAT 1.5 ✅
- Write Unit test for UAT 1.5 ✅
- Scenario 1 refactor ✅

## Pomodoro 4

- add jest-cucumber-fusion ✅

## Pomodoro 5

- move BDD tests into feature and steps files ✅

## Pomodoro 6

- Rework UATs to use Examples ✅
- Refactor BerlinClock.feature file to use Examples ✅

# Pomodoro 7

- refactor unit test into describe.each ✅
- when time is "00:00:01", seconds should be "Y" ✅

# Pomodoro 8

- refactor BerlinClock.getSeconds 🚧

# Pomodoro 9

- when time is "00:00:59", seconds should be "Y" ✅
- refactor BerlinClock.getSeconds ✅
- when time is "00:01:00", fourthRow should be "YOOO" ✅
- when time is "00:02:00", fourthRow should be "YYOO" ✅
- when time is "00:03:00", fourthRow should be "YYYO" ✅
- when time is "00:04:00", fourthRow should be "YYYY" ✅

# Pomodoro 10

- split BerlinClock class into smaller classes ✅

# Pomodoro 11

- create thirdRow class and logic
  - 00:00:00 - OOOOOOOOOOO ✅
  - 00:05:00 - YOOOOOOOOOO ✅
  - 00:10:00 - YYOOOOOOOOO ✅ - refactor needed
  - 00:15:00 - YYROOOOOOOO
  - 00:30:00 - YYRYYROOOOO
  - 00:45:00 - YYRYYRYYROO
  - 00:55:00 - YYRYYRYYRYY

# Pomodoro 12

- create thirdRow class and logic
  - 00:10:00 - YYOOOOOOOOO ✅ - refactor needed ✅
  - 00:15:00 - YYROOOOOOOO ✅
  - 00:30:00 - YYRYYROOOOO ✅
  - 00:45:00 - YYRYYRYYROO ✅
  - 00:55:00 - YYRYYRYYRYY ✅

# Pomodoro 13

- create a Light class to represent the Y/R/O 🚧
  - refactor seconds to use Light class ✅
  - refactor fourthRow to use Light class 🚧
  - refactor thirdRow to use Light class
- create secondRow class and logic
  - 01:00:00 - YOOO
  - 02:00:00 - YYOO
  - 03:00:00 - YYYO
  - 04:00:00 - YYYY
  - 23:00:00 - YYYO

# Pomodoro 14

- refactor fourthRow to use Light class ✅
- refactor thirdRow to use Light class 🚧
- create secondRow class and logic
  - 01:00:00 - YOOO
  - 02:00:00 - YYOO
  - 03:00:00 - YYYO
  - 04:00:00 - YYYY
  - 23:00:00 - YYYO

# Pomodoro 15

- create entities list ✅
- create a Row class (that consists of Lights) ✅
- refactor fourthRow to use Row class ✅
- refactor thirdRow to use Row class ✅

# Pomodoro 16

- create secondRow class and logic
  - 00:00:00 - OOOO ✅
  - 01:00:00 - YOOO ✅
  - 02:00:00 - YYOO ✅
  - 03:00:00 - YYYO ✅
  - 04:00:00 - YYYY ✅
  - 23:00:00 - YYYO ✅

# Pomodoro 17

- create topRow class and logic
  - 00:00:00 - OOOO ✅
  - 01:00:00 - YOOO ✅
  - 02:00:00 - YYOO ✅
  - 03:00:00 - YYYO ✅
  - 04:00:00 - YYYY ✅
  - 23:00:00 - YYYO ✅

# Pomodoro 18

- Move to external Github ✅
- Update Dockerfile to use Node v18 ✅
- Setup Github Actions ✅
  - Run ESlint, Prettier, Detect Secrets ✅
  - Run Unit and Integration tests ✅
  - Run Snyk ✅
  - SonarCloud ✅

# Pomodoro 19

- CB:
  - add build and push steps to pipeline.yml ✅
  - add deployment steps to pipeline.yml

# Pomodoro 20

- CB:
  - add deployment steps to pipeline.yml 🚧

# Pomodoro 21

- CB:
  - add deployment steps to pipeline.yml 🚧

# Pomodoro 22

- CB:
  - add deployment steps to pipeline.yml ✅

# Pomodoro 23

- smoke test with Nightwatch ✅

# Pomodoro 24

- Update pipeline to deploy Test app ✅
  - Assign cluster IP to variable ✅
  - Assign Test App NodePort to variable ✅
- Add smoke test to pipeline and point it to Test app ✅
- Add step to pipeline to kill Test app (deployment & service)

# TODO:

- Remove old Travis stuff
- E2E testing? Maybe run app in Docker and test API
- CD
- CLI
- Determine where to host app
