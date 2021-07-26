

const tableData = () => {
    const searchData = [];
    const tableEl = document.getElementById("portexe-data-table");
    Array.from(tableEl.children[1].children).forEach(_bodyRowEl => {
        searchData.push(Array.from(_bodyRowEl.children).map(_cellEl => {
            return _cellEl.innerHTML;
        }));
    });
    console.log(searchData);
    return searchData;
}


const createSearchInputElement = () => {
    const one = document.createElement("input");
    one.classList.add("portexe-search-input");
    one.id = "portexe-search-input";
    return one;
}

const search = (arr, searchTerm) => {
    if(!searchTerm) return arr;
    return arr.filter(_row => {
        return _row.find(_item => _item.toLowerCase().includes(searchTerm.toLowerCase()))
    });
}

const refreshTable = (data) => {
    const tableBody = document.getElementById("portexe-data-table").children[1];
    tableBody.innerHTML = "";

    data.forEach(_row => {
      const curRow = document.createElement("tr");
      _row.forEach(_dataItem => {
          const curCell = document.createElement("td");
          curCell.innerText = _dataItem;
          curRow.appendChild(curCell);
      });
      tableBody.appendChild(curRow)  
    });
}

const init = () => {
document.getElementById("portexe-search-root").appendChild(createSearchInputElement());

const initialTableData = tableData();

const searchInput = document.getElementById("portexe-search-input");
searchInput.addEventListener("keyup", (e) => {
    tableData();
    refreshTable(search(initialTableData, e.target.value));
});
}

init();