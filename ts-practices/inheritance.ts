class WebPage {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    displayPage(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }
}
class HomePage extends WebPage {
    constructor() {
        super("Home", "Welcome to our website!");
    }
    displayWelcomeMessage(): void {
        console.log("This is the home page of our amazing website.");
    }
}
class ContactPage extends WebPage {
    constructor() {
        super("Contact Us", "Feel free to reach out to us!"); 
    }
    displayContactForm(): void {
        console.log("Contact Form: [Name] [Email] [Message]");
    }
}
const homePage = new HomePage();
homePage.displayPage();             
homePage.displayWelcomeMessage();   

const contactPage = new ContactPage();
contactPage.displayPage();          
contactPage.displayContactForm();   

