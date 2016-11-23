//My details
var bio = {
    "name": "Setu Shubham",
    "role": "Front-end web developer",
    "contacts": {
        "mobile": "9739595605",
        "email": "setushubham@yahoo.com",
        "github": "setu08",
        "location": "Bangalore, India"
    },
    "welcomeMessage": "Hi, I am front end web developer. I love creating websites based on client's input + my imagination. I take challenges as inspiration and always looking for improvements.",
    "skills": [
        "HTML 5", "CSS 3", "JavaScript", "Programming"
    ],
    "bioPic": "images/me.jpg",
    //Encapsulated function
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedMobileFooter = HTMLcontactGeneric.replace("%contact%", "mobile");
        formattedMobileFooter = formattedMobileFooter.replace("%data%", bio.contacts.mobile);
        $("#footerContacts:last").append(formattedMobileFooter);
        var formattedEmailFooter = HTMLcontactGeneric.replace("%contact%", "email");
        formattedEmailFooter = formattedEmailFooter.replace("%data%", bio.contacts.email);
        $("#footerContacts:last").append(formattedEmailFooter);
        var formattedGithubFooter = HTMLcontactGeneric.replace("%contact%", "github");
        formattedGithubFooter = formattedGithubFooter.replace("%data%", bio.contacts.github);
        $("#footerContacts:last").append(formattedGithubFooter);
        var formattedLocationFooter = HTMLcontactGeneric.replace("%contact%", "location");
        formattedLocationFooter = formattedLocationFooter.replace("%data%", bio.contacts.location);
        $("#footerContacts:last").append(formattedLocationFooter);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGit);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skillNo = 0; skillNo < bio.skills.length; skillNo++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNo]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

//Education details
var education = {
    "schools": [{
        "name": "Vellore Institute of Technology",
        "location": "Vellore, India",
        "degree": "B.Tech",
        "majors": ["Information Technology"],
        "dates": "2012 - 2016"
    }, {
        "name": "Maharishi Vidya Mandir",
        "location": "Bhopal, India",
        "degree": "XIIth, CBSE Board",
        "majors": ["Mathematics", "Physics", "Chemistry"],
        "dates": "2011 - 2012"
    }, {
        "name": "Maharishi Vidya Mandir",
        "location": "Bhopal, India",
        "degree": "Xth, CBSE",
        "majors": ["Science and Mathematics"],
        "dates": "2010",
    }],
    "onlineCourses": [{
        "title": "Nanodegree in Front-end Web devolopment",
        "shortTitle": "Web",
        "school": "Udacity",
        "dates": "August 2016 - Present",
        "url": "http://www.udacity.com",
    }, {
        "title": "CCNA",
        "school": "Cisco",
        "shortTitle": "Cisco",
        "dates": "January 2014",
        "url": "http://www.cisco.com/",
    }, {
        "title": "PHP-MySQL",
        "school": "Vedisoft",
        "shortTitle": "backend",
        "dates": "August 2014",
        "url": "http://www.vedisoft.com/",
    }, {
        "title": "Java desktop technology",
        "school": "Vedisoft",
        "shortTitle": "java",
        "dates": "July 2013",
        "url": "http://www.vedisoft.com/",
    }],

    "display": function() {
        //For handling plural in "majors"
        var majorTemplateString = HTMLschoolMajor;
        var formattedName;
        var formattedSchoolTitle;
        var formattedDates;
        for (var schoolNo = 0; schoolNo < education.schools.length; schoolNo++) {
            $("#education:last").append(HTMLschoolStart);
            formattedName = HTMLschoolName.replace("%data%", education.schools[schoolNo].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolNo].degree);
            formattedSchoolTitle = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedSchoolTitle);
            formattedDates = HTMLschoolDates.replace("%data%", education.schools[schoolNo].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolNo].location);
            $(".education-entry:last").append(formattedLocation);
            if (education.schools[schoolNo].majors.length > 0) {
                var majorString;
                for (var majorNo = 0; majorNo < education.schools[schoolNo].majors.length; majorNo++) {
                    if (majorNo === 0) {
                        HTMLschoolMajor = majorTemplateString;
                        majorString = education.schools[schoolNo].majors[majorNo];
                    } else {
                        if (majorNo === 1) {
                            // for converting the literal "Major" to "Majors" in the label, in case more than one major exists
                            HTMLschoolMajor = HTMLschoolMajor.replace("Major", "Majors");
                        }
                        majorString = majorString + ", " + education.schools[schoolNo].majors[majorNo];
                    }
                }
            }
            var formattedMajors = HTMLschoolMajor.replace("%data%", majorString);
            $(".education-entry:last").append(formattedMajors);
        }
        $("#education:last").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var courseNo = 0; courseNo < education.onlineCourses.length; courseNo++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseNo].title);
            formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseNo].school);
            formattedSchoolTitle = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedSchoolTitle);
            formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courseNo].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courseNo].url);
            formattedUrl = formattedUrl.replace("#", education.onlineCourses[courseNo].url);
            $(".education-entry:last").append(formattedUrl);
        }
    }

};

//Work experience
var work = {
    "jobs": [{
        "employer": "Honeywell Technology Solutions",
        "title": "Internship as Open Source Software Consultant",
        "location": "Bangalore, India",
        "dates": "Jan 2016 - June 2016",
        "description": "Supported execution of Open Source Software Licensing requirements and other elements. Found critical dependencies for successful compliance of Open Source Software content.",
    }, {
        "employer": "BSNL",
        "title": "Summer Internship",
        "location": "Bhopal, India",
        "dates": "Dec 2015 - Jan 2016",
        "description": "Internship at B.S.N.L. taught how customer requests, phone call, various plans, gadgets, bill and how these handled by both management and technical aspects.",
    }],
    //Display Function (Encapsulated)
    "display": function() {
        for (var jobNo = 0; jobNo < work.jobs.length; jobNo++) {
            $("#workExperience:last").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobNo].employer);
            formattedEmployer = formattedEmployer.replace("#", work.jobs[jobNo].employerURL);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobNo].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobNo].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobNo].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobNo].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

//Projects
var projects = {
    "projects": [{
        "title": "My Portfolio",
        "dates": "October 2016",
        "description": "It has all my past works. This website is completely responsive. Technology used: HTML5, CSS3",
        "images": ["images/myportfolio.png"]
    }, {
        "title": "App UI Timeline",
        "dates": "September 2016",
        "description": "Developed and designed Timeline page for Mobile Applications.",
        "images": ["images/app.jpg"]
    }, {
        "title": "Animal Trading Card",
        "dates": "August 2016",
        "description": "Animal Trading card designed using HTML5 and CSS3.",
        "images": ["images/card.jpg"]
    }],
    //Encapsulated
    "display": function() {
        for (var projectNo = 0; projectNo < projects.projects.length; projectNo++) {
            $("#projects:last").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectNo].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[projectNo].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectNo].description);
            $(".project-entry:last").append(formattedDescription);
            $("#projects").append(HTMLprojectStart);
            if (projects.projects[projectNo].images.length > 0) {
                for (var imageno = 0; imageno < projects.projects[projectNo].images.length; imageno++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectNo].images[imageno]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

//Map
$("#mapDiv").append(googleMap);

//collecting click locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
