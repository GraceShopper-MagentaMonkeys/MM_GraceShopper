// const Product = require('../server/db/models/Product');

const products = [
  ///////////// STYlE
  {
    name: 'Shearling Bath Robe',
    price: 9000,
    description: 'Parakeet green, genuine shearling bathrobe. Made in Italy',
    quantity: 10,
    imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212798M219236_1/bottega-veneta-green-teddy-shearling-robe.jpg',
    category: 'style'
  },  {
    name: 'Lambskin Leather Trouser',
    price: 2500,
    description:  'Black leather pants with wide leg and interior satin lining, made in Italy',
    quantity: 5,
    imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212379M189002_1/marni-black-lambskin-pants.jpg',
    category: 'style'
  },

  {
    name: 'Black Hand-Knitted Cardigan',
    price: 4000,
    description: 'Black high-quality lambswool sweater with hand-sewn applique detail, made in Japan',
    quantity: 10,
    imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212968M200001_1/mastermind-world-black-cashmere-graphic-cardigan.jpg',
    category: 'style'
  },
  {
    name: 'Black Chelsea Boots in Crocodile Leather',
    price: 3000,
    description: 'Black crocodile leather boots, made in Australia',
    imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212076M228001_1/tom-ford-black-croc-chelsea-boots.jpg',
    quantity: 10,
    category: 'style'
  },
  {
    name: 'Beige Cashmere Socks',
    price: 700,
    description: 'Beige Cashmere Socks with tonal rib-knit details. Made in Italy',
    imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212887M220002_1/brunello-cucinelli-beige-cashmere-rib-knit-socks.jpg',
    quantity: 15,
    category: 'style'
  },
  //////////////////////////////////// HOME
  {
    name:'Off-White Leather & Amber Scented Candle',
    price: 300,
    description: 'Hand-poured beeswax-blend candle in lacquered off-white glaze. Fragrance notes of leaf, leather, and amber. Handcrafted in Japan',
    imageUrl: 'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212881M618002_1/marloe-marloe-off-white-leather-and-amber-scented-candle-450g.jpg',
    quantity:15,
    category: 'home',
  },
  {name:'3-Pack Pencil Set',
    price:80,
    description:'Thom Browne set of three wood pencils in yellow. Gold-tone logo stamp. Imported',
    imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211381M489803_1/thom-browne-yellow-rwb-4-bar-pencil-set.jpg',
    quantity:15,
    category:'home',},
  {name:'Multicolor Super Blanket',
    price: 2350,
    description:'Hand-loomed knit cashmere blanket in striped multicolor with raised seams.',
    imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211014M489044_1/the-elder-statesman-ssense-exclusive-multicolor-super-duper-blanket.jpg',
    quantity: 10,
    category:'home',},
  {name:'Gunmetal Lamp',
    price: 3500,
    description:'Polished stainless steel table lamp in brushed gunmetal with wood base.',
    imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211743M489006_1/hervet-manufacturier-gunmetal-astrolux-lamp-eu.jpg',
    quantity:5,
    category:'home',},
  {name:'Eames Lounge Chair and Ottoman',
    price: 5000,
    description: 'Parisian soft leather lounge chair set constructed with molded wood and mid-century modern design.',
    imageUrl:'https://images.hermanmiller.group/m/3473ace6076ec212/W-HM_5667_100206391_white_ash_ochre_p.png?trim=auto&blend-mode=darken&blend=f8f8f8&trim-sd=1&bg=f8f8f8&auto=format&w=1000&q=70&h=1000',
    quantity: 5,
    category:'home',},

    //food/drink
    {
      name:'Teapot',
      price: 300,
      description: 'Beige stoneware teapot with organic bamboo handle and lid',
      imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212169M609009_1/stelton-theo-teapot-125-l.jpg',
      quantity:15,
      category: 'food/drink',
    },
    {name:'Stainless Steel Coffee Spoon',
      price:60,
      description:'Polished stainless steel spoon with weighted handle',
      imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212578M609000_1/tom-dixon-stainless-steel-brew-coffee-scoop.jpg',
      quantity:20,
      category:'food/drink',},
    {name:'Soda Machine',
      price: 450,
      description:'Polished stainless steel carbonator in black with silver-tone drip tray.',
      imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212038M610003_1/aarke-black-chrome-carbonator-3.jpg',
      quantity: 10,
      category:'food/drink',},
    {name:'Glass Set',
      price: 350,
      description:'Set of two hand-formed glasses. Suitable for both hot and cool liquids. Microwave and dishwasher safe',
      imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212134M610013_1/fferrone-flight-tumbler-glass-set-14-oz---400-ml.jpg',
      quantity:5,
      category:'food/drink',},
    {name:'Concrete Espresso Machine',
      price: 1300,
      description: 'Hand-cast concrete coffee machine with silver-tone and brass hardware.',
      imageUrl:'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211684M489002_1/anza-ssense-exclusive-grey-concrete-espresso-maker.jpg',
      quantity: 15,
      category:'food/drink',},
]


module.exports = products
