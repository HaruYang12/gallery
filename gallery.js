// 1. 照片資料庫
const photoData = [
    {
        year: "2026",
        photos: [
            { src: "assets/images/DSCF2797.jpg", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "assets/images/DSCF2816.JPG", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "assets/images/DSCF2818.JPG", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "assets/images/DSCF2826.JPG", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "assets/images/DSCF2840.JPG", title: "Ginzan Onsen", desc: "Yamagata"},
            { src: "assets/images/DSCF2899.JPG", title: "Zao", desc: "Yamagata"},
            { src: "assets/images/DSCF2927.JPG", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "assets/images/DSCF2928.JPG", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "assets/images/DSCF2943.JPG", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "assets/images/DSCF2946.JPG", title: "Kumano Taisha", desc: "Yamagata"},
            { src: "assets/images/DSCF2966.JPG", title: "Ouchijuku", desc: "Fukushima"},
            { src: "assets/images/DSCF2970.JPG", title: "Ouchijuku", desc: "Fukushima"},
            { src: "assets/images/DSCF2981.JPG", title: "Ouchijuku", desc: "Fukushima"},
            { src: "assets/images/DSCF2995.JPG", title: "Ouchijuku", desc: "Fukushima"},
            { src: "assets/images/DSCF3007.JPG", title: "Ouchijuku", desc: "Fukushima"},
            { src: "assets/images/DSCF3011.JPG", title: "Ouchijuku", desc: "Fukushima"},
            { src: "assets/images/DSCF3025.JPG", title: "Yunokami Onsen Station", desc: "Fukushima"},
            { src: "assets/images/DSCF3053.JPG", title: "Yunokami Onsen Station", desc: "Fukushima"},
            { src: "assets/images/DSCF3056.JPG", title: "Yunokami Onsen Station", desc: "Fukushima"},
            { src: "assets/images/DSCF3073.JPG", title: "Tsuruga Castle", desc: "Fukushima"},
            { src: "assets/images/DSCF3094.JPG", title: "Matsushima", desc: "Miyagi"},
            { src: "assets/images/DSCF3129.JPG", title: "Matsushima", desc: "Miyagi"},
            { src: "assets/images/DSCF3153.JPG", title: "Matsushima", desc: "Miyagi"},
            { src: "assets/images/IMG_5465.jpg", title: "Sendai", desc: "Miyagi"},
            { src: "assets/images/DSCF2704.JPG", title: "Summer Savage", desc: "Taipei"}
        ]
    },
    {
        year: "2025",
        photos: [
            { src: "assets/images/DSCF2686.JPG", title: "Asakusa", desc: "Tokyo"},
            { src: "assets/images/DSCF2606.JPG", title: "Asakusa", desc: "Tokyo"},
            { src: "assets/images/DSCF2588.JPG", title: "Asakusa", desc: "Tokyo"},
            { src: "assets/images/DSCF2583.JPG", title: "Sky Tree", desc: "Tokyo"},
            { src: "assets/images/DSCF2637.JPG", title: "Shibuya", desc: "Tokyo"},
            { src: "assets/images/DSCF2652.JPG", title: "Shibuya", desc: "Tokyo"},
            { src: "assets/images/DSCF2665.JPG", title: "Shibuya", desc: "Kawagoe"},
            { src: "assets/images/DSCF2544.JPG", title: "Fika Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF2550.JPG", title: "Fika Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF2553.JPG", title: "Fika Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF2478.JPG", title: "CHLIV Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF2362.JPG", title: "Twins Brothers Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF1439.JPG", title: "O'time Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF1499.JPG", title: "Yuanshan Coffee", desc: "Taipei"},
            { src: "assets/images/DSCF1400.JPG", title: "Taipei 101", desc: "Taipei"},
            { src: "assets/images/DSCF2494.JPG", title: "Street", desc: "Taipei"},
            { src: "assets/images/DSCF0673.JPG", title: "CKS Memorial Hall", desc: "Taipei"},
            { src: "assets/images/DSCF0666.JPG", title: "Jiufen Old Street", desc: "New Taipei"},
            { src: "assets/images/DSCF0634.JPG", title: "Jiufen Old Street", desc: "New Taipei"},
            { src: "assets/images/DSCF1322.JPG", title: "Yancheng", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0619.JPG", title: "Yancheng", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0616.JPG", title: "Yancheng", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1298.JPG", title: "Once Dessert", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1312.JPG", title: "Once Dessert", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0927.JPG", title: "14g Coffee", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0931.JPG", title: "14g Coffee", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0943.JPG", title: "14g Coffee", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1099.JPG", title: "Otter Coffee", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1109.JPG", title: "Otter Coffee", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1134.JPG", title: "Otter Coffee", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1140.JPG", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1158.JPG", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1220.JPG", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "assets/images/DSCF1247.JPG", title: "Kaohsiung Station", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0883.JPG", title: "Kaohsiung Music Center", desc: "Kaohsiung"}
        ]
    },
    {
        year: "2024",
        photos: [
            { src: "assets/images/DSCF0385.JPG", title: "My Love", desc: "Kaohsiung"},
            { src: "assets/images/Pier2ArtCenter.JPG", title: "The Pier 2 Art Center", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0289.JPG", title: "The Pier 2 Art Center", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0291.JPG", title: "The Pier 2 Art Center", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0434.JPG", title: "Cijin", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0397.JPG", title: "Sizihwan", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0286.JPG", title: "Sizihwan", desc: "Kaohsiung"},
            { src: "assets/images/DSCF0055.JPG", title: "Mitsui Outlet Park", desc: "Taichung"},
            { src: "assets/images/DSCF0240.JPG", title: "Tianhou Temple", desc: "Changhua"},
            { src: "assets/images/DSCF0315.JPG", title: "% Arabica coffee", desc: "Taipei"},
            { src: "assets/images/DSCF0321.JPG", title: "% Arabica coffee", desc: "Taipei"},
            { src: "assets/images/DSCF0323.JPG", title: "% Arabica coffee", desc: "Taipei"}
        ]
    }
];

const INITIAL_SHOW = 3; 

// --- A. 燈箱相關的變數 (放在最上方，方便 JS 抓取 HTML 元素) ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

// 2. 渲染主函數
function renderGallery() {
    const galleryRoot = document.getElementById('gallery-root');
    if (!galleryRoot) return;

    galleryRoot.innerHTML = ''; 

    photoData.forEach((section) => {
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';
        yearSection.id = `section-${section.year}`;

        yearSection.innerHTML = `
            <h2 class="year-title">${section.year}</h2>
            <div class="gallery-grid" id="grid-${section.year}"></div>
            <div class="load-more-container" id="btn-container-${section.year}"></div>
        `;
        
        galleryRoot.appendChild(yearSection);
        loadPhotos(section.year, 0, INITIAL_SHOW);
    });
}

// 3. 載入照片函數
function loadPhotos(year, startIndex, count) {
    const section = photoData.find(s => s.year === year);
    const grid = document.getElementById(`grid-${year}`);
    const btnContainer = document.getElementById(`btn-container-${year}`);
    
    const photosToDisplay = section.photos.slice(startIndex, startIndex + count);
    
    photosToDisplay.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // --- B. 關鍵位置：在這裡的 HTML 標籤加入 onclick 點擊事件 ---
        item.innerHTML = `
            <div class="image-box" onclick="openLightbox('${photo.src}', '${photo.title}')">
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            </div>
            <div class="item-info">
                <strong>${photo.title}</strong>
                <p>${photo.desc}</p>
            </div>
        `;
        grid.appendChild(item);
    });

    const currentTotal = grid.querySelectorAll('.gallery-item').length;
    if (currentTotal < section.photos.length) {
        btnContainer.innerHTML = `
            <button class="load-more-btn" onclick="loadPhotos('${year}', ${currentTotal}, ${count})">
                LOAD MORE
            </button>
        `;
    } else {
        btnContainer.innerHTML = ''; 
    }
}

// --- C. 燈箱功能函數 (放在底部，處理打開與關閉) ---

function openLightbox(src, title) {
    lightboxImg.src = src;
    lightboxCaption.innerText = title;
    lightbox.style.display = 'flex'; // 顯示燈箱
    document.body.style.overflow = 'hidden'; // 禁止底層捲動
}

// 點擊燈箱背景或關閉按鈕時執行
if (lightbox) {
    lightbox.onclick = function(e) {
        // 如果點擊的地方「不是」圖片本身，就關閉燈箱
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // 恢復捲動
        }
    };
}

// 最後執行初始化渲染
renderGallery();