# Progress

## Table of Contents
1. [Overview](#Overview)
1. [Product Spec](#Product-Spec)
1. [Wireframes](#Wireframes)
2. [User Testing](#User-Testing)
3. [Final Product](#Final-Product)
5. [Assets Used](#Assets-Used)

## Overview
### Description
Progress is a simplified project tracking app that encourages consistent, daily work. 

### App Evaluation
- **Category:** Productivity
- **Mobile:** This app would be developed as a mobile web application with the ability of being functional as a web application as a way to set us apart from competitors.
- **Story:** Users check off whether they’ve worked on a project today and the app visualizes their productivity for the day by showing their worked-on projects and not-worked-on projects side-by-side in a chart.
- **Market:** Anyone who wants to keep track of their desired task or project
- **Habit:** This app is geared towards daily use since it promotes consistent usage; however, it could also be used as unoften as the user wants since it mainly makes sure that the user has done work for that specific day
- **Scope:** First, we would start by gathering user data on the tasks or projects and calculate the dates so that the user can see how much time is left. Each project would be able to fill up the doughnut chart based on whether or not it has been checked off. Then, the app could evolve by including a way to track how many days that the user has consistently worked on their tasks. There is some potential for use with other applications such as Reminders, Todoist, Streaks, Trello, or any other productivity based applications.

## Product Spec

### 1. User Stories (Required and Optional)

**Required Must-have Stories**

* Users can input project name, start date, and due date
* Users can interact with the checkboxes to check off when the task has been completed for that day
* Users can add new projects or tasks 
* Users can delete existing projects 
* Users can see their statistics in terms of how many projects they've completed

**Optional Nice-to-have Stories**

* Users can update, or edit, their projects
* Users can permanently complete the project and have it removed from the list
* Users will get an email alert for when the deadlines for their projects/tasks approach

### 2. Screen Archetypes
* Login
    * User can click the login button to login either using an existing username or by using their Facebook login credentials
* Register
   * Allows user to create a new account.
* Home Screen
   * Allow user to view example data of projects along with a doughnut chart that is filled based on what has been checked off
   * Allow user to add new projects, delete existing projects, or check them off
* Stats Screen
    * Allow user to mark projects as complete and fill in the doughnut chart visually
* FAQ Screen
    * Allow user to read frequently asked questions and obtain answers as needed


### 3. Navigation

**Tab Navigation** (Tab to Screen)

* Stats
* Home Screen

**Flow Navigation** (Screen to Screen)

* Home Screen -> Stats Screen
    * Displays the project completion info
* Login Screen -> Home Screen
   * Sign up if user doesn't have an account
   * Otherwise, login success => Home Screen
* Registration Screen
   * => Home Screen
* Add/Delete Project Screen
    * => Home Screen
* FAQ Screen
    * => Home Screen


## Wireframes

### Digital Wireframes & Mockups
<img src="https://i.imgur.com/p1kTjsO.png" width=600>

### Interactive Prototype
[Link to Interactive Prototype](https://a6-progress-tracker-g3.herokuapp.com/)

## User Testing
We sent the link of our application to our friends and family, most of which who are in college. We also asked them to send it to their connections if possible. For instance, one of our recipients regularly attends a church, so she was able to send it to a group of people that would be willing to complete it within that church. By sending a link of the application to these select people, we were able to get immediate feedback from them in the form of questions about how our application worked. 

### A/B Testing
[Link to verson A](https://a9-progress.herokuapp.com/page_A)

[Link to version B](https://a9-progress.herokuapp.com/page_B)

### Google Analytics Data

<img src="https://i.imgur.com/aWngnSA.png" width=600>

Our conversion rate is at a 0 in this image because of a typo made in the goals, once we realized this, we had to stop the experiments and rerun it; however, it is too late to gather more data. Prior to saving our goal changes, we were able to click on “Verify this goal” where it told us that our conversion rate would be at a 46.63% conversion rate, with 38 total conversions, based on our past data. 

<img src="https://i.imgur.com/kiQMxYK.png" width=600>

<img src="https://i.imgur.com/MloJUla.png" width=600>

<img src="https://i.imgur.com/3azdzgE.png" width=600>

Due to our experiment not recording conversion rates, we had to manually calculate by looking at our Unique Pageview and Unique Event data under Behavior in Google Analytics. The Observed data below is taken from March 6 only, the day we asked our users to test our app.

Observed Values | Page A | Page B | Total | 
------------ | ------------- | ------------ | -------------
Clicked | 7 | 38 | 45 | 
Not Clicked | 39 | 3 | 42 |
Total | 46 | 41 | 87

### Summary
Page B had more unique events than Page A, despite only a difference of 5 unique page views. Essentially, most of the people that were on page_B completed the goal of checking the boxes, while people that received page_A were less likely to complete the goal of checking the boxes.

### Interpretation
The results may be like this due to the fact that page_A has an overwhelming amount of content on the page in the form of the calendar, while page_B is more minimalistic by only having the donut chart. Additionally, since the calendar took up a larger chunk of the page, it made the area for clicking on the checkbox much smaller and less noticeable. From the previous 3 interviews, we know that the users had a difficult time with scrolling through the project list on the calendar page because of its smaller size. Additionally, it may be that the users shared a similar mental model of the calendar being interactable rather than the project list since the calendar took up a larger part of the page. 

### Findings
From A/B testing, we were able to see which features of our app were intuitive and more interesting to users based on the average time they spent on their page and what they may have interacted with. For this, we used average time as a way to measure and gauge their interest in the page in conjunction with the amount of interactivity in the form of checkmarks. In combination, we learned that page_B, when checking behavior flow, had the least amount of users beginning to drop off. Thus, we were able to draw the conclusion that it may be the content of page_A that may be creating a cognitive overload for the users.

## Final Product
[Link to Final Product](https://a10-progress.herokuapp.com/)

### UI Screenshots
#### Home Screen
<img src="https://i.imgur.com/3PvoVE6.jpg" width=250>

##### Checking off a Project
<img src="https://i.imgur.com/6uM2Dkp.jpg" width=250>

#### Login
<img src="https://i.imgur.com/BMfyk3L.jpg" width=250>

#### Adding a Project
<img src="https://i.imgur.com/LS6rNE7.jpg" width=250>
<img src="https://i.imgur.com/8HNaFHq.jpg" width=250>

#### Deleting a Project
<img src="https://i.imgur.com/KxCPIxZ.jpg" width=250>
<img src="https://i.imgur.com/eo2Gyr2.jpg" width=250>

#### Statistics Page
<img src="https://i.imgur.com/8iR1HAn.jpg" width=250>

##### Completing a Project
<img src="https://i.imgur.com/FWJQm2r.jpg" width=250>
<img src="https://i.imgur.com/A2DnchV.jpg" width=250>

#### FAQ Page
<img src="https://i.imgur.com/FGcK514.jpg" width=250>


### Assets Used:

[Bootstrap](https://getbootstrap.com/)

[FullCalendar](https://fullcalendar.io/)

[Moment.js](https://momentjs.com/)

[Persistent Checkboxes](https://www.jqueryscript.net/form/jQuery-Plugin-To-Persist-Checkbox-State-Using-Local-Storage.html)

[FontAwesome](https://fontawesome.com/)
