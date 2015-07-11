angularResources.factory('ResourcesFactory', function ResourcesFactory(){
	var factory = {};

	factory.persons = [];
	
	factory.addPerson = function(){
		var person = { 
			name: factory.personName,
		    occupation: factory.personOccupation,
			id: factory.persons.length+1,
			books: [],
		};

		factory.persons.push(person);
		factory.personName = "";
		factory.personOccupation = "";
	};

	factory.deletePerson = function(person){
		var index = factory.persons.indexOf(person);
		factory.persons.splice(index,1);
	};

	factory.books = [
	{
		title: "2001: A Space Odyssey",
		description: "A space novel"
	},
	{
		title: "The Great Houndini",
		description: "Dont box me in he said"
	}];

	factory.addBook = function(){
		factory.books.push(
		{
			title : factory.bookTitle,
			description: factory.bookDescription
		});
		factory.bookTitle = null;
		factory.bookDescription = null;
	};
	factory.deleteBook = function(book){
		var index= factory.books.indexOf(book);
		factory.books.splice(index,1);
	};

	factory.websites = [
	{
		name: "AngularJS",
		url: "https://angularjs.org/"
	}
	];
	

	factory.addWebsite = function(){
		factory.websites.push(
		{
			name: factory.websiteName,
			url: factory.websiteURL
		});
		factory.websiteName = null;
		factory.websiteURL = null;
	};

	factory.deleteWebsite = function(website){
		var index = factory.websites.indexOf(website);
		factory.websites.splice(index,1);
	};

	factory.organizations = [
		{
			name: "meetup",
			id: 0,
			members: ["Tom"],
		}
	];
	factory.addOrganization = function(){
		factory.organizations.push(
		{
			name: factory.organizationName,
			id: factory.organizations.length + 1,
			members: [],
		});
		factory.organizationName = null;
	};

	factory.deleteOrganization = function(organization){
		var index = factory.organizations.indexOf(organization);
		factory.organizations.splice(index,1);
	}

	return factory;
})