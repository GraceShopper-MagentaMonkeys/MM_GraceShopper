// const Product = require('../server/db/models/Product');

const products = [
  ///////////// STYlE
  {
    name: "Shearling Bath Robe",
    price: 9000,
    description: "Parakeet green, genuine shearling bathrobe. Made in Italy",
    quantity: 10,
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212798M219236_1/bottega-veneta-green-teddy-shearling-robe.jpg",
    category: "style",
  },
  {
    name: "Lambskin Leather Trouser",
    price: 2500,
    description:
      "Black leather pants with wide leg and interior satin lining, made in Italy",
    quantity: 5,
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212379M189002_1/marni-black-lambskin-pants.jpg",
    category: "style",
  },
  {
    name: "Proenza Schouler Birkenstock",
    price: 420,
    description:
      "Black Birkenstock two-strap sandals in coated patent leather with comfort-fit footbed in smooth calfskin.",
    quantity: 5,
    imageUrl:
      "https://www.birkenstock.com/dw/image/v2/BDXC_PRD/on/demandware.static/-/Sites-master-catalog/default/dw07c57e3e/1022680/1022680_side.jpg?sw=1500&sh=1500",
    category: "style",
  },
  {
    name: "Black Hand-Knitted Cardigan",
    price: 4000,
    description:
      "Black high-quality lambswool sweater with hand-sewn applique detail, made in Japan",
    quantity: 10,
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212968M200001_1/mastermind-world-black-cashmere-graphic-cardigan.jpg",
    category: "style",
  },
  {
    name: "KITON Quilted Parka",
    price: 8400,
    description:
      "Navy shell parka with detachable zipped hood, four front slash and flap pockets. Fully trimmed with suede piping. Both button and two-way zip fastenings. 90% down.",
    quantity: 5,
    imageUrl:
      "https://cache.mrporter.com/variants/images/23841192565792806/in/w1200_q60.jpg",
    category: "style",
  },
  {
    name: "Reese Cooper Cargo Trousers",
    price: 750,
    description:
      "Inspired by the hardwearing and practical gear of firefighters. Green and white cotton cargo trousers. Button and zip fastening.",
    quantity: 10,
    imageUrl:
      "https://cache.mrporter.com/variants/images/13452677151468563/in/w1200_q60.jpg",
    category: "style",
  }
  ,{
    name: "LOEWE Patchwork Hooded Sweatshirt",
    price: 970,
    description:
      "Designed by Jonathan Anderson, this Loewe Sweatshirt features a striking patchwork pattern and zip closure. Cotton jersey rib and body.",
    quantity: 8,
    imageUrl:
    'https://cdn.shopify.com/s/files/1/1464/4082/products/H526Y25J13-MULTICOLOR14047.jpg?v=1625593116',
    category: "style",
  },

  {
    name: "Nike All-Terrain Sneakers",
    price: 175,
    description:
      "Nike performance sneakers with traction sole, flyknit upper, and embroidered swoosh at sides.",
    quantity: 8,
    imageUrl:
    'https://cdn.shopify.com/s/files/1/1464/4082/products/DJ3056-001-ANTHRACITE_3475.jpg?v=1619130978',
    category: "style",
  },
  {
    name: "Mykita Sunglasses",
    price: 575,
    description:
      "Acetate sunglasses with tinted-lens and anti-scratch coating.",
    quantity: 10,
    imageUrl:
    'https://cdn.shopify.com/s/files/1/1464/4082/products/MMRAW019-RAW-SMOKE_73875_62.jpg?v=1602101901',
    category: "style",
  },

  {
    name: "Vintage Pan-Am Airline Bag",
    price: 275,
    description:
      "Blue airline flight bag deadstock from the 1960's. Authentic pre-owned vintage, each item may be different.",
    imageUrl:
      "https://i.pinimg.com/736x/29/a1/65/29a165fe0334e4c57ced21e9405b4433--vintage-airline-vintage-logos.jpg",
    quantity: 3,
    category: "style",
  },
  {
    name: "Black Chelsea Boots in Crocodile Leather",
    price: 3000,
    description: "Black crocodile leather boots, made in Australia",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212076M228001_1/tom-ford-black-croc-chelsea-boots.jpg",
    quantity: 10,
    category: "style",
  },
  {
    name: "Beige Cashmere Socks",
    price: 700,
    description:
      "Beige Cashmere Socks with tonal rib-knit details. Made in Italy",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212887M220002_1/brunello-cucinelli-beige-cashmere-rib-knit-socks.jpg",
    quantity: 15,
    category: "style",
  },
  //////////////////////////////////// HOME
  {
    name: "Off-White Leather & Amber Scented Candle",
    price: 300,
    description:
      "Hand-poured beeswax-blend candle in lacquered off-white glaze. Fragrance notes of leaf, leather, and amber. Handcrafted in Japan",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212881M618002_1/marloe-marloe-off-white-leather-and-amber-scented-candle-450g.jpg",
    quantity: 15,
    category: "home",
  },
  {
    name: "Silver Schnauzer Figuirine",
    price: 5700,
    description:
      "Buccellati's schnauzer has been handcrafted in Italy from silver that's detailed with textured fur and a gold-tone nose. It's a thoughtful housewarming gift or keepsake for any pet lover.",
    imageUrl:
      "https://cache.mrporter.com/variants/images/18706561955675926/in/w1200_q60.jpg",
    quantity: 3,
    category: "home",
  },

  {
    name: "Brass Watering Can",
    price: 125,
    description:
      "Shiny brass watering can in gold-tone with extended spout.",
    imageUrl:
    'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212152M613016_1/modern-sprout-brass-watering-can.jpg',
    quantity: 5,
    category: "home",
  },
  {
    name: "Brass and Mahogany Telescope",
    price: 1580,
    description:
      "Powerful enough for terrestrial viewing and scientific observation, this vintage-inspired 80mm telecrope will make a wonderful addition to your country estate. It features a gold-tone brass case fitted with an exceptional refracting lens",
    imageUrl:
      "https://cache.mrporter.com/variants/images/666467151984104/in/w1200_q60.jpg",
    quantity: 5,
    category: "home",
  },
  {
    name: "3-Pack Pencil Set",
    price: 80,
    description:
      "Thom Browne set of three wood pencils in yellow. Gold-tone logo stamp. Imported",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211381M489803_1/thom-browne-yellow-rwb-4-bar-pencil-set.jpg",
    quantity: 15,
    category: "home",
  },
  {
    name: "Multicolor Super Blanket",
    price: 2350,
    description:
      "Hand-loomed knit cashmere blanket in striped multicolor with raised seams.",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211014M489044_1/the-elder-statesman-ssense-exclusive-multicolor-super-duper-blanket.jpg",
    quantity: 10,
    category: "home",
  },
  {
    name: "Gunmetal Lamp",
    price: 3500,
    description:
      "Polished stainless steel table lamp in brushed gunmetal with wood base.",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211743M489006_1/hervet-manufacturier-gunmetal-astrolux-lamp-eu.jpg",
    quantity: 5,
    category: "home",
  },
  {
    name: "Eames Lounge Chair and Ottoman",
    price: 5000,
    description:
      "Parisian soft leather lounge chair set constructed with molded wood and mid-century modern design.",
    imageUrl:
      "https://images.hermanmiller.group/m/3473ace6076ec212/W-HM_5667_100206391_white_ash_ochre_p.png?trim=auto&blend-mode=darken&blend=f8f8f8&trim-sd=1&bg=f8f8f8&auto=format&w=1000&q=70&h=1000",
    quantity: 5,
    category: "home",
  },

  //food/drink
  {
    name: "SMEG Mixer",
    price: 500,
    description:
      "Die-cast aluminium stand mixer in black and silver-tone. Wire whisk, flat beater, dough hook, and pouring shield included. Ten speeds with smooth-start function.",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212308M611050_1/smeg-black-retro-style-stand-mixer.jpg",
    quantity: 7,
    category: "food-drink",
  },
  {
    name: "CBD Gumdrop Gift Set",
    price: 275,
    description:
      "8-boxes set of premium CBD gumdrops. Each gumdrop is infused with 20mg-organic, hydroponic, hemp-derived CBD.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0848/9354/products/P-Page_UGGB_1000x1000_3f0d1cd7-1802-4a2a-a934-1d39df6bc5dc_1000x.png?v=1634766194",
    quantity: 10,
    category: "food-drink",
  },

  {
    name: "Solid Gold JUUL Case",
    price: 500,
    description:
      "24k Solid gold JUUL case. Does not come with vaping device. Tobacco may cause birth defects.",
    imageUrl:
    'https://static01.nyt.com/images/2018/11/18/fashion/07JUULSKINS/merlin_146057430_d430a621-ba59-4fc8-87b1-f3babc70abbf-superJumbo.jpg',
    quantity: 10,
    category: "food-drink",
  },
  {
    name: "Teapot",
    price: 300,
    description: "Beige stoneware teapot with organic bamboo handle and lid",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212169M609009_1/stelton-theo-teapot-125-l.jpg",
    quantity: 15,
    category: "food-drink",
  },
  {
    name: "Stainless Steel Coffee Spoon",
    price: 60,
    description: "Polished stainless steel spoon with weighted handle",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212578M609000_1/tom-dixon-stainless-steel-brew-coffee-scoop.jpg",
    quantity: 20,
    category: "food-drink",
  },
  {
    name: "Soda Machine",
    price: 450,
    description:
      "Polished stainless steel carbonator in black with silver-tone drip tray.",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212038M610003_1/aarke-black-chrome-carbonator-3.jpg",
    quantity: 10,
    category: "food-drink",
  },
  {
    name: "Glass Set",
    price: 350,
    description:
      "Set of two hand-formed glasses. Suitable for both hot and cool liquids. Microwave and dishwasher safe",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/212134M610013_1/fferrone-flight-tumbler-glass-set-14-oz---400-ml.jpg",
    quantity: 5,
    category: "food-drink",
  },
  {
    name: "Concrete Espresso Machine",
    price: 1300,
    description:
      "Hand-cast concrete coffee machine with silver-tone and brass hardware.",
    imageUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/211684M489002_1/anza-ssense-exclusive-grey-concrete-espresso-maker.jpg",
    quantity: 15,
    category: "food-drink",
  },
];

module.exports = products;
