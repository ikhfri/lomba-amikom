import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        "id": 1,
        "label": "Armchair",
        "image": "/Product/Armchair.jpeg",
        "price": 249.99,
        "description": "Comfortable armchair with plush cushioning and sturdy frame.",
        "link": "/armchair",
      },
      {
        "id": 2,
        "label": "Bed",
        "image": "/Product/Bed.jpeg",
        "price": 599.99,
        "description": "Spacious bed frame with headboard, suitable for various mattress sizes.",
        "link": "/bed"
      },
      {
        "id": 3,
        "label": "Bench",
        "image": "/Product/Bench.jpeg",
        "price": 179.99,
        "description": "Versatile wooden bench, perfect for entryways or dining areas.",
        "link": "/bench"
      },
      {
        "id": 4,
        "label": "Bookcase",
        "image": "/Product/Bookcase.jpeg",
        "price": 299.99,
        "description": "Sturdy bookcase with adjustable shelves for your book collection.",
        "link": "/bookcase"
      },
      {
        "id": 5,
        "label": "BreakfastBar",
        "image": "/Product/BreakfastBar.jpeg",
        "price": 349.99,
        "description": "Compact breakfast bar with stools, ideal for small kitchens.",
        "link": "/breakfastbar"
      },
      {
        "id": 6,
        "label": "Chair",
        "image": "/Product/Chair.jpeg",
        "price": 129.99,
        "description": "Sleek and modern dining chair with ergonomic design.",
        "link": "/chair"
      },
      {
        "id": 7,
        "label": "ConsoleTable",
        "image": "/Product/ConsoleTable.jpeg",
        "price": 219.99,
        "description": "Elegant console table for entryways or living rooms.",
        "link": "/consoletable"
      },
      {
        "id": 7,
        "label": "Drawer",
        "image": "/Product/Drawer.jpeg",
        "price": 389.99,
        "description": "Spacious drawer unit with smooth-gliding drawers for ample storage.",
        "link": "/drawer"
      },
      {
        "id": 8,
        "label": "Dresser",
        "image": "/Product/Dresser.jpeg",
        "price": 449.99,
        "description": "Classic dresser with multiple drawers for organized clothing storage.",
        "link": "/dresser"
      },
      {
        "id": 9,
        "label": "FoldingTable",
        "image": "/Product/FoldingTable.jpeg",
        "price": 159.99,
        "description": "Convenient folding table for flexible space usage.",
        "link": "/foldingtable"
      },
      {
        "id": 10,
        "label": "KitchenCabinet",
        "image": "/Product/KitchenCabinet.jpeg",
        "price": 579.99,
        "description": "Durable kitchen cabinet with adjustable shelves and soft-close doors.",
        "link": "/kitchencabinet"
      },
      {
        "id": 11,
        "label": "Mirror",
        "image": "/Product/Mirror.jpeg",
        "price": 139.99,
        "description": "Stylish wall mirror with decorative frame.",
        "link": "/mirror"
      },
      {
        "id": 12,
        "label": "OfficeChair",
        "image": "/Product/OfficeChair.jpeg",
        "price": 229.99,
        "description": "Ergonomic office chair with adjustable height and lumbar support.",
        "link": "/officechair"
      },
      {
        "id": 13,
        "label": "OfficeDesk",
        "image": "/Product/OfficeDesk.jpeg",
        "price": 329.99,
        "description": "Spacious office desk with built-in cable management system.",
        "link": "/officedesk"
      },
      {
        "id": 14,
        "label": "RockingChair",
        "image": "/Product/RockingChair.jpeg",
        "price": 279.99,
        "description": "Classic wooden rocking chair for relaxation and comfort.",
        "link": "/rockingchair"
      },
      {
        "id": 15,
        "label": "RomanClock",
        "image": "/Product/RomanClock.jpeg",
        "price": 89.99,
        "description": "Elegant wall clock with Roman numerals and antique finish.",
        "link": "/romanclock"
      },
      {
        "id": 16,
        "label": "ShoesRack",
        "image": "/Product/ShoesRack.jpeg",
        "price": 79.99,
        "description": "Multi-tier shoe rack for organized footwear storage.",
        "link": "/shoesrack",
        "objek": ''
      },
      {
        "id": 17,
        "label": "Sofa",
        "image": "/Product/Sofa.jpeg",
        "price": 799.99,
        "description": "Luxurious three-seater sofa with premium upholstery.",
        "link": "/sofa"
      },
      {
        "id": 18,
        "label": "Standing Lamp",
        "image": "/Product/Standing Lamp.jpeg",
        "price": 149.99,
        "description": "Modern standing lamp with adjustable brightness levels.",
        "link": "/standing-lamp"
      },
      {
        "id": 19,
        "label": "UmbrellaStand",
        "image": "/Product/UmbrellaStand.jpeg",
        "price": 49.99,
        "description": "Compact umbrella stand with drip tray for entryways.",
        "link": "/umbrellastand"
      },
      {
        "id": 20,
        "label": "WoodenTray",
        "image": "/Product/WoodenTray.jpeg",
        "price": 39.99,
        "description": "Handcrafted wooden tray for serving or decorative purposes.",
        "link": "/woodentray"
      }
]

export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({ statusCode: 200, message: "succes", data: detailProduct})
        }

        return NextResponse.json({statusCode: 404, message: "Not Found", data: detailProduct})
    }

    return NextResponse.json({ statusCode: 200, message: "succes", data})
}