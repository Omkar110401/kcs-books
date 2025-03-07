const bookList = [
    {
        id: 1,
        title: "Bhagavad Gita",
        subParts: [
            { title: "Hindi", image: "./assets/bg-hindi.png", url: "./kcs-book-combine/Bhagavad-gita Yatharupa (1).pdf" },
            { title: "English", image: "./assets/bg.avif", url: "./kcs-book-combine/1972_Bhagavad_gita-As_It_Is-Original_authorized_Macmillan_edition (1).pdf" },
        ]
    },
    {
        id: 2,
        title: "Srimad Bhagawatam",
        subParts: [
            {
                title: "Canto 1",
                subParts: [
                    { title: "SB 1.1", image: "./assets/sb1.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB1.1.pdf" },
                    { title: "SB 1.2", image: "./assets/sb1.2.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB1.2.pdf" },
                    { title: "SB 1.3", image: "./assets/sb1.3.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB1.3.pdf" }
                ]
            },
            {
                title: "Canto 2",
                subParts: [
                    { title: "SB 2.1", image: "./assets/sb2.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB2.1.pdf" },
                    { title: "SB 2.2", image: "./assets/sb2.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB2.2.pdf" },
                ]
            },
            {
                title: "Canto 3",
                subParts: [
                    { title: "SB 3.1", image: "./assets/sb3.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB3.1.pdf" },
                    { title: "SB 3.2", image: "./assets/sb3.2.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB3.2.pdf" },
                    { title: "SB 3.3", image: "./assets/sb3.3.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB3.3.pdf" },
                    { title: "SB 3.4", image: "./assets/sb3.4.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB3.4.pdf" }
                ]
            },
            {
                title: "Canto 4",
                subParts: [
                    { title: "SB 4.1", image: "./assets/sb4.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB4.1.pdf" },
                    { title: "SB 4.2", image: "./assets/sb4.2.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB4.2.pdf" },
                    { title: "SB 4.3", image: "./assets/sb4.3.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB4.3.pdf" },
                    { title: "SB 4.4", image: "./assets/sb4.4.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB4.4.pdf" }
                ]
            },
            {
                title: "Canto 5",
                subParts: [
                    { title: "SB 5.1", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB5.1.pdf" },
                    { title: "SB 5.2", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB5.2.pdf" },
                ]
            },
            {
                title: "Canto 6",
                subParts: [
                    { title: "SB 6.1", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB6.1.pdf" },
                    { title: "SB 6.2", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB6.2.pdf" },
                    { title: "SB 6.3", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB6.3.pdf" },
                ]
            },
            {
                title: "Canto 7",
                subParts: [
                    { title: "SB 7.1", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB7.1.pdf" },
                    { title: "SB 7.2", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB7.2.pdf" },
                    { title: "SB 7.3", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB7.3.pdf" },
                ]
            },
            {
                title: "Canto 8",
                subParts: [
                    { title: "SB 8.1", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB8.1.pdf" },
                    { title: "SB 8.2", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB8.2.pdf" },
                    { title: "SB 8.3", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB8.3.pdf" },
                ]
            },
            {
                title: "Canto 9",
                subParts: [
                    { title: "SB 9.1", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB9.1.pdf" },
                    { title: "SB 9.2", image: "./assets/sb5.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB9.2.pdf" },
                    { title: "SB 9.3", image: "./assets/sb9.3.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB9.3.pdf" },
                ]
            },
            {
                title: "Canto 10",
                subParts: [
                    { title: "SB 10.1", image: "./assets/sb10.1.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB10.1.pdf" },
                    { title: "SB 10.2", image: "./assets/sb10.2.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB10.2.pdf" },
                    { title: "SB 10.3", image: "./assets/sb10.3.png", url: "./kcs-book-combine/Original_Srimad_Bhagvatam/SB10.3.pdf" },
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Caitanya Caritamrta",
        subParts: [
            {
                title: "Adi Lila",
                subParts: [
                    { title: "CC Adi 1", image: "./assets/cc-adi1.png", url: "./kcs-book-combine/Caitanya_Caritamrita/adi1.pdf" },
                    { title: "SB Adi 2", image: "./assets/cc-adi2.png", url: "./kcs-book-combine/Caitanya_Caritamrita/adi2.pdf" },
                    { title: "SB Adi 3", image: "./assets/cc-adi3.png", url: "./kcs-book-combine/Caitanya_Caritamrita/adi3.pdf" }
                ]
            },
            {
                title: "Madhya Lila",
                subParts: [
                    { title: "CC Mad 1", image: "./assets/cc-madya1.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad1.pdf" },
                    { title: "CC Mad 2", image: "./assets/cc-madya2.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad2.pdf" },
                    { title: "CC Mad 3", image: "./assets/cc-madya3.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad3.pdf" },
                    { title: "CC Mad 4", image: "./assets/cc-madya4.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad4.pdf" },
                    { title: "CC Mad 5", image: "./assets/cc-madya5.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad5.pdf" },
                    { title: "CC Mad 6", image: "./assets/cc-madya6.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad6.pdf" },
                    { title: "CC Mad 7", image: "./assets/cc-madya7.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad7.pdf" },
                    { title: "CC Mad 8", image: "./assets/cc-madya8.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad8.pdf" },
                    { title: "CC Mad 9", image: "./assets/cc-madya9.png", url: "./kcs-book-combine/Caitanya_Caritamrita/mad9.pdf" },

                ]
            },
            {
                title: "Antya Lila",
                subParts: [
                    { title: "CC Antya 1", image: "./assets/cc-antya1.png", url: "./kcs-book-combine/Caitanya_Caritamrita/ant1.pdf" },
                    { title: "CC Antya 2", image: "./assets/cc-antya2.png", url: "./kcs-book-combine/Caitanya_Caritamrita/ant2.pdf" },
                    { title: "CC Antya 3", image: "./assets/cc-antya3.png", url: "./kcs-book-combine/Caitanya_Caritamrita/ant3.pdf" },
                    { title: "CC Antya 4", image: "./assets/cc-antya4.png", url: "./kcs-book-combine/Caitanya_Caritamrita/ant4.pdf" }
                ]
            },
        ]
    },
    {
        id: 3,
        title: "Science of Self Realization",
        subParts: [
            {
                title: "Science of Self Realization",
                image: "./assets/ssr.png",
                url: "./kcs-book-combine/Science-of-Self-Realization-1977.pdf"

            }
        ]
    },
    {
        id: 4,
        title: "Teachings of Lord Kapila",

        subParts: [
            {
                title: "Teachings of Lord Kapila",
                image: "./assets/tlk.png",
                url: "./kcs-book-combine/Teachings_of_Lord_Kapila-SCAN.pdf"
            }
        ]
    },
    {
        id: 5,
        title: "Teachings of Queen Kunti",

        subParts: [
            {
                title: "Teachings of Queen Kunti",
                image: "./assets/tqk.png",
                url: "./kcs-book-combine/Teachings_of_Queen_Kunti-SCAN.pdf"
            }
        ]
    },
    {
        id: 6,
        title: "Sri Isopanishad",

        subParts: [
            {
                title: "Sri Isopanishad",
                image: "./assets/isho.png",
                url: "./kcs-book-combine/Sri-Isopanisad-scans-of-original-1969-edition.pdf"
            }
        ]

    },
    {
        id: 7,
        title: "Prabhupada Lilamrta",

        subParts: [
            {
                title: "Prabhupada Lilamrta",
                image: "./assets/lila.png",
                url: "./kcs-book-combine/Srila_Prabhupada_Lilamrta_As_It_Is (2).pdf"
            }
        ]
    },
    {
        id: 7,
        title: "The Nectar of Devotion",

        subParts: [
            {
                title: "The Nectar of Devotion",
                image: "./assets/nod.png",
                url: "./kcs-book-combine/The_Nectar_of_Devotion-1970_ISKCON_Press_edition-Hardcover-SCAN.pdf"
            }
        ]

    },
    {
        id: 7,
        title: "The Nectar of Instruction",

        subParts: [
            {
                title: "The Nectar of Instruction",
                image: "./assets/noi.png",
                url: "./kcs-book-combine/The_Nectar_of_Instruction-Original_1976_SCAN.pdf"
            }
        ]

    },
    {
        id: 8,
        title: "The Hare Krishna Cookbook",

        subParts: [
            {
                title: "The Hare Krishna Cookbook",
                image: "./assets/cook.png",
                url: "./kcs-book-combine/The-Hare-Krsna-Cookbook-1972.pdf"
            }
        ]

    },
    {
        id: 9,
        title: "Teachings of Lord Caitanya",

        subParts: [
            {
                title: "Teachings of Lord Caitanya",
                image: "./assets/tolc.png",
                url: "./kcs-book-combine/Teachings_of_Lord_Chaitanya-1968_first_edition-SCAN.pdf"
            }
        ]

    }
];

// 📌 Load books into hierarchical format
function loadBooks() {
    const bookContainer = document.getElementById("book-list");
    bookContainer.innerHTML = ""; // Clear previous content

    bookList.forEach((book, index) => {
        let bookDiv = createBookItem(book, index);
        bookContainer.appendChild(bookDiv);
    });
}

// 📌 Function to create a book item recursively
function createBookItem(book, index) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book-section");

    let title = document.createElement("h4");
    if (book.id) {
        title.innerText = book.id + ". " + book.title;
    }
    else {
        title.innerText = book.title;
    }
    title.classList.add("expandable-title");

    if (book.subParts) {
        // 📌 Expandable section
        title.onclick = () => toggleSubBooks(index);
        bookDiv.appendChild(title);

        let subBookContainer = document.createElement("div");
        subBookContainer.classList.add("sub-book-container");
        subBookContainer.id = `sub-books-${index}`;
        subBookContainer.style.display = "none";

        book.subParts.forEach((subBook, subIndex) => {
            let subDiv = createBookItem(subBook, `${index}-${subIndex}`);
            subBookContainer.appendChild(subDiv);
        });

        bookDiv.appendChild(subBookContainer);
    } else {
        // 📌 Direct book with image
        let img = document.createElement("img");
        img.src = book.image;
        img.alt = book.title;
        img.classList.add("book-image");
        img.onclick = () => openBook(book.url, book.title);

        bookDiv.appendChild(title);
        bookDiv.appendChild(img);
    }

    return bookDiv;
}

// 📌 Toggle sub-books visibility
function toggleSubBooks(index) {
    let subBookContainer = document.getElementById(`sub-books-${index}`);
    subBookContainer.style.display = subBookContainer.style.display === "none" ? "block" : "none";
}

// 📌 Open book in iframe
function openBook(url, filename) {
    let bookFrame = document.getElementById("bookFrame");

    bookFrame.src = "about:blank"; // Reset first
    setTimeout(() => {
        if (window.innerWidth < 768) {
            bookFrame.srcdoc = `
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; display: flex; flex-direction: column; height: 100%;align-items: center;justify-content: center;}
                        p { font-size: 16px; color: red; }
                    </style>
                </head>
                <body>
                    <p>Preview is not available for mobile devices.</p>
                    <p>Download should start automatically. If not, click the download button above.</p>
                </body>
                </html>
            `;
            downloadBook(url, filename)
        } else {
            bookFrame.src = url;
        }
    }, 100);

    const bookViewerContainer = document.getElementsByClassName('book-viewer')[0];
    document.getElementById('closeBtn').style.display = "inline-block";
    document.getElementById("downloadBtn").style.display = "inline-block";
    bookViewerContainer.style.display = "flex";
    bookViewerContainer.style.flexDirection = "column";
    bookViewerContainer.style.alignItems = "center";
    setTimeout(() => {
        bookViewerContainer.scrollIntoView({ behavior: "smooth" });

    }, 500);
    document.getElementById("downloadBtn").onclick = () => downloadBook(url, filename);
}

// 📌 Close book
document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("bookFrame").src = "";
    document.getElementById("downloadBtn").style.display = "none";
    document.getElementById("closeBtn").style.display = "none";
    document.getElementsByClassName('book-viewer')[0].style.display = "none";
});

// 📌 Download book
function downloadBook(url, filename) {
    let a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}

// 📌 Load books on page load
document.addEventListener("DOMContentLoaded", loadBooks);