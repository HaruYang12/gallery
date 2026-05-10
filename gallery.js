// 1. 照片資料庫
const photoData = [
    {
        year: "2026",
        photos: [
            { src: "/assets/images/DSCF2797.jpg", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "/assets/images/DSCF2816.jpg", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "/assets/images/DSCF2818.jpg", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "/assets/images/DSCF2826.jpg", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "/assets/images/DSCF2840.jpg", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "/assets/images/DSCF2899.jpg", title: "Zao", desc: "Yamagata"},
            { src: "/assets/images/DSCF2927.jpg", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "/assets/images/DSCF2928.jpg", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "/assets/images/DSCF2943.jpg", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "/assets/images/DSCF2946.jpg", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "/assets/images/DSCF2966.jpg", title: "Ouchijuku", desc: "Fukushima"},
            { src: "/assets/images/DSCF2970.jpg", title: "Ouchijuku", desc: "Fukushima"},
            { src: "/assets/images/DSCF2981.jpg", title: "Ouchijuku", desc: "Fukushima"},
            { src: "/assets/images/DSCF2995.jpg", title: "Ouchijuku", desc: "Fukushima"},
            { src: "/assets/images/DSCF3007.jpg", title: "Ouchijuku", desc: "Fukushima"},
            { src: "/assets/images/DSCF3011.jpg", title: "Ouchijuku", desc: "Fukushima"},
            { src: "/assets/images/DSCF3025.jpg", title: "Yunokami Onsen Station", desc: "Fukushima"},
            { src: "/assets/images/DSCF3053.jpg", title: "Yunokami Onsen Station", desc: "Fukushima"},
            { src: "/assets/images/DSCF3056.jpg", title: "Yunokami Onsen Station", desc: "Fukushima"},
            { src: "/assets/images/DSCF3073.jpg", title: "Tsuruga Castle", desc: "Fukushima"},
            { src: "/assets/images/DSCF3094.jpg", title: "Matsushima", desc: "Miyagi"},
            { src: "/assets/images/DSCF3129.jpg", title: "Matsushima", desc: "Miyagi"},
            { src: "/assets/images/DSCF3153.jpg", title: "Matsushima", desc: "Miyagi"},
            { src: "/assets/images/IMG_5465.jpg", title: "Sendai", desc: "Miyagi"},
            { src: "/assets/images/DSCF2704.jpg", title: "Summer Savage", desc: "Taipei"}
        ]
    },
    {
        year: "2025",
        photos: [
            { src: "/assets/images/DSCF2686.jpg", title: "Asakusa", desc: "Tokyo"},
            { src: "/assets/images/DSCF2606.jpg", title: "Asakusa", desc: "Tokyo"},
            { src: "/assets/images/DSCF2588.jpg", title: "Asakusa", desc: "Tokyo"},
            { src: "/assets/images/DSCF2583.jpg", title: "Sky Tree", desc: "Tokyo"},
            { src: "/assets/images/DSCF2637.jpg", title: "Shibuya", desc: "Tokyo"},
            { src: "/assets/images/DSCF2652.jpg", title: "Shibuya", desc: "Tokyo"},
            { src: "/assets/images/DSCF2665.jpg", title: "Shibuya", desc: "Kawagoe"},
            { src: "/assets/images/DSCF2544.jpg", title: "Fika Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF2550.jpg", title: "Fika Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF2553.jpg", title: "Fika Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF2478.jpg", title: "CHLIV Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF2362.jpg", title: "Twins Brothers Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF1439.jpg", title: "O'time Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF1499.jpg", title: "Yuanshan Coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF1400.jpg", title: "Taipei 101", desc: "Taipei"},
            { src: "/assets/images/DSCF2494.jpg", title: "Street", desc: "Taipei"},
            { src: "/assets/images/DSCF0673.jpg", title: "CKS Memorial Hall", desc: "Taipei"},
            { src: "/assets/images/DSCF0666.jpg", title: "Jiufen Old Street", desc: "New Taipei"},
            { src: "/assets/images/DSCF0634.jpg", title: "Jiufen Old Street", desc: "New Taipei"},
            { src: "/assets/images/DSCF1322.jpg", title: "Yancheng", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0619.jpg", title: "Yancheng", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0616.jpg", title: "Yancheng", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1298.jpg", title: "Once Dessert", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1312.jpg", title: "Once Dessert", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0927.jpg", title: "14g Coffee", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0931.jpg", title: "14g Coffee", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0943.jpg", title: "14g Coffee", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1099.jpg", title: "Otter Coffee", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1109.jpg", title: "Otter Coffee", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1134.jpg", title: "Otter Coffee", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1140.jpg", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1158.jpg", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1220.jpg", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF1247.jpg", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0883.jpg", title: "Kaohsiung Music Center", desc: "Kaohsiung"}
        ]
    },
    {
        year: "2024",
        photos: [
            { src: "/assets/images/DSCF0385.jpg", title: "My Love", desc: "Kaohsiung"},
            { src: "/assets/images/Pier2ArtCenter.jpg", title: "The Pier 2 Art Center", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0289.jpg", title: "The Pier 2 Art Center", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0291.jpg", title: "The Pier 2 Art Center", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0434.jpg", title: "Cijin", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0397.jpg", title: "Sizihwan", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0286.jpg", title: "Sizihwan", desc: "Kaohsiung"},
            { src: "/assets/images/DSCF0055.jpg", title: "Mitsui Outlet Park", desc: "Taichung"},
            { src: "/assets/images/DSCF0240.jpg", title: "Tianhou Temple", desc: "Changhua"},
            { src: "/assets/images/DSCF0315.jpg", title: "% Arabica coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF0321.jpg", title: "% Arabica coffee", desc: "Taipei"},
            { src: "/assets/images/DSCF0323.jpg", title: "% Arabica coffee", desc: "Taipei"}
        ]
    }
];

// 2. 取得 HTML 容器
const galleryRoot = document.getElementById('gallery-root');

// 3. 生成內容的函數
function renderGallery() {
    let htmlContent = '';

    photoData.forEach(section => {
        // 建立年份標題區塊
        htmlContent += `
            <div class="year-section">
                <h2 class="year-title">${section.year}</h2>
                <div class="gallery-grid">
        `;

        // 建立該年份的照片網格
        section.photos.forEach(photo => {
            htmlContent += `
                <div class="gallery-item">
                    <div class="image-box">
                        <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                    </div>
                    <div class="item-info">
                        <strong>${photo.title}</strong>
                        <p>${photo.desc}</p>
                    </div>
                </div>
            `;
        });

        htmlContent += `
                </div>
            </div>
        `;
    });

    galleryRoot.innerHTML = htmlContent;
}

// 執行渲染
renderGallery();