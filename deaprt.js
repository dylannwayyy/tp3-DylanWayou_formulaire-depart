/** 
 * @file Méthodes et fonctions utiles pour la validation de la brochure
 * @author Dylan Wayou
 * @version 1.0.0
 */

 document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Sélection des champs
    const prenomInput = document.getElementById("prenom");
    const nomInput = document.getElementById("nom");
    const courrielInput = document.getElementById("courriel");
    const codeRegionalInput = document.getElementById("code-regional");
    const numeroInput = document.getElementById("numero");
    const adresseInput = document.getElementById("adresse");
    const paysSelect = document.getElementById("pays");
    const provinceSelect = document.getElementById("province");
    const codePostalInput = document.getElementById("code_postal");

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const PHONE_REGEX = /^[0-9]{3}-[0-9]{7}$/; // Format : 418-1234567
    const POSTAL_CODE_REGEX = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/; // Format canadien A1A 1A1

    // Fonction pour afficher/masquer une erreur
    function showError(errorId, condition) {
        document.getElementById(errorId).style.display = condition ? "block" : "none";
        return !condition;
    }

    // Vérifie si un champ est vide (sans espaces)
    function validateNotEmpty(input, errorId) {
        return showError(errorId, input.value.trim() === "");
    }

    // Vérifie un champ avec une regex
    function validateRegex(input, regex, errorId) {
        return showError(errorId, !regex.test(input.value.trim()));
    }

    // Vérifications lors du blur (quand l'utilisateur quitte le champ)
    prenomInput.addEventListener("blur", () => {
        validateNotEmpty(prenomInput, "prenom-required");
        validateRegex(prenomInput, /^[\p{L}\s\-']+$/, "prenom-invalid");
    });
    nomInput.addEventListener("blur", () => {
        validateNotEmpty(nomInput, "nom-required");
        validateRegex(nomInput, /^[\p{L}\s\-']+$/, "nom-invalid");
    });
    courrielInput.addEventListener("blur", () => {
        validateNotEmpty(courrielInput, "courriel-required");
        validateRegex(courrielInput, EMAIL_REGEX, "courriel-invalid");
    });
    codeRegionalInput.addEventListener("blur", () => {
        validateNotEmpty(codeRegionalInput, "code-regional-required");
    });
    numeroInput.addEventListener("blur", () => {
        validateNotEmpty(numeroInput, "numero-required");
        validateRegex(numeroInput, PHONE_REGEX, "numero-invalid");
    });
    adresseInput.addEventListener("blur", () => {
        validateNotEmpty(adresseInput, "adresse-required");
    });
    paysSelect.addEventListener("change", () => {
        if (paysSelect.value === "") {
            showError("pays-required", true);
        } else {
            showError("pays-required", false);
        }
    });
    codePostalInput.addEventListener("blur", () => {
        validateNotEmpty(codePostalInput, "code-postal-required");
        validateRegex(codePostalInput, POSTAL_CODE_REGEX, "code-postal-invalid");
    });

    // Vérification lors de la soumission du formulaire
    form.addEventListener("submit", function (event) {
        let valid = true;

        valid &= validateNotEmpty(prenomInput, "prenom-required");
        valid &= validateNotEmpty(nomInput, "nom-required");
        valid &= validateNotEmpty(courrielInput, "courriel-required") &&
                 validateRegex(courrielInput, EMAIL_REGEX, "courriel-invalid");
        valid &= validateNotEmpty(codeRegionalInput, "code-regional-required");
        valid &= validateNotEmpty(numeroInput, "numero-required") &&
                 validateRegex(numeroInput, PHONE_REGEX, "numero-invalid");
        valid &= validateNotEmpty(adresseInput, "adresse-required");
        valid &= validateNotEmpty(codePostalInput, "code-postal-required") &&
                 validateRegex(codePostalInput, POSTAL_CODE_REGEX, "code-postal-invalid");

        if (paysSelect.value === "") {
            showError("pays-required", true);
            valid = false;
        }

        if (provinceSelect.value === "") {
            showError("province-required", true);
            valid = false;
        }

        // Empêcher la soumission si des erreurs
        if (!valid) {
            event.preventDefault();
        }
    });
});