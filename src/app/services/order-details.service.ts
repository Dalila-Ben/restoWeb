import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

    plats = [
      {
        id:1,
        nomPlat:"Salade de legumes frais et poulet",
        plat:"Salade composée avec des legumes",
        prixPlat:15,
        platImg:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      },
      {
        id:2,
        nomPlat:"Veggie burger",
        plat:"Veggie burger avec frites et sauce maison",
        prixPlat:15,
        platImg:"https://images.unsplash.com/photo-1584283367830-626868ac1dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
      },
      {
        id:3,
        nomPlat:"Bateau de sushis",
        plat:"Assortiment de differents types de sushis",
        prixPlat:35,
        platImg:"https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
      },
      {
        id:4,
        nomPlat:"Couscous",
        plat:"Assiette couscous XL pour 8 personnes",
        prixPlat:45,
        platImg:"https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"
      },
      {
        id:5,
        nomPlat:"Lasagne",
        plat:"Lasagne végétarienne",
        prixPlat:12,
        platImg:"https://images.unsplash.com/photo-1634870487473-15874d3a0f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id:6,
        nomPlat:"Pizza 4 stagioni",
        plat:"Artichaut, mozzarella, champignon",
        prixPlat:15,
        platImg:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      },
      {
        id:7,
        nomPlat:"Salade Fraicheur",
        plat:"Brocolis, olives, oignons rouges et feta",
        prixPlat:11,
        platImg:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id:8,
        nomPlat:"Veggie Tacos",
        plat:"Poids chiches, avocats",
        prixPlat:12,
        platImg:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
      }
    ]

    petitDej = [
      {
        id:1,
        dejNom:"Energy bowl",
        dejDetail:"Smoothie bowl banane, fraises et graines de chia",
        prixDej:8,
        dejImg:"https://images.unsplash.com/photo-1550335430-182e6165c01c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      },
      {
        id:2,
        dejNom:"Pain perdu",
        dejDetail:"Pain perdu avec sirop d'érable, myrtilles et bananes ",
        prixDej:5,
        dejImg:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
      },
      {
        id:3,
        dejNom:"Pancakes",
        dejDetail:"Pancakes avec du sirop d'erable ",
        prixDej:3,
        dejImg:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id:4,
        dejNom:"Gauffres",
        dejDetail:"Gauffres avec du sirop d'erable ",
        prixDej:3,
        dejImg:"https://images.unsplash.com/photo-1594627882045-57465104050f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      },
      {
        id:5,
        dejNom:"Croissant",
        dejDetail:"Croissant avec cappuccino",
        prixDej:3,
        dejImg:"https://images.unsplash.com/photo-1479894127662-a987d1e38f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id:6,
        dejNom:"Avocado toast",
        dejDetail:"Avocado toast avec des oeufs",
        prixDej:10,
        dejImg:"https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
      },

    ]
    
    dessert = [
      {
        id:1,
        dessertNom:"Sugar Brownie",
        dessertDetail:"Browni avec boule de glace à la vanille",
        prixDessert:5,
        dessertImg:"https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      },
      {
        id:2,
        dessertNom:"Donuts",
        dessertDetail:"Donuts, glaçage chocolat ",
        prixDessert:5,
        dessertImg:"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      },
      {
        id:3,
        dessertNom:"CupCake",
        dessertDetail:"Cupcake a la fraise",
        prixDessert:3,
        dessertImg:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        id:4,
        dessertNom:"Cheesecake chocolat",
        dessertDetail:"Cheesecake au chocolat ",
        prixDessert:3,
        dessertImg:"https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
      },
      {
        id:5,
        dessertNom:"Cheesecake myrtilles",
        dessertDetail:"Cheesecake au chocolat",
        prixDessert:4,
        dessertImg:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id:6,
        dessertNom:"Crumble fruits rouges",
        dessertDetail:"Myrtilles, framboises, mûres",
        prixDessert:4,
        dessertImg:"https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      },

    ]
  
}
