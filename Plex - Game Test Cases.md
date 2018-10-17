# Test Case 

## Test Details

* Test Case ID:
  * #1
* Test Case Name:
  * requirement 3.2 - 1 
* Component: 
  * New Game
* Test Case Designer:
  * Derek Alexander, Austin Gatlin
* Creation Date:
  * Date 10/9/2018
* Modified By:
  * Name
* Modified Date:
  * Date 
* Requirements Covered:
  * 1: Description: 
  new save only works in story mode
* Test Description/Purpose:
  * Purpose: 
  to not create a single player game while in build mode.
* Pre-Test Conditions:
  * Description:
  * no single player save exist
  
## Test Steps:  
| # | Description | Expected Result | Check (√) |
| --- | --- | ---  | --- |
| 1 | start build mode | in buildmode  |  |
| 2 | create character / name and password | we are logged in |  |
| 3 | launch online game session  | joined game session |  |
| 4 | go back to single player see if new character option is available or trying to load multiplayer | still no saved character and new character option available  | |			

## Overall Test Status:

## Run History:
| # |	Run Date |	Run By |	Results |
| --- | --- | --- | --- |
| 1 | 1/6/2018 | Austin Gatlin | Failed |			
| 2 | 6/19/2018 | Derek Alexander | Failed |			
| 3 | 10/15/2018 | Derek Alexander | Passed |			



# Test Case 

## Test Details

* Test Case ID:
  * #2
* Test Case Name:
  * #requiment 3.12 -2
* Component:  
  * Database Timeout Driver
* Test Case Designer:
  * Austin Gatlin
* Creation Date:
  * 10/11/2018
* Modified By:
  * Name
* Modified Date:
  * Date
* Requirements Covered:
  * 1: Description: 
  Check to see how much time has passed since the user last entered some
  kind of input and log them out if that time surpasses x seconds.
* Test Description/Purpose:
  * Purpose:
  * Making sure that inactive players will be removed from the game afte a certain period of inactivity
* Pre-Test Conditions:
  * Description:
  * Working servers
## Test Steps: 
| # | Description | Expected Result | Check (√) |
| --- | --- | --- | --- |
| 1 | Start game and select build mode| in build mode  | √ |			
| 2 | Log in and join online session | in online session | √ |			
| 3 | Wait specified amount of time without generating input | logged out of game session | √ |			
| 4 | Repeat steps 1 and 2 | in online session | √ |			
| 5 | Generate input for a for specified logout time | still in online session | √ |			
| 6 | Now that some input has been generated before, do not generate input for specified logout time | logged out of session | √ |			
	

## Overall Test Status:



## Run History:
| # |	Run Date |	Run By |	Results |
| --- | --- | --- | --- |
| 1 | 5/12/2018 | Austin Gatlin| Passed |			
| 2 | | 8/16/2018 | Austin Gatlin | Passed |			
| 3 | 10/16/2018 | Derek Alexander | Passed |			



# Test Case 

## Test Details

* Test Case ID:
  * #3
* Test Case Name:
  * #Number 3.3 -1
* Component: 
  * Save game 
* Test Case Designer:
  * Derek Alexander
* Creation Date:
  * 10/16/18
* Modified By:
  * Name
* Modified Date:
  * Date
* Requirements Covered:
  * Description:
  Saving only works in story mode.
* Test Description/Purpose:
  *purpose
  * Make sure saving only is possible to do in story mode and not online/build mode.
* Pre-Test Conditions:
  * Description:
  Have working single player safe file.
## Test Steps: 
| # | Description | Expected Result | Check (√) |
| --- | --- | --- | --- |
| 1 | Start game in build mode |In build mode |  |			
| 2 | Create character / name and password | We are logged in |  |
| 3 | Launch online game session  | Joined game session |  |
| 4 | Go back to story mode | Story mode starts  | |			
| 5 | Load single player story mode save file | Loads pre-test save file correctly | |			
| 6 | See if character has been modified at all after going to build mode | Character intact no modifications or overwritting | |			


## Overall Test Status:



## Run History:
| # |	Run Date |	Run By |	Results |
| --- | --- | --- | --- |
| 1 | 2/6/2018 | Derek Alexander | Failed |			
| 2 | 7/25/2018 | Austin Gatlin | Passed |			
| 3 | 10/16/2018 | Derek Alexander | Passed |			

