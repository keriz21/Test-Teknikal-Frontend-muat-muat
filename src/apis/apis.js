const STORAGE_KEY = "Data_furniture";
const INIT_KEY = "init";

export const getAllItems = async () => {
	const init_data = localStorage.getItem(INIT_KEY);
	if (!init_data) {
		localStorage.setItem(INIT_KEY, true);
		const dummy_json = await fetchJsonDummy();
		localStorage.setItem(STORAGE_KEY, JSON.stringify(dummy_json));
	}
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
};

export const setItems = (data) => {
	// return data;
	const final_data = getAllItems();
	final_data.push(data);

	// localStorage.setItem(STORAGE_KEY, []);

	localStorage.setItem(STORAGE_KEY, JSON.stringify(final_data));
};

export const fetchJsonDummy = async () => {
	try {
		const response = await fetch("./dummy.json");
		if (!response.ok) {
			throw new Error("http error");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("failded fetch data", error);
		return [];
	}
};
