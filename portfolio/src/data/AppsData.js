import weatherapp from "../assets/weatherapp.png";
import topstyle from "../assets/topstyle.png";
import bankAPI from "../assets/bankAPI.png";

const AppsData = [
    {
        Title: "Weather app",
        Description: `Frontend weather app made without using styling frameworks (Frontend2 course). 
            The API used is AccuWeather and is limited to 25 calls a day, so if the app is not working please wait until tomorrow :)`,
        Image: weatherapp,
        ViewLink: "",
        CodeLink: "https://github.com/Alice-Az/WeatherApp",
    },
    {
        Title: "TopStyle",
        Description: `Online shop simulation with product search and ordering functionalities (Frontend2 course). Material UI was used for the styling.
            The requests go local API (minimal API) and the data is stored in a local database. No kind of identity/security involved`,
        Image: topstyle,
        ViewLink: "",
        CodeLink: "",
    },
    {
        Title: "BankAPI",
        Description: `Backend for a bank app using controller-based API (ASP.NET1 course). 
            Authorization and authentication using Core Identity and JWT.`,
        Image: bankAPI,
        ViewLink: "",
        CodeLink: "https://github.com/Alice-Az/Uppgift3-Bank",
    },
];

export default AppsData;
