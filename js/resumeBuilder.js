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
  "welcomeMessage": "I am Daniel & I love to build clean, responsive websites",
  "skills": ["awesomeness", "progeamming", "teaching", "JS"],
  "bioPic": "images/me.png",
  "display": function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
      $("#header").prepend(formattedName + formattedRole);

    var formattedPic = HTMLbioPic.replace(DATA, bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
      $("#header").append(formattedPic + formattedMessage);

    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
        $("#header").append(formattedLocation);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
          $("#header").append(formattedSkills);
      }
    };

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedFacebook = HTMLfacebook.replace(DATA, bio.contacts.facebook);
    var formattedLinkedIn = HTMLlinkedin.replace(DATA, bio.contacts.linkedin);
    var formattedGitHub = HTMLgithub.replace(DATA, bio.contacts.github);
      $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail);
      $("#topSocial, #footerSocial").append(formattedFacebook + formattedLinkedIn + formattedGitHub);
  }
};

bio.display();

var work = {
  "jobs": [
    {
      "employer": "Tegmark",
      "title": "Web Developer Intern",
      "location": "Bucharest",
      "dates": "June 2016 - Present",
      "description": "I was assigned the task of building a responsive website for a new department, dedicated for VR prductions"
    },
    {
      "employer": "Tegmark",
      "title": "Sys Admin",
      "location": "Bucharest",
      "dates": "September 2015 - Present",
      "description": "I was in charge of administrating the company's websites, web applications and the VPS"
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
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Virtual eXperience",
      "dates": 2016,
      "description": "One-man-job project. The website is built in WordPress, using custom page templates.",
      "images": [
        "images/screen_virtualx.jpg",
        "images/thumb_virtualx.jpg"
      ]
    },
    {
      "title": "Rentador",
      "dates": 2015,
      "description": "Built in WordPress. The site uses custom page templates. Purpose: Rent a Car website",
      "images": [
        "images/screen_rentador.jpg",
        "images/thumb_rentador.jpg"
      ]
    },
    {
      "title": "Panda Project",
      "dates": 2014,
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
      "city": "Bucharest",
      "degree": "BA",
      "majors": "Journalism & Communication",
      "dates": 2012
    },
    {
      "name": "Technical College Campulung",
      "city": "Campulung",
      "degree": "College diploma",
      "majors": "Automatization systems",
      "dates": 2009
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://profiles.udacity.com/u/danielnedelcu"
    },
    {
      "title": "Front End tehniques",
      "school": "CodeAcademy",
      "dates": 2016,
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
        var formattedCity = HTMLschoolLocation.replace(DATA, education.schools[i].city);
        var formattedMajors = HTMLschoolMajor.replace(DATA, education.schools[i].majors);

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedCity);
        $(".education-entry:last").append(formattedMajors);
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

$("#mapDiv").append(googleMap);

work.display();
projects.display();
education.display();
