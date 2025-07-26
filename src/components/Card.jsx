export const Card = ({ nama = "RUmah", harga = 10000, stok = 0, img }) => {
	const toRupiah = (number) => {
		// const number = 12345
		const reverse = number.toString().split("").reverse().join("");
		const ribuan = reverse.match(/\d{1,3}/g);
		const hasil = ribuan.join(".").split("").reverse().join("");
		return "Rp " + hasil;
	};

	return (
		<>
			{/* <div className="w-full m-auto bg-red-200 rounded-3xl">
				<img className="img w-full" src="img/image.png" alt="tiada gambar" />
				<h1>{nama}</h1>
				<h2>{harga}</h2>
				<p>{stok}</p>
			</div> */}

			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img className="w-full" src="img/image.png" alt="Kursi" />
				<div className="px-6 py-4 flex-row items-center justify-center">
					<div className="font-bold text-xl mb-2 text-center">{nama}</div>
					<div className="font-semibold text-lg text-center">
						{toRupiah(harga)}
					</div>

					{stok ? (
						<>
							{" "}
							<div className="text-sm text-center">Stok : {stok}</div>
						</>
					) : (
						<>
							<div className="text-sm text-center text-red-500">Stok Habis</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
