import img1 from "../images/tour-1.jpeg";
import img2 from "../images/tour-2.jpeg";
import img3 from "../images/tour-3.jpeg";
import img4 from "../images/tour-4.jpeg";

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
    { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
    { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
    { id: 3, href: "https://www.github.com", icon: "fab fa-github" },
];

export const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        description:
            "save money by getting 20% off when you book your first tour",
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        description: "Endless tour and travels in the valley of kashmir",
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        description:
            "live with the locals and have comfort of home in the valley of kashmir",
    },
];

export const featured = [
    {
        id: 1,
        icon: img1,
        startDate: "august 26th, 2024",
        title: "Tibet Adventure",
        country: "China",
        days: "6 days",
        price: "from ₹99000",
        description:
            "we invite you to join us for an exhilarating adventure across Great Himalayas that could utterly change your life. Our hand-crafted adventure tours range from epic Lhasa to Kathmandu Cycling, to motorbiking across the Himalayas",
    },
    {
        id: 2,
        icon: img2,
        startDate: "august 26th, 2024",
        title: "best of java",
        country: "indonesia",
        days: "6 days",
        price: "from ₹110000",
        description:
            "Visit a tea plantation, an active volcano, all in just one day, with this tour from Jakarta. You'll spend time at the steaming Tangkuban Perahu Volcano,and have a soak at Ciater Hot Springs.take in valley views before returning to Jakarta.",
    },
    {
        id: 3,
        icon: img3,
        startDate: "september 25th, 2024",
        title: "Explore Hong Kong",
        country: " Hong Kong",
        days: "8 days",
        price: "from ₹350000",
        description:
            "Hong Kong's tallest point at 1,811 ft, with views of the city and South China Sea. You can ride the Peak Tram to Sky Terrace 428.",
    },
    {
        id: 4,
        icon: img4,
        startDate: "december 5th, 2024",
        title: "kenya highlights",
        country: "kenya",
        days: "20 days",
        price: "from ₹300000",
        description:
            "Majestic wildlife, rich culture, iconic landscapes. Through your choice of three intrepid itineraries, the wonders of Africa are yours to explore. ",
    },
];
