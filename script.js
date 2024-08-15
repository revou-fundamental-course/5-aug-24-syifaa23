function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = '';

        if (bmi < 18.5) {
            category = 'Kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal (ideal)';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Kelebihan berat badan';
        } else if (bmi >= 30) {
            category = 'Kegemukan (Obesitas)';
        }

        document.getElementById('bmi-result').textContent = `BMI Anda: ${bmi}`;
        document.getElementById('bmi-category').textContent = `Kategori: ${category}`;
    } else {
        alert("Masukkan berat dan tinggi badan yang valid.");
    }
}
