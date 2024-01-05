const projects = [
  {
    id: "rumahterapisahabat",
    index: 1,
    name: "Website Klinik Terapi",
    title: "Rumah Terapi Sahabat",
    image: "/images/projects/1.png",
    imageDetail: "/images/projects/1-1.png",
    logo: "/images/projects/1-logo-terapi.png",
    techs: ["PHP", "Laravel", "JavaScript", "MySQL", "Bootstrap", "Livewire"],
    body: "Website untuk pengelolaan data dan aktivitias klinik Rumah Terapi Sahabat. Dibangun pada tahun 2023 menggunakan framework Laravel dan database MySQL. Memiliki design yang responsive dan dikembangkan berdasarkan kebutuhan klien.",
    developer: "Zianatul Muna, Fauziah Aulia Rachim, Budi Irmawati, Royana Afwani",
    overview: "Website Rumah Terapi Sahabat adalah website pengelolaan data dan aktivitias klinik yang dibangun pada tahun 2023 menggunakan framework Laravel dan database MySQL. Website ini merupakan hasil project Tugas Akhir yang saya bangun bersama 1 rekan dengan beberapa masukan dan saran dari kedua Dosen Pembimbing. \nFitur-fitur yang ada disesuaikan dengan kebutuhan pihak Klinik Rumah Terapi Sahabat. Memiliki design yang responsive sehingga nyaman diakses diberbagai ukuran layar device. Website memiliki fungsi CRUD data pasien, CRUD data terapi, CRUD data terapis, pencarian data, dan pemantauan aktivitas klinik.",
    feature: [
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
    scope: "Back-End Development, Front-End Development, Design UML, Manage Database, Maintenance, Deploy Web Hosting",
    github: "https://github.com/zianatulmuna/rumahterapisahabat",
    demo: "https://rumahterapisahabat.web.id/",
    link: "https://rumahterapisahabat.web.id/",
    reverse: false,
  },
  {
    id: "foodintake",
    index: 2,
    name: "Web App Resep dan Nutrisi Makanan",
    title: "FoodIntake",
    image: "/images/projects/2.png",
    imageDetail: "/images/projects/2-1.png",
    logo: "/images/projects/2-logo-foodintake.png",
    techs: ["JavaScript", "API", "Progressive Web Apps"],
    body: "website yang dibangun untuk memberikan informasi mengenai resep dan detail kandungan bahan dan produk makanan untuk membantu mengatur dan memenuhi kebutuhan nutrisi. Food Intake diharapkan mampu membantu pengguna merencanakan asupan makanan yang dibutuhkan.",
    developer: "Zianatul Muna, Ananta Dwi Prayoga Alwy",
    overview: "Website Rumah Terapi Sahabat adalah website pengelolaan data dan aktivitias klinik yang dibangun pada tahun 2023 menggunakan framework Laravel dan database MySQL. Website ini merupakan hasil project Tugas Akhir yang saya bangun bersama 1 rekan dengan beberapa masukan dan saran dari kedua Dosen Pembimbing. \nFitur-fitur yang ada disesuaikan dengan kebutuhan pihak Klinik Rumah Terapi Sahabat. Memiliki design yang responsive sehingga nyaman diakses diberbagai ukuran layar device. Website memiliki fungsi CRUD data pasien, CRUD data terapi, CRUD data terapis, pencarian data, dan pemantauan aktivitas klinik.",
    feature: [
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
    scope: "Back-End Development, Front-End Development, Design UML, Manage Database, Maintenance, Deploy Web Hosting",    
    github: "https://github.com/zianatulmuna/foodintake",
    demo: "https://foodintake.vercel.app/",
    reverse: true,
  },
];

function getAllProjects() {
  return projects;
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
  getAllProjects,
  getProject,
  getProjectByIndex,
}