import { useState } from "react";
import { setItems } from "../apis/apis";
import { useNavigate } from "react-router-dom";
export const Add_data = () => {
	const [nama, setNama] = useState();
	const [harga, setHarga] = useState();
	const [stok, setStok] = useState();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			nama: nama.trim(),
			Harga: harga,
			Stock: stok,
		};

		console.log(nama, harga, stok);

		try {
			await setItems(nama, harga, stok);
		} catch (error) {
			console.error("error", error);
		} finally {
			navigate("/");
		}
	};

	return (
		<div className="w-full bg- min-h-[100vh] mx-auto">
			<div className="flex text-center justify-center items-center text-2xl p-3">
				<h1 className="text-4xl font-bold justify-center items-center">
					Tambah Data
				</h1>
			</div>

			<div className=" p-3 mx-3.5 flex flex-col gap-3">
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col">
						<label>Nama</label>
						<input
							type="text"
							placeholder="ini adalah nama"
							required
							onChange={(e) => {
								setNama(e.target.value);
							}}
						/>
					</div>

					<div className="flex flex-col">
						<label>Harga</label>
						<input
							type="number"
							placeholder="ini adalah harga"
							onChange={(e) => {
								setHarga(e.target.value);
							}}
							required
						/>
					</div>

					<div className="flex flex-col">
						<label>Stok</label>
						<input
							type="number"
							placeholder="ini adalah stok"
							onChange={(e) => {
								setStok(e.target.value);
							}}
							required
						/>
					</div>

					<div className="flex flex-col">
						<button className="border shadow rounded" type="submit">
							submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
