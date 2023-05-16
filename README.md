# Web App From Scratch @cmda-minor-web 2023

In this course I will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API, manipulated and finally shown in the UI of the App. You will learn to apply interface principles when building and testing the interface. With the gained knowledge you will be able to build interactive prototypes, based on a user story and real data. Also you will gain a better understanding of how API's, frameworks and libraries work.

## Week 2 - 3 - 4 - Main API Application

User-story: As a League of Legends addict/user, I want to be able to see champion & summoner information about my summoner of choice, so that I don’t have to open a statistics site all the time & being able to see my champions in style 

# Wiki

# Wiki van Safouane.GG

## Het begin

In het begin waren er een aantal userstories waar wij uit mochten kiezen, geen van deze spraken mij echt aan dus heb ik maar mijn eigen userstory aangemaakt. En die gaat als volgt

> User-story: As a League of Legends addict/user, I want to be able to see champion & summoner information about my summoner of choice, so that I don’t have to open a statistics site all the time & being able to see my champions in style
> 

Ik zelf ging dus gebruik maken van de RIOT-API van Riot Games.

## Onderzoek

Er is onderzoek gedaan naar verschillende mogelijkheden om data op te halen, eerst moest ik echter opschrijven/tekenen welke data ik eigenlijk wou laten zien. En daarna pas leek het mij verstandig om te gaan kijken welke endpoints er gebruikt gaan worden van de api.

Zie hier onder mijn “sketches” en mijn oorspronkelijke ideeën.

![IMG_9463.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ce07355-cc2b-4210-9f65-1c6fcd0f8cea/IMG_9463.jpg)

![IMG_9464.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e4a9647-08b8-4373-8d55-8cd1df5c42b1/IMG_9464.jpg)

![IMG_9465.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b478ca74-488e-40d0-97c1-3493144141fc/IMG_9465.jpg)

![IMG_9466.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62239263-7c9e-455e-8cf3-ae0a383538d7/IMG_9466.jpg)

![IMG_9468.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9cf6d6fc-a182-47b4-a755-7dca7632550e/IMG_9468.jpg)

Zoals we kunnen zien, was ik meer bezig met een mobiele applicatie design dan een echte website. Meer over dat later, want het is zeker geen mobiele applicatie geworden.

Maar zoals we kunnen zien willen we dus, 

1. een gebruiker ophalen
2. de gegevens ophalen van zijn ranked seizoen
3. de huidige game weergeven indien hij in game is
4. ranked statistieken van vorige potjes weergeven
5. de status van het spel zelf weergeven
6. de kampioenen die bij deze gebruiker horen ophalen
7. de kampioenen weergeven als portraits

Dus we hebben door deze sketches te maken al een heleboel informatie gekregen over welke api endpoints we misschien zouden kunnen gebruiken. 

## Werkwijze

Ik ben eerst begonnen met het testen van de data die ik kon krijgen, dit heb ik gedaan doormiddel van een playground te maken. 

Die zag er zo ongeveer uit:

![Screenshot 2023-03-09 at 04.58.21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/538821b5-b485-43aa-971c-021567869d38/Screenshot_2023-03-09_at_04.58.21.png)

Hier ging ik de data die ik kreeg via de api testen, zonder dat ik mij zorgen hoefde te maken over styling en andere zaken. Deze manier van werken beviel mij, en zal ik zeker bij de volgende keer ook toepassen. Omdat jij je namelijk alleen bezig houd met de logica van de data etc, dit kan natuurlijk verder in het project veranderd worden maar het is een goeie basis.

Vervolgens heb ik het concept van de sketches uitgewerkt en omgetoverd naar een “mobiele applicatie”.

Die zag er zo ongeveer uit;

![Screenshot 2023-03-09 at 05.01.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ef5549c-c634-49d7-8d82-715a53c86108/Screenshot_2023-03-09_at_05.01.07.png)

Hier was ik dus al vrij ver in het project, ik had werkende data en al een heleboel dingen die we dus hiervoor hadden opgeschreven waren al geïmplementeerd.  

Vervolgens besloot ik om niet verder te gaan met het mobiele project, omdat ik het gevoel had dat ik meer bezig was met het “design” dan met de backend. Dus ik ben overgegaan naar een web applicatie, die ik oke had gestijld en heb laten doen wat het moest doen. Buiten dat hij niet responsive is maar dat moet je op dit moment niet verassen. Ik had deze webapplicatie gebouwd op basis van mijn design in adobe XD. 

Dat zag er ongeveer zo uit:

![Screenshot 2023-03-09 at 05.05.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/debd102c-1339-44c8-aba9-43931f94eae7/Screenshot_2023-03-09_at_05.05.49.png)

![Screenshot 2023-03-09 at 05.06.08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4778961-26c2-4078-bbe4-f3f4460cbf10/Screenshot_2023-03-09_at_05.06.08.png)

![Screenshot 2023-03-09 at 05.06.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4b7e5cf-ec21-4a6f-9a50-0e793d027521/Screenshot_2023-03-09_at_05.06.26.png)

Dit was overigens de eerste keer dat ik aan de slag ben gegaan met Adobe XD, en ik vind het een fijn programma om mee te werken. En het hielp mij deels met het vormgeven van de werkende website die er uiteindelijk zo uit is gaan zien.

[https://www.youtube.com/watch?v=5nlV8y-Yml4](https://www.youtube.com/watch?v=5nlV8y-Yml4)

Er zijn natuurlijk nog genoeg dingen die aangepast moeten worden, maar dat zie je vanzelf wel verschijnen in de *Bonus things that I will implement / working on. /*

In de github repository readme file.

[GitHub - SafouaneM/web-app-from-scratch-2223: In the course Web App From Scratch I'll learn to build web applications with vanilla HTML, CSS & JavaScript, without frameworks or unnecessary libraries. Web App From Scratch is part of the half year minor programme about Web Design and Development in Amsterdam. Bachelor Communication and Multimedia Design, Amsterdam University of Applied Science](https://github.com/SafouaneM/web-app-from-scratch-2223)

Nu we dit allemaal besproken hebben lijkt het mij handig om wat dieper in de code te gaan duiken dit doen we op een andere pagina.



## Assets: 
1. https://developer.riotgames.com/apis
2. https://developer.riotgames.com/docs/lol
3. https://raw.communitydragon.org/
## Voorbeeld champion ophalen: 
1. Alle champs: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json
2. 1 Champion: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion/Aatrox.json

<!-- Add a link to your live demo in Github Pages 🌐-->
### - Weblink 🔗 - If you feel the need to look what I've been doing,
#### - https://safouanem.github.io/web-app-from-scratch-2223/spa/public/final/webapp.html

- I tried to make an u.gg/op.gg clone for myself, and to my surprise I was able to finish more than I expected in the Wiki? I got a bit more in depth about the structure of the code etc.

### Installation
```text
git clone git@github.com:SafouaneM/web-app-from-scratch-2223.git
```
And you should be good to go now, do not forget to implement your own api key in the api.js.
You can request an api key from this url, it'll take no longer then 1 minute to generate one 
#### !(Do note you need a riot games account to generate a key.)!


### Bonus things that I will implement / working on
- [] Autocomplete when you're looking for a summoner
- [~] Champion rotation as the default state
- [] Ranked solo and flex queue last played games and data about said games.
- [] Responsive design 🤪🤪🤪
