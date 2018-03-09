# Conception d'une BDD

## Outil: Les dépendances fonctionnelles (Cf la suite).
## Motivation: T(NomFournisseur, AdrF,NomProduit,Prix).

On a les infos suivantes:
- Deux fournisseurs ont deux noms différents
- Un fournisseur a une seule adresse.
- 2 produits ont des noms différents.
- Un produit peut être proposé à différents prix par différents fournisseurs.
- Un produit n'est proposé qu'à un seul prix par fournisseur

Problème de cette table:
- Redondance de l'adresse:

    L'adresse d'un fournisseur et stockée autant de fois qu'il ne propose de produits

- Anomalie d'insertion:

    Comment ajouter un fournisseur qui ne propose pas de produits ? Introduction de valeurs null.

- Anomalie de suppression:

    Supprimer les produits proposés par F1 fait disparaitre F1 de T.