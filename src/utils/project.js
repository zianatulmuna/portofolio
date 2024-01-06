const projects = [
  {
    id: "rumahterapisahabat",
    index: 1,
    name: "Website Klinik Terapi",
    title: "Rumah Terapi Sahabat",
    image: "/images/projects/1.png",
    imageDetail: "/images/projects/1-1.png",
    logo: "/images/projects/1-logo-terapi.png",
    duration: "Agustus - September 2023",
    techs: ["PHP", "Laravel", "JavaScript", "MySQL", "Bootstrap", "Livewire", "GitHub"],
    body: "Website untuk pengelolaan data dan aktivitias klinik Rumah Terapi Sahabat. Dibangun pada tahun 2023 menggunakan framework Laravel dan database MySQL. Memiliki design yang responsive dan dikembangkan berdasarkan kebutuhan klien.",
    developer: "Zianatul M., Fauziah Aulia R., Budi Irmawati, Royana Afwani",
    overview: "Website Rumah Terapi Sahabat adalah website pengelolaan data dan aktivitias klinik yang dibangun pada tahun 2023 menggunakan framework Laravel dan database MySQL. Website ini merupakan hasil project Tugas Akhir yang saya bangun bersama 1 rekan dengan beberapa masukan dan saran dari kedua Dosen Pembimbing. \nFitur-fitur yang ada disesuaikan dengan kebutuhan pihak Klinik Rumah Terapi Sahabat. Memiliki design yang responsive sehingga nyaman diakses diberbagai ukuran layar device. Website memiliki fungsi CRUD data pasien, CRUD data terapi, CRUD data terapis, pencarian data, dan pemantauan aktivitas klinik.",
    features: [
      {
        name: "Authentication",
        body: "Terdapat 3 user yang bisa mengakses data yang ada pada sistem, yaitu Admin, Terapis, dan Kepala Terapis. User dapat melakukan login dengan memasukkan username dan password, sistem akan otomatis mengecek username dan menetapkan role yang dimiliki user tersebut. Setelah berhasil login, user dapat melakukan logout untuk keluar dari akun.",
        video: "/images/projects/1-authentication.gif",
      },
      {
        name: "Grafik Data",
        body: "User dapat mengakses perkembangan data yang dimiliki klinik berdasarkan filter tertentu dan periode waktu tertentu. Admin dan Kepala Terapis dapat melihat semua data pasien, terapi, dan terapis. Sedangkan terapis hanya bisa melihat data pasien dan terapis saja.",
        video: "/images/projects/1-grafik-data.gif",
      },
      {
        name: "Cheklist Kehadiran",
        body: "Agar kepala terapis dan pasien dapat melihat siapa saja terapis yang sedang berada di klinik, terapis dapat mengaktifkan tombol hadir yang ada. Selain melalui akun masing-masing terapis, admin dapat mengaktifkan tombol hadir setiap terapis melalui dashboard. Perubahan kehadiran otomatis akan diperbahrui pada halaman dashboard dan landing page.",
        video: "/images/projects/1-checklist-kehadiran.gif",
      },
      {
        name: "Multi Step Form",
        body: "Dikarenakan form pasien terdiri dari beberapa lembar formulir, isian digitalisasi formulir pada website ini dibuat dengan multi step form dengan memanfaatkan library Livewire. Penggunaan Livewire juga mempermudah pembuatan list tag penyakit yang nantinya mempengaruhi dan terhubung dengan beberapa tabel dalam database.",
        video: "/images/projects/1-multi-step-form.gif",
      },
      {
        name: "Privasi Data",
        body: "Terdapat fitur private data pasien sehingga hanya terapis yang berhak yang dapat mengakses data pasien tersebut. Hal ini bertujuan untuk menjaga kerahasian data terapi dan data penyakit yang dimiliki oleh pasien.",
        video: "/images/projects/1-privasi-data.gif",
      },
      {
        name: "Filter dan Pencarian Data",
        body: "User dapat mencari data pasien berdasarkan nama, penyakit, No. Rekam Medis, dan ID Pasien serta memberikan filter berdasarkan urutan atau kategori tertentu.",
        video: "/images/projects/1-search.gif",
      },
      {
        name: "Tagging Penyakit",
        body: "User dapat mencari data pasien berdasarkan nama, penyakit, No. Rekam Medis, dan ID Pasien serta memberikan filter berdasarkan urutan atau kategori tertentu.",
        video: "/images/projects/1-search.gif",
      },
      {
        name: "Unduh Data",
        body: "User dapat mengunduh atau mendownload data pasien dan data terapi. Data jadwal hanya dapat didownload oleh Admin dan Kepala Terapis.",
        video: "/images/projects/1-unduh-data.gif",
      },
      {
        name: "Responsive Design",
        body: "Website dibangun dengan responsive web design sehingga semua konten yang ada tidak berantakan saat dibuka pada semua ukuran device.",
        video: "/images/projects/1-responsive.gif",
      },
    ],
    scope: "Back-End Development, Front-End Development, Design UML, Manage Database, Maintenance, Deploy Vercel",
    github: "https://github.com/zianatulmuna/rumahterapisahabat",
    link: "https://rumahterapisahabat.web.id/",
    reverse: false,
    status: "best",
  },
  {
    id: "foodintake",
    index: 2,
    name: "Web App Resep dan Nutrisi Makanan",
    title: "FoodIntake",
    image: "/images/projects/2.png",
    imageDetail: "/images/projects/2-1.png",
    logo: "/images/projects/2-logo-foodintake.png",
    duration: "Juni 2022",
    techs: ["JavaScript", "API", "GitHub", "Progressive Web Apps"],
    body: "Website yang memberikan informasi mengenai resep dan detail kandungan bahan makanan untuk membantu mengatur dan memenuhi kebutuhan nutrisi. Food Intake diharapkan mampu membantu pengguna merencanakan asupan makanan yang dibutuhkan.",
    developer: "Zianatul Muna, Ananta Dwi Prayoga Alwy",
    overview: "FoodIntake adalah web app yang memberikan informasi mengenai resep dan kandungan makanan untuk membantu mengatur dan memenuhi kebutuhan nutrisi. User dapat mencari nama makanan dan memberikan filter nutrisi tertentu atau jenis makanan tertentu. Untuk merencanakan asupan perhari, user dapat menambahkan resep makanan yang dipilih ke menu Bookmark.\nWebsite ini dibangun untuk memenuhi Capstone Project program SIB Dicoding Batch 2 dan berhasil mendapatkan penghargaan sebagai salah satu Best Capstone Project pada kategori Book and Reference. Website ini dibangun dengan tech Progressive Web App sehingga memiliki beberapa fitur aplikasi native seperti dapat di pasang pada desktop maupun homescreen HP dan dapat diakses secara offline. Informasi diambil menggunakan REST API dari Spoonacular.",
    features: [
      {
        name: "Filter dan Pencarian Makanan",
        body: "User dapat mencari resep makanan berdasarkan nama atau kata kunci teretntu, serta menambahkan filter pencarian berdasarkan tipe makanan dan kandungan nutrisi seperti Kalori, Karbohidrat, Protein, Lemak, Kolestrol, Diet, dan Alergi.",
        video: "/images/projects/2-search.gif",
      },
      {
        name: "Bookmark",
        body: "User dapat menyimpan resep dan informasi makanan yang dipilih ke menu Bookmark sebagai acuan asupan makanan setiap harinya.",
        video: "/images/projects/2-bookmark.gif",
      },
      {
        name: "Installable",
        body: "Website dapat didownload dan memiliki splash screen dan icon sendiri di desktop maupun di home screen. Hal ini membuat website ini seperti aplikasi native namun sebenarnya tetap berjalan diatas browser.",
        video: "/images/projects/2-installable.gif",
      },
      {
        name: "Offline and background operation",
        body: "Progressive Web Apps memberikan kemampuan pada website ini untuk dapat diakses tanpa koneksi maupun dalam koneksi internet lemah. Namun, konten yang bisa ditampilkan hanya konten atau halaman yang sebelumnya sudah diakses dalam keadaan online.",
        video: "/images/projects/2-offline.gif",
      },
      {
        name: "Responsive Design",
        body: "Website dibangun dengan responsive web design sehingga semua konten yang ada tidak berantakan saat dibuka pada semua ukuran device.",
      },
    ],
    scope: "Front-End Development, Consuming API, Designing Logo, Maintenance, Deploy Vercel",    
    github: "https://github.com/zianatulmuna/foodintake",
    link: "https://foodintake.vercel.app/",
    demo: "https://foodintake.vercel.app/",
    reverse: true,
    status: "best",
  },
  {
    id: "portozian",
    index: 3,
    name: "Website Portofolio",
    title: "Portofolio Zianatul Muna",
    image: "/images/projects/3.png",
    imageDetail: "/images/projects/3-1.png",
    logo: "/assets/logo.png",
    duration: "Desember 2023",
    techs: ["JavaScript", "React Js", "Bootstrap", "GitHub", "Vercel"],
    body: "Website ini merupakan website portofolio saya yang dibangun menggunakan React Js. Pada website ini, terdapat resume dan project-project yang pernah saya buat.",
    developer: "Zianatul Muna",
    overview: "Website ini merupakan website portofolio saya yang dibangun menggunakan React Js. Pada website ini, terdapat resume dan project-project yang pernah saya buat. Website ini dibangun pada single page website dan telah memiliki design responsif sehingga nyaman diakses diberbagai perangkat.",
    features: [
      {
        name: "Resume",
        body: "User dapat melihat resume saya yang terdiri dari deskripsi singkat, riwayat pendidikan, sertifikasi, portofolio, dan kontak.",
      },
      {
        name: "Demo dan Link Project",
        body: "Untuk setiap project yang saya tampilkan, user dapat mengunjungi link website maupun github project tersebut.",
      },
      {
        name: "Responsive Design",
        body: "Website dibangun dengan responsive web design sehingga semua konten yang ada tidak berantakan saat dibuka pada semua ukuran device."
      },
    ],
    scope: "UI/UX Design, Front-End Development, Deploy Vercel",    
    github: "https://github.com/zianatulmuna/portofolio",
    link: "https://zianatulmuna.vercel.app/",
    status: "other",
  },
  {
    id: "exploresto",
    index: 4,
    name: "Website Katalog Restaurant",
    title: "ExploResto",
    image: "/images/projects/4.png",
    imageDetail: "/images/projects/4-1.png",
    logo: "/images/projects/4-logo.png",
    duration: "Juni 2022",
    techs: ["JavaScript", "API", "GitHub", "Progressive Web Apps", "Vercel"],
    body: "Website katalog restaurant yang menampilkan daftar restaurant yang ada pada API Restaurant Dicoding.",
    developer: "Zianatul Muna",
    overview: "ExploResto adalah web app yang memberikan informasi katalog restaurant yang ada pada API Restaurant Dicoding. User dapat mencari restaurant dan dapat menambahkan restaurant yang dipilih ke menu Bookmark.\n Website ini dibangun dengan tech Progressive Web App sehingga memiliki beberapa fitur aplikasi native seperti dapat di pasang pada desktop maupun homescreen HP dan dapat diakses secara offline. Informasi diambil menggunakan REST API Restaurant Dicoding.",
    features: [
      {
        name: "Katalog Restaurant",
        body: "User dapat mencari restaurant, terdapat informasi mengenai nama, lokasi, rating, deskripsi, dan review restaurant.",
      },
      {
        name: "Bookmark",
        body: "User dapat menyimpan resep dan informasi makanan yang dipilih ke menu Bookmark sebagai acuan asupan makanan setiap harinya.",
      },
      {
        name: "Installable",
        body: "Website dapat didownload dan memiliki splash screen dan icon sendiri di desktop maupun di home screen. Hal ini membuat website ini seperti aplikasi native namun sebenarnya tetap berjalan diatas browser.",
      },
      {
        name: "Offline and background operation",
        body: "Progressive Web Apps memberikan kemampuan pada website ini untuk dapat diakses tanpa koneksi maupun dalam koneksi internet lemah. Namun, konten yang bisa ditampilkan hanya konten atau halaman yang sebelumnya sudah diakses dalam keadaan online.",
      },
      {
        name: "Responsive Design",
        body: "Website dibangun dengan responsive web design sehingga semua konten yang ada tidak berantakan saat dibuka pada semua ukuran device.",
      },
    ],
    scope: "UI/UX Design, Front-End Development, Deploy Vercel",    
    github: "https://github.com/zianatulmuna/exploresto",
    link: "https://exploresto.vercel.app/",
    status: "other",
  },
  {
    id: "denotes",
    index: 4,
    name: "Website Personal Note",
    title: "Denotes",
    image: "/images/projects/5.png",
    imageDetail: "/images/projects/5-1.png",
    logo: "/images/projects/5-logo.png",
    duration: "November 2023",
    techs: ["JavaScript", "React Js", "Bootstrap", "GitHub", "Vercel"],
    body: "Website Catatan Pribadi yang memiliki fitur tambah catatan, arsipkan catatan, aktifkan catatan, dan hapus catatan.",
    developer: "Zianatul Muna",
    overview: "Denotes adalah website catatan pribadi yang dibangun dengan framework React Js. User dapat mencari, menambahkan, mengarsipkan, mengaktifkan, dan menghapus catatan. Website ini masih dalam pengembangan lebih lanjut, penyimpanan catatan masih menggunakan penyimpanan lokal yang akan hilang ketika halaman di reload.",
    features: [
      {
        name: "Penyimpanan Catatan Pribadi",
        body: "User dapat mencari, menambahkan, dan menghapus catatan.",
      },
      {
        name: "Archived",
        body: "User dapat mengarsipkan dan mengaktifkan catatan.",
      },
      {
        name: "Responsive Design",
        body: "Website dibangun dengan responsive web design sehingga semua konten yang ada tidak berantakan saat dibuka pada semua ukuran device.",
      },
    ],
    scope: "UI/UX Design, Front-End Development, Deploy Vercel",    
    github: "https://github.com/zianatulmuna/personal-notes",
    link: "https://denotes-app.vercel.app/",
    status: "other",
  },
];

function getBestProjects() {
  const foundedProject = projects.filter((project) => project.status == "best");
  return foundedProject;
}

function getOtherProjects() {
  const foundedProject = projects.filter((project) => project.status == "other");
  return foundedProject;
}

function getProject(id) {
  const foundedProject = projects.find((project) => project.id === id);
  return foundedProject;
}

function getProjectByIndex(i) {
  const foundedProject = projects.find((project) => project.index === i);
  return foundedProject;
}


export {
  getBestProjects,
  getOtherProjects,
  getProject,
  getProjectByIndex,
}