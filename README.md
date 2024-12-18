# CM-Kiosk-CMJ
Extension pour navigateur web Chromium/Google Chrome spécifique pour la consultation de la [collection en ligne](https://collection.museejenisch.ch) du Musée Jenisch via une borne tactile en mode kiosk.

# Fonctionnalités

## Clavier virtuel

Clavier virtuel français-suisse (qwertz) basée sur l'extension [FX-OSK](https://github.com/TravFitz/Firefox-On-Screen-Keyboard). Le clavier apparaît automatiquent lorsque l'on se positionne sur un champ de formulaire. Un bouton `Accueil` permet de revenir sur la page de base collection.museejenisch.ch et un bouton `Fermer` permet de masquer le clavier.

## Boutons de navigation

Boutons de navigation `Retour` et `Accueil` qui permettent de revenir en arrière ou sur la page d'accueil. Les boutons sont toujours visible en bas à droite de l'écran.

## Options de l'extension

- Taille du clavier virtuel en pourcentage de l'écran
- Pavé numérique
    - Sélection automatique (selon type de champ par défaut mais le code a été modifier pour que le clavier complet s'affiche pour tous les types de champ)
    - Désactivé
    - Toujours utiliser le pavé numérique (reste du clavier désactivé)

# Fonctionnalités futures

- Permettre de choisir le page d'accueil depuis les options de l'extension qui se répercutera sur les boutons `Accueil` du clavier et de la navigation.
- Permettre de désactivé les boutons de navigation depuis les options de l'extension.
- Supprimer tous les `target="_blank"` des liens dans les pages plutôt que d'utiliser l'extension dédiée [Death To _blank](https://chromewebstore.google.com/detail/death-to-blank/gneobebnilffgkejpfhlgkmpkipgbcno)