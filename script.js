// Database of items
const itemsData = {
    plastic_bag: {
        name: "Plastic Bag",
        isEco: false,
        icon: "🚫",
        status: "Harmful",
        text: "Plastic bags are made from non-renewable fossil fuels and take hundreds of years to decompose. They often end up in oceans, harming marine life.",
        alternative: "Use reusable Cloth, Jute, or Canvas bags."
    },
    cloth_bag: {
        name: "Cloth Bag",
        isEco: true,
        icon: "🌿",
        status: "Eco-Friendly",
        text: "Cloth bags are reusable, durable, and biodegradable. Using one cloth bag can replace hundreds of single-use plastic bags over its lifetime.",
        alternative: "Keep using it! Wash it when it gets dirty."
    },
    paper_cup: {
        name: "Paper Cup",
        isEco: false, // Surprisingly harmful because of the lining
        icon: "⚠️",
        status: "Mostly Harmful",
        text: "While paper is natural, most paper cups are lined with plastic (polyethylene) to prevent leaking, making them difficult to recycle.",
        alternative: "Carry a reusable travel mug or flask."
    },
    glass_bottle: {
        name: "Glass Bottle",
        isEco: true,
        icon: "♻️",
        status: "Eco-Friendly",
        text: "Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity. It doesn't leach chemicals into the earth.",
        alternative: "Great choice! Ensure you recycle it properly."
    },
    thermocol: {
        name: "Thermocol Plate",
        isEco: false,
        icon: "☢️",
        status: "Very Harmful",
        text: "Thermocol (Polystyrene) is non-biodegradable and can persist in the environment for centuries. It releases toxic chemicals when burned.",
        alternative: "Use reusable Steel plates or biodegradable Areca leaf plates."
    },
    battery: {
        name: "Single-Use Battery",
        isEco: false,
        icon: "☣️",
        status: "Hazardous Waste",
        text: "Batteries contain toxic heavy metals like lead, mercury, and cadmium. If thrown in regular trash, they can leach toxins into soil and water.",
        alternative: "Switch to Rechargeable Batteries and recycle old ones at e-waste centers."
    },
    led_bulb: {
        name: "LED Bulb",
        isEco: true,
        icon: "⚡",
        status: "Eco-Friendly",
        text: "LED bulbs are highly energy-efficient and last much longer than traditional incandescent bulbs, reducing waste and carbon emissions.",
        alternative: "Excellent choice for saving energy!"
    },
    plastic_straw: {
        name: "Plastic Straw",
        isEco: false,
        icon: "🐢",
        status: "Harmful",
        text: "Plastic straws are too lightweight to be recycled easily. They often break down into microplastics and are a major danger to sea turtles and birds.",
        alternative: "Drink directly from the cup or use a Metal/Bamboo straw."
    }
};

// DOM Elements
const itemGrid = document.getElementById('itemGrid');
const resultCard = document.getElementById('resultCard');
const resetBtn = document.getElementById('resetBtn');
const buttons = document.querySelectorAll('.item-btn');

// Add click event to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const itemKey = button.getAttribute('data-item');
        showResult(itemKey);
    });
});

// Function to display result
function showResult(key) {
    const data = itemsData[key];

    // Populate data
    document.getElementById('itemName').textContent = data.name;
    document.getElementById('statusIcon').textContent = data.icon;
    document.getElementById('ecoBadge').textContent = data.status;
    document.getElementById('impactText').textContent = data.text;
    document.getElementById('alternativeText').textContent = data.alternative;

    // Handle Styling (Green for Eco, Red for Harmful)
    resultCard.classList.remove('is-eco', 'is-harmful');
    if (data.isEco) {
        resultCard.classList.add('is-eco');
    } else {
        resultCard.classList.add('is-harmful');
    }

    // Toggle Visibility
    itemGrid.classList.add('hidden');
    resultCard.classList.remove('hidden');
}

// Reset Function
resetBtn.addEventListener('click', () => {
    resultCard.classList.add('hidden');
    itemGrid.classList.remove('hidden');
});