function turunan() {

    let fungsi =
        document.getElementById("fungsi").value;

    if (fungsi === "") {

        document.getElementById("hasil").innerHTML =
            "Masukkan fungsi terlebih dahulu.";

        return;
    }

    try {

        let hasil =
            math.derivative(fungsi, "x").toString();

        document.getElementById("hasil").innerHTML =
            "Turunan f(x) = " + hasil;

    } catch (error) {

        document.getElementById("hasil").innerHTML =
            "Fungsi tidak valid.";

    }
}

function integral() {

    let fungsi =
        document.getElementById("fungsi").value;

    if (fungsi === "") {

        document.getElementById("hasil").innerHTML =
            "Masukkan fungsi terlebih dahulu.";

        return;
    }

    document.getElementById("hasil").innerHTML =
        "∫(" + fungsi + ") dx + C";
}

function hitung() {

    let fungsi =
        document.getElementById("fungsi").value;

    let x =
        document.getElementById("nilaiX").value;

    if (fungsi === "") {

        document.getElementById("hasil").innerHTML =
            "Masukkan fungsi terlebih dahulu.";

        return;
    }

    if (x === "") {

        document.getElementById("hasil").innerHTML =
            "Masukkan nilai x.";

        return;
    }

    try {

        let hasil =
            math.evaluate(
                fungsi,
                { x: Number(x) }
            );

        document.getElementById("hasil").innerHTML =
            "f(" + x + ") = " + hasil;

    } catch (error) {

        document.getElementById("hasil").innerHTML =
            "Perhitungan gagal.";

    }
}

function hapusData() {

    document.getElementById("fungsi").value = "";

    document.getElementById("nilaiX").value = "";

    document.getElementById("hasil").innerHTML =
        "Silakan masukkan fungsi.";
}