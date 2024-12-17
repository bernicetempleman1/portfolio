<!--H1 header with Title -->
# Portfolio for WEB 425 Angular with TypeScript

<!--H2 header for contributors  -->
## Contributors

<!-- Instructor's name  -->
* Professor Richard Krasso 

<!-- Student's name -->
* Bernice Templeman


ng test  
ng serve

 npm install angular-cli-ghpages

 index.html (<base href="/"> or <base href="/portfolio/">)

 angular.json
 "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/portfolio",


ng build --configuration production --base-href=/bernicetempleman1.github.io/portfolio/

ng deploy  ( select gh )
ng deploy --base-href=/portfolio/ --repo=https://github.com/bernicetempleman1/portfolio/

github set to gh-pages

after deployed, change index back and forth for local updates and then for deploy
ng build --configuration production --base-href=/bernicetempleman1.github.io/portfolio/
ng deploy --base-href=/portfolio/ --repo=https://github.com/bernicetempleman1/portfolio/

