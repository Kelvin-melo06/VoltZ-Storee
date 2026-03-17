export const products = [
  {
    id: 1,
    name: "Headset Pro X",
    price: 599.0,
    img: '🎧',
    featured: true,
    offer: false,
  },
  { 
    id: 2, 
    name: "Mouse Gamer Elite", 
    price: 499.9,
    img: '🖱️',
    featured: true,
    offer: false
},
  { 
    id: 3, 
    name: "Mouse Gamer Elite (Oferta)", 
    price: 499.9,
    img: '🖱️',
    featured: false,
    offer:true
},
];

export function getProducts() {
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve(products);
    }, 500);
  });
}
