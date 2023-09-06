const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
    const info = () => {
        return `Full Name: ${fullName}, Sex: ${isMale ? "Male" : "Female"}, Age: ${age}`;
    };

    return {
        // 3. Kembalikan nilai info di atas
        get getInfo() {
            return info();
        },
        // 4. Kembalikan nilai info di atas
        toString() {
            return info();
        },
        // 5. Kembalikan usia sekarang ditambah dengan tahun inputan user
        addAge: (years) => {
            age += years;
        },
        // 6. Fungsi yang mengeset usia yang baru
        setAge: (newAge) => {
            age = newAge;
        },
        // 7. Fungsi yang mengeset nama yang baru
        rename: (newName) => {
            fullName = newName;
        },
        // 8. Kembalikan semua nilai dengan shorthand property
        fullName,
        age,
        isMale,
        avatar,
    };
};

export default Person;
