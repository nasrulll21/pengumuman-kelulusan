

const studentDB = {
    "3079274534": { name: "MASWA SALMA", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0072446183": { name: "SELVIRA", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0064058561": { name: "NURHALISA", passed: false, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0079349814": { name: "ISMUHUL AHMAD", passed: false, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0083130128": { name: "MUHAMMAD ARFAN", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0072693680": { name: "SELVIANI", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0067592371": { name: "DEWI ARASTI S.", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0078148202": { name: "INDO HASNAH", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0139598986": { name: "ANDIKA PRATAMA", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0079558972": { name: "SARTIKA", passed: false, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0066950870": { name: "NURFADILLAH", passed: false, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0074920642": { name: "MUH. FAHREZA PUTRA", passed: true, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0092649406": { name: "HASLINA", passed: false, school: "SMKN 4 WAJO", jur : "Multimedia" },
    "0069399108": { name: "ISMA WARDANI", passed: true, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0065439183": { name: "MUTMAINNAH", passed: false, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0079939131": { name: "AULIA", passed: true, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0067941696": { name: "ANDI ALYA RAHMANA", passed: true, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0075580248": { name: "BESSE EKA", passed: true, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0061849649": { name: "SRI WAHYUNI", passed: true, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0000000000": { name: "UCHA SEPTIA WILANDARI", passed: false, school: "SMKN 4 WAJO", jur : "Agribisnis Perikanan" },
    "0077390623": { name: "BASO FADLI", passed: true, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor" },
    "0071964672": { name: "MASRIADI", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor" },
    "0075761104": { name: "HAERUL ANAM", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor" },
    "0073777188": { name: "HASWIDI", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor" },
    "0064707288": { name: "RAMLIADI", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
    "0075833850": { name: "MUHAMMAD ALWI", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
    "0073400057": { name: "FADIL", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
    "0075257876": { name: "MUH. RISKY", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
    "0077211028": { name: "ERWIN", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
    "0062087799": { name: "GUNAWAN", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
    "0067678997": { name: "SAHARUDDIN", passed: false, school: "SMKN 4 WAJO", jur : "Teknik Sepeda Motor Perikanan"},
  };
  
  // Validasi login menggunakan NISN dan asal sekolah
  if (document.getElementById('studentLogin')) {
    document.getElementById('studentLogin').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const id = document.getElementById('studentId').value.trim();
      const school = document.getElementById('studentSchool').value.trim().toUpperCase();
  
      const student = studentDB[id];
  
      if (!student) {
        alert("NISN tidak ditemukan.");
        return;
      }
  
      if (school !== student.school.toUpperCase()) {
        alert("Asal sekolah tidak sesuai.");
        return;
      }
  
      // Simpan data ke session dan arahkan halaman
      sessionStorage.setItem('currentStudent', JSON.stringify(student));
      window.location.href = 'graduation.html';
    });
  }
  
  // Halaman graduation / graduation2 menampilkan nama
  if (document.getElementById('studentName')) {
    const studentData = JSON.parse(sessionStorage.getItem('currentStudent'));
  
    if (studentData) {
        document.getElementById('studentName').textContent = studentData.name;
        document.getElementById('jurusan').textContent = studentData.jur; 
      
        const statusEl = document.getElementById('graduationStatus');
        const detailEl = document.getElementById('detailLulus1');
        const panelEl = document.getElementById('panelStatus');
      
        if (studentData.passed) {
          statusEl.textContent = "🎉 Selamat, Anda dinyatakan LULUS!";
          statusEl.classList.add('text-blue-600');
          panelEl.classList.add('bg-blue-200');
          nameEl.classList.add('text-blue-800');
          detailEl.style.display = 'block';
        } else {
          statusEl.textContent = "😔 Mohon maaf, Anda BELUM lulus.";
          statusEl.classList.add('text-red-600');
          panelEl.classList.add('bg-red-200');
          nameEl.classList.add('text-red-800');
          detailEl.style.display = 'none'; // Sembunyikan detail kelulusan
        }
      } else {
        // Tidak ada data, kembali ke login
        window.location.href = 'login.html';
      }
  }

