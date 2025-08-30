import { useState } from "react";
import { setItems } from "../apis/apis";
import { useNavigate } from "react-router-dom";
export const Add_data = () => {
	const [nama, setNama] = useState("");
	const [harga, setHarga] = useState("");
	const [stok, setStok] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validasi input
		if (!nama.trim()) {
			alert("Nama produk harus diisi!");
			return;
		}

		if (!harga || parseFloat(harga) <= 0) {
			alert("Harga harus diisi dan lebih dari 0!");
			return;
		}

		if (!stok || parseInt(stok) < 0) {
			alert("Stok harus diisi dan tidak boleh negatif!");
			return;
		}

		try {
			await setItems(nama.trim(), parseFloat(harga), parseInt(stok));
			alert("Data berhasil ditambahkan!");
		} catch (error) {
			console.error("error", error);
			alert("Terjadi kesalahan saat menyimpan data!");
		} finally {
			navigate("/");
		}
	};

	return (
		<div className="w-full bg-gray-50 min-h-[100vh] mx-auto">
			<div className="flex text-center justify-center items-center text-2xl p-3">
				<h1 className="text-4xl font-bold justify-center items-center">
					Tambah Data
				</h1>
			</div>

			<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="flex flex-col">
						<label className="text-sm font-medium text-gray-700 mb-1">
							Nama Produk
						</label>
						<input
							type="text"
							placeholder="Masukkan nama produk"
							value={nama}
							required
							className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							onChange={(e) => {
								setNama(e.target.value);
							}}
						/>
					</div>

					<div className="flex flex-col">
						<label className="text-sm font-medium text-gray-700 mb-1">
							Harga
						</label>
						<input
							type="number"
							placeholder="Masukkan harga produk"
							value={harga}
							min="1"
							step="0.01"
							required
							className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							onChange={(e) => {
								setHarga(e.target.value);
							}}
						/>
					</div>

					<div className="flex flex-col">
						<label className="text-sm font-medium text-gray-700 mb-1">
							Stok
						</label>
						<input
							type="number"
							placeholder="Masukkan jumlah stok"
							value={stok}
							min="0"
							step="1"
							required
							className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							onChange={(e) => {
								setStok(e.target.value);
							}}
						/>
					</div>

					<div className="flex gap-3 pt-4">
						<button
							type="button"
							onClick={() => navigate("/")}
							className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
						>
							Batal
						</button>
						<button
							type="submit"
							className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
						>
							Simpan
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
