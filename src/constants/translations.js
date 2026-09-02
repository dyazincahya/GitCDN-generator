export const translations = {
  id: {
    common: {
      about: "Tentang",
      privacy: "Kebijakan Privasi",
      home: "Beranda",
      docs: "Dokumentasi",
      history: "Riwayat",
      guide: "Cara Penggunaan",
      all: "Semua",
      copy: "Salin URL CDN",
      copied: "Tersalin ke Clipboard",
      test: "Test URL Sekarang",
      close: "Tutup",
      understand: "Saya Mengerti",
      start: "Siap Memulai",
      clearAll: "Hapus Semua",
      itemsFound: "item ditemukan",
      noHistory: "Belum ada riwayat pencarian.",
      recentGenerated: "Recent Generated",
      viewMore: "View More",
      share: "Bagikan",
      shareSuccess: "Tautan berhasil disalin!",
      shareTitle: "Hasil Generate GitCDN",
      copyLink: "Salin Tautan",
      invalidUrl:
        "URL tidak valid. Gunakan format GitHub, GitLab, Bitbucket, NPM, atau WordPress.",
      error: "Kesalahan",
    },
    landing: {
      title: "Generate URL CDN untuk aset Anda",
      placeholder:
        "Masukkan URL GitHub, GitLab, Bitbucket, NPM, atau WordPress...",
    },
    results: {
      stats: "Menghasilkan URL CDN dalam sekejap",
      limit: "Limit",
      directLink: "Gunakan link langsung untuk file Anda.",
      verify: "Buka link di tab baru untuk verifikasi.",
    },
    knowledge: {
      title: "Informasi Aset",
      type: "Tipe Aset",
      owner: "Pemilik",
      repo: "Repositori",
      branch: "Branch",
      file: "File",
      package: "Paket",
      version: "Versi",
      project: "Proyek",
      on: "pada",
      prosTitle: "Keunggulan CDN",
      pros: {
        fast: "Cepat",
        secure: "Aman",
        global: "Global",
      },
      learnMore: "Pelajari lebih lanjut",
    },
    guide: {
      title: "Panduan Penggunaan",
      step1: {
        title: "Cari Aset Anda",
        desc: "Buka file di GitHub, GitLab, Bitbucket, Gist, paket di NPM, atau plugin/tema di WordPress.org.",
      },
      step2: {
        title: "Salin URL Browser",
        desc: "Salin URL dari address bar browser Anda. Contoh format yang didukung:",
      },
      step3: {
        title: "Tempel & Generate",
        desc: "Tempelkan URL tersebut ke kotak pencarian GitCDN dan tekan Enter. Kami akan memberikan pilihan URL CDN instan!",
      },
      comparison: {
        title: "Perbandingan Provider",
        colProvider: "Provider",
        colSource: "Sumber",
        colLimit: "Limit",
        colImage: "Img Opt",
        yes: "Ya",
        no: "Tidak",
      },
    },
    docs: {
      eyebrow: "Dokumentasi Developer",
      title: "Hubungkan data JSON ke GitCDN Generator",
      intro:
        "Tambahkan tombol API pada setiap data JSON di aplikasi Anda agar developer dapat membuka file sumber dan memilih URL CDN yang paling sesuai tanpa menyalin URL secara manual.",
      copyCode: "Salin kode",
      generator: {
        inputLabel: "URL file JSON GitHub",
        placeholder:
          "https://github.com/owner/repository/blob/main/data/file.json",
        required: "URL file GitHub wajib diisi.",
        invalid:
          "Masukkan URL file JSON GitHub yang valid dengan format /blob/ dan ekstensi .json.",
        outputEmpty: "URL GitCDN akan muncul setelah input valid.",
        codeEmpty:
          "Masukkan URL file JSON GitHub yang valid untuk menghasilkan kode.",
      },
      steps: {
        source: {
          title: "Siapkan file publik",
          desc: "Pastikan file JSON tersedia di repositori publik dan dapat dibuka melalui halaman file GitHub.",
        },
        url: {
          title: "Bentuk URL GitCDN",
          desc: "Masukkan URL halaman file GitHub ke parameter q dan encode nilainya agar URL tetap valid.",
        },
        button: {
          title: "Tambahkan tombol API",
          desc: "Tampilkan tombol pada setiap kartu atau baris data dan buka GitCDN Generator di tab baru.",
        },
      },
      example: {
        title: "Contoh: data kamus antonim KBBI",
        desc: "Berikut perubahan URL file GitHub menjadi tautan yang langsung membuka hasil di GitCDN Generator.",
        githubLabel: "URL file GitHub",
        generatorLabel: "URL GitCDN Generator",
      },
      pattern: {
        title: "Pola URL",
        desc: "Gunakan pola berikut untuk membentuk tautan secara dinamis dari setiap URL file JSON.",
        noteTitle: "Penting:",
        note: "Gunakan URL halaman file GitHub dengan format /blob/, bukan URL raw. Selalu gunakan encodeURIComponent agar karakter khusus pada URL sumber tidak merusak query.",
      },
      implementation: {
        title: "Contoh implementasi",
        desc: "Pilih contoh sesuai teknologi aplikasi Anda. Pada daftar data, render tombol ini untuk setiap item dengan githubUrl yang berbeda.",
      },
      checklist: {
        title: "Checklist sebelum dipublikasikan",
        public: "Repositori dan file JSON dapat diakses secara publik.",
        github:
          "Tautan sumber mengarah langsung ke halaman file GitHub, bukan halaman folder.",
        encode: "Nilai parameter q diproses dengan encodeURIComponent.",
        everyItem:
          "Setiap data JSON pada UI memiliki tombol API dengan URL sumbernya sendiri.",
        newTab: 'Tautan dibuka di tab baru dengan rel="noopener noreferrer".',
      },
    },
    privacy: {
      title: "Kebijakan Privasi",
      storage: {
        title: "Penyimpanan Lokal",
        desc: "Semua data riwayat generate dan preferensi tema disimpan secara eksklusif di browser Anda menggunakan LocalStorage.",
      },
      tracking: {
        title: "Tanpa Pelacakan",
        desc: "Kami tidak menggunakan cookie pelacakan, analitik pihak ketiga, atau mengumpulkan data pribadi apa pun dari Anda.",
      },
      security: {
        title: "Keamanan Data",
        desc: "Data Anda tidak pernah dikirim ke server kami. Apa yang Anda generate tetap menjadi milik Anda dan hanya ada di perangkat Anda.",
      },
    },
    about: {
      title: "About GitCDN",
      desc1:
        "GitCDN adalah alat untuk menghasilkan URL CDN dari berbagai sumber repositori git secara instan.",
      desc2:
        "Membantu developer mendapatkan link file (JSON, JS, CSS, Gambar) untuk kebutuhan production maupun development.",
      whyTitle: "Kenapa menggunakan GitCDN?",
      feature1:
        "Mendukung Banyak Provider: jsDelivr, Statically, unpkg, & GitHub Raw dalam satu kali klik.",
      feature2:
        "Keamanan & Kecepatan: Menggunakan infrastruktur CDN global untuk pengiriman aset.",
      feature3:
        "Client-Side: Semua proses dilakukan di browser, menjaga privasi data Anda.",
    },
  },
  en: {
    common: {
      about: "About",
      privacy: "Privacy Policy",
      home: "Home",
      docs: "Documentation",
      history: "History",
      guide: "Usage Guide",
      all: "All",
      copy: "Copy CDN URL",
      copied: "Copied to Clipboard",
      test: "Test URL Now",
      close: "Close",
      understand: "I Understand",
      start: "Get Started",
      clearAll: "Clear All",
      itemsFound: "items found",
      noHistory: "No search history yet.",
      recentGenerated: "Recent Generated",
      viewMore: "View More",
      share: "Share",
      shareSuccess: "Link copied successfully!",
      shareTitle: "GitCDN Generated Result",
      copyLink: "Copy Link",
      invalidUrl:
        "Invalid URL. Use GitHub, GitLab, Bitbucket, NPM, or WordPress format.",
      error: "Error",
    },
    landing: {
      title: "Generate CDN URLs for your assets",
      placeholder: "Enter GitHub, GitLab, Bitbucket, NPM, or WordPress URL...",
    },
    results: {
      stats: "Generated CDN URLs instantly",
      limit: "Limit",
      directLink: "Get a direct link for your file.",
      verify: "Open link in a new tab for verification.",
    },
    knowledge: {
      title: "Asset Info",
      type: "Asset Type",
      owner: "Owner",
      repo: "Repository",
      branch: "Branch",
      file: "File",
      package: "Package",
      version: "Version",
      project: "Project",
      on: "on",
      prosTitle: "CDN Advantages",
      pros: {
        fast: "Fast",
        secure: "Secure",
        global: "Global",
      },
      learnMore: "Learn more",
    },
    guide: {
      title: "Usage Guide",
      step1: {
        title: "Find Your Asset",
        desc: "Open a file on GitHub, GitLab, Bitbucket, Gist, a package on NPM, or a plugin/theme on WordPress.org.",
      },
      step2: {
        title: "Copy Browser URL",
        desc: "Copy the URL from your browser's address bar. Example of supported formats:",
      },
      step3: {
        title: "Paste & Generate",
        desc: "Paste the URL into the GitCDN search box and press Enter. We'll provide instant CDN options!",
      },
      comparison: {
        title: "Provider Comparison",
        colProvider: "Provider",
        colSource: "Source",
        colLimit: "Limit",
        colImage: "Img Opt",
        yes: "Yes",
        no: "No",
      },
    },
    docs: {
      eyebrow: "Developer Documentation",
      title: "Connect your JSON data to GitCDN Generator",
      intro:
        "Add an API button to every JSON item in your application so developers can open the source file and choose the most suitable CDN URL without copying URLs manually.",
      copyCode: "Copy code",
      generator: {
        inputLabel: "GitHub JSON file URL",
        placeholder:
          "https://github.com/owner/repository/blob/main/data/file.json",
        required: "A GitHub file URL is required.",
        invalid:
          "Enter a valid GitHub JSON file URL using the /blob/ format and a .json extension.",
        outputEmpty: "The GitCDN URL will appear after the input is valid.",
        codeEmpty: "Enter a valid GitHub JSON file URL to generate code.",
      },
      steps: {
        source: {
          title: "Prepare a public file",
          desc: "Make sure the JSON file is in a public repository and can be opened from its GitHub file page.",
        },
        url: {
          title: "Build the GitCDN URL",
          desc: "Pass the GitHub file page URL to the q parameter and encode its value to keep the URL valid.",
        },
        button: {
          title: "Add an API button",
          desc: "Show the button on every data card or row and open GitCDN Generator in a new tab.",
        },
      },
      example: {
        title: "Example: KBBI antonym dictionary data",
        desc: "This example turns a GitHub file URL into a link that opens its results directly in GitCDN Generator.",
        githubLabel: "GitHub file URL",
        generatorLabel: "GitCDN Generator URL",
      },
      pattern: {
        title: "URL pattern",
        desc: "Use this pattern to dynamically create a link from each JSON file URL.",
        noteTitle: "Important:",
        note: "Use the GitHub file page URL containing /blob/, not a raw URL. Always use encodeURIComponent so special characters in the source URL do not break the query.",
      },
      implementation: {
        title: "Implementation examples",
        desc: "Choose the example for your application stack. In a data list, render this button for every item with a different githubUrl.",
      },
      checklist: {
        title: "Pre-publish checklist",
        public: "The repository and JSON file are publicly accessible.",
        github:
          "The source link points directly to a GitHub file page, not a folder.",
        encode: "The q parameter value is processed with encodeURIComponent.",
        everyItem:
          "Every JSON item in the UI has an API button with its own source URL.",
        newTab: 'The link opens in a new tab with rel="noopener noreferrer".',
      },
    },
    privacy: {
      title: "Privacy Policy",
      storage: {
        title: "Local Storage",
        desc: "All generation history and theme preferences are stored exclusively in your browser using LocalStorage.",
      },
      tracking: {
        title: "No Tracking",
        desc: "We do not use tracking cookies, third-party analytics, or collect any personal data from you.",
      },
      security: {
        title: "Data Security",
        desc: "Your data is never sent to our servers. What you generate belongs to you and remains only on your device.",
      },
    },
    about: {
      title: "About GitCDN",
      desc1:
        "GitCDN is a tool to instantly generate CDN URLs from various git repository sources.",
      desc2:
        "Helping developers get file links (JSON, JS, CSS, Images) for production or development needs.",
      whyTitle: "Why use GitCDN?",
      feature1:
        "Multi-Provider Support: jsDelivr, Statically, unpkg, & GitHub Raw in one click.",
      feature2:
        "Security & Speed: Uses global CDN infrastructure for fast asset delivery.",
      feature3:
        "Client-Side: All processes are handled in the browser, keeping your data private.",
    },
  },
};
