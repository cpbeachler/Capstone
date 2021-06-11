#Tradr
This is my take on a Tindr like application for Magic: the Gathering trading cards. My app will allow users to curate a list of owned and wanted cards, and then be matched with users in their zip code which is gathered at account creation.

## Technologies Used
- React.js
- Redux
- Python
- Flask
- JavaScript
- Node.js
- HTML5
- CSS3
- postgreSQL
- Heroku
- Scryfall API

## Views
### Home
The home page holds the links to the two main other views, binders and trades. Users will also login here.

![Home](https://user-images.githubusercontent.com/72315462/121710671-d6619280-caa7-11eb-9768-4b6fda625c36.PNG)
Most of the user data will be generated here. Users can add wanted, and owned cards that are for trade.

![Binder](https://user-images.githubusercontent.com/72315462/121710675-d6fa2900-caa7-11eb-8b09-6a8bc10948d1.PNG)
On this page all matched trades are listed and returned to the end user.

![Trade](https://user-images.githubusercontent.com/72315462/121710683-d82b5600-caa7-11eb-978b-e9b55605827b.PNG)


## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***
