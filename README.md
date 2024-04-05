# **Personal Portfolio - React Update**
The purpose of this website is to showcase myself and my work to potential employers and recruiters. The users of this website will be looking at my skills and abilities for potential employment. I have included an about page as an overview of myself and my achievements, along with a portfolio page so users can see examples of my work. A contact page allows any users of the website to get in touch with me.

This is the third iteration of my portfolio website, which has been created using React, so components do not need to be repeated and the website is easier to maintain.
As  I have developed my knowledge of web development languages and frameworks, I applied this knowledge to my portfolio website. 

**Previous iterations**
Iteration 2 - August 2022 project one while studying Full Stack Web Development with The Learning People. This was developed using only HTML5 and CSS3. For more information please visit my [Repo](https://github.com/nkpe/Personal_Portfolio).

Iteration 1 - 2016-2018. This iteration was created for my design career, having completed a degree in Interior Design I wanted to created a portfolio online to ensure a web presence. This was my first experience coding and deploying a website. I used HTML and CSS. 
   

# **UX**
The use of the navigation bar within the header allows for easy navigation to the about me, portfolio and contact me pages from every page on the website. The addition of on-hover font bolding informs the user that these are links and which link they are hovering over.

The about me page split into clearly defined sections, making it easy for the user to follow as well as find a particular section. Section are split based on type of experience / personality information. 

The portfolio page is also split clearly into sections through the use of margins.

GitHub and LinkedIn links are included in footer so its easy to contact me from any page on the website using these channels. I have used the logo for each so they are easily recognised, while keeping the footer simple.

## **Wireframes** 
Figma used to create wireframes for this website - [View the wireframes on Figma](https://www.figma.com/file/n7K8TVmtU2dfOnCtEBA6PS/Portfolio-Website-2022---blue);

# **Features**
## **All Pages**
* Header with Nav bar and branding for easy navigation of the website. 
    * Use of CSS on hover on nav links so the user helps user experience, showing these are links. 
* Social Media links included within the footer and links to contact page so the user can get in touch from any web page. 
## **portfolio.html**
* **Flexbox** - used to create a fully responsive and even layout of images. 
## **contact.html**
* **Form with contact button** - Allows user to submit their details entered into the form. Currently using Formspree to handle the forwarding of this data to my email address. 
* **Form data list** - assists user when inputting the country they are contacting from.
* **Form dropdown lists** - ensures user picks an appropriate answer.
* **Form required attribute** - on all necessary form fields, ensuring enough contact information is sent should the user not wish to provide all the information on the form. 
# **Features to be implemented**
* **Project Pages** - Addition of project pages so portfolio images link to the projects themselves, including hosting websites in my portfolio and linking this.
* **Scroll animations** - on the about page so each section of text appears one at a time, so the user isn't overloaded with information.  
# **Technologies used**
* [**HTML 5**](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - used to create the basic content of the website.
* [**CSS3**](https://developer.mozilla.org/en-US/docs/Glossary/CSS) - used to add custom styling to the content of the webpage. 
* [**Font Awesome**](https://fontawesome.com/) - the project used Font Awesome GitHub and LinkedIn fonts for the social media links.
* [**Google Fonts**](https://fonts.google.com/) - used to import a custom font to style the text. 
* [**Git**](https://git-scm.com/) - this was used during production to efficiently commit and push changes to the GitHub repository so no code could be lost. 
* [**GitHub**](https://github.com/) - this was used to create and manage a remote repository which holds all commits and pushed from Git. I made uses of the repository branches to separate and track working changes, in case of bugs, before committing new changes to the master branch.
# **Testing**
While building the website I regularly used Google Chrome, FireFox, Safari and Edge browsers to render my code, checking for any broken code and incompatibility. One example I found that Firefox and Safari rendered the select tag in HTML with a grey background giving the form fields inconsistent styling. I fixed this by adding a class of form-field-background to each form field with a specified colour, for Edge and Firefox. Safari required the use of Webkit to remove the browser styling.

I used the Developer Tools built into Chrome to test responsiveness of the website, by selecting different devices. When conducting these tests I found the responsiveness of the home page photo and the form fields needed to be handled with media queries as they had specific break points.  
# **Deployment**

The page has been deployed to a custom domain, using Netlify - [My Portfolio](https://naomipearse.com).

## **Repo Link**
[https://github.com/nkpe/Personal_Portfolio](https://github.com/nkpe/Personal_Portfolio)
## **Running Code Locally**
The code can be run locally by downloading from my GitHub repository following these steps: 

1. Click on the green 'Code' button.
2. From the drop down menu select 'download ZIP' or select the relevant clone option.
3. If downloading ZIP, this should be unzipped before running the website locally. 


# **Credits**
## **Code** 
* The list of countries was taken and edited from a GitHub repo produced and shared [Dan Rovito](https://gist.github.com/danrovito/977bcb97c9c2dfd3398a) to save time in adding all countries. 
## **Acknowledgements** 
* Thank you to my boyfriend who helped direct me with the styling and using Git.
* Thank you to my mentor, Sunny Hebbar, for the feedback in ensuring my code readability and accuracy.  
