var DATA = "%data%";

var bio = {
  "name": "Daniel Nedelcu",
  "role": "Front End Developer",
  "contacts": {
    "mobile": "(0040) 749 540 502",
    "email": "nede.dan@gmail.com",
    "facebook": "https://www.facebook.com/dan.nede",
    "linkedin": "https://www.linkedin.com/in/danielgnedelcu",
    "github": "https://github.com/nedelcos",
    "location": "Berlin"
  },
  "welcomeMessage": "I am Daniel & I love to build neat, responsive websites. If you are a company looking for a new Front End Developer and your HQ is in Berlin, then I might just be the man for the job.",
  "skills": ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "CMS", "Photoshop", "inDesign", "SEO & SEM"],
  "bioPic": "images/me.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
      $(".my-role").prepend(formattedRole);
      $(".my-name").prepend(formattedName);

    var formattedPic = HTMLbioPic.replace(DATA, bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
      $(".bio-pic-container").append(formattedPic);
      $(".bio-location").append(formattedLocation);
      $(".intro-message").append(formattedMessage);

    if (bio.skills.length > 0) {
      $(".my-skills").prepend(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
          $(".my-skills").append(formattedSkills);
      }
    };

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedFacebook = HTMLfacebook.replace(DATA, bio.contacts.facebook);
    var formattedLinkedIn = HTMLlinkedin.replace(DATA, bio.contacts.linkedin);
    var formattedGitHub = HTMLgithub.replace(DATA, bio.contacts.github);
      $("#topContacts, #footerContacts").append(formattedEmail + formattedMobile);
      $("#topSocial, #footerSocial").append(formattedFacebook + formattedLinkedIn + formattedGitHub);
  }
};

var work = {
  "jobs": [
    {
      "employer": "Virtual X",
      "title": "Web Developer Intern",
      "location": "Bucharest",
      "dates": "June 2016 - Present",
      "description": "I was assigned the task of building a responsive website for a new department, dedicated for VR prductions. I also\
      research & documentation on how the business works and made the content for the website. "
    },
    {
      "employer": "Tegmark",
      "title": "Sys Admin",
      "location": "Bucharest",
      "dates": "November 2015 - Present",
      "description": "I was in charge of administrating the company's websites, web applications and the VPS hosting."
    },
    {
      "employer": "Metamorph Studio",
      "title": "Web & Graphic designer",
      "location": "Bucharest",
      "dates": "May 2015 - November 2015",
      "description": "I created 2 websites for the company & also created the layouts for the printed newspapers (in inDesign)."
    }
  ],
  "display": function() {
    if(work.jobs.length > 0) {
      $("#workExperience").append(HTMLworkStart);

      for(var w = 0; w < work.jobs.length; w++) {
        var formattedEmployer =  HTMLworkEmployer.replace(DATA, work.jobs[w].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[w].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[w].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[w].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[w].description);

        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDescription);
        $(".work-entry:last").append(formattedLocation);
      }
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Virtual eXperience",
      "dates": "2016",
      "description": "One-man-job project. The website is built in WordPress, using custom page templates.",
      "images": [
        "images/screen_virtualx.jpg",
        "images/thumb_virtualx.jpg"
      ]
    },
    {
      "title": "Rentador",
      "dates": "2015",
      "description": "Built in WordPress. The site uses custom page templates. Purpose: Rent a Car website",
      "images": [
        "images/screen_rentador.jpg",
        "images/thumb_rentador.jpg"
      ]
    },
    {
      "title": "Panda Project",
      "dates": "2014",
      "description": "Built in Joomla. The website is for a Direct Marketing agency.",
      "images": [
        "images/screen_panda.jpg",
        "images/thumb_panda.jpg"
      ]
    }
  ],
  "display": function() {
    if(projects.projects.length > 0) {
      $("#projects").append(HTMLprojectStart);

      for(var p = 0; p < projects.projects.length; p++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[p].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[p].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        for (var i = 0; i < projects.projects[p].images.length; i++) {
          var formattedImages = HTMLprojectImage.replace(DATA, projects.projects[p].images[i]);
            $(".project-entry:last").append(formattedImages);
        }
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Hyperion University",
      "location": "Bucharest",
      "degree": "BA",
      "majors": "Journalism & Communication",
      "dates": "2012",
      "url": "http://www.jurnalism.hyperion.ro"
    },
    {
      "name": "Technical College Campulung",
      "location": "Campulung",
      "degree": "College diploma",
      "majors": "Automatization systems",
      "dates": "2009",
      "url": "http://gstaro.muscel.ro"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://profiles.udacity.com/u/danielnedelcu"
    },
    {
      "title": "Front End tehniques",
      "school": "CodeAcademy",
      "dates": "2016",
      "url": "https://www.codecademy.com/users/netWhiz20456/achievements"
    }
  ],
  "display": function () {
    $("#education").append(HTMLschoolStart);
    if(education.schools.length > 0) {
      for(var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedCity = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedMajors = HTMLschoolMajor.replace(DATA, education.schools[i].majors);
        var formattedURL = HTMLschoolURL.replace("#", education.schools[i].url).replace(DATA, "website")

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedCity);
        $(".education-entry:last").append(formattedMajors);
        $(".education-entry:last").append(formattedURL);
      }
    }
    $("#online-education").append(HTMLonlineClasses);
    if(education.onlineCourses.length > 0) {
      for(var o = 0; o < education.onlineCourses.length; o++ ) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[o].title);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[o].school);
        var formattedDates = HTMLonlineDates.replace(DATA, education.onlineCourses[o].dates);
        var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[o].url).replace(DATA, "See online profile")

        $(".online-education-entry:last").append(formattedTitle);
        $(".online-education-entry:last").append(formattedSchool);
        $(".online-education-entry:last").append(formattedDates);
        $(".online-education-entry:last").append(formattedURL);

      }
    }
  }
};


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationizer() {
  var workLocations = [];

  for(var i = 0; i < work.jobs.length; i++) {
    var newLocation = work.jobs[i].location;
    workLocations.push(newLocation);
  }
      return workLocations;
}

function map () {
  $("#mapDiv").append(googleMap);
}


bio.display();
work.display();
projects.display();
education.display();
map();
