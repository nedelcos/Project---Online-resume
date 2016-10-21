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
      did research & documentation on how the business works and created the content (copywriting) for the website. "
    },
    {
      "employer": "Tegmark",
      "title": "System Administrator",
      "location": "Bucharest",
      "dates": "November 2015 - Present",
      "description": "I was in charge of administrating the company's websites, web applications and the VPS hosting."
    },
    {
      "employer": "nEAT Office",
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

        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Virtual X",
      "dates": "2016",
      "demo": "virtualx.space", //type just the domain ( example.com )
      "description": "One-man-job project. For easy content management purposes, the website is built in WordPress, using custom page templates.",
      "images": [
        "images/thumb_virtualx.jpg",
        "images/screen_virtualx.jpg"
      ]
    },
    {
      "title": "Rentador",
      "dates": "2015",
      "demo": "rentador.ro",
      "description": "Built in WordPress,, using a customized theme. The site uses custom page templates. Purpose: Rent a Car website",
      "images": [
        "images/thumb_rentador.jpg",
        "images/screen_rentador.jpg"
      ]
    },
    {
      "title": "Panda Project",
      "dates": "2014",
      "demo": "pandaproject.ro",
      "description": "Built in Joomla, the website is based on a template wich I customized as requested and it is for a Direct Marketing agency.",
      "images": [
        "images/thumb_panda.jpg",
        "images/screen_panda.jpg"
      ]
    }
  ],
  "display": function() {
    if(projects.projects.length > 0) {

      for(var p = 0; p < projects.projects.length; p++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[p].dates);
        var formattedDemo = HTMLprojectDemo.replace(DATA, projects.projects[p].demo).replace("%data2%", projects.projects[p].demo);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[p].description);

        for (var i = 0; i < projects.projects[p].images.length; i++) {
          var formattedImageThumb = HTMLprojectImage.replace(DATA, projects.projects[p].images[0]).replace('%number%', p);
          var formattedImageScreen = HTMLprojectImage2.replace(DATA, projects.projects[p].images[1]);
            $(".project-entry:last").append(formattedImageThumb);
        }
        var formattedModal = HTMLmodal.replace('%number%', p);

        $("body:last").append(formattedModal);
        $(".modal-title:last").append(formattedTitle);
        $(".modal-body:last").append(formattedImageScreen);
        $(".modal-body:last").append(formattedDescription);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDemo);
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
