# Autoévaluation
__TP3 - Intégration d'un formulaire accessible__

Compléter cette autoévaluation au fur et à la mesure. 

--- 

__Barème :__ 
A = 100%, (Tout les sous-critères respectés, réussite complète)
B = 85%, (Presque tous les critères respectés)
C = 75%, (Quelques lacunes)
D = 65%, (Atteinte minimale du critère)
E = 55% (Lacunes majeures) 

---

## Critères
__HTML__ X sur 5
- [ ] balises structurelles et balises sémantiques 
Page bien structuré avec un `header`, un `main` et un `footer`.
Faire le bon choix du type de `input`, par exemples le courriel doit être de `type` "email"
- [ ] code html *valide* 
Faire une capture-écran avant-après ou juste après pour prouver que le document ne comporte aucune erreur. Les simples avertissements ne comptent pas comme des erreurs.
- [ ] regroupements, étiquetage 
Balise `fieldset` pour grouper et balise `legend` pour étiqueter le groupe.  
Balise `label` relié au `input` par son attribut `for` dont la valeur est celle du `id` du champ de saisie.
Les images doivent possèder un attribut alt bien documenté.
- [ ] contraintes de saisie 
Bien utiliser les attributs: `required`, `pattern` et `title`. 
- [ ] prévoir des balises `p.erreur`pour recevoir les messages d'erreur ou d'encouragement de la validation JavaScript. Ces balises `p.erreur` doivent avoir un parent ou ancêtre commun avec l'élément ou les éléments de formulaire à valider. Ce parent ou ancêtre doit avoir la classe `.ctnValidation`. Exemple pour le cas d'un seul élément:
```html
    <div class="adresse ctnValidation">
        <p>
            <label for="adresse">Adresse</label>
            <input id="adresse" name="adresse" type="text" required>
        </p>
        <p class="erreur"> </p>
    </div>

```
Dans les cas ou la validation porte sur un groupe d'éléments de formulaire comme pour des boutons radio, on placera la classe  `.ctnValidation` sur le `fieldset`.
  
__CSS__ X sur 7
- [ ] mobile first  
Les règles pour l'écran étroit sont écrites en premier et on imbrique les requêtes medias de manière à obtenir tout de suite après dans la css les variantes pour l'écran large 
- [ ] styles de base, alignements, apparence du formulaire. Les champs de saisie doivent être alignés. La variante pour l'écran large pourra être enrichie par rapport à la version de l'écran étroit.
- [ ] styles interactivité  
Lorsqu'un élément de formulaire reçoit le focus son apparence doit changer pour le mettre en évidence.
Le bouton de soumission et les hyperliens doivent avoir des états survol
- [ ] styles des boutons radio 
Les boutons radio sont visuellement cachés mais accessibles. Ce sont leurs étiquettes (`label`)qui affichent des états normal, focus, hover et checked.
- [ ] les champs de saisie (`input`) doivent être de trois longueurs normées par les classes : 
```css
  /* Dimensions des champs de saisie */
  .largeur-100 {
    width: 100%;
  }
  .largeur-50 {
    width: 48%;
  }
  .largeur-30 {
    width: 30%;
  }
```
- [ ] Avoir défini et utiliser des variables au minimum pour les couleurs principales. Exemple:
```css
/***************** Variables CSS *****************/
:root {
  --couleur-principale: #aeafb0; 
  --couleur-secondaire:#f8f9fa;
}
main { 
    background-color: var(--couleur-secondaire); 
}
``` 
- [ ] Avoir bien diviser la css et avoir une table des matières à jour et navigable avec la fonction de recherche
  
__NAVIGATION ACCESSIBLE__ X sur 3 
- [ ] navigation au clavier du formulaire (+1)
Avec la touche `tab` on doit pouvoir parcourir le formulaire dans le bon ordre et pouvoir soumettre le formulaire avec la touche `enter`.
- [ ] ajout du lien "allez au contenu" (+0.5)
Tout de suite après l'ouverture du `body`doit se trouver un lien permettant d'aller directement au contenu principal. Ce lien aura pour classes `screen-reader-only` et `focussable`.
- [ ] ajout des attributs `role` aux régions (landmarks) (+0.5)
Ajouter l'attribut role sur le `header`(`banner`) et le `footer`(`content-info`).

__JAVASCRIPT__ (Évalué dans le cours de prog) 
- [ ] vérifier que les champs de saisie ne sont pas vides;
afficher un message d'erreur 
- [ ] vérifier que les données sont conformes au type attendu
afficher un message d'erreur 

__BONUS__ X sur (1 point)  
- [ ] expliquer ci-dessous la valeur ajoutée. Si vous avez utilisé du code dont vous n'êtes pas l'auteur, mentionner vos sources. Pareil si vous avez utilisé une IA. 

__TOTAL__ 
X sur 15

---

## Commentaire de la personne étudiante et calcul de la note estimée

---
---
---


---

## AJOUTER un FAVICON pour le formulaire d'Alaïa!
- choisir (ou créer) une icône qui servira de favicon
- utiliser https://favicon.io/favicon-converter/
- placer selon les instructions les icones générées dans la structure de répertoires du projet
- copier-coller dans le `<head>` du document les balises `<link>` générés par l'outil en ligne
- modifier les chemins de fichiers en enlevant la "**/**" initiale
- ouvrir le fichier site.webmanifest
- utiliser **Prettier** pour déployer la structure du fichier json
- ajouter une valeur pour le name et le short_name:
```json
"name": "TP3 - formulaire accessible - Alaïa",
"short_name": "tp3",
```
- corriger les chemins de fichier comme précédemment en enlevant la "**/**" initiale. Exemple:
```json
"src": "android-chrome-192x192.png"
```