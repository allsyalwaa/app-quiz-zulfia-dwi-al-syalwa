export default function Question() {
  return (
    <div>
      <div className="space-y-4">
        <p className="font-semibold">
          Apa yang terjadi saat Anda menggunakan operator Binary pada dua
          operand yang memiliki tipe data yang berbeda di JavaScript?{" "}
          <span className="font-bold">(Pilih DUA)</span>
        </p>

        <div className="flex items-start space-x-2">
          <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
          <label>Kode akan menghasilkan error.</label>
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
          <label>
            JavaScript secara otomatis mengkonversi kedua operand ke tipe data
            yang sama sebelum melakukan operasi.
          </label>
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
          <label>
            JavaScript akan mencoba mengkonversi salah satu operand ke tipe data
            yang sama dengan operand lain sebelum melakukan operasi.
          </label>
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
          <label>
            Kode akan dijalankan tanpa kesalahan tetapi hasilnya mungkin tidak
            seperti yang diharapkan.
          </label>
        </div>
      </div>
    </div>
  );
}
