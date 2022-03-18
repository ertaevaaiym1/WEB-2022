export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    imge: "https://m.media-amazon.com/images/I/81vNiROdiIL._SL1500_.jpg",
    name: "Listerine Total Care",
    price: 6.87,
    description: "Listerine Fluoride Anticavity Mouthwash in fresh mint flavor to improve oral health by helping to prevent cavities, strengthening teeth, and leaving a refreshing, clean feeling you can taste",
    link: "https://www.amazon.com/Listerine-Anticavity-Mouthwash-Fluoride-Packaging/dp/B00495Q5OW/ref=lp_16225006011_1_7"
  },
  {
    id: 2,
    imge: "https://m.media-amazon.com/images/I/91FIbLIsttL._SL1500_.jpg",
    name: "Colgate Cavity Protection Toothpaste with Fluoride -White 6 Ounce (Pack of 6)",
    price: 7.92,
    description: "Fluoride toothpaste fights and protects against cavities for healthier teeth. Clinically proven to strengthen teeth enamel and cleans teeth thoroughly",
    link: "https://www.amazon.com/Colgate-Cavity-Protection-Toothpaste-Fluoride/dp/B01BNEWDFQ/?_encoding=UTF8&pd_rd_w=0sBPe&pf_rd_p=f0d3ae64-6f7b-4708-84cf-e7a72756cefd&pf_rd_r=WMGR60TPT0TZ4QMYSWAN&pd_rd_r=3c5ea007-86d0-459e-b0f6-6793faf9407e&pd_rd_wg=Y5jsv&ref_=pd_gw_exports_top_sellers_unrec"
  },
  {
    id: 3,
    imge: "https://m.media-amazon.com/images/I/8110-qC+fHL._AC_SL1500_.jpg",
    name: "Philips Sonicare Genuine Optimal Plaque Control Replacement Toothbrush Heads, BrushSync™ Technology, 2 Brush Heads, White, HX9023/65",
    price: 29.94,
    description: "Genuine Philips Sonicare rechargeable electric toothbrush replacement heads compatible with all Philips Sonicare click-on rechargeable toothbrush handles",
    link: "https://www.amazon.com/Philips-Sonicare-replacement-toothbrush-HX9023/dp/B078BF27BF/ref=sr_1_21?pd_rd_r=9e6e0723-5fa2-4e3c-a503-823596392e9d&pd_rd_w=K1Y5C&pd_rd_wg=Um91z&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=RX7FC9E8FYCV1347QTK8&qid=1647104809&s=beauty-intl-ship&sr=1-21"
  },
  {
    id: 4,
    imge: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg",
    name: "Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
    price: 139.97,
    description: "24' Ultra slim profile Contemporary sleek metallic design Slim bezel with thin chassis. Power Range (V, A, Hz)- AC-DC Adapter Input 100 – 240 VAC, 50/60 Hz, 1.0A (Max.) Output - 12V DC, 2.5A. Power Consumption (Typical)- 25.4W. Neck/Stand",
    link: "https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=lp_16225007011_1_3?th=1"
  },
  {
    id: 5,
    imge: "https://m.media-amazon.com/images/I/713siPvPt1L._AC_SL1500_.jpg",
    name: "Corsair K100 RGB Optical-Mechanical Gaming Keyboard - Corsair OPX RGB Optical-Mechanical Keyswitches - AXON Hyper-Processing Technology for 4X Faster Throughput - 44-Zone RGB LightEdge",
    price: 199,
    description: "The CORSAIR K100 RGB is the pinnacle of CORSAIR keyboards, offering the cutting-edge performance, style, durability, and customization that gamers need to stand above the rest",
    link: "https://www.amazon.com/Corsair-K100-Optical-Mechanical-Gaming-Keyboard/dp/B08HR74WV4/ref=sr_1_6?keywords=gaming%2Bkeyboard&pd_rd_r=9e6e0723-5fa2-4e3c-a503-823596392e9d&pd_rd_w=ff3xL&pd_rd_wg=Um91z&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=RX7FC9E8FYCV1347QTK8&qid=1647106405&sr=8-6&th=1"
  },
  {
    id: 6,
    imge: "https://m.media-amazon.com/images/I/719xZ3BkIVL._AC_SL1500_.jpg",
    name: "SanSui 24-Inch 720p HD LED Smart TV (S24P28DN) with Built-in HDMI, USB, High Resolution, Digital Noise Reduction, DC 12V Enable",
    price: 159.99,
    description: "Superb Visual Experience: Built with HD panel for crisp and detailed visuals when playing compatible multimedia content, make your eyes more comfortable when you are watching images, relieving the fatigue caused by a long-time watch",
    link: "https://www.amazon.com/24-Inch-S24P28DN-Resolution-Digital-Reduction/dp/B09PFBDK4S/ref=sr_1_13_sspa?field-shipping_option-bin=3242350011&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=85a9188d-dbd5-424e-9512-339a1227d37c&pf_rd_r=WMGR60TPT0TZ4QMYSWAN&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647106763&rnid=1266092011&s=electronics&sr=1-13-spons&psc=1&smid=A1OEOGO3WCB7XI&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzR0ZSUTA4MDJKTU1TJmVuY3J5cHRlZElkPUEwNDM5MzgwMkRVWE1KUUJJME04OCZlbmNyeXB0ZWRBZElkPUEwNDE3MjkzMjY4Nk5ORkIzTkhZUiZ3aWRnZXROYW1lPXNwX210Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 7,
    imge: "https://m.media-amazon.com/images/I/81CfC2qQFdL._AC_SL1500_.jpg",
    name: "Impecca 24 Inch LED HD TV Monitor TL2400H Energy Star Slim Design 720p, Built-in Speakers with Multiple Imputes HDMI, USB Ports, and Remote, Wall Mountable",
    price: 144.97,
    description: "Instantly enjoy endless entertainment with the Impecca 24” LED TV! Experience breathtaking picture quality for stunning clarity, deep contrast, and vivid colors. Watch movies and TV shows come to life, Dolby Vision enhances picture quality with an expanded range of contrast and superior brightness. Connect easily with HDMI input, and multiple input/output options. This TV is HDR-compatible, so you can enjoy HDR movies and TV shows",
    link: "https://www.amazon.com/Impecca-Monitor-Speakers-Multiple-Mountable/dp/B08KGZ651F/ref=sr_1_14_sspa?field-shipping_option-bin=3242350011&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=85a9188d-dbd5-424e-9512-339a1227d37c&pf_rd_r=WMGR60TPT0TZ4QMYSWAN&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647106763&rnid=1266092011&s=electronics&sr=1-14-spons&smid=A2SMIOPIX6968Y&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzR0ZSUTA4MDJKTU1TJmVuY3J5cHRlZElkPUEwNDM5MzgwMkRVWE1KUUJJME04OCZlbmNyeXB0ZWRBZElkPUEwNzg3MzA4MzE1WDZFM1ZZUzZFUSZ3aWRnZXROYW1lPXNwX210Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
  },
  {
    id: 8,
    imge: "https://m.media-amazon.com/images/I/71IywmQMCTL._AC_SL1500_.jpg",
    name: "Amazon Basics 8-Sheet Cross-Cut Paper and Credit Card Home Office Shredder, Quiet Working with 4.1-Gallon Bin, Black",
    price: 35.67,
    description: "Cross-cut shredder turns paper into confetti-like pieces measuring 3/16 by 1-27/32 inches (5 by 47 mm); meets security level P-3 standards",
    link: "https://www.amazon.com/AmazonBasics-8-Sheet-Cross-Cut-Credit-Shredder/dp/B00YFTHJ9C/ref=sr_1_1?keywords=amazonbasics&pd_rd_r=cd66d2b4-1d49-417f-9cdc-70c34e501f60&pd_rd_w=uNjLY&pd_rd_wg=nw4pe&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=WMGR60TPT0TZ4QMYSWAN&qid=1647106966&sr=8-1&th=1"
  },
  {
    id: 9,
    imge: "https://m.media-amazon.com/images/I/71O1M6J7SQL._SL1500_.jpg",
    name: "Waterpik Sonic-Fusion 2.0 Professional Flossing Toothbrush, Electric Toothbrush and Water Flosser Combo In One, White",
    price: 155.97,
    description: "BRUSH FLOSS AT THE SAME TIME: Sonic-Fusion combines the power of an advanced sonic electric toothbrush with the proven effectiveness of the Waterpik Water Flosser",
    link: "https://www.amazon.com/Waterpik-Sonic-Fusion-Professional-Flossing-Toothbrush/dp/B08WSTTCMG/ref=sr_1_3?pd_rd_r=cd66d2b4-1d49-417f-9cdc-70c34e501f60&pd_rd_w=fzyYW&pd_rd_wg=nw4pe&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=WMGR60TPT0TZ4QMYSWAN&qid=1647107190&refinements=p_36%3A1253953011&rnid=386662011&s=beauty-intl-ship&sr=1-3"
  },
  {
    id: 10,
    imge: "https://m.media-amazon.com/images/I/71hIkeWDotL._SL1500_.jpg",
    name: "Led Face Mask Light Therapy, NEWKEY 7 Led Light Therapy Facial Skin Care Mask - Blue & Red Light for Acne Photon Mask - Korea PDT Technology for Acne Reduction",
    price: 150.89,
    description: "A TIP TO USE WITH SKIN FACE MASK: 1. You may lay down to use the device, also can put some cotton around the device to release the pressure. 2. You may also want to use it without the strap as it would put even extra pressure on the eye sockets. 3. While wearing it, please lift up on the mask a liitle to relieve some pressure arround your eyes",
    link: "https://www.amazon.com/Light-Therapy-NEWKEY-Facial-System/dp/B01MDK70V9/ref=sr_1_21?pd_rd_r=cd66d2b4-1d49-417f-9cdc-70c34e501f60&pd_rd_w=fzyYW&pd_rd_wg=nw4pe&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=WMGR60TPT0TZ4QMYSWAN&qid=1647107190&refinements=p_36%3A1253953011&rnid=386662011&s=beauty-intl-ship&sr=1-21"
  },
  {
    id: 11,
    imge: "https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SL1500_.jpg",
    name: "Lenovo Legion 5 Gaming Laptop, 15.6' FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 11 Home, Phantom Blue",
    price: 1149.99,
    description: "Escalate your game with up to 8 high-performance cores in the AMD Ryzen 7 5800H processor, 16GB DDR4 RAM, and 512GB NVMe SSD storage Includes free 3-month trial of Xbox Game Pass Ultimate - Play over 100 high-quality PC games on Windows PC; includes iconic Bethesda games, new day one titles, and the EA Play on PC catalog",
    link: "https://www.amazon.com/Lenovo-Display-Processor-Storage-82JW00BDUS/dp/B09BDGD2TZ/ref=sr_1_3?fst=as%3Aoff&pd_rd_r=95e4910d-3eed-4b36-ab88-a23a5f1f7c9f&pd_rd_w=VfrMW&pd_rd_wg=Q5rTg&pf_rd_p=5b7fc375-ab40-4cc0-8c62-01d4de8b648d&pf_rd_r=7HY9AANKK4KE5GYJPP32&qid=1647109048&refinements=p_36%3A1253507011%2Cp_89%3ALenovo&rnid=2528832011&s=computers-intl-ship&sr=1-3&th=1"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/