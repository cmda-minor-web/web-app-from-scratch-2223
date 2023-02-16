# Quotes Api

# Inleiding

De quotes api ging stuk  en ik moest een nieuwe api toevoegen in mijn webappliatie. IK heb gekozen om zelf een api te maken met behulp van google sheets. De google sheet werk als een  backend database. 

## Hoe maak je een eigen Api

Voor mijn project heb ik zelf een api gemaakt met behulp van google sheet en de APi van [Ben Borgers](https://github.com/benborgers/opensheet#readme). Om de spreadsheets een json bestand te maken heb ik een aantal stappen doorgenomen. 

### Stappen

- Data invullen in google sheets
    
   <img src="../images/quote-api-spreadsheet.png">
    
- De header is vetgedrukt en die is de objectnaam. Ik heb ook de eerste row gevriesd want anders krijg foutmelding
- Verder heb ik mijn spreadsheats gepubliceerd op de web
    
    <img src="../images/publish-to-web.png">
    
- De sharing link heb ik iedereen als viewer gegeven. Ik ben de enige met toegang naar het spreadsheet.
- Ik heb de api link van Ben Borgers gebruikt. 
  
   ```
    https://opensheet.elk.sh/spreadsheet_id/tab_name

   ```

- Ik heb  mij spreadsheet code/id and sheet naam aan de link toegevoegd:
```
 https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1
 ```
- De code kun je vinden bij de url van de spreadsheet bestand.

  <img src="../images/json-bestand.png">
Als je deze stappen uitvoert heb je een json bestand met een APi url die je kan fetchen. Een voordeel is dat je data in de spreadsheet  kan toevoegen en wordt de json bestand automatisch aangepast. 

---

### Bronnen
- https://github.com/benborgers/opensheet#readme
- https://benborgers.com/posts/google-sheets-json