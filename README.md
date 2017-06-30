# terem-foosball-dashboard
MERN Stack single page application implement for terem tech recruitment

# Introduction
A sample project to test technical brilliance amongst our interview candidates
Implement the following specification as near as possible to a production application.
This should include significant thought towards architecture and extensibility and any other activities that would happen in developing a production ready application for a client. You may contact us to ask questions or clarification.
# Project Overview
Terem technologies has a foosball table in the common room. In order to settle the oft asked question of who is the foosball champion, the team has elected to store the results of every game. To facilitate this process a new system will be built. The Foosball Ranking System.
# Requirements
1. User Stories
  The key features of the Solution may be:
  1.	As a user I can record the results of matches (no login requirements)
      * Able to enter the participants and the winner(s)
      * Assume the date of entry is the date of the match
      * Handle X vs X matches (1v1, 1v2, 2v2 etc)

  1.	As a user I can view the win rates
     * The overall win loss rate of a participant
     * The win loss rate of a participant against another specific participant
## Bonus goals:
1.	Host it live somewhere
1.	Use a graphing API to show the win rates vs time

# Usage
1. User should start mongod service
  ```
  sudo service mongod start
  ```
2. Clone this repositorie
  ```
  git clone https://github.com/LaughingKids/terem-foosball-dashboard.git
  ```
3. Install npm necessary dependencies
  ```
  npm install
  ```
4. Start the node server
  ```
  npm start
  ```
5. Default port is 8086 (http://localhost:8086)
