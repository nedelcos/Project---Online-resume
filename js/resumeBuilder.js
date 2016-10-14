var bio = {
  "name": "Daniel Nedelcu",
  "role": "Front End Developer",
  "contacts": {
    "mobile": "(0040) 749 540 502",
    "email": "nede.dan@gmail.com",
    "github": "github.com/nedelcos",
    "location": "Bucharest"
  },
  "welcomeMessage": "I am Daniel & I love to build clean, responsive websites",
  "skills": ["awesomeness", "progeamming", "teaching", "JS"],
  "bioPic": "images/me.png"
};

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
  ]
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
  ]
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
  ]
};

var formattedName =
    HTMLheaderName.replace("%data%", bio.name);

var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for(var s = 0; s < bio.skills.length; s++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[s]);
    $("#skills").append(formattedSkill);
  }
}

function displayWork() {
  if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for(var w = 0; w < work.jobs.length; w++) {
      var formattedEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[w].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[w].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[w].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[w].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[w].description);

      var formattedWorkExp = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

      $(".work-entry:last").append(formattedWorkExp);
    }
  }
}

displayWork();


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


projects.display = function() {
  if(projects.projects.length > 0) {
    $("#projects").append(HTMLprojectStart);
    for(var p = 0; p < projects.projects.length; p++) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
      $(".project-entry:last").append(formattedDescription);

      for (var i = 0; i < projects.projects[p].images.length; i++) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};

projects.display();


$("#mapDiv").append(googleMap);
