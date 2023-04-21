
export default function cards() {

    const cards = [
        { id: 1, url: "/img/adidas1.jpg", marca: "Adidas", href: "./tienda" },
        { id: 2, url: "/img/jordan1.jpg", marca: "Jordan", href: "./tienda" },
        { id: 3, url: "/img/nike1.jpg", marca: "Nike", href: "./tienda" }
    ]

    return (
        <div class="flex mt-24 items-center justify-center lg:gap-32 md:gap-4 mx-5">

            {cards.map(e => {
               return <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                    <img src={e.url} alt="adidas" class="md:h-50 md:w-50 h-96 w-96" />
                    <div class="p-5">
                        <p class="text-medium mb-5 text-gray-700">{e.marca}</p>
                        <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                    </div>
                </div>
            })}
        </div>
    )
}

