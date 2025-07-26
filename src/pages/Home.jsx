import { Card } from "../components/card";
import { getAllItems, setItems } from "../apis/apis";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export const Home = () => {
	const [data, setdata] = useState([]);
	const [loading, setloading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchdata = async () => {
			setloading(true);
			setError(null);
			try {
				const data_item = await getAllItems();
				setdata(data_item);

				console.log("berhasil simpan data");
				console.log(data_item);
			} catch (error) {
				console.error("error fetch data", error);
				setError(error);
			} finally {
				setloading(false);
			}
		};
		localStorage.clear();
		fetchdata();
	}, []);

	useEffect(() => {
		console.log("data updated", data);
	}, [data]);

	return (
		<>
			{/* <div>ini adlah home</div>

			<Card
				nama={"kursi"}
				harga={50000}
				stok={"5"}
				img={"img/image.png"}
			></Card> */}

			<div className="w-full bg- min-h-[100vh] mx-auto">
				<div className="flex text-center justify-center items-center text-2xl p-3">
					<h1 className="text-4xl font-bold justify-center items-center">
						Manajemen Data
					</h1>
				</div>

				<div className="flex items-center justify-center">
					<button
						className="p-3 bg-gray-200 rounded-2xl border border-4 border-pink-500 "
						onClick={() => {
							navigate("/add");
						}}
					>
						Tambah Data
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
					{loading ? (
						<div>Sedang memuat</div>
					) : error ? (
						<div>Gagal Mengambil Data</div>
					) : data ? (
						<>
							{data.map((item) => {
								return (
									<Card
										nama={item.nama}
										harga={item.Harga}
										stok={item.Stock}
									></Card>
								);
							})}
						</>
					) : (
						<>Tidak ada Data</>
					)}
				</div>
			</div>
		</>
	);
};
