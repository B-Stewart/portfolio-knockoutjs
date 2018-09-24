//Enable Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Set up SocialLink Class
function SocialLink(icon, link, tooltip) {
  var self = this;
  self.icon = icon;
  self.link = link;
  self.tooltip = tooltip;
}

//Set up Project Class
function Project(name, description, tags, icon, link) {
  var self = this;
  self.name = name;
  self.description = description;
  self.tags = tags;
  self.icon = icon;
  self.link = link;
}

//Set up Category Class
function Category(name, reference, projects) {
  var self = this;
  self.name = name;
  self.reference = reference;
  self.projects = projects;
}

// Overall view model for the app, along with initial state
function AppViewModel() {
  var self = this;

  self.quote = {
    content: "\"There are only two hard things in Computer Science: cache invalidation and naming things.\"",
    author: "Phil Karlton"
  };

  self.socialLinks = [
    new SocialLink("fa-github", "https://github.com/B-Stewart", "GitHub Repositories"),
    new SocialLink("fa-github-alt", "https://gist.github.com/B-Stewart", "GitHub Gists"),
    new SocialLink("fa-bitbucket", "https://bitbucket.org/B-Stewart/", "BitBucket Repositories")
  ];

  self.categories = [
    new Category("Mobile Apps", "mobileapps", [

      new Project("What's For Dinner", "An Android app made for CSCI 335 UI and Design course.",
        ["Java", "Android"], "devicon-android-plain", "https://bitbucket.org/B-Stewart/whats-for-dinner"),

      new Project("Kids' Vacation Countdown", "A published mobile app developed using Ionic 2. Designed to get kids excited for their vacations.",
        ["Ionic", "Android", "iOS", "Angular.JS", "TypeScript", "SASS"], "devicon-typescript-plain", "https://play.google.com/store/apps/details?id=com.swiftsoulinteractive.kids_countdown&hl=en_US"),

    ]),


    new Category("Web Apps", "webapps", [

      new Project("Fixed Data Challenge", "A React.JS coding challenge entry to showcase a specified table component.",
        ["Javascript", "React.JS", "HTML", "CSS"], "devicon-react-plain", "https://github.com/B-Stewart/react-fixed-data-challenge"),
      
      new Project("Portfolio", "The page you are viewing right now. This is a minimalistic web page to show off my projects and learn Knockout.JS",
        ["Javascript", "Knockout.JS", "HTML", "CSS", "Bootstrap"], "devicon-javascript-plain", "https://github.com/B-Stewart/portfolio-knockoutjs"),

      new Project("David Riley Associates", "A design agency I worked with on their site, and many of their client's sites.",
        ["Javascript", "HTML", "CSS", "PHP", "WordPress", "API"], "devicon-wordpress-plain", "http://www.rileydra.com"),

      new Project("Worship Better", "Website designed for church music leaders. Built with the team of Worship Resource Media using React.JS and Ruby on Rails.",
        ["Javascript", "Ruby on Rails", "React.JS", "Node.JS"], "devicon-rails-plain", "https://www.worshipbetter.com/"),

    ]),

    new Category("Java", "java", [

      new Project("Pedometer", "A forked repository to modify a pedometer application for use in Unity as a plugin.",
        ["Java", "Android", "Unity"], "devicon-java-plain", "https://bitbucket.org/B-Stewart/pedometer"),
      
    ]),

    new Category("Ruby", "ruby", [

      new Project("GitHub Archive Challenge", "A submission for GitHub Archive Challenge written in Ruby.",
        ["Ruby"], "devicon-ruby-plain", "https://gist.github.com/B-Stewart/30e449f0c51f38248c90f1db3bd597ed"),
      
    ])

    // new Category("CMS", "cms", [

    //   new Project("Swift Soul Interactive", "A Concrete5 based website to run my personal software distribution, updates, and developer blog.",
    //     ["CMS", "Concrete5", "PHP"], "devicon-php-plain", "http://www.swiftsoulinteractive.com/"),
      
    // ])
  ];

  //Sort categories by alphabet
  self.categories.sort(function(a,b) {
    if(a.name > b.name)
      return 1;
    else if(a.name < b.name)
      return -1;
    else
      return 0;
  })

}
//Apply knockout bindings
ko.applyBindings(new AppViewModel());