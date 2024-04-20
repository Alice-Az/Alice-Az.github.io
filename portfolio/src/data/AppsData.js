import weatherapp from "../assets/weatherapp.png";
import topstyle from "../assets/topstyle.png";
import bankAPI from "../assets/bankAPI.png";
import recipeAPI from "../assets/recipeAPI.png";

const AppsData = [
    {
        Id: "1",
        Title: "TopStyle",
        Description: `Online shop simulation with product search and ordering functionalities (Frontend2 course). Material UI was used for the styling.
            The requests go through minimal API and the data is stored in a database (both hosted in Azure). JWT is used for authorization.`,
        Image: topstyle,
        ViewLink: "https://purple-grass-07071e403.5.azurestaticapps.net/",
        CodeLink: "https://github.com/Alice-Az/TopStyle",
    },
    {
        Id: "2",
        Title: "Weather app",
        Description: `Frontend weather app made without using styling frameworks (Frontend2 course). 
            The API used is AccuWeather and is limited to 25 calls a day, so if the app is not working please wait until tomorrow :)`,
        Image: weatherapp,
        ViewLink: "https://proud-sea-033be9d03.5.azurestaticapps.net",
        CodeLink: "https://github.com/Alice-Az/WeatherApp",
    },
    {
        Id: "3",
        Title: "Bank API",
        Description: `Backend for a bank app using controller-based API (ASP.NET1 course). 
            Authorization and authentication using Core Identity and JWT.`,
        Image: bankAPI,
        ViewLink: null,
        CodeLink: "https://github.com/Alice-Az/Uppgift3-Bank",
    },
    {
        Id: "4",
        Title: "Recipe API",
        Description: `Backend for a recipe app using controller-based API (first project of the ASP.NET1 course). 
            Authorization not included.`,
        Image: recipeAPI,
        ViewLink: null,
        CodeLink: "https://github.com/Alice-Az/Uppgift1-RecipeDB",
    },
];

export default AppsData;
