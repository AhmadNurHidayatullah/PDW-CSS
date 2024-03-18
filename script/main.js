/*untuk menampilkan pada halaman web*/
const Waktu = document.getElementById("Waktu");

        function dateTime() {
            const date = new Date();
            Waktu.innerHTML = date.toLocaleString(); 
            Waktu.style.fontFamily = "georgia";
        }

        setInterval(dateTime, 1000);


        dateTime();