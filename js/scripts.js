// Class to represent a row in the seat reservations grid
function SocialLink(icon, link) {
  var self = this;
  self.icon = icon;
  self.link = link;
}

function Project(name, description, tags, icon, link) {
  var self = this;
  self.name = name;
  self.description = description;
  self.tags = tags;
  self.icon = icon;
  self.link = link;
  self.openLink = function () {
    window.open(this.link, '_blank');
  }
}

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
    content: "This is my quote.",
    author: "Brayden Stewart"
  };

  self.socialLinks = [
    new SocialLink("fa-github", "https://github.com/B-Stewart"),
    new SocialLink("fa-bitbucket", "https://bitbucket.org/B-Stewart/")
  ];

  self.categories = [
    new Category("Android", "android", [
      new Project("What's For Dinner", "An Android app made for CSCI 335 UI and Design course.",
        ["Java"], "devicon-android-plain", "https://bitbucket.org/B-Stewart/whats-for-dinner"),
    ]),
    new Category("Javascript", "javascript", []),
    new Category(".NET", "dotnet", []),
    new Category("Ruby on Rails", "rubyonrails", [])
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

ko.applyBindings(new AppViewModel());