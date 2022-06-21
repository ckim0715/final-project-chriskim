# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Product.create(part_type: "CPU", brand: "AMD", starting_bid: 300, buy_price: 500, user_id: 1, model: "Ryzen 5950x", image_url: "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg", message: "AMD Ryzen 9 5950X 16-core, 32-Thread Unlocked Desktop Processor")
Product.create(part_type: "CPU", brand: "AMD", starting_bid: 150, buy_price: 400, user_id: 1, model: "Ryzen 5900x", image_url: "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg", message: "AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor")
Product.create(part_type: "CPU", brand: "AMD", starting_bid: 80, buy_price: 150, user_id: 1, model: "Ryzen 5 5600", image_url: "https://m.media-amazon.com/images/I/51zUfd6acTL._AC_SL1395_.jpg", message: "AMD Ryzen™ 5 5600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler")
Product.create(part_type: "CPU", brand: "Intel", starting_bid: 450, buy_price: 900, user_id:1 , model: "i9-12900K", image_url: "https://m.media-amazon.com/images/I/71OzB5Lq-1L._AC_SL1500_.jpg", message: "Micro Center Intel Core i9-12900K Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 Desktop Processor")
Product.create(part_type: "CPU", brand: "Intel", starting_bid: 150, buy_price: 350, user_id: 1, model: "i9-11900K", image_url: "https://m.media-amazon.com/images/I/41jGx-EgaJL._AC_.jpg", message: "Intel Core i9-11900K Desktop Processor 8 Cores up to 5.3 GHz Unlocked LGA1200 (Intel 500 Series & Select 400 Series Chipset) 125W")
Product.create(part_type: "GPU", brand: "PNY", starting_bid: 400, buy_price: 750, user_id: 1, model: "RTX 3080", image_url: "https://m.media-amazon.com/images/I/61qSGEwM2bL._AC_SL1000_.jpg", message: "PNY GeForce RTX™ 3080 10GB XLR8 Gaming Revel Epic-X RGB™ Triple Fan Graphics Card LHR")
Product.create(part_type: "GPU", brand: "PNY", starting_bid: 250, buy_price: 550, user_id: 1, model: "RTX 3070 Ti", image_url: "https://m.media-amazon.com/images/I/61AIyws526S._AC_SL1000_.jpg", message: "PNY GeForce RTX™ 3070 Ti 8GB XLR8 Gaming Revel Epic-X RGB™ Triple Fan Graphics Card")
Product.create(part_type: "GPU", brand: "ASUS", starting_bid: 200, buy_price: 450, user_id: 1, model: "RTX 3060", image_url: "https://m.media-amazon.com/images/I/811LI-isyPL._AC_SL1500_.jpg", message: "ASUS ROG Strix NVIDIA GeForce RTX 3060 V2 OC Edition Gaming Graphics Card (PCIe 4.0, 12GB GDDR6, HDMI 2.1, DisplayPort 1.4a, Axial-tech Fan Design, 2.7-Slot, Super Alloy Power II, GPU Tweak II)")
Product.create(part_type: "GPU", brand: "MSI", starting_bid: 85, buy_price: 200, user_id: 1, model: "RTX 2060", image_url: "https://m.media-amazon.com/images/I/61in2eJQ1RL._AC_SL1126_.jpg", message: "MSI Gaming GeForce RTX 2060 6GB GDRR6 192-bit HDMI/DP 1710 MHz Boost Clock Ray Tracing Turing Architecture VR Ready Graphics Card (RTX 2060 Ventus GP OC)")
Product.create(part_type: "Motherboard", brand: "ROG", starting_bid: 100, buy_price: 200, user_id: 1, model: "Z590-E", image_url: "https://m.media-amazon.com/images/I/712eN7mlJwL._AC_SL1500_.jpg", message: "ROG Strix Z590-E Gaming WiFi 6E LGA 1200(Intel® 11th/10th Gen) ATX Gaming Motherboard (PCIe 4.0, 14+2 Power Stages, DDR4 5333+, Dual Intel® 2.5 Gb LAN,Thunderbolt 4, 4xM.2/NVMe SSD and Aura RGB)")
Product.create(part_type: "Motherboard", brand: "ASUS", starting_bid: 30, buy_price: 75, user_id: 1, model: "Prime B450M-A II", image_url: "https://m.media-amazon.com/images/I/81Ni+xrVXeL._AC_SL1500_.jpg", message: "ASUS Prime B450M-A II AMD AM4 (Ryzen 5000, 3rd/2nd/1st Gen Ryzen Micro ATX Motherboard (128GB DDR4, 4400 O.C.), NVMe, HDMI 2.0b/DVI/D-Sub, USB 3.2 Gen 2, BIOS Flashback, and Aura Sync)")
Product.create(part_type: "Motherboard", brand: "ASUS", starting_bid: 50, buy_price: 100, user_id: 1, model: "ASUS Prime B560M-A LGA 1200", image_url: "https://m.media-amazon.com/images/I/818ZoQx9xbL._AC_SL1500_.jpg", message: "ASUS Prime B560M-A LGA 1200 (Intel 11th/10th Gen) micro ATX motherboard (PCIe 4.0,2x M.2 slots, 8 power stages, 1 Gb LAN, DP, dual HDMI,USB 3.2 Gen 2 Type-C,V-M.2-Key E slot for Wi-Fi,Aura Sync RGB)")






