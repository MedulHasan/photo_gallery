/* eslint-disable react/prop-types */

function Header({ data, setData, selectedItem, setSelectedItem }) {
    const handleDelete = () => {
        const filteredArray = data.filter(
            (item) => !selectedItem.includes(item.id)
        );
        setData(filteredArray);
        setSelectedItem([]);
    };

    return (
        <div className="border-b-[2px] border-iron px-10 py-3 flex flex-row justify-between items-center">
            {selectedItem?.length == 0 ? (
                <h1 className="text-[14px] sm:text-18 font-bold text-woodsmoke">
                    Gallery
                </h1>
            ) : (
                <h1 className="text-[14px] sm:text-18 font-bold text-woodsmoke">
                    {selectedItem?.length} Files Selected
                </h1>
            )}
            {selectedItem?.length > 0 && (
                <h1
                    className="text-[12px] sm:text-14 text-alizarin_crimson font-semibold cursor-pointer"
                    onClick={handleDelete}
                >
                    Delete files
                </h1>
            )}
        </div>
    );
}

export default Header;
