## 🤓 IS216 Project: StudySmart
* Group members:
* Lim Qi Qing (qiqing.lim.2021@scis.smu.edu.sg)
* Lee Chia Min Michelle (michellelee.2020@scis.smu.edu.sg)
* Tan Yi Peng (yipeng.tan.2021@scis.smu.edu.sg)
* Lim Si Yu(siyu.lim.2021@scis.smu.edu.sg)


## 🤓 Project Overview ##

**What is the problem?**

In Singapore, students are taught to study hard but not study smart. The root cause of the issue is that educational technology for secondary students are plentiful, but lacks in features to allow students to engage in self-directed studying. Most educational platforms like Student Learning Space (SLS) are only for teachers to disseminate lessons to students, and students are unable to utilise such a platform for their daily revision. Additionally, there lacks a shared collaborative space for homework help.

<br>

**How do we solve it?**

Introducing, StudySmart a platform for secondary school students to have interactive learning. Our web application will empower students to take charge of their own learning and continuously motivate them to use this website through our user-friendly UI. 
This website has 4 features:
 - Dashboard
     - Exam date countdown
     - Fun facts and headline news
     - Customisable timetable
 - Forum
    - Shared learning by posting questions and answering other users' questions
- Progress tracker
    - Track exam result progress
    - Charts for progress visualisation
- Flashcard & Quizzes
    - DIY flashcards
    - DIY multiple choice quizzes

<br>
<hr>
<br>

**Before Implementation**

Before the coding process, we came up with rough Figma design prototypes to give us a better idea on how our application will work and also the overal design. Our team member, Michelle has designed the owl logo and profile photo that we have added in our web pages.
<br><br>


**Below is our Architecture diagram to show the interactions between our application components:**

![architecture](https://github.com/tanyipeng834/WAD-2---PROJECT/blob/a1686217ab28532bc919f3304f4e593973abe295/client/public/Screenshot%202022-11-13%20at%206.49.39%20PM.png)


<br><br>

**To view our prototype, click on the links below:**


[Project Link](https://wad2-project-625b0.web.app/#/login)

## 🤓 How to Install and Run Our Web Application (for Developers) ##
* This method is applicable to both Mac OS and Windows OS

### Firstly, you have to clone this repository into your local environment

1. On the '<> Code' page, click on the green 'code' button and a dropdown will appear.
2. Make sure you're under the 'HTTPS' tab, and copy the URL.

![image](./client/public/git_clone.jpg)

### Open git bash if you have it, otherwise any Command Line Interface that you use.

1. Change the current working directory to any location where you want the cloned repository to be - use command ```cd``` <path> to navigate
2. Type ```git clone```, and then paste the URL you copied earlier.

It should look something like this:

![image](./client/public/git-clone-command.jpg)
  
Press **Enter** to clone into your local machine
  

  
### Now you have to install the node modules used in this repository
  

  
1.Ensure that you are in the WAD2---PROJECT
2.Type ```npm install``` or ```npm i``` for short to install all the node modules used in main folder

![image](./client/public/main-npm.jpg)
### Followed by that please install the packages in the client subfolder
1. Ensure that you are in the WAD2---PROJECT/client
2. Type ```npm install``` or ```npm i``` for short to install all the node modules used in client folder
  
![image](./client/public/client-npm.jpg)


### You are done with the set-up! Now lets run our application on your localhost

1. Type ```npm run serve```  to start both the front and database together in your local server
  
![image](./client/public/run-serve.jpg)

2. Wait for around 10 to 20 seconds for the [webpack.Progress] to compile successfully
3. Click on http://localhost:8080/ to open our application locally
  
![image](./client/public/run-local.jpg)


  


## 🤓 How to Use Our Web Application (for Visitors to our Website) ##

**1. The first page is the login page. Click on "Sign Up".**
<br>
<br>
<img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/48c0912ec94b9a1cdcb1d287f9addf7be2ff4c5d/client/public/Login.png" width="900" height="650"/>
<br>
<hr>
<br>

**2. Enter your details in the sign up page.**
<br>
<br>
<img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/da3a1d0edd163e32e15baa1b7046c1eddec4a5e9/client/public/Sign%20Up.png" width="900" height="650"/>
<br>
<hr>
<br>
  
**3. You will now be brought to the dashboard. In the dashboard page, there will be a section that provides a radomly generated fun fact and button which redirects users to a page to view the headline news (this can only work locally as accessing the news API from the browser requires payment) There is also an examination countdown table where users can input their exams and its date. The table will compute and display the number of days left before the exam. If their exam is within 7 days, it will display a red backgroundand timetable feature which the student can utilise.**
  
<br>
  <br>
<img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/c35113e742f13d770bb15aede5cb4a326a8ae2f8/client/public/Screenshot%202022-11-13%20at%204.53.49%20PM.png" width="900" height="650"/>
 <br><br>
<br>
<hr>
<br>
  
 **4. By pressing on "Read Latest News" button, you are brought to the news page with today's latest local news.**
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/1cbd9250735e7979850e58dfbf633e0e0a900adb/client/public/Unknown-3" width="900" height="650"/>
<br>
  <br>
  
<br>
<hr>
  
<br>
  
 
**5. The timetable in the dashboard  is customisable where users drag and hold the desired time slot, a modal appears for them to input a certain activity during that timeframe. The users can input the subject and day that the selected time frame is for and colour in which they want the timetable section to be.**
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/148474a8276569a374c0ac9043b2b8fca1899576/client/public/timetable%20modal.png" width="900" height="650"/>
   <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/ad3e1dd4fff1c30976259f89c04f0d8ee14e534d/client/public/Timetable.png" width="900" height="650"/>
<br>
  <br>
  
<br>
<hr>
  
<br>
  
  
**6. Users can use the sidebar (which can be expanded) to navigate between the pages**
  
<br>
  <br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/f272d89a019406167b234763843096deb223b2aa/client/public/Screenshot%202022-11-13%20at%205.06.12%20PM.png" width="900" height="650"/>

<br>
<hr>
  
  
<br>
  
**7. In the forum page, users can upload posts, like, unlike and comment on posts and filter the posts according to the selected filters. Users are also given the choice to delete their own posts.**
  
<br>
  <br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/cbf13adc5574abc564c4b00ce1bbad8b4fd4eadc/client/public/Screenshot%202022-11-13%20at%204.14.32%20PM.png" width="900" height="650"/>

<br>
<hr>
  
<br>  
  
**8. In the progress tracker page, users can input their test results for their different subjects. A line chart will be updated based on user input to show the user's academic progress.
The bar chart will also update to show the average score for each subject. Additionally, some analytics will be done and displayed for the user to keep track of which subject is their best, is the most consistent, and which they need to improve on.**
  
<br>
  <br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/524fb688c29345664f618a7328ff0e1c58bff374/client/public/Screenshot%202022-11-13%20at%204.17.57%20PM.png" width="900" height="650"/>


<br>
<hr>
  
  
<br>
  
**9. For self-directed learning, the Quiz page provides users to DIY their own flashcards or multiple choice quiz**
  
<br>
  <br>
   <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/a9a78bcc33b8e809f916653eb2420474d6c4e5f1/client/public/Screenshot%202022-11-13%20at%204.18.21%20PM.png" width="900" height="650"/>


<br>
<hr>
  

<br>  
  
**10. To create a flashcard set, users have to click Flashcards and click the + button which redirects them to another page. In this page, users should input the relevant fields and can click + to add a new flashcard. Once done, they should click on Create New Deck.**
  
<br>  
  <br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/8d4a09c94ba1d51d3d0f315a9101a03759cab665/client/public/photo_2022-11-13_17-55-03.jpg" width="900" height="650"/>

<br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/eda1b3147ca3d6d212315eb848935819344323fa/client/public/2.jpg" width="900" height="650"/>

<br><br>


<br>
<hr>  
  
  
<br>
  
**11. To test themselves, users just need to select a previously created flashcard deck. Users will be presented the term/question and then need to click to flip the flashcard to view the answer. Further, users can user the next and back button to toggle between the flashcard and see their progress from the progress bar.**
  
<br>
  <br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/eda1b3147ca3d6d212315eb848935819344323fa/client/public/3.jpg" width="900" height="650"/>

<br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/b967e477daeaec2642e4df69f817fc12ee834db3/client/public/Screenshot%202022-11-13%20at%204.29.42%20PM.png" width="900" height="650"/>
 <br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/b967e477daeaec2642e4df69f817fc12ee834db3/client/public/Screenshot%202022-11-13%20at%204.29.55%20PM.png" width="900" height="650"/>


<br>
<hr>
  
 <br>
  
  **12. Users have to input the quiz name, description and questions. For each question, users can generate as many options as they want and tick those that are the correct answer (there must be at least one correct answer). They can test themselves after they have created the quiz!**
  
<br>
  <br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/b967e477daeaec2642e4df69f817fc12ee834db3/client/public/Screenshot%202022-11-13%20at%204.21.49%20PM.png" width="900" height="650"/>

<br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/b967e477daeaec2642e4df69f817fc12ee834db3/client/public/Screenshot%202022-11-13%20at%204.27.40%20PM.png" width="900" height="650"/>
 <br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/e876de400fd93560f610c6e995391480a94d197e/client/public/Screenshot%202022-11-13%20at%204.28.35%20PM.png" width="900" height="650"/>
<br><br>
  <img src="https://github.com/tanyipeng834/WAD-2---PROJECT/blob/3163e5deece182bf53e6972105c3ee21efd0086f/client/public/Screenshot%202022-11-13%20at%204.29.05%20PM.png" width="900" height="650"/>




  

## 🤓 Thank You and Enjoy Learning!


