# BerlinClock_JulianOstmo

BerlinClock kata (Blue belt practice)
https://www.codewars.com/kata/5a1463678ba9145a670000f9

The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light

Example Test Case:
Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO

To get started, in short:
Run `npm ci` and then `npm start`.

## Commands

| NPM Script                     | Description                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| start                          | Starts server                                                  |
| start:dev                      | Starts server and restarts on change (in local development)    |
| lint                           | Runs ESLint and Prettier checks                                |
| test                           | Runs `lint`, then `test:unit`                                  |
| test:coverage                  | Runs unit and integration tests once with coverage report      |
| test:unit                      | Runs unit tests once                                           |
| test:unit:watch                | Runs unit tests and watches for changes (in local development) |
| detect-secrets                 | Update detect-secrets baseline file for staged files only      |
| detect-secrets:audit           | Interactively whitelist detected secrets                       |
| detect-secrets:exclude         | Add file to detect-secrets exclusion list                      |
| detect-secrets:update-baseline | Update detect-secrets baseline file for all project files      |

## Project setup

### Prerequisites

- Node Version Manager (NVM)
- Node.js (installed using NVM)
- ESLint extension for VS Code
- Prettier extension for VS Code
- Docker
- Artifactory API key (see setup below)

### Setup

#### 1. Initial setup

1. `npm ci`
2. Create a `.env` file using the `.env.sample` as a template and populate with credentials from 1Password

#### 2. Authenticate to Artifactory

##### _NOTE: You can skip this if you have previously followed setup Artifactory on a different project_

Detect-secrets docker images are published to TaaS Artifactory.

1. Log into https://na.artifactory.swg-devops.com/artifactory/webapp/#/profile using w3id
2. Click your username and then generate an API key
3. In your terminal, run `docker login txo-toolbox-team-docker-local.artifactory.swg-devops.com`
   - Username is your IBM email
   - Password is the API key generated in last step.

#### 3. Travis setup

1. Enable the project in Travis
2. Add environment variables `ARTIFACTORY_USERNAME` and `ARTIFACTORY_APIKEY` (generated using a functional account)

## Updating the detect secrets .secrets.baseline file and whitelisting false-positives

### To update .secrets.baseline

Run `npm run detect-secrets`

### To whitelist secrets that are false-positives

Run `detect-secrets:audit` and mark any false-positive secrets detected with `n`
