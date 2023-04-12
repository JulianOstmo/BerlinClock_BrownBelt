# microservice-template

## How to use this template project

1. Create a new repo using Github CLI and this template: <br>
   ```bash
   gh repo create github.ibm.com/<org-name>/<repo-name> --public --confirm --template="github.ibm.com/cio-london/microservice-template"
   ```
2. Open the `package.json` and update the `name`, `description` and `repository.url`
3. Open `scripts/build-and-save.sh` and update `APP_NAME`
4. Open `scripts/config/global.sh` and update the container registry namespaces: `REGISTRY_TAGS_AND_NAMESPACES`
5. Open `.travis.yml` and update `replace-with-branches` with `dev, main`
6. Encrypt the IBM Cloud API Key, DockerHub username and password in Travis <br>
   ```bash
   travis encrypt SECURE_IBMCLOUD_APIKEY="replace-with-api-key" -r org-name/repo-name
   travis encrypt DOCKERHUB_USERNAME="replace-with-username" -r org-name/repo-name
   travis encrypt DOCKERHUB_PASSWORD="replace-with-password" -r org-name/repo-name
   ```
7. Update the `env.global.secure` values (replace the `TODO`) with the output of each `travis encrypt` command
8. In the project, run: <br>
   ```bash
   nvm install
   npm i
   ```
9. Update `{ project-name }` and `{ project-description }` in this README, and remove everything above `{ project-name }`
10. Commit all changes and push them to the `main` branch
11. Follow project setup below

# { project-name }

{ project-description }

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
