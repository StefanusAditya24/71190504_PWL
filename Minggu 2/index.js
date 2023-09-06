// 1. Import Person.js
import Person from './person.js';

// 2. Definisikan ketiga objek person dengan ketentuan seperti di atas
const charles = Person("Charles", 40, true, "https://picsum.photos/200");
const mary = Person("Mary", 35, false, "https://picsum.photos/200?grayscale");
const jane = Person("Jane", 25, false, "https://picsum.photos/seed/picsum/200");

// 3. Tambah usia Jane 15 tahun
jane.addAge(15);

// 4. Set usia Charles menjadi 80 tahun
charles.setAge(80);

// 5. Tampilkan Informasi Charles dengan querySelector
const charlesImg = document.querySelector("#charles img");
const charlesInfo = document.querySelector("#charles .info");

// a. Set avatar Charles pada selector image
charlesImg.src = charles.avatar;

// b. Tampilkan info dengan Template literals
charlesInfo.innerHTML = `
    <p>Full Name: ${charles.fullName}</p>
    <p>Sex: ${charles.isMale ? "Male" : "Female"}</p>
    <p>Age: ${charles.age}</p>
`;

// 6. Sama seperti Charles, tampilkan Informasi Mary dan Jane dengan querySelector
const maryImg = document.querySelector("#mary img");
const maryInfo = document.querySelector("#mary .info");

const janeImg = document.querySelector("#jane img");
const janeInfo = document.querySelector("#jane .info");

// a. Set avatar Mary dan Jane pada selector image
maryImg.src = mary.avatar;
janeImg.src = jane.avatar;

// b. Tampilkan info Mary dan Jane dengan Template literals
maryInfo.innerHTML = `
    <p>Full Name: ${mary.fullName}</p>
    <p>Sex: ${mary.isMale ? "Male" : "Female"}</p>
    <p>Age: ${mary.age}</p>
`;

janeInfo.innerHTML = `
    <p>Full Name: ${jane.fullName}</p>
    <p>Sex: ${jane.isMale ? "Male" : "Female"}</p>
    <p>Age: ${jane.age}</p>
`;

// 7. Gabungkan objek Charles dengan spread operator
const charlesJob = { job: "Programmer" };
const charlesJobInfo = { ...charles, ...charlesJob };

// 8. Definisikan fullName dan job milik Charles dengan object destructuring
const { fullName, job } = charlesJobInfo;

// a. Tampilkan job info milik Charles dengan query selector
const charlesJobInfoSelector = document.querySelector("#charles .jobInfo");

// b. Tampilkan info dengan Template literals
charlesJobInfoSelector.innerHTML = `
    <p>Full Name: ${fullName}</p>
    <p>Job: ${job}</p>
    <p>Sex: ${charles.isMale ? "Male" : "Female"}</p>
    <p>Age: ${charles.age}</p>
`;