// import React, { useState } from 'react';
// import { render } from 'react-dom';
// import { AgGridReact, AgGridColumn } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// const GridExample = () => {
//   const [gridApi, setGridApi] = useState(null);
//   const [gridColumnApi, setGridColumnApi] = useState(null);
//   //   const [rowData, setRowData] = useState(null);

//   const onGridReady = (params) => {
//     setGridApi(params.api);
//     setGridColumnApi(params.columnApi);

//     const updateData = (data) => {
//       //   setRowData(data);
//     };

//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .then((resp) => resp.json())
//       .then((data) => updateData(data));
//   };
//   const rowData = [
//     { weeks: 'week 1', delete: '1' },
//     { weeks: 'week 2', delete: '2' },
//     { weeks: 'week 3', delete: '3' },
//   ];
//   return (
//     <div className="ag-theme-alpine" style={{ height: 400, width: 280 }}>
//       <AgGridReact
//         rowData={rowData}
//         rowDragManaged={true}
//         animateRows={true}
//         maxColWidth={160}
//         // onGridReady={onGridReady}
//       >
//         <AgGridColumn
//           field={'weeks'}
//           rowDrag={true}
//           onCellClicked={(e) => console.log('YOOOO', e.data.delete)}
//         ></AgGridColumn>
//         {/* <AgGridColumn
//           field={'delete'}
//           rowDrag={true}
//           onCellClicked={(e) => console.log('YOOOO', e.data.weeks)}
//         ></AgGridColumn> */}
//       </AgGridReact>
//     </div>
//   );
// };

// export default GridExample;

import React, { useState } from 'react';
import { render } from 'react-dom';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const Demoo = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ]);

  //   setItems(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </SortableContainer>
  );
};
export default Demoo;
